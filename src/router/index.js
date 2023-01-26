import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/announcement/:category/:id",
    name: "announcement",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AnnouncementView.vue"),
  },
  {
    path: "/category/:children",
    name: "category-main",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CategoryView.vue"),
    children: [
      {
        path: "",
        name: "category",
        component: () => import("../components/SearchArea/SearchArea.vue"),
        children: [
          {
            path: "",
            name: "stepOne",
            component: () =>
              import("../components/SearchArea/sideBar/StepOne.vue"),
          },
          {
            path: ":stepTwo",
            name: "stepTwo",
            component: () =>
              import("../components/SearchArea/sideBar/StepTwo.vue"),
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
