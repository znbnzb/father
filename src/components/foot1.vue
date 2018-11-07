<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="wap-home" :to="{name:'homeLink'}">首页</van-tabbar-item>
            <van-tabbar-item icon="clock" :to="{name:'recent'}">近况</van-tabbar-item>
            <van-tabbar-item icon="like-o" :to="{name:'M_history'}">病史</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
  name: "foot1",
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style scoped>
</style>