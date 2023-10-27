export default {
  state() {
    return {
      articles: [
        {
          id: 0,
          imgSrc: "articles/article-1.png",
          figCaption: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          descriptionHTML: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga alias fugiat nemo molestias esse!<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, distinctio nulla quia eius quidem facilis?',
        },
        {
          id: 1,
          imgSrc: "articles/article-2.png",
          figCaption: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
          descriptionHTML: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga alias fugiat nemo molestias esse!<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, distinctio nulla quia eius quidem facilis?',
        },
        {
          id: 2,
          imgSrc: "articles/article-3.png",
          figCaption: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
          descriptionHTML: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga alias fugiat nemo molestias esse!<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, distinctio nulla quia eius quidem facilis?',
        },
        {
          id: 3,
          imgSrc: "articles/article-4.png",
          figCaption: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          descriptionHTML: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga alias fugiat nemo molestias esse!<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, distinctio nulla quia eius quidem facilis?',
        },
        {
          id: 4,
          imgSrc: "articles/article-5.png",
          figCaption: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022 ",
          descriptionHTML: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga alias fugiat nemo molestias esse!<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, distinctio nulla quia eius quidem facilis?',
        },
        {
          id: 5,
          imgSrc: "articles/article-6.png",
          figCaption: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "22 December,2022",
          descriptionHTML: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga alias fugiat nemo molestias esse!<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, distinctio nulla quia eius quidem facilis?',
        },
        {
          id: 6,
          imgSrc: "articles/article-7.png",
          figCaption: "Kitchan Design",
          title: "Low Cost Latest Invented Interior Designing Ideas",
          date: "26 December,2022",
          descriptionHTML: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.<br><br>Lorem Ipsum is not simply random text. It has roots in a piece of classica',
        },
        {
          id: 7,
          imgSrc: "articles/article-3.png",
          figCaption: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "22 December,2022 ",
          descriptionHTML: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga alias fugiat nemo molestias esse!<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, distinctio nulla quia eius quidem facilis?',
        },
        {
          id: 8,
          imgSrc: "articles/article-2.png",
          figCaption: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022 ",
          descriptionHTML: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga alias fugiat nemo molestias esse!<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, distinctio nulla quia eius quidem facilis?',
        },
        
      ],
      latestPostId: 6,
    }
  },
  getters: {
    getHomepageArticles(state) {
      return state.articles.slice(0, 3);
    },
    getBlogArticles(state) {
      return state.articles.slice(0, 6);
    },
    getLatestPost(state) {
      return state.articles.find(el => el.id === state.latestPostId)
    }
  },
}
