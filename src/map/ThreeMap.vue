<template>
  <div ref="containerRef" class="three-map">
    <MapTooltip :state="tooltipState" />
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { geoMercator } from "d3-geo";
import { gsap } from "gsap";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { configStore } from "@/stores/config";
import type { CityGeoJSON } from "@/types/map";
import MapTooltip from "./ui/MapTooltip.vue";
import {
  collectRegions,
  configureSuzhouNormalMap,
} from "./core/mapGeometry";
import {
  backgroundColor,
  normalMapRepeat,
} from "./core/mapConfig";
import type { AnimatedMaterial, Region, TooltipState } from "./core/mapTypes";
import { createImageMirror, createMirror } from "./platform/mapPlatform";
import { createTextSprite } from "./ui/mapLabels";
import { createCity } from "./region/mapRegion";
import {
  createHeatmapOverlayMaterial,
  createPreviewHeatmapTexture,
  createSurfaceCloudTexture,
} from "./effects/mapSurfaceEffects";
import {
  animateBeams,
  animateCones,
  createBeamLights,
  createCones,
  createFlyLines,
} from "./effects/mapEffects";
import { createSideWallMaterial } from "./region/mapSideMaterial";

import scMapData from "@/assets/sc11111.json";
import suzhouNormalMapUrl from "@/assets/suzhou_normal_deep_strong.png";
import dizuoUrl from "@/assets/dizuo.png";
import iceTextureUrl from "@/assets/ice.png";
import flyLineUrl from "@/assets/fly_line.png";
import guangquanUrl from "@/assets/guangquan01.png";

const containerRef = ref<HTMLDivElement | null>(null);
// GeoJSON 是唯一地图数据源，其他模块只接收投影后的 Region。
const mapData = scMapData as CityGeoJSON;
const projection = geoMercator()
  .center(mapData.features[0].properties.centroid ?? mapData.features[0].properties.center)
  .translate([0, 0]);

let renderer: THREE.WebGLRenderer | null = null;
let scene: THREE.Scene | null = null;
let camera: THREE.PerspectiveCamera | null = null;
let controls: OrbitControls | null = null;
let animationFrame = 0;
let resizeObserver: ResizeObserver | null = null;
// mapContent 包含行政区和动态特效，开屏动画会控制它的位移和 Z 缩放。
let mapContent: THREE.Group | null = null;
let introTimeline: gsap.core.Timeline | null = null;
let flyLines: ReturnType<typeof createFlyLines> | null = null;
let previewHeatmap: { texture: THREE.CanvasTexture } | null = null;
let surfaceCloudTexture: THREE.CanvasTexture | null = null;
let beams: THREE.Mesh[] = [];
let activeCity: THREE.Group | null = null;
const cityMeshes: THREE.Mesh[] = [];
const cityGroups: THREE.Group[] = [];
const labels: THREE.Sprite[] = [];
const animatedMaterials: AnimatedMaterial[] = [];
// 射线检测只针对行政区主体 Mesh，纹理、边界和标签会主动禁用 raycast。
const textureLoader = new THREE.TextureLoader();
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const tooltipState = ref<TooltipState>({
  visible: false,
  left: 0,
  top: 0,
  name: "",
  adcode: 0,
  level: "",
  boundaryCount: 0,
});

function trackMaterial<T extends AnimatedMaterial>(material: T, targetOpacity: number) {
  // 普通材质通过 opacity 淡入，暂时关闭 depthWrite 避免开屏阶段遮挡错乱。
  material.transparent = true;
  material.userData.introDepthWrite = material.depthWrite;
  material.depthWrite = false;
  material.opacity = 0;
  material.userData.targetOpacity = targetOpacity;
  animatedMaterials.push(material);
  return material;
}

function trackUniformMaterial<T extends AnimatedMaterial>(
  material: T,
  uniform: { value: number },
  targetOpacity: number
) {
  // Shader 材质使用 opacity uniform 淡入，和普通材质走同一套开屏时间线。
  material.transparent = true;
  material.userData.introDepthWrite = material.depthWrite;
  material.depthWrite = false;
  material.userData.fadeUniform = uniform;
  material.userData.targetOpacity = targetOpacity;
  animatedMaterials.push(material);
  return material;
}

