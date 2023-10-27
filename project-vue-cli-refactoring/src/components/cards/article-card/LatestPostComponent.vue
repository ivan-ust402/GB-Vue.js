<template>
  <div class="latest-article-card">
    <div class="latest-article-card__card">
      <img
        :src="require(`@/assets/img/${settings.imgSrc}`)"
        alt="article photo"
        class="latest-article-card__img"
      />
      <div class="latest-article-card__content">
        <h3 class="latest-article-card__title">
          {{ settings.title }}
        </h3>
        <div class="latest-article-card__text-container">
          <p
            class="latest-article-card__text"
            v-html="settings.descriptionHTML"
          ></p>
        </div>
        <div class="latest-article-card__footer">
          <p class="latest-article-card__date">{{ settings.date }}</p>
          <DefaultCircleButtonComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import DefaultCircleButtonComponent from "@/components/buttons/DefaultCircleButtonComponent.vue"

export default {
  props: {
    settings: {
      type: Object,
      default: () => {
        return {
          imgSrc: "articles/article-1.png",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022 ",
          descriptionHTML:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga alias fugiat nemo molestias esse!<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, distinctio nulla quia eius quidem facilis?",
        }
      },
    },
  },
  components: {
    DefaultCircleButtonComponent,
  },
}
</script>

<style lang="scss" scoped>
.latest-article-card {
  border-radius: 62px;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
  padding: 22px;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: #eaeaea;
    cursor: pointer;
  }
  &__card {
    display: flex;
    gap: 65px;
    align-items: center;
  }
  &__img {
    border-radius: 50px;
    width: 569px;
    height: 478px;
  }
  &__content {
    width: 489px;
  }
  &__title {
    color: #292f36;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 31.25px */
    letter-spacing: 0.5px;
    width: 463px;
  }
  &__text-container {
    display: flex;
    flex-direction: column;
    gap: 33px;
    margin-top: 22px;
    margin-bottom: 41px;
    width: 463px;
  }
  &__text {
    color: #4d5053;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__date {
    color: #4d5053;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
  }
}
</style>
