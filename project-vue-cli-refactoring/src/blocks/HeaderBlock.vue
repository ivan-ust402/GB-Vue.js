<template>
  <header class="header center">
    <router-link to="/" class="header__link-logo">
      <img
        :src="require('@/assets/img/icons/Logo.svg')"
        alt="logo"
        class="header__logo"
      />
    </router-link>
    <HeaderNavComponent :linkSettings="getNavLinks" />
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import HeaderNavComponent from "../components/navs/HeaderNavComponent";

export default {
  components: {
    HeaderNavComponent,
  },
  computed: {
    ...mapGetters(['getNavLinks']),
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
