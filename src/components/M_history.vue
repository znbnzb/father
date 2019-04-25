<template>
    <div>
        <p>个人中心正在建设中...</p>
        <button @click="outusers">退出</button>
        <foot1 :active="2"></foot1>
    </div>
</template>

<script>
import foot1 from '@/components/foot1'
export default {
  name: "M_history",
  data(){
      return{

      }
  },
  methods:{
      outusers:function(Event2){
          console.log('sss');
         localStorage.removeItem('token');
      }
  },
    components:{
      foot1
  }
 
};
</script>

<style scoped>
</style>