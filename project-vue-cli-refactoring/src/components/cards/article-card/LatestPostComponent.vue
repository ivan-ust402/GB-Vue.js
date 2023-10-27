<template>
  <div class="latest-article__card-border">
    <div class="latest-article__card">
      <img
        :src="require(`@/assets/img/${getLatestPost.imgSrc}`)"
        alt="article photo"
        class="latest-article__card-img"
      />
      <div class="latest-article__card-content">
        <h3 class="articles__card-title">
          {{ getLatestPost.titleHTML }}
        </h3>
        <div class="articles__card-text-container">
          <p class="articles__card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga
            alias fugiat nemo molestias esse!
          </p>

          <p class="articles__card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,
            distinctio nulla quia eius quidem facilis?
          </p>
        </div>
        <div class="articles__card-footer">
          <p class="articles__card-date">26 December,2022</p>
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
</template>

<script>
import { mapGetters } from 'vuex';


export default {
computed: {
    ...mapGetters(['getLatestPost']),
}
}
</script>

<style lang="scss" scoped>
.latest-article {
  padding-top: 200px;
  padding-bottom: 54px;
  display: flex;
  flex-direction: column;
  gap: 27px;
  &__title {
    color: #292f36;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 62.5px */
    letter-spacing: 1px;
  }
  &__card-border {
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    padding: 22px;
    transition: all 0.3s ease-in;
    &:hover {
      background-color: #eaeaea;
      cursor: pointer;
    }
  }
  &__card {
    display: flex;
    gap: 65px;
    align-items: center;
  }
  &__card-img {
    border-radius: 50px;
  }

  &__card-content {
    width: 489px;
  }
}
</style>
