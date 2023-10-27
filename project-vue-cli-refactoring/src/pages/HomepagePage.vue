<template>
  <MainIntroBlock />
  <HomepageProjectsBlock />
  <div class="achivements center">
    <div class="achivements__block">
      <div
        class="achivements__item"
        v-for="(achivement, index) in achivements"
        :key="index"
      >
        <div class="achivements__content">
          <h2 class="achivements__title">{{ achivement.title }}</h2>
          <p class="achivements__text">{{ achivement.text }}</p>
        </div>
      </div>
    </div>
  </div>
  <section class="articles center">
    <div class="articles__main-info">
      <h2 class="articles__title">Articles & News</h2>
      <p class="articles__text">
        It is a long established fact that a reader will be distracted by the of
        readable content of a page when lookings at its layouts the points of
        using.
      </p>
    </div>
    <div class="articles__cards">
      <div
        class="articles__card-border"
        v-for="(article, index) in articles"
        :key="index"
      >
        <div class="articles__card">
          <figure class="articles__card-figure">
            <img
              :src="article.imgSrc"
              alt="article image"
              class="articles__card-image"
            />
            <figcaption class="articles__card-figcapture">
              {{ article.figCaption }}
            </figcaption>
          </figure>
          <div class="articles__card-description">
            <h3 class="articles__card-title">
              {{ article.title }}
              <span class="articles__card-title-span">{{
                article.titleSpan
              }}</span>
            </h3>
            <div class="articles__card-footer">
              <p class="articles__card-date">{{ article.date }}</p>
              <button class="articles__card-button">
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HomepageProjectsBlock from "@/blocks/homepage/HomepageProjectsBlock.vue";
import MainIntroBlock from "../blocks/MainIntroBlock.vue"

export default {
  data() {
    return {
      achivements: [
        {
          title: "12",
          text: "Years Of Experiance",
        },
        {
          title: "85",
          text: "Success Project",
        },
        {
          title: "15",
          text: "Active Project",
        },
        {
          title: "95",
          text: "Happy CUstomers",
        },
      ],
      articles: [
        {
          imgSrc: require("@/assets/img/articles/article-1.png"),
          figCaption: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction ",
          titleSpan: "Work",
          date: "26 December,2022",
        },
        {
          imgSrc: require("@/assets/img/articles/article-2.png"),
          figCaption: "Living Design",
          title: "Low Cost Latest Invented Interior Designing",
          titleSpan: "Ideas.",
          date: "22 December,2022",
        },
        {
          imgSrc: require("@/assets/img/articles/article-3.png"),
          figCaption: "Interior Design",
          title: "Best For Any Office & Business Interior",
          titleSpan: "Solution",
          date: "25 December,2022",
        },
      ],
    }
  },
  components: { MainIntroBlock, HomepageProjectsBlock },
}
</script>

<style lang="scss" scoped>
.achivements {
  padding-top: 151px;
  padding-bottom: 151px;
  background-color: #f4f0ec;
  &__block {
    display: grid;
    grid-template-columns: repeat(4, 300px);
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 76px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  /*   &__item:not(:last-child) {
    border-right: 1px solid #cda274;
  } */
  &__item:not(:last-child)::after {
    content: " ";
    background: #cda274;
    width: 1px;
    height: 130px;
  }
  &__title {
    color: #cda274;
    font-size: 85px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 106.25px */
    letter-spacing: 1.7px;
    text-align: center;
  }
  &__text {
    color: #4d5053;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
    // text-align: center;
  }
}

.articles {
  padding-top: 96px;
  padding-bottom: 96px;
  &__main-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding-left: 194.5px;
    padding-right: 194.5px;
    padding-bottom: 52px;
  }
  &__title {
    color: #292f36;
    text-align: center;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 62.5px */
    letter-spacing: 1px;
  }
  &__text {
    color: #4d5053;
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 382px);
    gap: 27px;
  }

  &__card-border {
    padding: 21px;
    box-sizing: border-box;
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    transition: all 0.3s ease-in;
    &:hover {
      background-color: #eaeaea;
      cursor: pointer;
    }
  }

  &__card {
    padding-bottom: 20px;
  }

  &__card-figure {
    position: relative;
    margin-bottom: 21px;
  }
  &__card-figcapture {
    position: absolute;
    padding: 4px 5px 8px 11px;
    background-color: #fff;
    border-radius: 8px 8px 8px 0px;
    bottom: 21px;
    left: 21px;
    color: #4d5053;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
  }
  &__card-image {
    border-radius: 45px 45px 0px 0px;
  }
  &__card-description {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  &__card-title {
    color: #292f36;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 31.25px */
    letter-spacing: 0.5px;
    width: 305px;
    &_span {
      display: block;
    }
  }
  &__card-text-container {
    display: flex;
    flex-direction: column;
    gap: 33px;
    margin-top: 22px;
    margin-bottom: 41px;
  }
  &__card-text {
    color: #4d5053;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
  }
  &__card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__card-date {
    color: #4d5053;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
  }
  &__card-button {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: none;
    background-color: #f4f0ec;
    transition: all 0.3s ease-in;
    &:hover {
      background-color: #fffafa;
    }
  }
  &__pagination {
    display: flex;
    gap: 20px;
    justify-content: center;
    padding-top: 51px;
    padding-bottom: 104px;
  }
  &__pagination-link {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 1px solid #cda274;
    background-color: #fff;
    transition: all 0.3s ease-in;
    &:hover {
      background-color: #f4f0ec;
    }
    &_active {
      background-color: #f4f0ec;
      border: none;
    }
  }
}
</style>