function playIntro() {
  if (!camera || !mapContent) return;

  // 标签最后显示，避免开屏过程中漂浮文字先于地图出现。
  labels.forEach((label) => {
    label.visible = false;
  });

  introTimeline = gsap.timeline();
  introTimeline.to(camera.position, {
    // Move along the existing camera ray so the perspective angle stays unchanged.
    x: -1.64,
    y: 5.74,
    z: 8.2,
    duration: 2.5,
    ease: "circ.out",
    onComplete: () => {
      configStore.mapPlayComplete = true;
    },
  });
  introTimeline.to(mapContent.position, { x: 0, y: 0, z: 0, duration: 1 }, 2.5);
  introTimeline.to(mapContent.scale, { x: 1, y: 1, z: 1, duration: 1, ease: "circ.out" }, 2.5);
  animatedMaterials.forEach((material) => {
    const targetOpacity = material.userData.targetOpacity ?? 1;
    if (material.userData.fadeUniform) {
      introTimeline?.to(material.userData.fadeUniform, { value: targetOpacity, duration: 1, ease: "circ.out" }, 2.5);
    } else {
      introTimeline?.to(material, { opacity: targetOpacity, duration: 1, ease: "circ.out" }, 2.5);
    }
  });
  introTimeline.call(
    () => {
      animatedMaterials.forEach((material) => {
        material.depthWrite = material.userData.introDepthWrite ?? true;
      });
      labels.forEach((label) => {
        label.visible = true;
      });
    },
    [],
    3.5
  );
}

function resize() {
  if (!containerRef.value || !renderer || !camera) return;

  // 相机和渲染器必须同步容器尺寸，否则会出现拉伸或点击坐标偏移。
  const { width, height } = containerRef.value.getBoundingClientRect();
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

function updateTooltipPosition(city: THREE.Group) {
  if (!containerRef.value || !camera) return;

  const tooltip = city.userData.tooltip as
    | { anchor: THREE.Vector3 }
    | undefined;
  if (!tooltip) return;

  // anchor 存储在行政区本地坐标中，需要先转换为世界坐标再投影到屏幕。
  const worldPosition = tooltip.anchor.clone();
  city.localToWorld(worldPosition);
  worldPosition.project(camera);

  if (worldPosition.z < -1 || worldPosition.z > 1) {
    tooltipState.value.visible = false;
    return;
  }

  const rect = containerRef.value.getBoundingClientRect();
  const screenX = (worldPosition.x * 0.5 + 0.5) * rect.width;
  const screenY = (-worldPosition.y * 0.5 + 0.5) * rect.height;
  tooltipState.value.left = THREE.MathUtils.clamp(screenX, 96, rect.width - 96);
  tooltipState.value.top = THREE.MathUtils.clamp(screenY, 54, rect.height - 18);
}

function showTooltip(city: THREE.Group) {
  const tooltip = city.userData.tooltip as
    | {
        name: string;
        adcode: number;
        level: string;
        boundaryCount: number;
      }
    | undefined;
  if (!tooltip) return;

  tooltipState.value = {
    visible: true,
    left: tooltipState.value.left,
    top: tooltipState.value.top,
    name: tooltip.name,
    adcode: tooltip.adcode,
    level: tooltip.level,
    boundaryCount: tooltip.boundaryCount,
  };
  updateTooltipPosition(city);
}

function hideTooltip() {
  tooltipState.value.visible = false;
}

function handlePointerMove(event: PointerEvent) {
  if (!containerRef.value || !camera) return;

  const rect = containerRef.value.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);

  // 只检测主体网格，避免热力图和边界覆盖主体后抢走交互。
  const hit = raycaster.intersectObjects(cityMeshes, false)[0];
  const nextCity = (hit?.object.userData.cityGroup as THREE.Group | undefined) ?? null;
  if (activeCity !== nextCity) {
    if (activeCity) activeCity.userData.targetScaleZ = 1;
    activeCity = nextCity;
    if (activeCity) {
      activeCity.userData.targetScaleZ = 1.5;
      showTooltip(activeCity);
    } else {
      hideTooltip();
    }
  }
  if (activeCity) updateTooltipPosition(activeCity);
  document.body.style.cursor = activeCity ? "pointer" : "auto";
}

function handlePointerLeave() {
  if (activeCity) activeCity.userData.targetScaleZ = 1;
  activeCity = null;
  hideTooltip();
  document.body.style.cursor = "auto";
}

