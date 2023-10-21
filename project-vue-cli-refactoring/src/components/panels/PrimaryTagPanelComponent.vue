<template>
  <div class="tag-panel__wrapper">
    <div class="tag-panel">
    <PrimaryTagComponent />
    <PrimaryTagComponent :class="{ tag_active: true }" />
    <PrimaryTagComponent />
    <PrimaryTagComponent />
  </div>
  </div>
</template>

<script>
import PrimaryTagComponent from "../tags/PrimaryTagComponent.vue"
export default {
  components: {
    PrimaryTagComponent,
  },
}
</script>

<style lang="scss" scoped>
.tag-panel {
  &__wrapper {
    display: flex;
    justify-content: center;
  }
  display: flex;
  border-radius: 18px;
  border: 1px solid #cda274;
  width: fit-content;
}
</style>
