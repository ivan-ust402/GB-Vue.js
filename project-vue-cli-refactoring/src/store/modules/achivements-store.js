export default {
  state() {
    return {
      achivements: [
        {
          title: "12",
          text: "Years Of Experiance",
        },
        {
          title: "85",
          text: "Success Project",
        },
        {
          title: "15",
          text: "Active Project",
        },
        {
          title: "95",
          text: "Happy CUstomers",
        },
      ],
    }
  },
  getters: {
    getCurrentAchivements(state) {
        return state.achivements;
    }
  },
}
