/** Three.js 场景和雾效使用的整体背景色。 */
export const backgroundColor = "#dfeafb";

/** 法线图在地图顶面的平铺次数，数值越大纹理越密。 */
export const normalMapRepeat = 0.62;
/** 法线扰动强度，数值越大起伏越明显，过大容易产生强烈反光。 */
export const normalMapStrength = 0.14;

/** 地图顶面基础色；侧壁颜色由 ICE_SIDE_LIGHT_CONFIG 单独控制。 */
export const mapSurfaceColor = "#58a0e7";

/**
 * 侧壁 Shader 的集中参数。
 * 所有数值都会转换成 uniform，调参时优先修改这里，避免散落在 GLSL 中。
 */
export const ICE_SIDE_LIGHT_CONFIG = {
  /** 侧壁横向宽幅明暗的两组频率。 */
  broadFrequency1: 3,
  broadFrequency2: 7,
  /** 侧壁竖向亮带数量和宽度。 */
  stripeCount: 30,
  stripeWidth: 0.1,
  stripeIntensity: 0.42,
  /** 模拟硬币堆叠的层数、接缝宽度和阴影强度。 */
  stackLayerCount: 10,
  stackSeamWidth: 0.13,
  stackSeamIntensity: 0.42,
  stackShadowWidth: 0.28,
  stackShadowIntensity: 0.2,
  /** 侧壁转折面的暗部范围和强度。 */
  turnShadowIntensity: 0.28,
  turnShadowStart: 0.26,
  turnShadowEnd: 0.5,
  /** 高度渐变和 Fresnel 边缘高光强度。 */
  heightGradient: 0.12,
  fresnelIntensity: 0.16,
  /** 侧壁从下到上的基础色阶。 */
  bottomColor: 0xc7e7fc,
  middleColor: 0xc7e7fc,
  lightColor: 0xc7e7fc,
  /** 竖向透光带颜色和层级边界暗色。 */
  stripeColor: 0xc7e7fc,
  boundaryColor: 0x7bb9fc,
} as const;
