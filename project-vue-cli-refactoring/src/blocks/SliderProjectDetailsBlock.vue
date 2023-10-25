<template>
  <div class="slider-box">
    <swiper
      :style="{
        '--swiper-navigation-color': '#cda274',
        '--swiper-slide-object-fit': 'auto',
        '--swiper-pagination-color': '#cda274',
        '--swiper-pagination-bullet-size': '25px',
        '--swiper-pagination-bullet-inactive-opacity': '0.6',
      }"
      :zoom="true"
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="slider-box__slider"
      @zoom-change="changeToggle"
    >
      <swiper-slide
        class="slider-box__slide"
        :class="{ 'slider-box__slide_dblclick': getClassToggle }"
        v-for="(img, index) in getImgSrcArr"
        :key="index"
      >
        <div class="swiper-zoom-container slider-box__zoom-container">
          <img
            :src="require(`@/assets/${img}`)"
            :style="{
              width: '1201px',
              height: '800px',
              borderRadius: '70px',
              objectFit: 'cover',
            }"
          />
          <LoupeComponent class="slider-box__loupe" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/zoom"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Zoom, Navigation, Pagination } from "swiper/modules"
import LoupeComponent from "../components/icons/LoupeComponent"

export default {
  components: {
    Swiper,
    SwiperSlide,
    LoupeComponent,
  },
  computed: {
    ...mapGetters(["getImgSrcArr", "getClassToggle"]),
  },
  methods: {
    ...mapActions(["changeToggle"]),
  },
  setup() {
    return {
      modules: [Zoom, Navigation, Pagination],
    }
  },
}
</script>

<style lang="scss" scoped>
.slider-box {
  width: 100%;
  position: relative;
  &__slider {
    height: 950px;
  }
  &__slide {
    position: relative;
  }
  &__loupe {
      position: absolute;
      top: auto;
      left: auto;
      bottom: auto;
      right: auto;
      opacity: 0;
      transition: all 0.3s ease-in-out;
  }
  &__slide_dblclick {
    position: relative;
    &:hover .slider-box__loupe {
        opacity: 1;
    }
}
}
// .swiper-pagination-bullet {
//   border: 1px solid black;
// }
</style>
