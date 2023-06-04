<template>
  <div id="home">
    <Item v-for="item in goods" :key="item.id" :item="item"></Item>
  </div>
</template>

<script>
import Item from "./Item.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      goods: (state) => state.goods,
    }),
  },
  components: {
    Item,
  },
};
</script>

<style scoped>
#home {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
