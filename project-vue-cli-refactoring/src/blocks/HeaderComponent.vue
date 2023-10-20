<template>
  <header class="header center">
    <a href="#" class="header__link-logo">
      <img
        :src="require('@/assets/img/icons/Logo.svg')"
        alt="logo"
        class="header__logo"
      />
    </a>
    <HeaderNavComponent :values="navNames"/>
  </header>
</template>

<script>
import HeaderNavComponent from '../components/navs/HeaderNavComponent' 
export default {
    components: {
      HeaderNavComponent,
    },
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

}
</style>
