import VueRouter from "vue-router";
import Home from "@/components/Home";
import Cart from "@/components/Cart";
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/cart",
      component: Cart,
    },
  ],
});
