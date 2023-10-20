<template>
  <CircleButtonComponent/>
</template>

<script>
import CircleButtonComponent from './components/buttons/CircleButtonComponent.vue';
export default {
  name: "App",
  components: {
    CircleButtonComponent,
  }
}
</script>

<style lang="scss">

#app {
  $colorPrimary1: #CDA274;
  $colorPrimary2: #292F36;
  $colorPrimary3: #F4F0EC;
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
}
</style>
