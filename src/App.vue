<template>
  <div id="app">
    <router-view></router-view>
    <foot1 v-if="isfoot" />
  </div>
</template>

<script>
import foot1 from "./components/foot1";
export default {
  name: "App",
  components: {
    foot1
  },
  data(){
      return {
          isfoot:true
      }
  },
  created(){
      this.hidefoot();
  },
  methods:{
      //如果路由地址是登录页 / 将底部导航栏隐藏
      hidefoot(){
          var _this = this;
          var RouterPath = this.$route.path;
         if(RouterPath ==='/'){
            _this.isfoot = false;
         }
      }
  }
};
</script>

<style>
body {
  background-color: #e5e5e5;
}
</style>
