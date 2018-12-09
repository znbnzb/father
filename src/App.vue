<template>
  <div id="app">
    <router-view></router-view>
    <foot1 />
  </div>
</template>

<script>
import foot1 from "./components/foot1";
export default {
  name: "App",
  components: {
    foot1
  }
};
</script>

<style>
body {
  background-color: #e5e5e5;
}
</style>
