import * as THREE from "three";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { LineSegments2 } from "three/examples/jsm/lines/LineSegments2.js";
import { LineSegmentsGeometry } from "three/examples/jsm/lines/LineSegmentsGeometry.js";
import { applyContourU, applyGeometryUv } from "../core/mapGeometry";
import { mapSurfaceColor, normalMapStrength } from "../core/mapConfig";
import type { AnimatedMaterial, Region } from "../core/mapTypes";

type TrackMaterial = <T extends AnimatedMaterial>(material: T, targetOpacity: number) => T;

/** createCity 使用的工厂和登记器，避免区域模块直接耦合入口组件。 */
export interface MapRegionDependencies {
  /** 创建行政区侧壁材质。 */
  createSideMaterial: (depth: number) => AnimatedMaterial;
  /** 创建热力图覆盖层材质。 */
  createHeatmapOverlayMaterial: (texture: THREE.Texture) => AnimatedMaterial;
  /** 创建并登记行政区名称标签。 */
  createTextSprite: (text: string) => THREE.Sprite;
  /** 登记开屏动画需要控制的材质。 */
  trackMaterial: TrackMaterial;
  /** 登记可被射线检测的行政区主体网格。 */
  cityMeshes: THREE.Mesh[];
  /** 登记行政区 Group，供悬浮缩放和动画更新。 */
  cityGroups: THREE.Group[];
}

/**
 * 创建行政区的完整显示对象：顶面、挤出侧壁、纹理层、热力图、边界和标签。
 * depth 是挤出厚度，effectScale 用于补偿地图缩放后的特效尺寸。
 */
export function createCity(
  region: Region,
  bbox: THREE.Box2,
  normalMap: THREE.Texture,
  iceTexture: THREE.Texture,
  heatmapTexture: THREE.Texture,
  cloudTexture: THREE.Texture,
  depth: number,
  effectScale: number,
  dependencies: MapRegionDependencies
) {
  const {
    createSideMaterial,
    createHeatmapOverlayMaterial,
    createTextSprite,
    trackMaterial,
    cityMeshes,
    cityGroups,
  } = dependencies;
  const group = new THREE.Group();
  group.userData.tooltip = {
    name: region.name,
    adcode: region.adcode,
    level: region.level,
    boundaryCount: region.points.reduce((count, ring) => count + ring.length, 0),
    anchor: new THREE.Vector3(region.center.x, region.center.y, depth + 0.78 * effectScale),
  };
  // 同一行政区可能包含多个轮廓环，每个环都转换为一个 Shape。
  const shapes = region.points.map((points) => new THREE.Shape(points));
  const extrudeGeometry = new THREE.ExtrudeGeometry(shapes, { depth, bevelEnabled: false });
  applyGeometryUv(extrudeGeometry, bbox);
  applyContourU(extrudeGeometry, region.points);

  const topMaterial = trackMaterial(
    new THREE.MeshPhysicalMaterial({
      color: mapSurfaceColor,
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
  const sideMaterial = createSideMaterial(depth);
  // ExtrudeGeometry uses material 0 for caps and material 1 for side walls.
  const mesh = new THREE.Mesh(extrudeGeometry, [topMaterial, sideMaterial]);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData.cityGroup = group;
  cityMeshes.push(mesh);

  const iceGeometry = new THREE.ShapeGeometry(shapes);
  applyGeometryUv(iceGeometry, bbox);
  iceGeometry.translate(0, 0, depth + 0.06 * effectScale);
  // 顶面纹理单独叠加，便于调节纹理强度而不改动主体材质。
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
  // 热力图使用更高 renderOrder，避免被冰面和云彩覆盖。
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
