<template>
  <div>
    <nav class="footer__nav">
      <h3 class="footer__nav-title">{{ title }}</h3>
      <ul class="footer__nav-list">
        <li
          class="footer__nav-item"
          v-for="objSettings in linkSettings"
          :key="objSettings.id"
        >
          <router-link 
            :to="{path: objSettings.url, hash: '#header'}" 
            class="footer__nav-link"
            >
              {{ objSettings.name }}
            </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => "",
    },
    linkSettings: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.footer__nav-title {
  color: #292f36;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
  padding-bottom: 9px;
}

.footer__nav-item {
  list-style-type: none;
}
.footer__nav-link {
  color: #4d5053;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 300%; /* 66px */
  letter-spacing: 0.22px;
  transition: all 0.3s ease-in;
  &:hover {
    color: #cda274;
  }
}
</style>
