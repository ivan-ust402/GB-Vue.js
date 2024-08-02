<template>
  <section class="projects-display center">
    <PrimaryTagPanelComponent @my-tag-changed="tagChanged" />
    <div class="projects-display__content">
      <MasonryWall :items="chapterProjectCardsPerPage" :column-width="585" :gap="30" class="projects-display__cards">
        <template #default="{ item, index }">
          <ProjectCardBlock
            :key="item.id"
            :settings="item"
            @add-favorites="addFavoritesMarker"
          />        
        </template>
      </MasonryWall>
      <PaginationComponent
        :total="countAllElements"
        :quantityElPerPage="countElOfPage"
        :numberOfPage="numberOfPage"
        @page-changed="loadListOfElOnPage"
      />
    </div>
  </section>
</template>

<script>
import DefaultCircleButtonComponent from "@/components/buttons/DefaultCircleButtonComponent.vue"
import PaginationComponent from "@/components/pagination/PaginationComponent.vue"
import PrimaryTagPanelComponent from "@/components/panels/PrimaryTagPanelComponent.vue"
import ProjectCardBlock from "./ProjectCardBlock.vue"
import MasonryWall from "@yeger/vue-masonry-wall"

export default {
  components: {
    PaginationComponent,
    PrimaryTagPanelComponent,
    DefaultCircleButtonComponent,
    ProjectCardBlock,
    MasonryWall,
  },
  data() {
    return {
      projectCards: [
        {
          id: 0,
          chapter: "Bathroom",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project1.jpg"),
        },
        {
          id: 1,
          chapter: "Bathroom",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project2.jpg"),
        },
        {
          id: 2,
          chapter: "Bathroom",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project3.jpg"),
        },
        {
          id: 3,
          chapter: "Bathroom",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project4.jpg"),
        },
        {
          id: 4,
          chapter: "Bathroom",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project5.jpg"),
        },
        {
          id: 5,
          chapter: "Bathroom",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project6.jpg"),
        },
        {
          id: 6,
          chapter: "Bathroom",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project7.jpg"),
        },
        {
          id: 7,
          chapter: "Bathroom",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project8.jpg"),
        },
        {
          id: 8,
          chapter: "Bedroom",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project1.jpg"),
        },
        {
          id: 9,
          chapter: "Bedroom",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project2.jpg"),
        },
        {
          id: 10,
          chapter: "Bedroom",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project3.jpg"),
        },
        {
          id: 11,
          chapter: "Kitchen",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project4.jpg"),
        },
        {
          id: 12,
          chapter: "Kitchen",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project5.jpg"),
        },
        {
          id: 13,
          chapter: "Kitchen",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project6.jpg"),
        },
        {
          id: 14,
          chapter: "Living Room",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project7.jpg"),
        },
        {
          id: 15,
          chapter: "Living Room",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project8.jpg"),
        },
        {
          id: 16,
          chapter: "Living Room",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project1.jpg"),
        },
        {
          id: 17,
          chapter: "Living Room",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project2.jpg"),
        },
        {
          id: 18,
          chapter: "Living Room",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project3.jpg"),
        },
        {
          id: 19,
          chapter: "Living Room",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project6.jpg"),
        },
        {
          id: 20,
          chapter: "Living Room",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project5.jpg"),
        },
        {
          id: 21,
          chapter: "Living Room",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project7.jpg"),
        },
        {
          id: 22,
          chapter: "Living Room",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project2.jpg"),
        },

        {
          id: 23,
          chapter: "Living Room",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project8.jpg"),
        },
        {
          id: 24,
          chapter: "Bathroom",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project3.jpg"),
        },
        {
          id: 25,
          chapter: "Bathroom",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project4.jpg"),
        },
        {
          id: 26,
          chapter: "Bathroom",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project5.jpg"),
        },
        {
          id: 27,
          chapter: "Bathroom",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project6.jpg"),
        },
        {
          id: 28,
          chapter: "Bathroom",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project1.jpg"),
        },
        {
          id: 29,
          chapter: "Bathroom",
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project2.jpg"),
        },
      ],
      baseTag: "Bathroom",
      chapterProjectCards: [],
      chapterProjectCardsPerPage: [],
      countAllElements: 0,
      countElOfPage: 8,
      numberOfPage: 1,
    }
  },
  created() {
    this.tagChanged(this.baseTag)
    this.loadListOfElOnPage(this.numberOfPage)
  },
  methods: {
    tagChanged(tag) {
      this.chapterProjectCards = this.projectCards.filter(
        (item) => item.chapter === tag
      )
      this.countAllElements = this.chapterProjectCards.length
      this.numberOfPage = 1
      this.loadListOfElOnPage(this.numberOfPage)
    },
    loadListOfElOnPage(pageNumber) {
      this.numberOfPage = pageNumber
      const start = (pageNumber - 1) * this.countElOfPage
      const end = start + this.countElOfPage
      if (this.countAllElements < end) {
        this.chapterProjectCardsPerPage = this.chapterProjectCards.slice(
          start,
          this.countAllElements
        )
      } else {
        this.chapterProjectCardsPerPage = this.chapterProjectCards.slice(
          start,
          end
        )
      }
    },
    addFavoritesMarker(findId, isFavorite) {
      this.projectCards.find((el) => el.id === findId).isFavorite = isFavorite
    },
  },
}
</script>

<style lang="scss" scoped>
.projects-display {
  padding-top: 200px;
  padding-bottom: 200px;
  &__cards {
    padding-top: 61px;
    padding-bottom: 61px;
  }
}
</style>
