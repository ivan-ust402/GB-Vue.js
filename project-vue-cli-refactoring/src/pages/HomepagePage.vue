<template>
  <MainIntroBlock />
  <HomepageProjectsBlock />
  <HomepageAchivementsBlock />
  <HomepageArticlesBlock />
</template>

<script>
import HomepageProjectsBlock from "@/blocks/homepage/HomepageProjectsBlock.vue"
import MainIntroBlock from "@/blocks/intro/MainIntroBlock.vue"
import HomepageAchivementsBlock from "@/blocks/homepage/HomepageAchivementsBlock.vue"
import HomepageArticlesBlock from "@/blocks/homepage/HomepageArticlesBlock.vue"
import { useHead } from "@vueuse/head"

export default {
  components: {
    MainIntroBlock,
    HomepageProjectsBlock,
    HomepageAchivementsBlock,
    HomepageArticlesBlock,
  },
  setup() {
    useHead({
      title: "Homepage",
      meta: [
        {
          name: "Homepage",
          content:
            "This is a site about design solutions and our proposals for project implementation",
        },
      ],
    })
  },
}
</script>

<style lang="scss" scoped></style>
