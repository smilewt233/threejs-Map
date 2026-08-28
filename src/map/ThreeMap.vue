<template>
  <div ref="containerRef" class="three-map">
    <div
      v-if="tooltipState.visible"
      class="map-tooltip"
      :style="{
        left: `${tooltipState.left}px`,
        top: `${tooltipState.top}px`,
      }">
      <div class="map-tooltip__title">{{ tooltipState.name }}</div>
      <div class="map-tooltip__row">
        <span>区域编码</span>
        <strong>{{ tooltipState.adcode }}</strong>
      </div>
      <div class="map-tooltip__row">
        <span>行政级别</span>
        <strong>{{ tooltipState.level }}</strong>
      </div>
      <div class="map-tooltip__row">
        <span>边界节点</span>
        <strong>{{ tooltipState.boundaryCount }}</strong>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { geoMercator, type GeoProjection } from "d3-geo";
import { gsap } from "gsap";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { LineSegments2 } from "three/examples/jsm/lines/LineSegments2.js";
import { LineSegmentsGeometry } from "three/examples/jsm/lines/LineSegmentsGeometry.js";
import { configStore } from "@/stores/config";
import type { CityGeoJSON } from "@/types/map";

import scMapData from "@/assets/sc11111.json";
import suzhouNormalMapUrl from "@/assets/suzhou_normal_deep_strong.png";
import dizuoUrl from "@/assets/dizuo.png";
import iceTextureUrl from "@/assets/ice.png";
import flyLineUrl from "@/assets/fly_line.png";
import guangquanUrl from "@/assets/guangquan01.png";

interface Region {
  name: string;
  adcode: number;
  level: string;
  center: THREE.Vector3;
  points: THREE.Vector2[][];
}

interface TooltipState {
  visible: boolean;
  left: number;
  top: number;
  name: string;
  adcode: number;
  level: string;
  boundaryCount: number;
}

interface AnimatedMaterial extends THREE.Material {
  userData: {
    targetOpacity?: number;
    introDepthWrite?: boolean;
    fadeUniform?: { value: number };
    timeUniform?: { value: number };
  };
}

const containerRef = ref<HTMLDivElement | null>(null);
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
const backgroundColor = "#dfeafb";
// repeat is a UV repeat count: a smaller value makes texture details larger.
const normalMapRepeat = 0.62;
// Keep the relief subtle while allowing the normal texture to create internal light variation.
const normalMapStrength = 0.14;
// 冰面颜色
const mapSurfaceColor = "#58a0e7";
const ICE_SIDE_LIGHT_CONFIG = {
  broadFrequency1: 3,
  broadFrequency2: 7,
  stripeCount: 30,
  stripeWidth: 0.1,
  stripeIntensity: 0.42,
  stackLayerCount: 10,
  stackSeamWidth: 0.13,
  stackSeamIntensity: 0.42,
  stackShadowWidth: 0.28,
  stackShadowIntensity: 0.2,
  turnShadowIntensity: 0.28,
  turnShadowStart: 0.26,
  turnShadowEnd: 0.5,
  heightGradient: 0.12,
  fresnelIntensity: 0.16,
  bottomColor: 0xc7e7fc,
  middleColor: 0xc7e7fc,
  lightColor: 0xc7e7fc,
  stripeColor: 0xc7e7fc,
  boundaryColor: 0x7bb9fc,
};

function projectPoint(proj: GeoProjection, coord: number[], targetZ = 0) {
  const [x, y] = proj(coord as [number, number]) ?? [0, 0];
  return new THREE.Vector3(x, -y, targetZ);
}

function collectRegions() {
  const bbox = new THREE.Box2();
  const regions: Region[] = [];

  mapData.features.forEach((feature) => {
    const centerCoord = feature.properties.centroid ?? feature.properties.center;
    const [centerX, centerY] = projection(centerCoord) ?? [0, 0];
    const points = feature.geometry.coordinates.reduce<THREE.Vector2[][]>(
      (previous, polygon) => [
        ...previous,
        ...polygon.map((coordinates) =>
          coordinates.map((coord) => {
            const projected = projectPoint(projection, coord);
            const point = new THREE.Vector2(projected.x, projected.y);
            bbox.expandByPoint(point);
            return point;
          })
        ),
      ],
      []
    );

    regions.push({
      name: feature.properties.name,
      adcode: feature.properties.adcode,
      level: feature.properties.level,
      center: new THREE.Vector3(centerX, -centerY, 0),
      points,
    });
  });

  return { bbox, regions };
}

function applyGeometryUv(geometry: THREE.BufferGeometry, bbox: THREE.Box2) {
  const position = geometry.attributes.position;
  const width = bbox.max.x - bbox.min.x || 1;
  const height = bbox.max.y - bbox.min.y || 1;
  const uv: number[] = [];

  for (let index = 0; index < position.count; index += 1) {
    const x = position.getX(index);
    const y = position.getY(index);
    uv.push((x - bbox.min.x) / width, (y - bbox.min.y) / height);
  }

  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
}

