<template>
  <section class="projects-display center">
    <PrimaryTagPanelComponent />
    <div class="projects-display__content">
      <div class="projects-display__cards">
        <div
          class="card"
          v-for="(projectCard, index) in projectCards"
          :key="projectCard.id"
        >
          <img :src="projectCard.imgSrc" />
          <div class="card__description-block">
            <div class="card__description">
              <h3 class="card__title">{{ projectCard.title }}</h3>
              <p class="card__category">{{ projectCard.category }}</p>
            </div>
            <DefaultCircleButtonComponent />
          </div>
        </div>
      </div>
      <PaginationComponent />
    </div>
  </section>
</template>

<script>
import DefaultCircleButtonComponent from "@/components/buttons/DefaultCircleButtonComponent.vue"
import PaginationComponent from "@/components/pagination/PaginationComponent.vue"
import PrimaryTagPanelComponent from "@/components/panels/PrimaryTagPanelComponent.vue"

export default {
  components: {
    PaginationComponent,
    PrimaryTagPanelComponent,
    DefaultCircleButtonComponent,
  },
  data() {
    return {
      projectCards: [
        {
          id: 0,
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project1.jpg"),
        },
        {
          id: 1,
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project2.jpg"),
        },
        {
          id: 2,
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project3.jpg"),
        },
        {
          id: 3,
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project4.jpg"),
        },
        {
          id: 4,
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project5.jpg"),
        },
        {
          id: 5,
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project6.jpg"),
        },
        {
          id: 6,
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project7.jpg"),
        },
        {
          id: 7,
          title: "Minimal Bedroom",
          category: "Decor / Architecture",
          imgSrc: require("@/assets/img/projects/project8.jpg"),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.projects-display {
  padding-top: 96px;
  padding-bottom: 200px;
  &__cards {
    // display: grid;
    // grid-template-columns: repeat(2, 585px);
    display: flex;
    flex-flow: column wrap;
    padding-top: 61px;
    padding-bottom: 61px;
    max-height: 3500px;
    gap: 30px;
  }
}

.card {
  width: 585px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 585px;

  &__description-block {
    display: flex;
    justify-content: space-between;
    padding-top: 24px;
    align-items: center;
  }

  &__title {
    color: #292f36;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 31.25px */
    letter-spacing: 0.5px;
  }
  &__category {
    color: #4d5053;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
  }
  &:nth-child(2n+1) { order: 1; }
  &:nth-child(2n+2) { order: 2; }
}

</style>
