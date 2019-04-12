<template>
    <div>
        <van-nav-bar left-text="返回" left-arrow  @click-left="onClickLeft">
            <span slot="title">{{title}}</span>
        </van-nav-bar>
    </div>
</template>

<script>
export default {
    props:['title'],
    methods: {
        //   返回上一页
        onClickLeft:function(){
            this.$router.back(-1)
        }
    }
};
</script>

<style  scoped>
</style>