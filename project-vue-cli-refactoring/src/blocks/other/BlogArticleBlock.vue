<template>
  <div class="blog-articles__article">
    <h2 class="blog-articles__title">
      {{ article.title }}
      <span class="blog-articles__title-span">
        {{ article.titleSpan }}
      </span>
    </h2>
    <img
      class="blog-articles__img"
      :src="article.imgSrcMain"
      :alt="article.altMain"
    />
    <div class="blog-articles__sticker">
      <p class="blog-articles__date">{{ article.date }}</p>
      <p class="blog-articles__category">{{ article.category }}</p>
    </div>
    <p
      class="blog-articles__text"
      v-for="(text, index) in article.textMain"
      :key="index"
    >
      {{ text }}
    </p>
    <!-- <p
      class="blog-articles__text"
      v-html="article.textMain"
    >
    </p> -->
    <div class="blog-articles__quote">
      <svg
        width="74"
        height="56"
        viewBox="0 0 74 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z"
          fill="#CDA274"
        />
      </svg>
      <h3 class="blog-articles__quote-title">{{ article.quoteTitle }}</h3>
    </div>
    <h2 class="blog-articles__title">{{ article.secondTitle }}</h2>
    <p class="blog-articles__text">{{ article.secondText }}</p>
    <ul class="blog-articles__list">
      <li
        class="blog-articles__list-item"
        v-for="(item, index) in article.listItems"
        :key="item.id"
      >
        <span class="blog-articles__list-item-index">{{ index + 1 }}</span>
        {{ item.content }}
      </li>
    </ul>
    <img
      class="blog-articles__img"
      :src="article.imgSrcAdditional"
      :alt="article.altAdditional"
    />
    <p class="blog-articles__text">{{ article.thirdText }}</p>
  </div>
</template>

<script>
export default {
    props: ['article']
}
</script>

<style lang="scss" scoped>
.blog-articles {
  padding-top: 175px;
  display: grid;
  grid-template-columns: 799px 345px;
  gap: 52px;

  &__article {
    padding-bottom: 96px;
  }
  &__title {
    color: #292f36;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 62.5px */
    letter-spacing: 1px;
    padding-bottom: 11px;
  }
  &__img {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 50px;
    margin-bottom: 26px;
    width: 799px;
  }
  &__sticker {
    display: flex;
    gap: 409px;
    padding-top: 20px;
    padding-bottom: 39px;
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
  &__category {
    color: #4d5053;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
  }
  &__text {
    color: #4d5053;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
    padding-top: 9px;
  }
  &__quote {
    border-radius: 50px;
    background: #f4f0ec;
    display: flex;
    width: 799px;
    padding: 53px 227px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 267px;
    box-sizing: border-box;
    margin-top: 35px;
    margin-bottom: 27px;
  }
  &__quote-title {
    width: 375px;
    color: #cda274;
    text-align: center;
    font-size: 25px;
    font-style: italic;
    font-weight: 400;
    line-height: 125%; /* 31.25px */
    letter-spacing: 0.5px;
  }
  &__quote-title-span {
    color: #cda274;
    text-align: center;
    font-size: 200px;
    font-style: italic;
    font-weight: 400;
    line-height: 125%; /* 250px */
    letter-spacing: 4px;
  }

  &__list {
    list-style-type: none;
    color: #4d5053;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
    margin-top: 24px;
    margin-bottom: 12px;
  }

  &__list-item {
    padding-bottom: 32px;
  }

  &__list-item-index {
    color: #cda274;
    font-family: "DM Serif Display";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 25px */
    letter-spacing: 0.4px;
  }

  &__tabs-title {
    color: #292f36;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 31.25px */
    letter-spacing: 0.5px;
    margin-bottom: 24px;
  }
  &__tabs {
    display: flex;
    width: 345px;
    flex-wrap: wrap;
    align-items: flex-start;
    row-gap: 11px;
    column-gap: 10px;
  }
  &__tab-button {
    // display: flex;
    padding: 9px 30px;
    // justify-content: center;
    // align-items: center;
    // gap: 10px;
    border-radius: 10px;
    border: none;
    background: #f4f0ec;
    color: #000;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 22.5px */
    letter-spacing: 0.36px;
    &_active {
      background: #292f36;
      color: #fff;
    }
  }
}
</style>