function applyContourU(geometry: THREE.BufferGeometry, rings: THREE.Vector2[][]) {
  const segments: Array<{
    start: THREE.Vector2;
    end: THREE.Vector2;
    offset: number;
    length: number;
  }> = [];
  let totalLength = 0;

  rings.forEach((ring) => {
    if (ring.length < 2) return;
    for (let index = 0; index < ring.length; index += 1) {
      const start = ring[index];
      const end = ring[(index + 1) % ring.length];
      const length = start.distanceTo(end);
      if (length <= 0.000001) continue;
      segments.push({ start, end, offset: totalLength, length });
      totalLength += length;
    }
  });

  const position = geometry.attributes.position;
  const contourU = new Float32Array(position.count);
  if (segments.length === 0 || totalLength <= 0.000001) {
    geometry.setAttribute("aContourU", new THREE.BufferAttribute(contourU, 1));
    return;
  }

  for (let index = 0; index < position.count; index += 1) {
    const point = new THREE.Vector2(position.getX(index), position.getY(index));
    let closestDistance = Infinity;
    let closestU = 0;

    segments.forEach((segment) => {
      const direction = new THREE.Vector2().subVectors(segment.end, segment.start);
      const segmentLengthSquared = direction.lengthSq();
      const progress = THREE.MathUtils.clamp(
        point.clone().sub(segment.start).dot(direction) / segmentLengthSquared,
        0,
        1
      );
      const closestPoint = segment.start.clone().addScaledVector(direction, progress);
      const distance = point.distanceToSquared(closestPoint);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestU = (segment.offset + segment.length * progress) / totalLength;
      }
    });

    contourU[index] = closestU;
  }

  geometry.setAttribute("aContourU", new THREE.BufferAttribute(contourU, 1));
}

function configureSuzhouNormalMap(texture: THREE.Texture) {
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.center.set(0.5, 0.5);
  texture.repeat.set(normalMapRepeat, normalMapRepeat);
  // The center handles the zoom origin; an extra offset would shift the map.
  texture.offset.set(0, 0);
  texture.needsUpdate = true;
}

function trackMaterial<T extends AnimatedMaterial>(material: T, targetOpacity: number) {
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
  material.transparent = true;
  material.userData.introDepthWrite = material.depthWrite;
  material.depthWrite = false;
  material.userData.fadeUniform = uniform;
  material.userData.targetOpacity = targetOpacity;
  animatedMaterials.push(material);
  return material;
}

function createShiftMaterial(depth: number) {
  const uniforms = {
    time: { value: 0 },
    depth: { value: depth },
    broadFrequency1: { value: ICE_SIDE_LIGHT_CONFIG.broadFrequency1 },
    broadFrequency2: { value: ICE_SIDE_LIGHT_CONFIG.broadFrequency2 },
    stripeCount: { value: ICE_SIDE_LIGHT_CONFIG.stripeCount },
    stripeWidth: { value: ICE_SIDE_LIGHT_CONFIG.stripeWidth },
    stripeIntensity: { value: ICE_SIDE_LIGHT_CONFIG.stripeIntensity },
    stackLayerCount: { value: ICE_SIDE_LIGHT_CONFIG.stackLayerCount },
    stackSeamWidth: { value: ICE_SIDE_LIGHT_CONFIG.stackSeamWidth },
    stackSeamIntensity: { value: ICE_SIDE_LIGHT_CONFIG.stackSeamIntensity },
    stackShadowWidth: { value: ICE_SIDE_LIGHT_CONFIG.stackShadowWidth },
    stackShadowIntensity: { value: ICE_SIDE_LIGHT_CONFIG.stackShadowIntensity },
    turnShadowIntensity: { value: ICE_SIDE_LIGHT_CONFIG.turnShadowIntensity },
    turnShadowStart: { value: ICE_SIDE_LIGHT_CONFIG.turnShadowStart },
    turnShadowEnd: { value: ICE_SIDE_LIGHT_CONFIG.turnShadowEnd },
    heightGradient: { value: ICE_SIDE_LIGHT_CONFIG.heightGradient },
    fresnelIntensity: { value: ICE_SIDE_LIGHT_CONFIG.fresnelIntensity },
    bottomColor: { value: new THREE.Color(ICE_SIDE_LIGHT_CONFIG.bottomColor) },
    middleColor: { value: new THREE.Color(ICE_SIDE_LIGHT_CONFIG.middleColor) },
    lightColor: { value: new THREE.Color(ICE_SIDE_LIGHT_CONFIG.lightColor) },
    stripeColor: { value: new THREE.Color(ICE_SIDE_LIGHT_CONFIG.stripeColor) },
    boundaryColor: { value: new THREE.Color(ICE_SIDE_LIGHT_CONFIG.boundaryColor) },
    scanColor: { value: new THREE.Color("#ffffff") },
    opacity: { value: 0 },
  };
  const material = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    side: THREE.DoubleSide,
    extensions: { derivatives: true },
    vertexShader: `
      uniform float depth;
      attribute float aContourU;
      varying float vSideU;
      varying float vSideHeight;
      varying vec3 vWorldNormal;
      varying vec3 vViewDirection;
      void main() {
        vSideU = aContourU;
        vSideHeight = clamp(position.z / depth, 0.0, 1.0);
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        vViewDirection = normalize(cameraPosition - worldPosition.xyz);
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,
    fragmentShader: `
      varying float vSideU;
      varying float vSideHeight;
      varying vec3 vWorldNormal;
      varying vec3 vViewDirection;
      uniform float time;
      uniform vec3 scanColor;
      uniform float depth;
      uniform float broadFrequency1;
      uniform float broadFrequency2;
      uniform float stripeCount;
      uniform float stripeWidth;
      uniform float stripeIntensity;
      uniform float stackLayerCount;
      uniform float stackSeamWidth;
      uniform float stackSeamIntensity;
      uniform float stackShadowWidth;
      uniform float stackShadowIntensity;
      uniform float turnShadowIntensity;
      uniform float turnShadowStart;
      uniform float turnShadowEnd;
      uniform float heightGradient;
      uniform float fresnelIntensity;
      uniform vec3 bottomColor;
      uniform vec3 middleColor;
      uniform vec3 lightColor;
      uniform vec3 stripeColor;
      uniform vec3 boundaryColor;
      uniform float opacity;

      void main() {
        float broadLight = 0.72
          + 0.18 * sin(vSideU * 6.2831853 * broadFrequency1 + 0.6)
          + 0.10 * sin(vSideU * 6.2831853 * broadFrequency2);
        float broadShade = mix(0.94, 1.06, clamp(broadLight, 0.0, 1.0));

        float stripeCoord = fract(vSideU * stripeCount);
        float stripeDist = abs(stripeCoord - 0.5);
        float aa = max(fwidth(stripeCoord), 0.001);
        float widthScale = stripeWidth / 0.1;
        float verticalStripe = 1.0 - smoothstep(
          0.06 * widthScale + aa,
          0.16 * widthScale + aa,
          stripeDist
        );

        float heightLight = mix(1.0 - heightGradient * 0.73,
          1.0 + heightGradient * 0.27,
          vSideHeight);
        float layerPosition = vSideHeight * stackLayerCount;
        float layerFraction = fract(layerPosition);
        float layerSeam = 1.0 - smoothstep(0.0, stackSeamWidth, layerFraction);
        float layerShadow = 1.0 - smoothstep(
          stackSeamWidth * 0.45,
          stackShadowWidth,
          layerFraction
        );
        vec3 baseColor = mix(
          bottomColor,
          middleColor,
          smoothstep(0.0, 0.58, vSideHeight)
        );
        baseColor = mix(
          baseColor,
          lightColor,
          smoothstep(0.5, 1.0, vSideHeight) * 0.16
        );
        baseColor *= broadShade * heightLight;
        baseColor = mix(baseColor, boundaryColor, layerShadow * stackShadowIntensity);
        baseColor = mix(baseColor, boundaryColor, layerSeam * stackSeamIntensity);
        baseColor = mix(baseColor, stripeColor, verticalStripe * stripeIntensity);

        float bandHeight = 0.15;
        float scanProgress = fract(time) * (1.0 + bandHeight) - bandHeight;
        float scanDistance = (scanProgress + bandHeight) - vSideHeight;
        float scanBelowHead = step(0.0, scanDistance);
        float scanWithinBand = clamp(1.0 - scanDistance / bandHeight, 0.0, 1.0) * scanBelowHead;
        float scanStrength = pow(smoothstep(0.18, 0.82, scanWithinBand), 3.2) * 0.45;
        baseColor = mix(baseColor, scanColor, scanStrength);

        vec3 frontLightDirection = normalize(vec3(-0.42, 0.78, 0.28));
        vec3 sideNormal = normalize(vWorldNormal);
        float frontLight = max(dot(sideNormal, frontLightDirection), 0.0);
        float turnShadow = 1.0 - smoothstep(
          turnShadowStart,
          turnShadowEnd,
          frontLight
        );
        baseColor = mix(
          baseColor,
          boundaryColor,
          pow(turnShadow, 2.4) * turnShadowIntensity
        );
        baseColor *= mix(0.98, 1.06, smoothstep(0.08, 0.82, frontLight));

        float fresnel = pow(
          1.0 - abs(dot(normalize(vWorldNormal), normalize(vViewDirection))),
          2.2
        );
        baseColor = mix(baseColor, lightColor, fresnel * fresnelIntensity);
        gl_FragColor = vec4(clamp(baseColor, 0.0, 1.0), opacity);
      }
    `,
  }) as AnimatedMaterial;

  material.userData.timeUniform = uniforms.time;
  return trackUniformMaterial(material, uniforms.opacity, 1);
}

function createBeamMaterial(opacity: number) {
  const uniforms = {
    uColor: { value: new THREE.Color("#8fc2ff") },
    uOpacity: { value: opacity },
  };
  const material = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      uniform float uOpacity;
      varying vec2 vUv;

      void main() {
        float strength = 1.0 - abs(vUv.x - 0.5) * 2.0;
        strength = pow(strength, 2.0);
        float verticalFade = pow(sin(vUv.y * 3.14159), 0.5);
        float brightness = strength * verticalFade;
        gl_FragColor = vec4(uColor * brightness * 2.0, brightness * uOpacity);
      }
    `,
  }) as AnimatedMaterial;

  return material;
}

