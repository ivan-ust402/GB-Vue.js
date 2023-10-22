<template>
  <div class="tag-panel__wrapper">
    <div class="tag-panel">
      <PrimaryTagComponent
        :class="{ tag_active: currentTag === chapter }"
        v-for="(chapter, index) in chapters"
        :key="index"
        :value="chapter"
        @click="changeTag(chapter)"
      />
    </div>
  </div>
</template>

<script>
import PrimaryTagComponent from "../tags/PrimaryTagComponent.vue"
export default {
  components: {
    PrimaryTagComponent,
  },
  data() {
    return {
      chapters: ["Bathroom", "Bedroom", "Kitchen", "Living Room"],
      currentTag: "Bathroom",
    }
  },
  emits: ['my-tag-changed'],
  methods: {
    changeTag(tag) {
      this.currentTag = tag;
      this.$emit('my-tag-changed', tag);
    },
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
