<template>
  <div>
    <button class="circle-button" v-if="value">
      {{ value }}
    </button>
    <button class="circle-button" v-else>
      <svg
        width="9"
        height="16"
        viewBox="0 0 9 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.77199 14.9527L7.71484 8.26698L1.77199 1.58127"
          stroke="#292F36"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
  },
}
</script>

<style lang="scss" scoped>
.circle-button {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background-color: #F4F0EC;;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: #fffafa;
  }
}
</style>
