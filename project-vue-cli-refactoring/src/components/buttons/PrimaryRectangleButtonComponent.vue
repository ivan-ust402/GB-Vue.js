<template>
  <div>
    <button class="rectangle-button">
      <p class="rectangle-button__text">{{ value }}</p>
      <img
        :src="require('@/assets/img/buttons/ArrowBlack.svg')"
        class="rectangle-button__image"
      />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: () => "Primary button",
    },
  },
}
</script>

<style lang="scss" scoped>
.rectangle-button {
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 22.5px */
  letter-spacing: 0.36px;
  border: none;
  border-radius: 18px;
  background: #cda274;
  box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
  padding: 26px 49px 26px 48px;
  width: auto;
  display: flex;
  gap: 10px;
  align-items: center;
  transition: all 0.3s ease-in;
  &:hover {
    color: #151616;
    background-color: #eca65b;
  }
}
</style>
