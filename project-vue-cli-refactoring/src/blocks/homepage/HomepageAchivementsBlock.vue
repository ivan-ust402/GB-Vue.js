<template>
  <div class="achivements center">
    <div class="achivements__block">
      <div
        class="achivements__item"
        v-for="(achivement, index) in getCurrentAchivements"
        :key="index"
      >
        <div class="achivements__content">
          <h2 class="achivements__title">{{ achivement.title }}</h2>
          <p class="achivements__text">{{ achivement.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getCurrentAchivements']),
  }
}
</script>

<style lang="scss" scoped>
.achivements {
  padding-top: 151px;
  padding-bottom: 151px;
  background-color: #f4f0ec;
  &__block {
    display: grid;
    grid-template-columns: repeat(4, 300px);
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 76px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  /*   &__item:not(:last-child) {
    border-right: 1px solid #cda274;
  } */
  &__item:not(:last-child)::after {
    content: " ";
    background: #cda274;
    width: 1px;
    height: 130px;
  }
  &__title {
    color: #cda274;
    font-size: 85px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 106.25px */
    letter-spacing: 1.7px;
    text-align: center;
  }
  &__text {
    color: #4d5053;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
    // text-align: center;
  }
}
</style>
