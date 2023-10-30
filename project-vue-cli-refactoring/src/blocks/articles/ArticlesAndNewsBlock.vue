<template>
  <div id="articles-block">
    <div class="articles-block__cards">
      <ArticleCardComponent
        v-for="article in getBlogArticles"
        :key="article.id"
        :settings="article"
      />
    </div>
    <div class="articles-block__pagination">
      <button
        class="articles-block__pagination-link articles-block__pagination-link_active"
        active
      >
        01
      </button>
      <button class="articles-block__pagination-link">02</button>
      <button class="articles-block__pagination-link">03</button>
      <button class="articles-block__pagination-link">
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.77199 14.9527L7.71484 8.26698L1.77199 1.58127"
            stroke="#292F36"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import ArticleCardComponent from "@/components/cards/article-card/ArticleCardComponent.vue";
import { mapGetters } from "vuex"
export default {
  components: {
    ArticleCardComponent,
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
    ...mapGetters(["getBlogArticles", "getLatestPost"]),
  },
}
</script>

<style lang="scss" scoped>
.articles-block {
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
}</style>
