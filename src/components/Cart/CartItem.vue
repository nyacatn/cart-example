<template>
  <div class="car-item-box" @touchstart="touchstart" @touchmove="touchmove">
    <div class="cart-item" ref="move-region">
      <div class="info">
        <input
          type="checkbox"
          :checked="cartItem.checked"
          @click="modifyChecked"
        />
        <div class="cart-item-cover">
          <img :src="cartItem.item.cover" alt="" />
        </div>
        <p class="car-item-title">{{ cartItem.item.title }}</p>
      </div>
      <div class="other">
        <p class="price">￥{{ cartItem.item.price }}</p>
        <NumberBtn :cartItem="cartItem"></NumberBtn>
      </div>
      <div class="delete" ref="del" @click="del">删除</div>
      <p></p>
    </div>
  </div>
</template>

<script>
import NumberBtn from "./NumberBtn.vue";
export default {
  data() {
    return {
      startX: null,
    };
  },
  props: ["cartItem"],
  methods: {
    del() {
      this.$store.commit("DELETE_ONE", this.cartItem.item.id);
    },
    modifyChecked() {
      this.$store.commit("MODIFY_CHECKED", {
        id: this.cartItem.item.id,
        checked: this.cartItem.checked,
      });
    },
    touchstart(e) {
      this.startX = e.touches[0].pageX;
    },
    touchmove(e) {
      const moveX = e.touches[0].pageX;
      const delWidth = this.$refs.del.clientWidth;

      if (this.startX - moveX > 0) {
        if (this.startX - moveX >= delWidth / 2) {
          this.$refs[`move-region`].style.left = -delWidth + "px";
        } else {
          this.$refs[`move-region`].style.left = -(this.startX - moveX) + "px";
        }
      } else {
        if (moveX - this.startX >= delWidth / 2) {
          this.$refs[`move-region`].style.left = 0 + "px";
        } else {
          this.$refs[`move-region`].style.left = -(this.startX - moveX) + "px";
        }
      }
    },
  },
  components: {
    NumberBtn,
  },
};
</script>

<style>
.car-item-box {
  width: 90%;
  height: 20vh;
  background-color: #fff;
  border-radius: 3vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 2vh auto;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}
.cart-item {
  width: 100%;
  height: 20vh;
  background-color: #fff;
  border-radius: 3vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  transition: 0.3s;
}

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info input {
  flex: 0.2;
}
.cart-item-cover {
  flex: 0.3;
  width: 15vh;
  height: 10vh;
  background-color: #fff;
}

.cart-item-cover img {
  width: 100%;
  height: 100%;
}

.info p {
  flex: 0.5;
  text-align: center;
}

.price {
  color: red;
}
.other {
  display: flex;
  justify-content: space-evenly;
}
.delete {
  width: 7.5vh;
  height: 100%;
  background-color: red;
  position: absolute;
  right: -8vh;
  border-radius: 0 3vh 3vh 0;
  text-align: center;
  line-height: 10vh;
  color: #fff;
  box-sizing: border-box;
}
</style>
