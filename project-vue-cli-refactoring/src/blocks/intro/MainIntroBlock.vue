<template>
  <main class="intro center">
    <div
      class="intro__box-content"
      :style="{
        backgroundImage:
          'url(' + require(`@/assets/img/${settings.backgroundImgUrl}`) + ')',
      }"
    >
      <div class="intro__content">
        <h1 class="intro__title">{{ settings.title }}</h1>
        <p class="intro__text">
          {{ settings.text }}
        </p>
        <router-link to="/projects">
          <DefaultRectangleButtonComponent :value="settings.buttonText" />
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
import DefaultRectangleButtonComponent from "@/components/buttons/DefaultRectangleButtonComponent"
export default {
  components: {
    DefaultRectangleButtonComponent,
  },
  props: {
    settings: {
      type: Object,
      default: () => {
        return {
          title: "Let Your Home Be Unique",
          text: "There are many variations of the passages of lorem Ipsum fromavailable, majority.",
          buttonText: "Get Started",
          backgroundImgUrl: "homepage/intro-background.png",
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.intro {
  &__box-content {
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 55px;
    padding-top: 210px;
    padding-bottom: 210px;
    padding-left: 55px;
    padding-right: 711px;
    display: flex;
    flex-direction: column;
    height: 758px;
    gap: 21px;
    box-sizing: border-box;
  }

  &__content {
    width: 434px;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  &__title {
    color: #292f36;
    font-size: 65px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 81.25px */
  }

  &__text {
    color: #4d5053;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
  }
}
</style>
