<template>
  <div class="pagination">
    <PrimaryCircleButtonComponent
      v-for="(page, index) in getQuantityOfPages"
      :key="index"
      :value="page"
      :class="{ button_active: currentPage === page }"
      @click="changePage(page)"
    />
    <PrimaryCircleButtonComponent @click="nextPage" />
  </div>
</template>

<script>
import PrimaryCircleButtonComponent from "../buttons/PrimaryCircleButtonComponent.vue";

export default {
  components: {
    PrimaryCircleButtonComponent,
  },
  props: {
    quantityElPerPage: {
      type: Number,
      default: () => 2,
    },
    total: {
      type: Number,
      default: () => 8,
    },
  },
  emits: {},
  data() {
    return {
      currentPage: 1,
    }
  },
  computed: {
    getQuantityOfPages() {
      return Math.ceil(this.total / this.quantityElPerPage)
    },
  },
  methods: {
    changePage(pageNumber) {
      this.currentPage = pageNumber
      // this.$emit('pageChanged', pageNumber);
    },
    nextPage() {
      if (this.currentPage < this.getQuantityOfPages) {
        this.currentPage += 1;
        this.changePage(this.currentPage);
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  gap: 20px;
  justify-content: center;
  // padding-top: 51px;
  // padding-bottom: 104px;
}
</style>
