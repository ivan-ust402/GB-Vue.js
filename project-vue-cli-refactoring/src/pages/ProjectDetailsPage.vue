<template>
  <div class="project-details">
    <IntroBlock
      :style="{
        backgroundImage:
          'url(' +
          require('@/assets/img/background/intro/projectDetailsIntro.png') +
          ')',
      }"
      :settings="{ hasTitle: false }"
    />
    <div class="project-details__content center">
      <div class="project-details__text-block">
        <h2 class="project-details__title">{{ getTitle }}</h2>
        <p class="project-details__text" v-html="getHTMLText"></p>
      </div>
    </div>
  </div>
</template>

<script>
import IntroBlock from "@/blocks/IntroBlock.vue"
import { mapGetters } from "vuex"

export default {
  components: { IntroBlock },
  computed: {
    ...mapGetters(["getTitle", "getHTMLText", "getImgSrcArr"]),
  },
}
</script>

<style lang="scss" scoped>
.project-details {
  &__content {
    padding-top: 174px;
    padding-bottom: 108px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__text-block {
    display: flex;
    flex-direction: column;
    gap: 11px;
    width: 658px;
    padding-bottom: 70px;
  }
  &__title {
    color: #292f36;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 62.5px */
    letter-spacing: 1px;
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
