<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item :to="{name:'homeLink'}">
        <span>首页</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">
      </van-tabbar-item>
      <van-tabbar-item icon="chat" :to="{name:'recent'}">近况</van-tabbar-item>
      <van-tabbar-item icon="records" :to="{name:'M_history'}">病史</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "foot1",
  data() {
    return {
      active: 0,
      icon: {
        normal:
          "https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png",
        active:
          "https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png"
      }
    };
  }
};
</script>

<style scoped>
</style>