<template>
  <HeaderComponent />
  <!-- <HomepageComponent /> -->
  <ArticlesAndNewsComponent />
  <FooterComponent />
</template>

<script>
import HomepageComponent from './components/HomepageComponent.vue';
import ArticlesAndNewsComponent from './components/ArticlesAndNewsComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ArticlesAndNewsComponent,
  }
}
</script>

<style lang="scss">

</style>
