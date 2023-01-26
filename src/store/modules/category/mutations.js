export default {
  setPath(state, filter) {
    Object.assign(state.path, filter);
  },
  setSearchParams(state, search) {
    window.localStorage.setItem("searchParams", JSON.stringify(search));
  },
};