function createStarChainMaterial() {
  const uniforms = {
    time: { value: 0 },
    opacity: { value: 0 },
  };
  const material = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthTest: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform float opacity;
      varying vec2 vUv;

      float segmentLine(vec2 point, vec2 start, vec2 end) {
        vec2 offset = end - start;
        float progress = clamp(dot(point - start, offset) / dot(offset, offset), 0.0, 1.0);
        return 1.0 - smoothstep(0.0, 0.018, distance(point, start + offset * progress));
      }

      float node(vec2 point, vec2 center, float phase) {
        float radius = 1.0 - smoothstep(0.0, 0.028, distance(point, center));
        float breath = 0.55 + 0.45 * sin(time * 1.8 + phase);
        return radius * breath;
      }

      vec2 hash22(vec2 point) {
        point = vec2(
          dot(point, vec2(127.1, 311.7)),
          dot(point, vec2(269.5, 183.3))
        );
        return fract(sin(point) * 43758.5453);
      }

      float hash12(vec2 point) {
        return fract(sin(dot(point, vec2(127.1, 311.7))) * 43758.5453);
      }

      void main() {
        vec2 point = vUv;
        vec2 p0 = vec2(0.13, 0.25);
        vec2 p1 = vec2(0.30, 0.17);
        vec2 p2 = vec2(0.46, 0.32);
        vec2 p3 = vec2(0.64, 0.24);
        vec2 p4 = vec2(0.81, 0.38);
        vec2 p5 = vec2(0.66, 0.55);
        vec2 p6 = vec2(0.45, 0.63);
        vec2 p7 = vec2(0.25, 0.73);
        vec2 p8 = vec2(0.78, 0.78);

        float links = 0.0;
        links = max(links, segmentLine(point, p0, p1));
        links = max(links, segmentLine(point, p1, p2));
        links = max(links, segmentLine(point, p2, p3));
        links = max(links, segmentLine(point, p3, p4));
        links = max(links, segmentLine(point, p4, p5));
        links = max(links, segmentLine(point, p5, p6));
        links = max(links, segmentLine(point, p6, p7));
        links = max(links, segmentLine(point, p3, p6));
        links = max(links, segmentLine(point, p5, p8));

        float nodes = 0.0;
        nodes += node(point, p0, 0.0);
        nodes += node(point, p1, 0.7);
        nodes += node(point, p2, 1.4);
        nodes += node(point, p3, 2.1);
        nodes += node(point, p4, 2.8);
        nodes += node(point, p5, 3.5);
        nodes += node(point, p6, 4.2);
        nodes += node(point, p7, 4.9);
        nodes += node(point, p8, 5.6);

        float gridA = 1.0 - smoothstep(0.0, 0.035, abs(fract((point.x + point.y) * 8.0) - 0.5) * 2.0);
        float gridB = 1.0 - smoothstep(0.0, 0.035, abs(fract((point.x - point.y) * 7.0) - 0.5) * 2.0);

        // A fine jittered Voronoi mesh creates the subtle, irregular network
        // visible across the map without requiring another image asset.
        vec2 detailPoint = point * 34.0;
        vec2 baseCell = floor(detailPoint);
        vec2 localPoint = fract(detailPoint);
        float nearestDistance = 100.0;
        float secondDistance = 100.0;
        vec2 nearestCell = vec2(0.0);
        for (int x = -1; x <= 1; x += 1) {
          for (int y = -1; y <= 1; y += 1) {
            vec2 cell = baseCell + vec2(float(x), float(y));
            vec2 jitter = hash22(cell) - 0.5;
            vec2 offset = vec2(float(x), float(y)) + jitter - localPoint;
            float distanceToCell = dot(offset, offset);
            if (distanceToCell < nearestDistance) {
              secondDistance = nearestDistance;
              nearestDistance = distanceToCell;
              nearestCell = cell;
            } else if (distanceToCell < secondDistance) {
              secondDistance = distanceToCell;
            }
          }
        }
        float fineLines = 1.0 - smoothstep(0.012, 0.075, secondDistance - nearestDistance);
        float fineNode = 1.0 - smoothstep(0.0, 0.01, nearestDistance);
        float fineBreath = 0.78 + 0.22 * sin(time * 1.35 + hash12(nearestCell) * 6.28318);

        float breath = 0.72 + 0.28 * sin(time * 1.2 + point.x * 5.0 + point.y * 3.0);
        float strength = (links * 0.28 + nodes * 0.9 + fineLines * 0.72 + fineNode * 0.68 + (gridA + gridB) * 0.025) * breath * fineBreath;
        vec3 color = mix(vec3(0.16, 0.58, 0.98), vec3(0.82, 0.99, 1.0), clamp(nodes + fineNode, 0.0, 1.0));
        gl_FragColor = vec4(color, clamp(strength * opacity, 0.0, 0.62));
      }
    `,
  }) as AnimatedMaterial;

  material.userData.timeUniform = uniforms.time;
  return trackUniformMaterial(material, uniforms.opacity, 0.3);
}

function createHeatMaterial(centers: THREE.Vector2[], radius: number) {
  const uniforms = {
    time: { value: 0 },
    opacity: { value: 0 },
    center0: { value: centers[0] ?? new THREE.Vector2() },
    center1: { value: centers[1] ?? new THREE.Vector2() },
    center2: { value: centers[2] ?? new THREE.Vector2() },
    radius: { value: radius },
  };
  const material = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthTest: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    vertexShader: `
      varying vec2 vPosition;
      void main() {
        vPosition = position.xy;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform float opacity;
      uniform vec2 center0;
      uniform vec2 center1;
      uniform vec2 center2;
      uniform float radius;
      varying vec2 vPosition;

      float heatAt(vec2 point, vec2 center) {
        float distanceToCenter = distance(point, center) / radius;
        return smoothstep(1.0, 0.0, distanceToCenter);
      }

      vec3 heatColor(float amount) {
        vec3 cyan = vec3(0.03, 0.72, 0.94);
        vec3 green = vec3(0.35, 0.95, 0.42);
        vec3 yellow = vec3(1.0, 0.84, 0.1);
        vec3 red = vec3(1.0, 0.16, 0.04);
        vec3 color = mix(cyan, green, smoothstep(0.18, 0.42, amount));
        color = mix(color, yellow, smoothstep(0.42, 0.7, amount));
        return mix(color, red, smoothstep(0.7, 0.94, amount));
      }

      void main() {
        float heat0 = heatAt(vPosition, center0);
        float heat1 = heatAt(vPosition, center1) * 0.78;
        float heat2 = heatAt(vPosition, center2) * 0.68;
        float heat = max(heat0, max(heat1, heat2));
        float pulse = 0.9 + 0.1 * sin(time * 1.35 + vPosition.x * 3.0 + vPosition.y * 2.0);
        vec3 color = heatColor(heat) * (0.9 + heat * 0.8);
        gl_FragColor = vec4(color, heat * opacity * pulse * 0.72);
      }
    `,
  }) as AnimatedMaterial;

  material.userData.timeUniform = uniforms.time;
  return trackUniformMaterial(material, uniforms.opacity, 0.72);
}

function createPreviewHeatmapTexture(regions: Region[], bbox: THREE.Box2) {
  const size = 512;
  const width = bbox.max.x - bbox.min.x || 1;
  const height = bbox.max.y - bbox.min.y || 1;
  const points: Array<{ x: number; y: number; value: number; radius: number }> = [];
  let seed = 24681357;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  regions.forEach((region) => {
    const regionBounds = new THREE.Box2().setFromPoints(region.points.flat());
    const spreadX = Math.max((regionBounds.max.x - regionBounds.min.x) * 0.56, width * 0.018);
    const spreadY = Math.max((regionBounds.max.y - regionBounds.min.y) * 0.56, height * 0.018);

    // One central hotspot plus several smaller points creates a denser,
    // naturally scattered distribution inside every administrative region.
    for (let pointIndex = 0; pointIndex < 5; pointIndex += 1) {
      const spread = pointIndex === 0 ? 0 : 1;
      const x = region.center.x + (random() - 0.5) * spreadX * spread;
      const y = region.center.y + (random() - 0.5) * spreadY * spread;
      points.push({
        x: Math.round(THREE.MathUtils.clamp(((x - bbox.min.x) / width) * (size - 1), 0, size - 1)),
        y: Math.round(THREE.MathUtils.clamp(((bbox.max.y - y) / height) * (size - 1), 0, size - 1)),
        value: Math.round(560 + random() * 440),
        radius: Math.round(14 + random() * 18),
      });
    }
  });

  // Use the native canvas result for the preview so every generated point is
  const canvas = createFallbackHeatmapCanvas(points, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  texture.needsUpdate = true;

  return { texture };
}

function createFallbackHeatmapCanvas(
  points: Array<{ x: number; y: number; value: number; radius?: number }>,
  size: number
) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  if (!context) return canvas;

  context.globalCompositeOperation = "lighter";
  points.forEach((point) => {
    const x = Number.isFinite(point.x)
      ? THREE.MathUtils.clamp(point.x, 0, size)
      : size / 2;
    const y = Number.isFinite(point.y)
      ? THREE.MathUtils.clamp(point.y, 0, size)
      : size / 2;
    const value = Number.isFinite(point.value) ? point.value : 680;
    const strength = THREE.MathUtils.clamp(value / 1000, 0, 1);
    const radius = Number.isFinite(point.radius)
      ? Math.max(8, point.radius!)
      : 32;
    const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, `rgba(255, 54, 10, ${0.98 * strength})`);
    gradient.addColorStop(0.1, `rgba(255, 142, 16, ${0.9 * strength})`);
    gradient.addColorStop(0.26, `rgba(255, 224, 35, ${0.76 * strength})`);
    gradient.addColorStop(0.5, `rgba(54, 224, 132, ${0.56 * strength})`);
    gradient.addColorStop(0.76, `rgba(42, 199, 226, ${0.3 * strength})`);
    gradient.addColorStop(1, "rgba(54, 193, 218, 0)");
    context.fillStyle = gradient;
    context.fillRect(x - radius, y - radius, radius * 2, radius * 2);
  });
  context.globalCompositeOperation = "source-over";

  return canvas;
}

function createHeatmapOverlayMaterial(texture: THREE.Texture) {
  return trackMaterial(
    new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      // The heat color belongs to the region top and must remain readable
      // above the additive halo meshes.
      depthTest: false,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.NormalBlending,
    }) as AnimatedMaterial,
    0.72
  );
}

function createSurfaceCloudTexture(size = 512) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  if (!context) return new THREE.CanvasTexture(canvas);

  let seed = 91827364;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  // Use many small, randomly positioned blobs to create a denser surface texture.
  const patchCount = 120;
  const minPatchRadius = 10;
  const maxPatchRadius = 38;
  for (let index = 0; index < patchCount; index += 1) {
    const x = random() * size;
    const y = random() * size;
    const radius = minPatchRadius + random() * (maxPatchRadius - minPatchRadius);
    const alpha = 0.7 + random() * 0.3;
    const color = "255, 255, 255";
    const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, `rgba(${color}, ${alpha})`);
    gradient.addColorStop(0.42, `rgba(${color}, ${alpha * 0.52})`);
    gradient.addColorStop(1, `rgba(${color}, 0)`);
    context.fillStyle = gradient;
    context.fillRect(x - radius, y - radius, radius * 2, radius * 2);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  texture.needsUpdate = true;
  return texture;
}

function createCones(regions: Region[], texture: THREE.Texture, effectScale = 1) {
  const group = new THREE.Group();
  // Keep this effect behind the heatmap overlay.
  group.renderOrder = 4;
  const coneMaterial = new THREE.MeshBasicMaterial({
    color: "#8fc2ff",
    transparent: true,
    opacity: 0.28,
    depthWrite: false,
    depthTest: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
  });
  const ringMaterial = new THREE.MeshBasicMaterial({
    transparent: true,
    color: "#e8f7ff",
    alphaMap: texture,
    opacity: 0.2,
    depthWrite: false,
    depthTest: false,
    fog: false,
    blending: THREE.AdditiveBlending,
  });

  regions.forEach((region) => {
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(0.3 * effectScale, 0.5 * effectScale, 4),
      coneMaterial
    );
    cone.rotation.x = -Math.PI / 2;
    cone.position.copy(region.center).setZ(1.2 * effectScale);
    cone.userData.direction = 1;
    cone.userData.minZ = 1.1 * effectScale;
    cone.userData.maxZ = 1.35 * effectScale;
    cone.renderOrder = 4;

    const ring = new THREE.Mesh(
      new THREE.PlaneGeometry(0.8 * effectScale, 0.8 * effectScale),
      ringMaterial
    );
    ring.position.copy(region.center).setZ(effectScale);
    ring.renderOrder = 4;

    group.add(cone, ring);
  });

  return group;
}

function animateCones(group: THREE.Group, delta: number, effectScale = 1) {
  group.children.forEach((child) => {
    if (child instanceof THREE.Mesh && child.geometry instanceof THREE.ConeGeometry) {
      const minZ = child.userData.minZ ?? 1.1 * effectScale;
      const maxZ = child.userData.maxZ ?? 1.35 * effectScale;
      const speed = 0.12 * effectScale;
      let nextZ = child.position.z + child.userData.direction * delta * speed;
      if (nextZ >= maxZ) {
        nextZ = maxZ;
        child.userData.direction = -1;
      } else if (nextZ <= minZ) {
        nextZ = minZ;
        child.userData.direction = 1;
      }
      child.rotation.y += delta;
      child.position.z = nextZ;
    } else {
      child.rotation.z += delta + 0.02;
    }
  });
}

function createTextSprite(text: string) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d")!;
  const fontSize = 60;
  const padding = 20;

  context.font = `600 ${fontSize}px sans-serif`;
  const metrics = context.measureText(text);
  canvas.width = Math.ceil(metrics.width + padding * 2);
  canvas.height = fontSize + padding * 2;
  context.font = `600 ${fontSize}px sans-serif`;
  context.textBaseline = "middle";
  context.lineJoin = "round";
  context.lineWidth = 9;
  context.strokeStyle = "#ffffff";
  context.fillStyle = "#111827";
  context.strokeText(text, padding, canvas.height / 2);
  context.fillText(text, padding, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(canvas.width / 108, canvas.height / 108, 1);
  sprite.renderOrder = 50;
  sprite.visible = false;
  labels.push(sprite);
  return sprite;
}

function createCity(
  region: Region,
  bbox: THREE.Box2,
  normalMap: THREE.Texture,
  iceTexture: THREE.Texture,
  heatmapTexture: THREE.Texture,
  cloudTexture: THREE.Texture,
  depth = 1,
  effectScale = 1
) {
  const group = new THREE.Group();
  group.userData.tooltip = {
    name: region.name,
    adcode: region.adcode,
    level: region.level,
    boundaryCount: region.points.reduce((count, ring) => count + ring.length, 0),
    anchor: new THREE.Vector3(region.center.x, region.center.y, depth + 0.78 * effectScale),
  };
  const shapes = region.points.map((points) => new THREE.Shape(points));
  const extrudeGeometry = new THREE.ExtrudeGeometry(shapes, { depth, bevelEnabled: false });
  applyGeometryUv(extrudeGeometry, bbox);
  applyContourU(extrudeGeometry, region.points);
  const topColor = mapSurfaceColor;

  const topMaterial = trackMaterial(
    new THREE.MeshPhysicalMaterial({
      color: topColor,
      normalMap,
      normalScale: new THREE.Vector2(normalMapStrength, normalMapStrength),
      metalness: 0,
      roughness: 0.5,
      transmission: 0.18,
      thickness: 0.2,
      ior: 1.2,
      clearcoat: 0.16,
      clearcoatRoughness: 0.42,
      emissive: "#55b7d3",
      emissiveMap: iceTexture,
      emissiveIntensity: 0.06,
      side: THREE.DoubleSide,
    }) as AnimatedMaterial,
    1
  );
  const sideMaterial = createShiftMaterial(depth);
  // ExtrudeGeometry uses material 0 for caps and material 1 for side walls.
  const mesh = new THREE.Mesh(extrudeGeometry, [topMaterial, sideMaterial]);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData.cityGroup = group;
  cityMeshes.push(mesh);

  const iceGeometry = new THREE.ShapeGeometry(shapes);
  applyGeometryUv(iceGeometry, bbox);
  iceGeometry.translate(0, 0, depth + 0.06 * effectScale);
  const iceOverlay = new THREE.Mesh(
    iceGeometry,
    trackMaterial(
      new THREE.MeshBasicMaterial({
        map: iceTexture,
        color: "#e1f5ff",
        transparent: true,
        depthTest: true,
        depthWrite: false,
        side: THREE.DoubleSide,
      }) as AnimatedMaterial,
      0.46
    )
  );
  iceOverlay.raycast = () => null;

  const cloudGeometry = new THREE.ShapeGeometry(shapes);
  applyGeometryUv(cloudGeometry, bbox);
  cloudGeometry.translate(0, 0, depth + 0.08 * effectScale);
  const cloudOverlay = new THREE.Mesh(
    cloudGeometry,
    trackMaterial(
      new THREE.MeshBasicMaterial({
        map: cloudTexture,
        transparent: true,
        depthTest: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.NormalBlending,
      }) as AnimatedMaterial,
      0.35
    )
  );
  cloudOverlay.renderOrder = 5;
  cloudOverlay.raycast = () => null;

  const heatGeometry = new THREE.ShapeGeometry(shapes);
  applyGeometryUv(heatGeometry, bbox);
  heatGeometry.translate(0, 0, depth + 0.1 * effectScale);
  const heatOverlay = new THREE.Mesh(
    heatGeometry,
    createHeatmapOverlayMaterial(heatmapTexture)
  );
  // Keep the heatmap above the map surface, ice texture, outlines and halos.
  // Labels remain above it at renderOrder 50.
  heatOverlay.renderOrder = 40;
  heatOverlay.raycast = () => null;

  const shapeGeometry = new THREE.ShapeGeometry(shapes);
  const edgeGeometry = new THREE.EdgesGeometry(shapeGeometry);
  const outlineGeometry = new LineSegmentsGeometry().fromEdgesGeometry(edgeGeometry);
  edgeGeometry.dispose();
  shapeGeometry.dispose();
  const outlineMaterial = trackMaterial(
    new LineMaterial({
      color: "#ffffff",
      linewidth: 0.025,
      worldUnits: true,
      transparent: true,
      depthTest: true,
      depthWrite: false,
    }) as AnimatedMaterial,
    1
  );
  const edges = new LineSegments2(outlineGeometry, outlineMaterial as LineMaterial);
  edges.position.z = depth + 0.05 * effectScale;
  edges.raycast = () => null;

  const label = createTextSprite(region.name);
  label.scale.multiplyScalar(effectScale);
  label.position.copy(region.center).setZ(depth + 0.38 * effectScale);

  group.userData.targetScaleZ = 1;
  group.add(mesh, iceOverlay, cloudOverlay, heatOverlay, edges, label);
  cityGroups.push(group);
  return group;
}

function createFlyLines(regions: Region[], texture: THREE.Texture, effectScale = 1) {
  const group = new THREE.Group();
  group.renderOrder = 10;
  const centerPoint = regions[0].center.clone();
  const material = trackMaterial(
    new THREE.MeshBasicMaterial({
      color: "#8fc2ff",
      fog: false,
      map: texture,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    }) as AnimatedMaterial,
    1
  );

  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(0.5, 2);

  regions.forEach((region) => {
    const curveCenter = new THREE.Vector3()
      .addVectors(centerPoint, region.center)
      .multiplyScalar(0.5)
      .setZ(5 * effectScale);
    const curve = new THREE.QuadraticBezierCurve3(centerPoint, curveCenter, region.center);
    const tube = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 32, 0.1 * effectScale, 2, false),
      material
    );
    group.add(tube);
  });
  group.position.z = 1.1 * effectScale;

  return {
    group,
    update(delta: number) {
      texture.offset.x -= delta / 5;
    },
  };
}

function createMirror() {
  const group = new THREE.Group();
  const platformRadius = 8.4;
  const glassRadius = platformRadius - 0.1;

  // Build a finite glass platform so the base has a visible silhouette instead
  // of behaving like an infinite plane under the map.
  const lowerMaterial = new THREE.MeshPhysicalMaterial({
    color: "#789fb9",
    metalness: 0,
    roughness: 0.62,
    transmission: 0.03,
    thickness: 0.16,
    ior: 1.34,
    clearcoat: 0,
    clearcoatRoughness: 0.6,
    specularIntensity: 0,
    transparent: true,
    opacity: 0.42,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const lowerPlate = new THREE.Mesh(
    new THREE.CylinderGeometry(platformRadius, platformRadius + 0.06, 0.2, 128),
    lowerMaterial
  );
  lowerPlate.position.y = -0.16;
  lowerPlate.receiveShadow = true;
  group.add(lowerPlate);

  const glassMaterial = new THREE.ShaderMaterial({
    uniforms: {},
    transparent: true,
    depthTest: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    vertexShader: `
      varying vec3 vLocalPosition;
      void main() {
        vLocalPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vLocalPosition;

      void main() {
        float radial = clamp(length(vLocalPosition.xz) / ${glassRadius}, 0.0, 1.0);
        float centerLight = 1.0 - smoothstep(0.0, 0.92, radial);
        float edgeLight = smoothstep(0.68, 1.0, radial);
        float innerBand = 1.0 - smoothstep(0.0, 0.065, abs(radial - 0.62));
        float edgeFade = 1.0 - smoothstep(0.84, 1.0, radial);

        vec3 centerColor = vec3(0.78, 0.87, 0.94);
        vec3 edgeColor = vec3(0.45, 0.65, 0.8);
        vec3 color = mix(centerColor, edgeColor, edgeLight * 0.9);
        color += vec3(0.1, 0.18, 0.24) * centerLight * 0.18;
        color += vec3(0.14, 0.27, 0.38) * innerBand * 0.14;

        float alpha = (0.2 + centerLight * 0.16 + edgeLight * 0.22 + innerBand * 0.08) * edgeFade;
        gl_FragColor = vec4(color, alpha);
      }
    `,
  });
  const glassPlate = new THREE.Mesh(
    new THREE.CylinderGeometry(glassRadius, glassRadius + 0.04, 0.08, 128),
    glassMaterial
  );
  glassPlate.position.y = -0.08;
  glassPlate.receiveShadow = true;
  group.add(glassPlate);

  const edgeMaterial = new THREE.MeshPhysicalMaterial({
    color: "#6d9fbe",
    metalness: 0,
    roughness: 0.58,
    transmission: 0.04,
    thickness: 0.08,
    ior: 1.36,
    clearcoat: 0,
    clearcoatRoughness: 0.6,
    specularIntensity: 0,
    transparent: true,
    opacity: 0.3,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const outerEdge = new THREE.Mesh(
    new THREE.TorusGeometry(platformRadius - 0.04, 0.07, 10, 192),
    edgeMaterial
  );
  outerEdge.rotation.x = Math.PI / 2;
  outerEdge.position.y = -0.055;
  group.add(outerEdge);

  const highlightMaterial = new THREE.MeshBasicMaterial({
    color: "#ffffff",
    transparent: true,
    opacity: 0.26,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const highlightEdge = new THREE.Mesh(
    new THREE.TorusGeometry(glassRadius - 0.02, 0.022, 8, 192),
    highlightMaterial
  );
  highlightEdge.rotation.x = Math.PI / 2;
  highlightEdge.position.y = -0.025;
  group.add(highlightEdge);

  const addPlatformRing = (
    radius: number,
    tube: number,
    color: string,
    opacity: number,
    y: number
  ) => {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(radius, tube, 8, 192),
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
        depthWrite: false,
        side: THREE.DoubleSide,
      })
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = y;
    group.add(ring);
  };

  // Extra glass tracks give the platform a layered, machined appearance.
  addPlatformRing(platformRadius * 0.945, 0.03, "#86b7d0", 0.34, -0.045);
  addPlatformRing(platformRadius * 0.905, 0.011, "#ffffff", 0.38, -0.034);
  addPlatformRing(platformRadius * 0.845, 0.02, "#729fbc", 0.28, -0.044);
  addPlatformRing(platformRadius * 0.775, 0.038, "#b5d2df", 0.18, -0.032);
  addPlatformRing(platformRadius * 0.715, 0.012, "#ffffff", 0.34, -0.024);
  addPlatformRing(platformRadius * 0.63, 0.03, "#7eaec7", 0.25, -0.041);
  addPlatformRing(platformRadius * 0.55, 0.014, "#d9f2ff", 0.28, -0.022);

  group.position.y = 0;
  group.renderOrder = 0;
  return group;
}

function createImageMirror(texture: THREE.Texture) {
  const group = new THREE.Group();
  const shadowMaterial = new THREE.ShadowMaterial({
    color: "#174b78",
    transparent: true,
    opacity: 0.24,
    depthWrite: false,
  });
  const shadowReceiver = new THREE.Mesh(
    new THREE.PlaneGeometry(17.4, 17.4),
    shadowMaterial
  );
  shadowReceiver.rotation.x = -Math.PI / 2;
  shadowReceiver.position.y = -0.075;
  shadowReceiver.renderOrder = -1;
  shadowReceiver.receiveShadow = true;
  group.add(shadowReceiver);

  const material = new THREE.ShaderMaterial({
    uniforms: {
      map: { value: texture },
      opacity: { value: 0.25 },
    },
    transparent: true,
    depthWrite: false,
    depthTest: true,
    side: THREE.DoubleSide,
    blending: THREE.NormalBlending,
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D map;
      uniform float opacity;
      varying vec2 vUv;

      void main() {
        vec4 baseColor = texture2D(map, vUv);
        float radial = distance(vUv, vec2(0.5)) * 2.0;
        float edgeFade = 1.0 - smoothstep(0.58, 1.0, radial);
        float luminance = dot(baseColor.rgb, vec3(0.299, 0.587, 0.114));
        float edgeHighlight = smoothstep(0.68, 0.96, radial) * smoothstep(0.74, 0.98, luminance);
        vec3 matteColor = vec3(0.76, 0.86, 0.94);
        vec3 filteredColor = mix(baseColor.rgb, matteColor, edgeHighlight * 0.82);
        gl_FragColor = vec4(filteredColor, baseColor.a * opacity * edgeFade);
      }
    `,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(17.4, 17.4), material);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = -0.055;
  mesh.renderOrder = 0;
  group.add(mesh);
  return group;
}

function createBeamLights() {
  const group = new THREE.Group();
  const range = 20;

  for (let index = 0; index < 20; index += 1) {
    const beam = new THREE.Mesh(
      new THREE.CylinderGeometry(0.03, 0.03, 1, 6, 1, true),
      createBeamMaterial(0.5 + Math.random() * 0.2)
    );
    beam.position.set((Math.random() - 0.5) * range, 5 - Math.random() * 5, (Math.random() - 0.5) * range);
    beam.scale.set(1, 2 + Math.random() * 4, 1);
    beam.userData.speed = 2 + Math.random();
    beam.userData.resetHeight = 10 + Math.random() * 20;
    group.add(beam);
    beams.push(beam);
  }

  return group;
}

function animateBeams(delta: number) {
  const range = 20;
  beams.forEach((beam) => {
    beam.position.y += beam.userData.speed * delta;
    if (beam.position.y > beam.userData.resetHeight) {
      beam.position.x = (Math.random() - 0.5) * range;
      beam.position.z = (Math.random() - 0.5) * range;
      beam.position.y = 1 - Math.random() * 5;
      beam.scale.y = 2 + Math.random();
    }
  });
}

function playIntro() {
  if (!camera || !mapContent) return;

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
  configureSuzhouNormalMap(normalMap);
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
  scene.add(createBeamLights());

  const { bbox, regions } = collectRegions();
  previewHeatmap = createPreviewHeatmapTexture(regions, bbox);
  surfaceCloudTexture = createSurfaceCloudTexture();
  const mapGroup = new THREE.Group();
  mapGroup.rotation.x = -Math.PI / 2;
  const mapExtent = Math.max(
    bbox.max.x - bbox.min.x,
    bbox.max.y - bbox.min.y
  );
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
      previewHeatmap.texture,
      surfaceCloudTexture,
      regionDepth,
      effectScale
    ));
  });
  const coneGroup = createCones(regions, haloTexture, effectScale);
  mapContent.add(coneGroup);
  flyLines = createFlyLines(regions, flyTexture, effectScale);
  mapContent.add(flyLines.group);
  mapGroup.add(mapContent);

  // Match Drei's <Center top>: center the transformed map before the intro
  // animation, while keeping the map layer's original top alignment.
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
    animateBeams(delta);
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

