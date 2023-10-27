<template>
  <div>
    <button
      class="circle-button"
      :style="{
        width: settings.width,
        height: settings.height,
      }"
    >
      <svg
        v-if="settings.default"
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

      <svg
        v-else
        width="10"
        height="20"
        viewBox="0 0 10 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 19L9 10L1 1"
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
    settings: {
      type: Object,
      default: () => {
        return {
          width: "52px",
          height: "52px",
          default: true,
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.circle-button {
  border-radius: 50%;
  border: none;
  background-color: #f4f0ec;
  transition: all 0.3s ease-in;

  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #fffafa;
  }
}
</style>
