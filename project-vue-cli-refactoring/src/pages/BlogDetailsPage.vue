<template>
  <main class="blog-intro center"></main>
  <div class="blog-articles center">
    <div class="blog-articles__articles">
      <BlogArticleBlock
        v-for="article in filterArticles"
        :key="article.id"
        :article="article"
      ></BlogArticleBlock>
    </div>
    <div class="blog-articles__tabs-block">
      <h3 class="blog-articles__tabs-title">Tags</h3>
      <div class="blog-articles__tabs" @click="addClassActive">
        <BlogTagComponent
          v-for="(tag, index) in tags"
          :key="index"
          :tag="tag"
        ></BlogTagComponent>
      </div>
    </div>
  </div>
</template>

<script>
import BlogArticleBlock from "@/blocks/other/BlogArticleBlock"
import BlogTagComponent from "../components/tags/BlogTagComponent"
import { useHead } from "@vueuse/head"

export default {
  data() {
    return {
      tags: [
        "Kitchen",
        "Bedroom",
        "Building",
        "Architecture",
        "Kitchen Planning",
        "Bathroom",
      ],
      currentTag: "",
      articles: [
        {
          id: 0,
          tag: "Kitchen",
          title: "Let’s Get Solution for Building",
          titleSpan: "Construction Work",
          imgSrcMain: require("@/assets/img/blog-details/blog-img-1.png"),
          altMain: "Kitchen photo",
          date: "26 December,2022",
          category: "Interior / Home / Decore",
          textMain: [
            `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary to popular belief.There are many
                    variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injecthumour, or
                    randomised words which don't look even slightly believable.`,
            "",
            `Embarrassing hidden in the middle of text. All the Lorem Ipsum
                    generators on the Internet tend to repeat predefined chunks as
                    necessary.`,
          ],
          quoteTitle: "The details are not the details. They make the design.",
          secondTitle: "Design sprints are great",
          secondText: `
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in.Contrary to popular belief.There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered.
            `,
          listItems: [
            {
              id: 1,
              content: `
                Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                    `,
            },
            {
              id: 2,
              content: `
                Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
              `,
            },
            {
              id: 3,
              content: `
                Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
              `,
            },
          ],
          imgSrcAdditional: require("@/assets/img/blog-details/blog-img-2.png"),
          altAdditional: "Kitchen photo",
          thirdText: `
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the majority
                have suffered.
              `,
        },
        {
          id: 1,
          tag: "Bedroom",
          title: "Let’s Get Solution for Building",
          titleSpan: "Construction Work",
          imgSrcMain: require("@/assets/img/blog-details/blog-img-3.jpg"),
          altMain: "Kitchen photo",
          date: "26 December,2022",
          category: "Interior / Home / Decore",
          textMain: [
            `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary to popular belief.There are many
                    variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injecthumour, or
                    randomised words which don't look even slightly believable.`,
            "",
            `Embarrassing hidden in the middle of text. All the Lorem Ipsum
                    generators on the Internet tend to repeat predefined chunks as
                    necessary.`,
          ],
          quoteTitle: "The details are not the details. They make the design.",
          secondTitle: "Design sprints are great",
          secondText: `
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrary to popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered.
              `,
          listItems: [
            {
              id: 1,
              content: `
                  Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                      `,
            },
            {
              id: 2,
              content: `
                  Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                `,
            },
            {
              id: 3,
              content: `
                  Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                `,
            },
          ],
          imgSrcAdditional: require("@/assets/img/blog-details/blog-img-4.jpg"),
          altAdditional: "Kitchen photo",
          thirdText: `
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the majority
                have suffered.
              `,
        },
        {
          id: 2,
          tag: "Building",
          title: "Let’s Get Solution for Building",
          titleSpan: "Construction Work",
          imgSrcMain: require("@/assets/img/blog-details/blog-img-5.jpg"),
          altMain: "Kitchen photo",
          date: "26 December,2022",
          category: "Interior / Home / Decore",
          textMain: [
            `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary to popular belief.There are many
                    variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injecthumour, or
                    randomised words which don't look even slightly believable.`,
            "",
            `Embarrassing hidden in the middle of text. All the Lorem Ipsum
                    generators on the Internet tend to repeat predefined chunks as
                    necessary.`,
          ],
          quoteTitle: "The details are not the details. They make the design.",
          secondTitle: "Design sprints are great",
          secondText: `
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrary to popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered.
              `,
          listItems: [
            {
              id: 1,
              content: `
                  Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                      `,
            },
            {
              id: 2,
              content: `
                  Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                `,
            },
            {
              id: 3,
              content: `
                  Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                `,
            },
          ],
          imgSrcAdditional: require("@/assets/img/blog-details/blog-img-6.jpg"),
          altAdditional: "Kitchen photo",
          thirdText: `
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the majority
                have suffered.
              `,
        },
        {
          id: 3,
          tag: "Architecture",
          title: "Let’s Get Solution for Building",
          titleSpan: "Construction Work",
          imgSrcMain: require("@/assets/img/blog-details/blog-img-7.jpg"),
          altMain: "Kitchen photo",
          date: "26 December,2022",
          category: "Interior / Home / Decore",
          textMain: [
            `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary to popular belief.There are many
                    variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injecthumour, or
                    randomised words which don't look even slightly believable.`,
            "",
            `Embarrassing hidden in the middle of text. All the Lorem Ipsum
                    generators on the Internet tend to repeat predefined chunks as
                    necessary.`,
          ],
          quoteTitle: "The details are not the details. They make the design.",
          secondTitle: "Design sprints are great",
          secondText: `
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrary to popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered.
              `,
          listItems: [
            {
              id: 1,
              content: `
                  Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                      `,
            },
            {
              id: 2,
              content: `
                  Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                `,
            },
            {
              id: 3,
              content: `
                  Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                `,
            },
          ],
          imgSrcAdditional: require("@/assets/img/blog-details/blog-img-8.jpg"),
          altAdditional: "Kitchen photo",
          thirdText: `
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the majority
                have suffered.
              `,
        },
        {
          id: 4,
          tag: "Kitchen Planning",
          title: "Let’s Get Solution for Building",
          titleSpan: "Construction Work",
          imgSrcMain: require("@/assets/img/blog-details/blog-img-9.jpg"),
          altMain: "Kitchen photo",
          date: "26 December,2022",
          category: "Interior / Home / Decore",
          textMain: [
            `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary to popular belief.There are many
                    variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injecthumour, or
                    randomised words which don't look even slightly believable.`,
            "",
            `Embarrassing hidden in the middle of text. All the Lorem Ipsum
                    generators on the Internet tend to repeat predefined chunks as
                    necessary.`,
          ],
          quoteTitle: "The details are not the details. They make the design.",
          secondTitle: "Design sprints are great",
          secondText: `
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrary to popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered.
              `,
          listItems: [
            {
              id: 1,
              content: `
                  Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                      `,
            },
            {
              id: 2,
              content: `
                  Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                `,
            },
            {
              id: 3,
              content: `
                  Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                `,
            },
          ],
          imgSrcAdditional: require("@/assets/img/blog-details/blog-img-10.jpg"),
          altAdditional: "Kitchen photo",
          thirdText: `
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the majority
                have suffered.
              `,
        },
        {
          id: 5,
          tag: "Bathroom",
          title: "Let’s Get Solution for Building",
          titleSpan: "Construction Work",
          imgSrcMain: require("@/assets/img/blog-details/blog-img-11.jpg"),
          altMain: "Kitchen photo",
          date: "26 December,2022",
          category: "Interior / Home / Decore",
          textMain: [
            `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary to popular belief.There are many
                    variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injecthumour, or
                    randomised words which don't look even slightly believable.`,
            "",
            `Embarrassing hidden in the middle of text. All the Lorem Ipsum
                    generators on the Internet tend to repeat predefined chunks as
                    necessary.`,
          ],
          quoteTitle: "The details are not the details. They make the design.",
          secondTitle: "Design sprints are great",
          secondText: `
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrary to popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered.
              `,
          listItems: [
            {
              id: 1,
              content: `
                  Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                      `,
            },
            {
              id: 2,
              content: `
                  Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                `,
            },
            {
              id: 3,
              content: `
                  Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                `,
            },
          ],
          imgSrcAdditional: require("@/assets/img/blog-details/blog-img-12.jpg"),
          altAdditional: "Kitchen photo",
          thirdText: `
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the majority
                have suffered.
              `,
        },
      ],
    }
  },
  components: {
    BlogTagComponent,
    BlogArticleBlock,
  },
  methods: {
    addClassActive() {
      const childArr = [
        ...event.target.closest(".blog-articles__tabs").children,
      ].map((children) =>
        children.classList.remove("blog-articles__tab-button_active")
      )
      if (event.target.classList.contains("blog-articles__tab-button")) {
        event.target.classList.add("blog-articles__tab-button_active")
        this.currentTag = event.target.innerText
      } else {
        this.currentTag = ""
      }
    },
  },
  computed: {
    filterArticles() {
      if (this.currentTag === "") {
        return this.articles
      } else {
        return this.articles.filter(
          (article) => article.tag === this.currentTag
        )
      }
    },
  },
  setup() {
    useHead({
      title: "Blog Details",
      meta: [{
        name: 'blog details',
        content: 'there are best design practices and relevant articles'
      }]
    })
  },
}
</script>

<style lang="scss" scoped>
.blog-intro {
  background-image: url("../assets/img/blog-details/Backgound-image.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  //   background-size: cover;
  height: 351px;
}

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
