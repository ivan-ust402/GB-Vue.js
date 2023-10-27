<template>
  <main class="articles-intro center">
    <div class="articles-intro__content">
      <h1 class="articles-intro__title">Articles & News</h1>
      <p class="articles-intro__pointer">Home / Blog</p>
    </div>
  </main>
  <section class="latest-article center">
    <h2 class="latest-article__title">Latest Post</h2>
    <LatestPostComponent :settings="getLatestPost"/>
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
    <div id="articles__block">
      <div class="articles__cards">
        <ArticleCardComponent
          v-for="article in getBlogArticles"
          :key="article.id"
          :settings="article"
        />
      </div>
      <div class="articles__pagination">
        <button
          class="articles__pagination-link articles__pagination-link_active"
          active
        >
          01
        </button>
        <button class="articles__pagination-link">02</button>
        <button class="articles__pagination-link">03</button>
        <button class="articles__pagination-link">
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
  </section>
</template>

<script>
import ArticleCardComponent from "@/components/cards/article-card/ArticleCardComponent.vue"
import LatestPostComponent from "@/components/cards/article-card/LatestPostComponent.vue"

import { mapGetters } from "vuex"

export default {
  components: { ArticleCardComponent, LatestPostComponent },
  computed: {
    ...mapGetters(["getBlogArticles", "getLatestPost"]),
  },
}
</script>

<style lang="scss" scoped>
.articles-intro {
  background-image: url("../assets/img/articles/Main-background.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  //   background-size: cover;
  display: flex;
  justify-content: center;

  &__content {
    width: 503px;
    padding: 41px 78px;
    background-color: #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top-right-radius: 41px;
    border-top-left-radius: 41px;
    margin-top: 178px;
  }

  &__title {
    color: #292f36;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 62.5px */
  }
  &__pointer {
    color: #4d5053;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
  }
}
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
