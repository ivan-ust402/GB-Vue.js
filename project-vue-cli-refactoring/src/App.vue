<template>
  <CircleButtonComponent />
  <PaginationButtonComponent :value="10" />
  <DefaultRectangleButtonComponent :value="'Get started'" />
  
</template>

<script>
import CircleButtonComponent from "./components/buttons/CircleButtonComponent.vue"
import DefaultRectangleButtonComponent from "./components/buttons/DefaultRectangleButtonComponent.vue";
import PaginationButtonComponent from "./components/buttons/PaginationButtonComponent.vue"
export default {
  name: "App",
  components: {
    CircleButtonComponent,
    PaginationButtonComponent,
    DefaultRectangleButtonComponent
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
