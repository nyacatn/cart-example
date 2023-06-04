<template>
  <div id="app" @dblclick.prevent>
    <header>好果汁百货</header>
    <MainArea /><SideBar />
  </div>
</template>

<script>
import MainArea from "@/components/MainArea";
import SideBar from "@/components/SideBar";
export default {
  name: "App",
  components: { MainArea, SideBar },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
header {
  background-color: #ff0000;
  height: 8vh;
  font-size: 4vh;
  color: #fff;
  margin-bottom: 1vh;
  text-align: center;
  line-height: 8vh;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
