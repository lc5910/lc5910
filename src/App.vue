<template>
  <div id="app">
    <router-view />
    <backTop></backTop>
  </div>
</template>

<script>
import backTop from "@/components/backTop.vue";
export default {
  name: "App",
  components: {
    backTop
  }
};
</script>

<style lang="less" >
html,
body {
  min-height: 700px;
  font-size: 12px;
}
//滚动条
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.1);
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
