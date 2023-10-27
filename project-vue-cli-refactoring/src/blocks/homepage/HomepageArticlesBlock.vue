<template>
  <section class="articles center">
    <div class="articles__main-info">
      <h2 class="articles__title">Articles & News</h2>
      <p class="articles__text">
        It is a long established fact that a reader will be distracted by the of
        readable content of a page when lookings at its layouts the points of
        using.
      </p>
    </div>
    <div class="articles__cards">
      <ArticleCardComponent
        v-for="article in getHomepageArticles"
        :key="article.id"
        :settings="article"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex"
import ArticleCardComponent from "@/components/cards/article-card/ArticleCardComponent.vue"

export default {
  components: {
    ArticleCardComponent,
  },
  computed: {
    ...mapGetters(["getHomepageArticles"]),
  },
}
</script>

<style lang="scss" scoped>
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
  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 382px);
    gap: 27px;
  }
  
  &__pagination {
    display: flex;
    gap: 20px;
    justify-content: center;
    padding-top: 51px;
    padding-bottom: 104px;
  }
  &__pagination-link {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 1px solid #cda274;
    background-color: #fff;
    transition: all 0.3s ease-in;
    &:hover {
      background-color: #f4f0ec;
    }
    &_active {
      background-color: #f4f0ec;
      border: none;
    }
  }
}
</style>
