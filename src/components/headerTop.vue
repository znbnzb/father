<template>
    <div>
        <van-nav-bar left-text="返回" left-arrow  @click-left="onClickLeft">
            <span slot="title">{{title2}}</span>
        </van-nav-bar>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    props:['title2'],
    methods: {
        //   返回上一页
        onClickLeft:function(){
            var _this=this;
            Toast.loading({
                mask:true,
                message:'加载中...',
                duration:300
            })
            setTimeout(()=>{
              this.$router.back(-1)
            },300) 
        }
    }
};
</script>
<style  scoped>
</style>