<template>
  <div class="card">
    <img :src="settings.imgSrc" />
    <div class="card__description-block">
      <div class="card__description">
        <h3 class="card__title">{{ settings.title }}</h3>
        <p class="card__category">{{ settings.category }}</p>
      </div>
      <DefaultCircleButtonComponent />
    </div>
  </div>
</template>

<script>
import DefaultCircleButtonComponent from "@/components/buttons/DefaultCircleButtonComponent.vue"

export default {
  components: { DefaultCircleButtonComponent },
  props: {
    settings: {
      type: Object,
      default: () => {
        return {
          imgSrc: "",
          title: "Project card title",
          category: "Project category / Project Category",
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
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
  &:nth-child(2n + 1) {
    order: 1;
  }
  &:nth-child(2n + 2) {
    order: 2;
  }
}
</style>
