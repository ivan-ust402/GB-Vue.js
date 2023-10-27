<template>
  <div>
    <nav class="header__nav">
      <router-link
        class="header__nav-link"
        v-for="objSettings in linkSettings"
        :key="objSettings.id"
        :to="objSettings.url"
      >
        {{ objSettings.name }}
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    linkSettings: {
      type: Array,
      default: () => [],
    },
  },
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
  cursor: pointer;
  &:hover {
    color: #cda274;
  }
}
</style>
