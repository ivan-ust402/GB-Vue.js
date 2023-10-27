<template>
  <section class="projects center">
    <div class="projects__main-info">
      <h2 class="projects__title">Follow Our Projects</h2>
      <p class="projects__text">
        It is a long established fact that a reader will be distracted by the of
        readable content of page lookings at its layouts points.
      </p>
    </div>
    <div class="projects__cards">
      <ProjectCardComponent v-for="(card, index) in getHomepageProjectCards" :key="card.id" :cardContent="card" :index="index"/>
    </div>
  </section>
</template>

<script>
import ProjectCardComponent from '@/components/cards/project-card/ProjectCardComponent.vue';
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getHomepageProjectCards']),
    },
    components: { 
      ProjectCardComponent, 
    }
}
</script>

<style lang="scss" scoped>
.projects {
  padding-top: 93px;
  padding-bottom: 96px;
  &__main-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }
  &__title {
    color: #292f36;
    text-align: center;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    // line-height: 125%; /* 62.5px */
    letter-spacing: 1px;
  }
  &__text {
    color: #4d5053;
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    // line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
    width: 737px;
    margin-bottom: 93px;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(2, 550px);
    column-gap: 100px;
    row-gap: 56px;
  }
}
</style>
