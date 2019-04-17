<template>
 <!-- 根据路由属性meta.navShaow来判断是否显示底部组件 -->
        <van-tabbar v-model="active" active-color="#39d167" v-if="$route.meta.navShow==undefined||$route.meta.navShow" >
            <van-tabbar-item icon="wap-home" :to="{name:'homeLink'}">首页</van-tabbar-item>
            <van-tabbar-item 
                icon="clock"
                :to="{name:'recent'}"
            >近况</van-tabbar-item>
            <van-tabbar-item 
                icon="like-o"
                :to="{name:'M_history'}"
            >病史</van-tabbar-item>
        </van-tabbar>

</template>

<script>
export default {
    name: "foot1",
    data() {
        return {
            active:0
        } 
    }
};
</script>

<style scoped>
</style>