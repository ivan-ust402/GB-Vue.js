<template>
    <main class="articles-intro center">
      <div class="articles-intro__content">
        <h1 class="articles-intro__title">Articles & News</h1>
        <p class="articles-intro__pointer">Home / Blog</p>
      </div>
    </main>
    <section class="latest-article center">
      <h2 class="latest-article__title">Latest Post</h2>
      <div class="latest-article__card-border">
        <div class="latest-article__card">
          <img
            :src="require('@/assets/img/articles/article-7.png')"
            alt="article photo"
            class="latest-article__card-img"
          />
          <div class="latest-article__card-content">
            <h3 class="articles__card-title">
              Let’s Get Solution For Building Construction Work
            </h3>
            <div class="articles__card-text-container">
              <p class="articles__card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                fuga alias fugiat nemo molestias esse!
              </p>

              <p class="articles__card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat, distinctio nulla quia eius quidem facilis?
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
    </section>
    <section class="articles center">
      <div class="articles__main-info">
        <h2 class="articles__title">Articles & News</h2>
        <p class="articles__text">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </p>
      </div>
      <div id="articles__block">
        <div class="articles__cards" >
            <div class="articles__card-border" v-for="(article, index) in articles" :key="index">
              <div class="articles__card">
                <figure class="articles__card-figure">
                  <img
                    :src="article.imgSrc"
                    alt="article image"
                    class="articles__card-image"
                  />
                  <figcaption class="articles__card-figcapture">
                    {{ article.capture }}
                  </figcaption>
                </figure>
                <div class="articles__card-description">
                  <h3 class="articles__card-title">
                        {{ article.title }} 
                        <span class="articles__card-title_span">
                            {{ article.span }}
                        </span>
                  </h3>
                  <div class="articles__card-footer">
                    <p class="articles__card-date">{{article.date}}</p>
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
        <div class="articles__pagination">
            <button class="articles__pagination-link articles__pagination-link_active" active>01</button>
            <button class="articles__pagination-link">02</button>
            <button class="articles__pagination-link">03</button>
            <button class="articles__pagination-link">
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
    </section>
</template>

<script>
    export default {
        data() {
            return {
                articles: [
                        {
                            id: 0,
                            imgSrc: require('@/assets/img/articles/article-1.png'),
                            capture: 'Kitchan Design',
                            title: 'Let’s Get Solution For Building Construction',
                            span: 'Work',
                            date: '26 December,2022',
                        },
                        {
                            id: 1,
                            imgSrc: require('@/assets/img/articles/article-2.png'),
                            capture: 'Living Design',
                            title: 'Low Cost Latest Invented Interior Designing', 
                            span: 'Ideas.',
                            date: '22 December,2022 ',
                        },
                        {
                            id: 2,
                            imgSrc: require('@/assets/img/articles/article-3.png'),
                            capture: 'Interior Design',
                            title: 'Best For Any Office & Business Interior', 
                            span: 'Solution',
                            date: '22 December,2022 ',
                        },
                        {
                            id: 3,
                            imgSrc: require('@/assets/img/articles/article-4.png'),
                            capture: 'Kitchan Design',
                            title: 'Let’s Get Solution For Building Construction',
                            span: 'Work',
                            date: '26 December,2022',
                        },
                        {
                            id: 4,
                            imgSrc: require('@/assets/img/articles/article-5.png'),
                            capture: 'Living Design',
                            title: 'Low Cost Latest Invented Interior Designing', 
                            span: 'Ideas.',
                            date: '22 December,2022 ',
                        },
                        {
                            id: 5,
                            imgSrc: require('@/assets/img/articles/article-6.png'),
                            capture: 'Interior Design',
                            title: 'Best For Any Office & Business Interior', 
                            span: 'Solution',
                            date: '22 December,2022',
                        }
                    ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.articles-intro {
  background-image: url("../assets/img/articles/Main-background.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
//   background-size: cover;
  display: flex;
  justify-content: center;

  &__content {
    width: 503px;
    padding: 41px 78px;
    background-color: #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top-right-radius: 41px;
    border-top-left-radius: 41px;
    margin-top: 178px;
  }

  &__title {
    color: #292f36;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 62.5px */
  }
  &__pointer {
    color: #4d5053;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
  }
}

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
    border: 1px solid #CDA274;
    background-color: #fff;
    transition: all 0.3s ease-in;
    &:hover {
      background-color: #F4F0EC;
    }
    &_active {
      background-color: #F4F0EC;
      border: none;
    }
  }
}


</style>