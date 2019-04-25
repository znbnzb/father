<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>

<script>
import foot1 from '@/components/foot1'
export default {
      name: "app",
  components:{
      foot1
  }
};
</script>

<style>
* {
    margin:0;
    padding:0;
}
body {
  background-color: #e5e5e5;
}
</style>
