<template>
        <van-tabbar :value="active" active-color="#A7C942">
            <van-tabbar-item icon="wap-home" :to="{name:'homeLink'}">首页</van-tabbar-item>
            <van-tabbar-item 
                icon="records"
                :to="{name:'recent'}"
            >病例档案</van-tabbar-item>
            <van-tabbar-item 
                icon="contact"
                :to="{name:'M_history'}"
            >个人中心</van-tabbar-item>
        </van-tabbar>
</template>

<script>
export default {
    props:['active'],
    name: "foot1",

};
</script>

<style scoped>
</style>