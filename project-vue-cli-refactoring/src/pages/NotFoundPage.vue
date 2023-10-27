<template>
  <div class="notfound center">
    <div class="notfound__description-block">
      <div class="notfound__description-text">
        <h1 class="notfound__title">404</h1>
        <h4 class="notfound__description">
          We are sorry, but the page you requested was not found
        </h4>
      </div>
      <router-link to="/">
        <DefaultRectangleButtonComponent
        :value="'Back To Home'"
        class="notfound__button"
      />
      </router-link>
    </div>
    <div class="notfound__img-block">
      <img :src="require('@/assets/img/notfound/NotFound.jpg')" alt="Not found picture" class="notfound__img" />
    </div>
  </div>
</template>

<script>
import DefaultRectangleButtonComponent from "@/components/buttons/DefaultRectangleButtonComponent.vue"

export default { components: { DefaultRectangleButtonComponent } }
</script>

<style lang="scss" scoped>
.notfound {
  display: flex;
  gap: 81px;
  align-items: center;
  padding-bottom: 200px;
  &__description-block {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 569px;
    
  }
  &__description-text {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  &__title {
    color: #cda274;
    font-size: 250px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 312.5px */
    margin-bottom: -50px;
  }
  &__description {
    color: #292f36;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 52.5px */
    letter-spacing: 0.35px;
  }
  &__img-block {
    margin-right: -360px;
  }
  &__img {
    border-bottom-left-radius: 400px;
  }
}
</style>
