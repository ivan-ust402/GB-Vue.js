<template>
  <div>
    <button class="rectangle-button">
      <p class="rectangle-button__text">{{ value }}</p>
      <img
        :src="require('@/assets/img/buttons/Arrow.svg')"
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
      default: () => "Default button",
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
  border-radius: 18px;
  background: #292f36;
  box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
  padding: 26px 49px 26px 48px;
  width: auto;
  display: flex;
  gap: 10px;
  align-items: center;
  transition: all 0.3s ease-in;
  &:hover {
    color: #cda274;
    background-color: #151616;
  }
}


</style>
