<template>
  <main class="intro">
    <div class="intro__content center" v-if="settings.hasTitle">
      <h1 class="intro__title">{{ settings.title }}</h1>
      <p class="intro__pointer">{{ settings.category }}</p>
    </div>
  </main>
</template>
<script>
export default {
  props: {
    settings: {
      type: Object,
      default: () => {
        return {
          hasTitle: true,
          title: "Articles & News",
          category: "Home / Blog",
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.intro {
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
//   background-size: cover;
  display: flex;
  justify-content: center;
  height: 356px;

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
</style>
