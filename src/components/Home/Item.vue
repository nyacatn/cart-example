<template>
  <div class="item">
    <div class="cover">
      <img :src="item.cover" alt="" />
    </div>
    <p class="desc">{{ item.title }}</p>
    <p class="price">￥{{ item.price }}</p>
    <button class="add-cart" @click="addCart">加入购物车</button>
  </div>
</template>

<script>
export default {
  methods: {
    addCart() {
      this.$store.commit("ADD_CART", this.item);
    },
  },
  props: ["item"],
};
</script>

<style scoped>
.item {
  width: 18vh;
  height: 25vh;
  border-radius: 2vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  margin: 2vh 2vh;
}

.cover {
  width: 100%;
  height: 60%;
  background-color: #ccc;
}

.cover img {
  width: 100%;
  height: 100%;
}

.desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.price {
  color: rgb(226, 47, 47);
}
.add-cart {
  height: 4vh;
  border: none;
  background-color: #ff0000;
  border-radius: 2vh;
  color: #fff;
}
</style>
