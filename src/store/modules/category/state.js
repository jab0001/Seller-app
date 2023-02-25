let searchParams = window.localStorage.getItem("searchParams");

export default {
  path: {
    main: null,
    id: null,
  },
  searchParams: searchParams ? JSON.parse(searchParams) : {},
};
