import * as THREE from "three";

/** 创建程序化冰蓝玻璃底座及多重圆环。 */
export function createMirror() {
  const group = new THREE.Group();
  // 底座半径是固定世界尺寸，内部圆环都相对该半径定位。
  const platformRadius = 8.4;
  const glassRadius = platformRadius - 0.1;

  // Finite translucent plates keep the base visible without creating a hard floor.
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

  /** 添加一个水平圆环；y 控制它在底座厚度方向的层次。 */
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

/** 使用 dizuo.png 创建带柔化边缘和阴影接收面的图片底座。 */
export function createImageMirror(texture: THREE.Texture) {
  const group = new THREE.Group();
  const shadowMaterial = new THREE.ShadowMaterial({
    color: "#174b78",
    transparent: true,
    opacity: 0.24,
    depthWrite: false,
  });
  // 单独的 ShadowMaterial 只接收地图投影，不会把底座变成不透明平面。
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
