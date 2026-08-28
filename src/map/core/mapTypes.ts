import type * as THREE from "three";

/** 已投影到 Three.js 平面坐标系的行政区数据。 */
export interface Region {
  /** 行政区显示名称。 */
  name: string;
  /** 行政区编码。 */
  adcode: number;
  /** 行政区级别。 */
  level: string;
  /** 行政区标签和特效的中心点。 */
  center: THREE.Vector3;
  /** 行政区的一个或多个二维轮廓环。 */
  points: THREE.Vector2[][];
}

/** HTML 悬浮框所需的响应式状态。 */
export interface TooltipState {
  /** 是否显示悬浮框。 */
  visible: boolean;
  /** 相对于地图容器的像素坐标。 */
  left: number;
  top: number;
  /** 当前行政区的展示数据。 */
  name: string;
  adcode: number;
  level: string;
  /** 轮廓点数量，用于悬浮框明细。 */
  boundaryCount: number;
}

/** 参与开屏淡入或时间动画的材质扩展字段。 */
export interface AnimatedMaterial extends THREE.Material {
  userData: {
    /** 开屏结束时恢复的材质透明度。 */
    targetOpacity?: number;
    /** 开屏前材质原本的 depthWrite 状态。 */
    introDepthWrite?: boolean;
    /** 通过 uniform 控制透明度的材质。 */
    fadeUniform?: { value: number };
    /** 参与时间动画的 uniform。 */
    timeUniform?: { value: number };
  };
}
