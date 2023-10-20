<template>
  <HeaderBlock />
  <!-- <HomepagePage /> -->
  <!-- <ArticlesAndNewsPage /> -->
  <BlogDetailsPage />
  <FooterBlock />
</template>

<script>
import HeaderBlock from "./blocks/HeaderBlock";
import FooterBlock from "./blocks/FooterBlock";
import HomepagePage from "./pages/HomepagePage";
import ArticlesAndNewsPage from "./pages/ArticlesAndNewsPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";


export default {
  name: "App",
  components: {
    HeaderBlock,
    FooterBlock,
    HomepagePage,
    ArticlesAndNewsPage,
    BlogDetailsPage,
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
</style>
