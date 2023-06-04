import Vue from "vue";
import App from "./App.vue";
import Store from "@/store";
import VueRouter from "vue-router";
import router from "@/router";
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store: Store,
  router,
}).$mount("#app");
