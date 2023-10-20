<template>
  <main class="blog-intro center"></main>
  <div class="blog-articles center">
    <div class="blog-articles__articles">
      <BlogArticleComponent
        v-for="article in filterArticles"
        :key="article.id"
        :article="article"
      ></BlogArticleComponent>
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
import BlogArticleComponent from "./BlogArticleComponent.vue";
import BlogTagComponent from "./BlogTagComponent.vue";
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
          imgSrcMain: require('@/assets/img/blog-details/blog-img-1.png'),
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
          imgSrcAdditional: require('@/assets/img/blog-details/blog-img-2.png'),
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
          imgSrcMain: require('@/assets/img/blog-details/blog-img-3.jpg'),
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
          imgSrcAdditional: require('@/assets/img/blog-details/blog-img-4.jpg'),
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
          imgSrcMain: require('@/assets/img/blog-details/blog-img-5.jpg'),
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
          imgSrcAdditional: require('@/assets/img/blog-details/blog-img-6.jpg'),
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
          imgSrcMain: require('@/assets/img/blog-details/blog-img-7.jpg'),
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
          imgSrcAdditional: require('@/assets/img/blog-details/blog-img-8.jpg'),
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
          imgSrcMain: require('@/assets/img/blog-details/blog-img-9.jpg'),
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
          imgSrcAdditional: require('@/assets/img/blog-details/blog-img-10.jpg'),
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
          imgSrcMain: require('@/assets/img/blog-details/blog-img-11.jpg'),
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
          imgSrcAdditional: require('@/assets/img/blog-details/blog-img-12.jpg'),
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
    BlogArticleComponent,
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
}
</script>

<style lang="scss" scoped></style>
