import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/fontello/css/fontello.css";
import "@/assets/styles.css";
/* import axios from 'axios';
import VueAxios from 'vue-axios'; */
import VueFormulate from "@braid/vue-formulate";

Vue.use(VueFormulate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
