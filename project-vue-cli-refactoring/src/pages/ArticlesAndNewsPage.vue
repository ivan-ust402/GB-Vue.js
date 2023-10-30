<template>
  <IntroBlock
    :style="{
      'background-image':
        'url(' +
        require('@/assets/img/background/intro/articles&newsIntro.jpg') +
        ')',
    }"
    :settings="settings"
  />
  <section class="latest-article center">
    <h2 class="latest-article__title">Latest Post</h2>
    <LatestPostComponent :settings="getLatestPost" />
  </section>
  <section class="articles center">
    <div class="articles__main-info">
      <h2 class="articles__title">Articles & News</h2>
      <p class="articles__text">
        It is a long established fact that a reader will be distracted by the of
        readable content of a page when lookings at its layouts the points of
        using.
      </p>
    </div>
    <ArticlesAndNewsBlock />
  </section>
</template>

<script>
import ArticlesAndNewsBlock from "@/blocks/articles/ArticlesAndNewsBlock.vue"
import ArticleCardComponent from "@/components/cards/article-card/ArticleCardComponent.vue"
import LatestPostComponent from "@/components/cards/article-card/LatestPostComponent.vue"
import IntroBlock from "@/blocks/intro/IntroBlock.vue"
import { mapGetters } from "vuex"

export default {
  components: {
    ArticlesAndNewsBlock,
    ArticleCardComponent,
    LatestPostComponent,
    IntroBlock,
  },
  data() {
    return {
      settings: {
        hasTitle: true,
        title: "Articles & News",
        category: "Home / Blog",
      },
    }
  },
  computed: {
    ...mapGetters(["getLatestPost"]),
  },
}
</script>

<style lang="scss" scoped>
.latest-article {
  padding-top: 200px;
  padding-bottom: 54px;
  display: flex;
  flex-direction: column;
  gap: 27px;
  &__title {
    color: #292f36;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 62.5px */
    letter-spacing: 1px;
  }
}

.articles {
  padding-top: 96px;
  padding-bottom: 96px;
  &__main-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding-left: 194.5px;
    padding-right: 194.5px;
    padding-bottom: 52px;
  }
  &__title {
    color: #292f36;
    text-align: center;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 62.5px */
    letter-spacing: 1px;
  }
  &__text {
    color: #4d5053;
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
  }
}
</style>
