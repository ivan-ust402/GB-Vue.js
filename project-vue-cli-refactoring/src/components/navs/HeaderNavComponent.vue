<template>
  <div>
    <nav class="header__nav">
      <a
        href="#"
        class="header__nav-link"
        v-for="(navName, index) in values"
        :key="index"
        >{{ navName }}</a
      >
    </nav>
  </div>
</template>

<script>
export default {
    props: {
        values: {
            type: Array,
            default: () => [],
        },
    }
}
</script>

<style lang="scss" scoped>
  .header__nav {
    display: flex;
    gap: 45px;
  }
  .header__nav-link {
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
</style>
