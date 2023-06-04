<template>
  <footer>
    <router-link v-for="btn in navBtns" :key="btn.id" :to="btn.route">
      {{ btn.title }}
    </router-link>
  </footer>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      navBtns: (state) => state.navBtns,
    }),
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  display: flex;
  color: #ccc;
  flex: 1;
  justify-content: center;
  align-items: center;
}
footer {
  width: 100%;
  height: 6vh;
  background-color: #fff;
  box-shadow: 2px -2px 10px #ccc;
  display: flex;
  justify-content: space-between;
}
</style>
