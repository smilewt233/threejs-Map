import * as THREE from "three";
import type { Region, AnimatedMaterial } from "../core/mapTypes";

type TrackMaterial = <T extends AnimatedMaterial>(material: T, targetOpacity: number) => T;

/** 根据行政区中心和边界范围生成稳定的预览热力图纹理。 */
export function createPreviewHeatmapTexture(regions: Region[], bbox: THREE.Box2) {
  const size = 512;
  const width = bbox.max.x - bbox.min.x || 1;
  const height = bbox.max.y - bbox.min.y || 1;
  const points: Array<{ x: number; y: number; value: number; radius: number }> = [];
  // 固定种子让每次刷新时光斑位置一致，方便视觉调试。
  let seed = 24681357;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  regions.forEach((region) => {
    const regionBounds = new THREE.Box2().setFromPoints(region.points.flat());
    const spreadX = Math.max((regionBounds.max.x - regionBounds.min.x) * 0.56, width * 0.018);
    const spreadY = Math.max((regionBounds.max.y - regionBounds.min.y) * 0.56, height * 0.018);

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

  const canvas = createFallbackHeatmapCanvas(points, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  texture.needsUpdate = true;
  return { texture };
}

/** Canvas 回退热力图：每个点由多段径向渐变叠加得到。 */
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
    // 对外部数据做有限值保护，避免渐变函数收到 NaN 或 Infinity。
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

/** 创建显示在地图最上层的热力图材质。 */
export function createHeatmapOverlayMaterial(
  texture: THREE.Texture,
  trackMaterial: TrackMaterial
) {
  return trackMaterial(
    new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.NormalBlending,
    }) as AnimatedMaterial,
    0.72
  );
}

/** 生成只增加明度、不主动压暗地图的云彩晕染纹理。 */
export function createSurfaceCloudTexture(size = 512) {
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

  // Small white blobs add cloud-like brightness without darkening the surface.
  // patchCount 控制斑驳密度，半径范围控制每个光斑的疏密和面积。
  const patchCount = 120;
  const minPatchRadius = 10;
  const maxPatchRadius = 38;
  for (let index = 0; index < patchCount; index += 1) {
    const x = random() * size;
    const y = random() * size;
    const radius = minPatchRadius + random() * (maxPatchRadius - minPatchRadius);
    const alpha = 0.7 + random() * 0.3;
    const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
    gradient.addColorStop(0.42, `rgba(255, 255, 255, ${alpha * 0.52})`);
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
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
