export default {
  state() {
    return {
      projectCards: [
        {
          id: 0,
          imgSrc: "homepage/project-1.png",
          title: "Modern Kitchan",
          category: "Decor / Artchitecture",
        },
        {
          id: 1,
          imgSrc: "homepage/project-2.png",
          title: "Modern Kitchan",
          category: "Decor / Artchitecture",
        },
        {
          id: 2,
          imgSrc: "homepage/project-3.png",
          title: "Modern Kitchan",
          category: "Decor / Artchitecture",
        },
        {
          id: 3,
          imgSrc: "homepage/project-4.png",
          title: "Modern Kitchan",
          category: "Decor / Artchitecture",
        },
      ],
    }
  },
  mutations: {},
  getters: {
    getHomepageProjectCards(state) {
      return state.projectCards.slice(0, 4);
    },
  },
  actions: {},
}
