<template>
  <div class="cart">
    <ul>
      <CartItem
        v-for="cartItem in cartItems"
        :key="cartItem.item.id"
        :cartItem="cartItem"
      ></CartItem>
    </ul>

    <CartFooter />
  </div>
</template>

<script>
import CartFooter from "./CartFooter.vue";
import CartItem from "./CartItem.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      cartItems: (state) => state.cart,
    }),
  },
  components: {
    CartFooter,
    CartItem,
  },
};
</script>

<style scoped>
.cart {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.cart ul {
  width: 100%;
  height: 100%;
  flex: 1;
  overflow: auto;
}
</style>
