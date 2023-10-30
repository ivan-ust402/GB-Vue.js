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

export default {
  components: {
    MainIntroBlock,
    HomepageProjectsBlock,
    HomepageAchivementsBlock,
    HomepageArticlesBlock,
  },
}
</script>

<style lang="scss" scoped>

</style>
