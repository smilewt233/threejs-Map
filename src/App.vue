<template>
  <main class="app">
    <ThreeMap />
  </main>
</template>

<script setup lang="ts">
import ThreeMap from "./map/ThreeMap.vue";
</script>

<style scoped>
.app {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #dfeafb;
}
</style>
