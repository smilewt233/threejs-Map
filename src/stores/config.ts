import { reactive } from "vue";

export const configStore = reactive({
  mapPlayComplete: false,
  reset() {
    this.mapPlayComplete = false;
  },
});
