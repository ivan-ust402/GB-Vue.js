<template>
  <div>
    <button class="pagination-button" v-if="value">
      {{ getValue }}
    </button>
    <button class="pagination-button" v-else>
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
    default: () => null,
  },
  computed: {
    getValue() {
        if (Number(this.value) < 10) {
            return `0${this.value}`;
        }
        return this.value;
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination-button {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 1px solid #cda274;
  background-color: #fff;
  transition: all 0.3s ease-in;
  color: #292f36;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  text-transform: capitalize;
  &:hover {
    background-color: #f4f0ec;
  }
  &_active {
    background-color: #f4f0ec;
    border: none;
  }
}
</style>
