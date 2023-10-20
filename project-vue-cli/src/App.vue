<template>
  <HeaderComponent />
  <!-- <HomepageComponent />
  <ArticlesAndNewsComponent />
  <BlogDetailsComponent /> -->
  <ProjectsComponent />
  <FooterComponent />
</template>

<script>
import HomepageComponent from './components/HomepageComponent.vue';
import ArticlesAndNewsComponent from './components/ArticlesAndNewsComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import BlogDetailsComponent from './components/BlogDetailsComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ArticlesAndNewsComponent,
    BlogDetailsComponent,
    ProjectsComponent
}
}
</script>

<style lang="scss">

</style>
