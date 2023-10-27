<template>
  <HeaderBlock />
  <!-- <HomepagePage /> -->
  <!-- <ArticlesAndNewsPage /> -->
  <!-- <BlogDetailsPage /> -->
  <!-- <ProjectsPage /> -->
  <!-- <ProjectDetailsPage /> -->
  <NotFound />
  <FooterBlock />
</template>

<script>

import HeaderBlock from "./blocks/HeaderBlock";
import FooterBlock from "./blocks/FooterBlock";
import HomepagePage from "./pages/HomepagePage";
import ArticlesAndNewsPage from "./pages/ArticlesAndNewsPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ProjectsPage from "./pages/ProjectsPage.vue";
import ProjectDetailsPage from "./pages/ProjectDetailsPage.vue";
import NotFound from "./blocks/NotFound.vue";


export default {
  name: "App",
  components: {
    HeaderBlock,
    FooterBlock,
    HomepagePage,
    ArticlesAndNewsPage,
    BlogDetailsPage,
    ProjectsPage,
    ProjectDetailsPage,
    NotFound
},
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@400;500;600&display=swap');

// $colorPrimary1: #cda274;
// $colorPrimary2: #292f36;
// $colorPrimary3: #f4f0ec;
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: "Jost", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "DM Serif Display", serif;
}

a,
button {
  font-family: "Jost", sans-serif;
  text-decoration: none;
}

a:hover,
button:hover {
  cursor: pointer;
}

input {
  font-family: "Jost", sans-serif;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

#app {
  font-family: "Jost", sans-serif;
}
.swiper-pagination-bullet {
  border: 1px solid #4d5053;
  width: 25px;
  height: 25px;
  opacity: 1;
  background-color: #fff;
}

.swiper-pagination-bullet-active {
  background-color: #cda274;

}

</style>
