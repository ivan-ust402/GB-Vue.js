export default {
  state() {
    return {
      navLinkArr: [
        {
          id: 0,
          name: "Home",
          url: "/",
        },
        {
          id: 1,
          name: "Projects",
          url: "/projects",  
        },
        {
          id: 2,
          name: "Blog",
          url: "/blog",
        },
      ],
    }
  },
  mutations: {
  },
  getters: {
    getNavLinks(state) {
        return state.navLinkArr;
    },
  },
  actions: {
  },
}
