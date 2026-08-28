import { geoMercator, type GeoProjection } from "d3-geo";
import * as THREE from "three";
import type { CityGeoJSON } from "@/types/map";
import type { Region } from "./mapTypes";

/** 将 GeoJSON 经纬度投影到地图平面，并翻转 Y 轴适配 Three.js 坐标方向。 */
export function projectPoint(projection: GeoProjection, coord: number[], targetZ = 0) {
  const [x, y] = projection(coord as [number, number]) ?? [0, 0];
  return new THREE.Vector3(x, -y, targetZ);
}

/**
 * 读取 GeoJSON 行政区，生成投影后的轮廓、中心点和整体包围盒。
 * bbox 后续同时用于地图缩放、纹理 UV 和热力图定位。
 */
export function collectRegions(
  mapData: CityGeoJSON,
  projection: GeoProjection
) {
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

/** 根据地图整体包围盒生成 0~1 的平面 UV，供冰面、云彩和热力图复用。 */
export function applyGeometryUv(geometry: THREE.BufferGeometry, bbox: THREE.Box2) {
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

/**
 * 为侧壁生成沿轮廓累计长度归一化的 aContourU。
 * 同一竖向侧壁的顶部和底部顶点会得到相同 U，从而保证亮带上下连续。
 */
export function applyContourU(geometry: THREE.BufferGeometry, rings: THREE.Vector2[][]) {
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

  // 先把所有轮廓边整理成带累计长度的线段，便于寻找每个顶点最近的轮廓位置。
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

/** 设置法线图边界、中心和重复参数，避免纹理采样超出图片范围。 */
export function configureSuzhouNormalMap(texture: THREE.Texture, repeat: number) {
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.center.set(0.5, 0.5);
  texture.repeat.set(repeat, repeat);
  texture.offset.set(0, 0);
  texture.needsUpdate = true;
}
