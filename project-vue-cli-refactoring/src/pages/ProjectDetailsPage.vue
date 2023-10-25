<template>
  <div class="project-details">
    <IntroBlock
      :style="{
        backgroundImage:
          'url(' +
          require('@/assets/img/background/intro/projectDetailsIntro.png') +
          ')',
      }"
      :settings="{ hasTitle: false }"
    />
    <div class="project-details__content center">
      <div class="project-details__text-block">
        <h2 class="project-details__title">{{ getTitle }}</h2>
        <p class="project-details__text" v-html="getHTMLText"></p>
      </div>
      <SliderProjectDetailsBlock />
      <!-- <div class="project-details__slider">
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
          class="mySwiper"
          @zoom-change="changeToggle"
        >
          <swiper-slide
            class="slide"
            :class="{ 'slide_dblclick': getClassToggle }"
            v-for="(img, index) in getImgSrcArr"
            :key="index"
          >
            <div class="swiper-zoom-container">
              <img
                :src="require(`@/assets/${img}`)"
                :style="{
                  width: '1200px',
                  height: '800px',
                  borderRadius: '70px',
                  objectFit: 'cover',
                }"
              />
              <LoupeComponent class="slide__loupe" />
            </div>
          </swiper-slide>
        </swiper>
      </div> -->
    </div>
  </div>
</template>

<script>
import IntroBlock from "@/blocks/IntroBlock.vue"
import { mapGetters, mapActions } from "vuex"
import SliderProjectDetailsBlock from "@/blocks/SliderProjectDetailsBlock.vue"
// import { Swiper, SwiperSlide } from "swiper/vue"
// import "swiper/css"
// import "swiper/css/zoom"
// import "swiper/css/navigation"
// import "swiper/css/pagination"
// import { Zoom, Navigation, Pagination } from "swiper/modules"
// import LoupeComponent from "../components/icons/LoupeComponent"

export default {
  components: {
    IntroBlock,
    SliderProjectDetailsBlock,
    // Swiper,
    // SwiperSlide,
    // LoupeComponent,
  },
  computed: {
    ...mapGetters([
      "getTitle",
      "getHTMLText",
      // "getImgSrcArr",
      // "getClassToggle",
    ]),
  },
  methods: {
    ...mapActions(["changeToggle"]),
  },
  // setup() {
  //   return {
  //     modules: [Zoom, Navigation, Pagination],
  //   }
  // },
}
</script>

<style lang="scss" scoped>
// .mySwiper {
//   height: 950px;
// }
// .swiper-pagination-bullet {
//   border: 1px solid black;
// }
// .slide {
//   position: relative;
//   &__loupe {
//     position: absolute;
//     top: auto;
//     left: auto;
//     bottom: auto;
//     right: auto;
//     opacity: 0;
//     transition: all 0.3s ease-in-out;
//   }
// }

// .slide_dblclick {
//   position: relative;
//   &__loupe {
//     position: absolute;
//     top: auto;
//     left: auto;
//     bottom: auto;
//     right: auto;
//     opacity: 0;
//     transition: all 0.3s ease-in-out;
//     }
//     &:hover .slide__loupe {
//       opacity: 1;
//     }
//   }
.project-details {
  // &__slider {
  //   width: 100%;
  //   position: relative;
  // }

  &__content {
    padding-top: 174px;
    padding-bottom: 108px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__text-block {
    display: flex;
    flex-direction: column;
    gap: 11px;
    width: 658px;
    padding-bottom: 70px;
  }
  &__title {
    color: #292f36;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 62.5px */
    letter-spacing: 1px;
  }
  &__text {
    color: #4d5053;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
  }
}
</style>
