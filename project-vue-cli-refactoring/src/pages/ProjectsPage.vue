<template>
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
</template>

<script>
import IntroBlock from "@/blocks/intro/IntroBlock.vue"
import ProjectsDisplayBlock from "@/blocks/other/ProjectsDisplayBlock.vue"
import { useHead } from "@vueuse/head"

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
  setup() {
    useHead({
      title: 'Projects',
      meta: [
        {
          name: "our projects",
          content: "our projects are presented here",
        },
      ],
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
