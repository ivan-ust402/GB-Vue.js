<template>
  <header class="header center">
    <a href="#" class="header__link-logo">
      <img
        :src="require('@/assets/img/icons/Logo.svg')"
        alt="logo"
        class="header__logo"
      />
    </a>
    <nav class="header__nav">
      <a href="#" class="header__nav-link" v-for="(navName, index) in navNames" :key="index">{{ navName }}</a>
    </nav>
  </header>
</template>

<script>
export default {
    data() {
        return {
            navNames: ['Home', 'Project', 'Blog']
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 53px;
  padding-bottom: 55px;
  &__nav {
    display: flex;
    gap: 45px;
  }
  &__nav-link {
    color: #292f36;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 125%; /* 25px */
    transition: all 0.3s ease-in;
    &:hover {
      color: #cda274;
    }
  }
}
</style>