.map-tooltip {
  position: absolute;
  z-index: 100;
  min-width: 156px;
  padding: 12px 14px 11px;
  transform: translate(-50%, calc(-100% - 16px));
  color: #28577e;
  font-size: 12px;
  line-height: 1.4;
  pointer-events: none;
  background: rgba(244, 251, 255, 0.92);
  border: 1px solid rgba(123, 185, 252, 0.8);
  border-radius: 6px;
  box-shadow:
    0 7px 18px rgba(57, 119, 174, 0.18),
    inset 0 0 12px rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
}

.map-tooltip::after {
  position: absolute;
  bottom: -7px;
  left: 50%;
  width: 12px;
  height: 12px;
  content: "";
  background: rgba(244, 251, 255, 0.92);
  border-right: 1px solid rgba(123, 185, 252, 0.8);
  border-bottom: 1px solid rgba(123, 185, 252, 0.8);
  transform: translateX(-50%) rotate(45deg);
}

.map-tooltip__title {
  position: relative;
  z-index: 1;
  padding-bottom: 8px;
  margin-bottom: 8px;
  color: #174e83;
  font-size: 16px;
  font-weight: 700;
  border-bottom: 1px solid rgba(123, 185, 252, 0.35);
}

.map-tooltip__row {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  gap: 18px;
  margin-top: 4px;
  white-space: nowrap;
}

.map-tooltip__row span {
  color: #6d8da8;
}

.map-tooltip__row strong {
  color: #2f6ea4;
  font-weight: 600;
}
</style>
