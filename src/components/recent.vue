<template>
    <div>
        <p>病例档案正在建设中...</p>
        <foot1 :active="1"></foot1>
    </div>
</template>

<script>
import foot1 from '../components/foot1'
export default {
  name: "recent",
  components:{
      foot1
  }
};
</script>

<style scoped>
</style>