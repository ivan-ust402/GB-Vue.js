<template>
  <div class="articles-block">
    <div class="articles-block__cards">
      <ArticleCardComponent
        v-for="article in getPageArticles"
        :key="article.id"
        :settings="article"
      />
    </div>
    <div class="pagination">
      <router-link
        v-for="page in getTotalPages"
        :key="page"
        :to="{path: `${getPageLink(page)}`, hash: '#articles'}"
      >
        <PrimaryCircleButtonComponent
          :value="page"
          :class="{ button_active: getCurrentPageNumber === page }"
          @click="changeCurrentPageNumber(page)"
        />
      </router-link>

      <router-link :to="{url: `${getPageLink(getCurrentPageNumber)}`, hash: '#articles'}">
        <PrimaryCircleButtonComponent 
        @click="goToNextPage"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import ArticleCardComponent from "@/components/cards/article-card/ArticleCardComponent.vue"
import PrimaryCircleButtonComponent from "@/components/buttons/PrimaryCircleButtonComponent.vue"

import { mapGetters, mapActions } from "vuex"

export default {
  components: {
    ArticleCardComponent,
    PrimaryCircleButtonComponent,
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
    ...mapGetters([
      "getBlogArticles",
      "getLatestPost",
      "getTotalPages",
      "getPageArticles",
      "getCurrentPageNumber",
    ]),
  },
  methods: {
    ...mapActions(["changeCurrentPageNumber"]),

    getPageLink(pageNumber) {
      return `/blog/${pageNumber}`
    },

    goToNextPage() {
      let currentPage = this.getCurrentPageNumber;
      console.log(currentPage)
      if(currentPage === this.getTotalPages) {
        return;
      }
      this.changeCurrentPageNumber(++currentPage);
    },
  },
}
</script>

<style lang="scss" scoped>
.articles-block {
  display: flex;
  flex-direction: column;
  gap: 51px;
  padding-bottom: 104px;
  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 382px);
    gap: 27px;
  }
}
.pagination {
  display: flex;
  gap: 20px;
  justify-content: center;
  // padding-top: 51px;
  // padding-bottom: 104px;
}
</style>
