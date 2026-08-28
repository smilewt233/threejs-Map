import * as THREE from "three";

/**
 * 把行政区名称绘制到 Canvas，再作为 Sprite 放到地图上方。
 * labels 用于入口组件统一控制开屏时隐藏和显示。
 */
export function createTextSprite(text: string, labels: THREE.Sprite[]) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d")!;
  // Canvas 字体尺寸决定清晰度，Sprite 缩放决定最终世界空间大小。
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
