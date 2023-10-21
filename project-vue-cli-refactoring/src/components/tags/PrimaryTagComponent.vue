<template>
  <button class="tag">
    <p class="tag__text">{{ value }}</p>
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: () => "Primary tag",
    },
  },
}
</script>

<style lang="scss" scoped>
.tag {
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 22.5px */
  letter-spacing: 0.36px;
  border: none;
  border-radius: 18px;
  color: #151616;
  background: #fff;
  padding: 26px 66px;
  width: 219px;
  height: 75px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in;
  box-sizing: border-box;
  &__text {
    white-space: nowrap;
  }
  &_active {
    color: #fff;
    background: #cda274;
  }
  &:hover {
    color: #151616;
    background-color: #f3ece5;
  }
}
</style>
