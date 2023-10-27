<template>
  <div class="article-card">
    <div class="article-card__card">
      <figure class="article-card__figure">
        <img
          :src="require(`@/assets/img/${settings.imgSrc}`)"
          alt="article image"
          class="article-card__image"
        />
        <figcaption class="article-card__figcapture">
          {{ settings.figCaption }}
        </figcaption>
      </figure>
      <div class="article-card__description">
        <h3 class="article-card__title" v-html="settings.titleHTML ">
        </h3>
        <div class="article-card__footer">
          <p class="article-card__date">{{ settings.date }}</p>
          <!-- <button class="article-card__button">
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
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    settings: {
      type: Object,
      default: () => {
        return {
          imgSrc: "",
          figCaption: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction ",
          titleSpan: "Work",
          date: "26 December,2022",
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.article-card {
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
  &__card {
    padding-bottom: 20px;
  }

  &__figure {
    position: relative;
    margin-bottom: 21px;
  }
  &__figcapture {
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
  &__image {
    border-radius: 45px 45px 0px 0px;
  }
  &__description {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  &__title {
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
  &__text-container {
    display: flex;
    flex-direction: column;
    gap: 33px;
    margin-top: 22px;
    margin-bottom: 41px;
  }
  &__text {
    color: #4d5053;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__date {
    color: #4d5053;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
  }
  &__button {
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
}
</style>
