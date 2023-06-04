<template>
  <div class="number-btn">
    <button @click="plusOne">+</button>
    <input type="number" :value="cartItem.count" @input="modifyCount" />
    <button @click="subOne">-</button>
  </div>
</template>

<script>
export default {
  methods: {
    modifyCount(e) {
      this.$store.commit("MODIFY_COUNT", {
        count: e.target.value,
        id: this.cartItem.item.id,
      });
    },
    plusOne() {
      this.$store.commit("PLUS_ONE", this.cartItem.item.id);
    },
    subOne() {
      this.$store.commit("SUB_ONE", this.cartItem.item.id);
    },
  },
  props: ["cartItem"],
};
</script>

<style scoped>
button:nth-of-type(1) {
  border: 1px #ccc solid;
  background-color: #fff;
  width: 3vh;
  height: 3vh;
  border-radius: 50% 0 0 50%;
}

input {
  width: 4vh;
  height: 3vh;
  border: 1px #ccc solid;
  box-sizing: border-box;
  text-align: center;
}
button:nth-of-type(2) {
  border: 1px #ccc solid;
  background-color: #fff;
  width: 3vh;
  height: 3vh;
  border-radius: 0 50% 50% 0;
}
</style>
