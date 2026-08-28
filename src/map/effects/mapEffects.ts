import * as THREE from "three";
import type { AnimatedMaterial, Region } from "../core/mapTypes";

type TrackMaterial = <T extends AnimatedMaterial>(material: T, targetOpacity: number) => T;

/** 创建竖向光柱的渐变 Shader 材质；opacity 是初始透明度。 */
export function createBeamMaterial(opacity: number) {
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

/** 为每个行政区创建定位光锥和地面光圈。 */
export function createCones(regions: Region[], texture: THREE.Texture, effectScale = 1) {
  const group = new THREE.Group();
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
    // 特效高度跟随 effectScale，避免地图缩放后光锥比例失真。
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

/** 按帧间隔 delta 做光锥呼吸和光圈旋转，避免动画速度依赖帧率。 */
export function animateCones(group: THREE.Group, delta: number, effectScale = 1) {
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

/** 创建从第一个区域中心连接到各区域的曲线飞线。 */
export function createFlyLines(
  regions: Region[],
  texture: THREE.Texture,
  effectScale: number,
  trackMaterial: TrackMaterial
) {
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
    // update 由渲染循环调用，只改变纹理偏移，不重复创建几何体。
    update(delta: number) {
      texture.offset.x -= delta / 5;
    },
  };
}

/** 创建背景竖向光柱，并将 Mesh 登记到 beams 供动画循环更新。 */
export function createBeamLights(beams: THREE.Mesh[]) {
  const group = new THREE.Group();
  // range 是光柱在水平面随机散布的正方形范围。
  const range = 20;

  for (let index = 0; index < 20; index += 1) {
    const beam = new THREE.Mesh(
      new THREE.CylinderGeometry(0.03, 0.03, 1, 6, 1, true),
      createBeamMaterial(0.5 + Math.random() * 0.2)
    );
    beam.position.set(
      (Math.random() - 0.5) * range,
      5 - Math.random() * 5,
      (Math.random() - 0.5) * range
    );
    beam.scale.set(1, 2 + Math.random() * 4, 1);
    beam.userData.speed = 2 + Math.random();
    beam.userData.resetHeight = 10 + Math.random() * 20;
    group.add(beam);
    beams.push(beam);
  }

  return group;
}

/** 移动背景光柱，超出上界后从底部重新随机出现。 */
export function animateBeams(beams: THREE.Mesh[], delta: number) {
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
