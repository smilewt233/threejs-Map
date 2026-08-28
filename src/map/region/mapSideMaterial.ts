import * as THREE from "three";
import { ICE_SIDE_LIGHT_CONFIG } from "../core/mapConfig";
import type { AnimatedMaterial } from "../core/mapTypes";

type TrackUniformMaterial = <T extends AnimatedMaterial>(
  material: T,
  uniform: { value: number },
  targetOpacity: number
) => T;

/**
 * 创建地图侧壁材质。
 * depth 用于把顶点高度归一化到 0~1；trackUniformMaterial 负责开屏透明度和时间动画登记。
 */
export function createSideWallMaterial(
  depth: number,
  trackUniformMaterial: TrackUniformMaterial
) {
  // 将配置映射为 uniform，调参时无需重建 Shader 材质。
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
    extensions: { derivatives: true } as unknown as THREE.ShaderMaterialParameters["extensions"],
    // aContourU 沿行政区轮廓累计长度变化，保证竖向亮带从顶部连续到底部。
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
    // 侧壁主明暗依赖 vSideU；vSideHeight 只提供轻微的上浅下深变化。
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

        // 亮带只使用轮廓方向坐标，因此不会生成水平条纹。
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
        // 保留原有堆叠层级的细暗面，用于区分硬币式挤出层。
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

        // 扫描动画沿侧壁高度方向移动，范围较窄，避免形成永久水平亮条。
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
