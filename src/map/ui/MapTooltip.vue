<template>
  <!-- 位置由 ThreeMap 根据行政区世界坐标实时更新。 -->
  <div
    v-if="state.visible"
    class="map-tooltip"
    :style="{
      left: `${state.left}px`,
      top: `${state.top}px`,
    }">
    <div class="map-tooltip__title">{{ state.name }}</div>
    <div class="map-tooltip__row">
      <span>区域编码</span>
      <strong>{{ state.adcode }}</strong>
    </div>
    <div class="map-tooltip__row">
      <span>行政级别</span>
      <strong>{{ state.level }}</strong>
    </div>
    <div class="map-tooltip__row">
      <span>边界节点</span>
      <strong>{{ state.boundaryCount }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TooltipState } from "../core/mapTypes";

/** left/top 是相对于地图容器的像素坐标，不是 Three.js 世界坐标。 */
defineProps<{ state: TooltipState }>();
</script>

<style scoped>
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
