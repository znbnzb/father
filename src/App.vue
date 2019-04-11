<template>
  <div id="app">
    <router-view></router-view>
     <foot1></foot1>
  </div>
</template>

<script>
import foot1 from '@/components/foot1'
export default {
      name: "app",
      data(){
          return{
              isfoot:true
          }
      },
      created(){
         
      },
      methods:{
          showfoot:function(){
              var _this=this;
              var routername =['/','/recent','/M_history'];
             var add = routername.indexOf();
              console.log(this.$route.path);
              console.log(add);
           
          }
      },

  components:{
      foot1
  }
};
</script>

<style>
body {
  background-color: #e5e5e5;
}
</style>