function disposeObject(object: THREE.Object3D) {
  // 递归释放几何体和材质，防止热重载或路由切换造成 GPU 内存泄漏。
  object.traverse((child) => {
    const mesh = child as THREE.Mesh;
    const geometry = mesh.geometry as THREE.BufferGeometry | undefined;
    const material = mesh.material as THREE.Material | THREE.Material[] | undefined;

    geometry?.dispose();
    if (Array.isArray(material)) {
      material.forEach((item) => item.dispose());
    } else {
      material?.dispose();
    }
  });
}

onMounted(async () => {
  await nextTick();
  if (!containerRef.value) return;

  configStore.reset();
  // 场景、相机和渲染器只在组件挂载时创建一次。
  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(backgroundColor, 10, 30);
  scene.background = new THREE.Color(backgroundColor);

  const { width, height } = containerRef.value.getBoundingClientRect();
  // A narrower FOV reduces edge stretching while preserving the current camera angle.
  camera = new THREE.PerspectiveCamera(58, width / height, 0.1, 1000);
  camera.position.set(2.46, 16.4, 8.2);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setClearColor(backgroundColor, 1);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;
  containerRef.value.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.zoomSpeed = 0.3;
  controls.minDistance = 8;
  controls.maxDistance = 20;
  controls.maxPolarAngle = 1.5;

  scene.add(new THREE.AmbientLight("#ffffff", 1));
  const directionalLight = new THREE.DirectionalLight("#ffffff", 3.2);
  directionalLight.position.set(0, 50, -50);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.set(1024, 1024);
  directionalLight.shadow.camera.left = -18;
  directionalLight.shadow.camera.right = 18;
  directionalLight.shadow.camera.top = 18;
  directionalLight.shadow.camera.bottom = -18;
  directionalLight.shadow.camera.near = 1;
  directionalLight.shadow.camera.far = 120;
  directionalLight.shadow.bias = -0.0005;
  scene.add(directionalLight);

  const [
    normalMap,
    iceTexture,
    dizuoTexture,
    flyTexture,
    haloTexture,
  ] = await Promise.all([
    textureLoader.loadAsync(suzhouNormalMapUrl),
    textureLoader.loadAsync(iceTextureUrl),
    textureLoader.loadAsync(dizuoUrl),
    textureLoader.loadAsync(flyLineUrl),
    textureLoader.loadAsync(guangquanUrl),
  ]);
  configureSuzhouNormalMap(normalMap, normalMapRepeat);
  normalMap.anisotropy = renderer.capabilities.getMaxAnisotropy();
  iceTexture.colorSpace = THREE.SRGBColorSpace;
  iceTexture.wrapS = THREE.RepeatWrapping;
  iceTexture.wrapT = THREE.RepeatWrapping;
  iceTexture.repeat.set(2.4, 2.4);
  iceTexture.minFilter = THREE.LinearMipmapLinearFilter;
  iceTexture.magFilter = THREE.LinearFilter;
  iceTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  dizuoTexture.colorSpace = THREE.SRGBColorSpace;
  dizuoTexture.wrapS = THREE.ClampToEdgeWrapping;
  dizuoTexture.wrapT = THREE.ClampToEdgeWrapping;
  dizuoTexture.minFilter = THREE.LinearMipmapLinearFilter;
  dizuoTexture.magFilter = THREE.LinearFilter;
  dizuoTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

  scene.add(createImageMirror(dizuoTexture));
  scene.add(createBeamLights(beams));

  const { bbox, regions } = collectRegions(mapData, projection);
  // 使用局部常量保证后续闭包中的纹理已完成初始化；全局变量仅用于卸载释放。
  const heatmapResource = createPreviewHeatmapTexture(regions, bbox);
  previewHeatmap = heatmapResource;
  const cloudTexture = createSurfaceCloudTexture();
  surfaceCloudTexture = cloudTexture;
  const mapGroup = new THREE.Group();
  mapGroup.rotation.x = -Math.PI / 2;
  const mapExtent = Math.max(
    bbox.max.x - bbox.min.x,
    bbox.max.y - bbox.min.y
  );
  // mapScale 控制地图水平占比；effectScale 补偿标签、光圈等固定尺寸特效。
  const mapScale = THREE.MathUtils.clamp(15 / mapExtent, 0.45, 2.5);
  // Keep fixed-height details at the original world-space proportion while
  // allowing the Suzhou map itself to use the larger horizontal scale.
  const effectScale = 0.5 / mapScale;
  mapGroup.scale.setScalar(mapScale);
  mapGroup.position.y = 0.2;

  mapContent = new THREE.Group();
  mapContent.scale.set(1, 1, 0);
  mapContent.position.z = -0.01 * effectScale;
  const mapCenterX = (bbox.min.x + bbox.max.x) / 2;
  const mapHalfWidth = Math.max((bbox.max.x - bbox.min.x) / 2, 0.001);
  regions.forEach((region) => {
    // Lower the blocks near the visual center and raise both horizontal ends.
    const edgeDistance = THREE.MathUtils.clamp(
      Math.abs(region.center.x - mapCenterX) / mapHalfWidth,
      0,
      1
    );
    const regionDepth = effectScale * (0.87 + edgeDistance * 0.8);
    mapContent?.add(createCity(
      region,
      bbox,
      normalMap,
      iceTexture,
      heatmapResource.texture,
      cloudTexture,
      regionDepth,
      effectScale,
      {
        createSideMaterial: (depth) =>
          createSideWallMaterial(depth, trackUniformMaterial),
        createHeatmapOverlayMaterial: (texture) =>
          createHeatmapOverlayMaterial(texture, trackMaterial),
        createTextSprite: (text) => createTextSprite(text, labels),
        trackMaterial,
        cityMeshes,
        cityGroups,
      }
    ));
  });
  const coneGroup = createCones(regions, haloTexture, effectScale);
  mapContent.add(coneGroup);
  flyLines = createFlyLines(regions, flyTexture, effectScale, trackMaterial);
  mapContent.add(flyLines.group);
  mapGroup.add(mapContent);

  // Match Drei's <Center top>: center the transformed map before the intro
  // animation, while keeping the map layer's original top alignment.
  // 用包围盒计算整体偏移，让不同数据范围的地图都能保持居中。
  const centeredGroup = new THREE.Group();
  centeredGroup.add(mapGroup);
  scene.add(centeredGroup);
  mapGroup.updateMatrixWorld(true);
  const mapBounds = new THREE.Box3().setFromObject(mapGroup, true);
  const mapCenter = mapBounds.getCenter(new THREE.Vector3());
  const mapSize = mapBounds.getSize(new THREE.Vector3());
  centeredGroup.position.set(
    -mapCenter.x,
    -mapCenter.y + mapSize.y / 2,
    -mapCenter.z
  );

  containerRef.value.addEventListener("pointermove", handlePointerMove);
  containerRef.value.addEventListener("pointerleave", handlePointerLeave);
  resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(containerRef.value);

  playIntro();

  // 所有动态效果都使用 delta，帧率变化不会改变动画速度。
  const clock = new THREE.Clock();
  const render = () => {
    animationFrame = window.requestAnimationFrame(render);
    const delta = clock.getDelta();
    animatedMaterials.forEach((material) => {
      if (material.userData.timeUniform) material.userData.timeUniform.value += delta / 3;
    });
    cityGroups.forEach((city) => {
      city.scale.lerp(new THREE.Vector3(1, 1, city.userData.targetScaleZ ?? 1), 0.1);
    });
    if (activeCity && tooltipState.value.visible) updateTooltipPosition(activeCity);
    animateCones(coneGroup, delta, effectScale);
    animateBeams(beams, delta);
    flyLines?.update(delta);
    controls?.update();
    renderer?.render(scene!, camera!);
  };
  render();
});

onBeforeUnmount(() => {
  window.cancelAnimationFrame(animationFrame);
  introTimeline?.kill();
  resizeObserver?.disconnect();
  controls?.dispose();
  containerRef.value?.removeEventListener("pointermove", handlePointerMove);
  containerRef.value?.removeEventListener("pointerleave", handlePointerLeave);

  previewHeatmap?.texture.dispose();
  previewHeatmap = null;
  surfaceCloudTexture?.dispose();
  surfaceCloudTexture = null;
  if (scene) disposeObject(scene);
  renderer?.dispose();
  renderer?.domElement.remove();
  document.body.style.cursor = "auto";

  renderer = null;
  scene = null;
  camera = null;
  controls = null;
  resizeObserver = null;
  mapContent = null;
  introTimeline = null;
  flyLines = null;
  activeCity = null;
  beams = [];
  cityMeshes.length = 0;
  cityGroups.length = 0;
  labels.length = 0;
  animatedMaterials.length = 0;
});
</script>

<style scoped>
.three-map {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.three-map :deep(canvas) {
  display: block;
}
</style>
