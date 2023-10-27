export default {
  state() {
    return {
      articles: [
        {
          id: 0,
          imgSrc: "articles/article-1.png",
          figCaption: "Kitchan Design",
          titleHTML: "Let’s Get Solution For Building Construction<br>Work",
          date: "26 December,2022",
        },
        {
          id: 1,
          imgSrc: "articles/article-2.png",
          figCaption: "Living Design",
          titleHTML: "Low Cost Latest Invented Interior Designing<br>Ideas.",
          date: "22 December,2022",
        },
        {
          id: 2,
          imgSrc: "articles/article-3.png",
          figCaption: "Interior Design",
          titleHTML: "Best For Any Office & Business Interior<br>Solution",
          date: "25 December,2022",
        },
      ],
    }
  },
  getters: {
    getHomepageArticles(state) {
        return state.articles.slice(0, 3);
    }
  }
}
