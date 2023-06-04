<template>
  <div class="footer">
    <input type="checkbox" @click="invert" :checked="allChecked" />
    <p>总计：{{ total }}</p>
    <button>提交订单</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  methods: {
    invert() {
      this.$store.commit("INVERT");
    },
  },
  computed: {
    ...mapState({
      cart: (state) => state.cart,
      allChecked: (state) => {
        if (!state.cart.length) return false;
        return state.cart.every((item) => {
          return item.checked === true;
        });
      },
    }),

    total() {
      return this.cart.reduce((total, i) => {
        if (i.checked) {
          total += i.count * i.item.price;
        }
        return total;
      }, 0);
    },
  },
};
</script>

<style scoped>
.footer {
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}

p {
  flex: 0.4;
}
button {
  flex: 0.4;
  width: 4vh;
  height: 4vh;
  border: none;
  border-radius: 2vh;
  background-color: #ff0000;
  color: #fff;
}
</style>
