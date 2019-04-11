<template>

        <!-- <van-tabbar v-model="active" @change="changes">
            <van-tabbar-item
                icon="search"
                dot :to="{name:'homeLink'}"
            >标签</van-tabbar-item>
            <van-tabbar-item
                icon="friends-o"
                info="5"  :to="{name:'recent'}"
            >标签</van-tabbar-item>
            <van-tabbar-item
                icon="setting-o"
                info="20"  :to="{name:'M_history'}"
            >标签</van-tabbar-item>
        </van-tabbar> -->
        <van-tabbar
            v-model="active"
            v-if="$route.meta.navShow==undefined||$route.meta.navShow"
        >
            <van-tabbar-item
                icon="wap-home"
                :to="{name:'homeLink'}"
            >首页</van-tabbar-item>
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