<template>
  <div class="projects">
    <IntroBlock
      :style="{
        'background-image':
          'url(' +
          require('@/assets/img/background/intro/projectsIntro.png') +
          ')',
      }"
      :settings="settings"
    />
    <ProjectsDisplayBlock />
  </div>
</template>

<script>
import IntroBlock from "@/blocks/IntroBlock.vue"
import ProjectsDisplayBlock from "@/blocks/ProjectsDisplayBlock.vue"

export default {
  components: {
    IntroBlock,
    ProjectsDisplayBlock,
  },
  data() {
    return {
      settings: {
        hasTitle: true,
        title: "Our Projects",
        category: "Home / Project",
      },
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
