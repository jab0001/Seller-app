import state from "./state";

export default {
  getCards(state) {
    return state.MOCKcards;
  },
  getPath(state) {
    return state.path;
  },
  /* getMenu(state) {
    return state.menu;
  },
  getMenuSecond(state) {
    return state.menuSecond;
  }, */
  getSearchParams() {
    return state.searchParams;
  },
};
