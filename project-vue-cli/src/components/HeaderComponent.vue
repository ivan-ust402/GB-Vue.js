<template>
  <header class="header center">
    <a href="#" class="header__link-logo">
      <img
        :src="require('@/assets/img/homepage/Logo.svg')"
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

<style lang="scss" scoped></style>
