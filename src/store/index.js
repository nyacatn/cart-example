import Vuex from "vuex";
import Vue from "vue";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);
export default new Vuex.Store({
  mutations: {
    ADD_CART(state, value) {
      const exist = state.cart.filter((cartItem) => {
        return cartItem.item.id === value.id;
      });
      if (exist.length) {
        exist[0].count++;
      } else {
        const cartItem = {
          item: value,
          count: 1,
          checked: true,
        };
        state.cart.push(cartItem);
      }
    },
    MODIFY_COUNT(state, value) {
      let { count, id } = value;
      if (!count) count = 1;
      const item = state.cart.filter((cartItem) => {
        return cartItem.item.id === id;
      });
      item[0].count = count;
    },
    MODIFY_CHECKED(state, value) {
      const { checked, id } = value;
      const item = state.cart.filter((cartItem) => {
        return cartItem.item.id === id;
      });
      item[0].checked = !checked;
    },
    INVERT(state) {
      const flag = state.cart.every((cartItem) => {
        return cartItem.checked === true;
      });

      if (!flag) {
        state.cart.forEach((cartItem) => {
          cartItem.checked = true;
        });
      } else {
        state.cart.forEach((cartItem) => {
          cartItem.checked = false;
        });
      }
    },
    PLUS_ONE(state, id) {
      const item = state.cart.filter((cartItem) => {
        return cartItem.item.id === id;
      });
      item[0].count++;
    },
    SUB_ONE(state, id) {
      const item = state.cart.filter((cartItem) => {
        return cartItem.item.id === id;
      });
      if (item[0].count > 1) {
        item[0].count--;
      }
    },
    DELETE_ONE(state, id) {
      let index = 0;
      state.cart.forEach((CartItem, ind) => {
        if (CartItem.item.id === id) {
          index = ind;
        }
      });
      state.cart.splice(index, 1);
    },
  },
  state: {
    navBtns: [
      { id: "001", title: "首页", route: "/home" },
      { id: "002", title: "购物车", route: "/cart" },
    ],
    goods: [
      {
        id: "001",
        title: "【华强西瓜刀】保证一刀砍死卖瓜老板，砍不死他你砍我。",
        cover: require("@/assets/goods/dd.png"),
        price: "648",
      },
      {
        id: "002",
        title: "【IKUN战甲】坤冠头，背带裤，我叫IKUN你记住",
        cover: require("@/assets/goods/kun.png"),
        price: "648",
      },
      {
        id: "003",
        title: "【马老师同款闪电鞭】，年轻人就该不讲武德。",
        cover: require("@/assets/goods/bian.png"),
        price: "648",
      },
      {
        id: "004",
        title: "【原神代肝—百年老店】，一个星螺一百块。爱要不要",
        cover: require("@/assets/goods/yuan.png"),
        price: "23333",
      },
    ],
    cart: [
      {
        item: {
          id: "001",
          title: "【华强西瓜刀】保证一刀砍死卖瓜老板，砍不死他你砍我。",
          cover: require("@/assets/goods/dd.png"),
          price: "648",
        },
        count: 2,
        checked: true,
      },
      {
        item: {
          id: "004",
          title: "【原神代肝—百年老店】，一个星螺一百块。爱要不要",
          cover: require("@/assets/goods/yuan.png"),
          price: "23333",
        },
        count: 2,
        checked: true,
      },
    ],
  },
  plugins: [
    createPersistedState({
      key: "all",
    }),
  ],
});
