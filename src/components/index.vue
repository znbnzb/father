<template>
    <div class="f-nav">
        <!-- 轮播图 -->
        <van-swipe :autoplay="5000">
            <van-swipe-item
                v-for="image in images"
                :key="image"
            >
                <img
                    class="f-nav-img"
                    :src="image"
                    alt=""
                >
            </van-swipe-item>
        </van-swipe>
        <!-- 报告 -->
       <section class="report">
           <div class="box_left  boxsize">
               <router-link :to="{name:'recent'}" tag="div" >
                   <span>
                        <img src="../../static/report.png" alt="">
                   </span>
                   <div>
                        <h4>检查报告</h4>
                        <h5>文字说明</h5>
                   </div>        
               </router-link>
           </div>
           <div class="box_right boxsize">
                <router-link :to="{name:'M_history'}" tag="div" >
                    <span>
                        <img src="../../static/report_2.png" alt="">
                   </span>
                   <div>
                        <h4>检验报告</h4>
                        <h5>文字说明</h5>
                   </div>
               </router-link>
           </div>
       </section>
   <foot1></foot1>
    </div>
</template>

<script>
import foot1 from '../components/foot1'
export default {
    data() {
        return {
            images: [
                "../../static/1.jpg",
                "../../static/2.jpg",
                "../../static/3.jpg",
                "../../static/4.jpg"
            ],
            
        };
    },
    created() {
        this.getadd();
    },
    methods: {
        getadd: function() {
            let v = this.$store.state.token;
            console.log(v + "新的");
        }
    },
    components:{
        foot1
    }
};
</script>

<style scoped>
.f-nav .f-nav-img {
    width: 100%;
}

.report{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width:100%;
    height:80px;
    padding:10px;
    margin:auto;
    background-color:white;
    box-shadow:1px 6px 5px #d9d9d9;
}
.report .box_left {
    width:50%;
}
.report .box_right{
     width:50%;

}
.box_right>div:before {
    content:'';
    border:1px solid #f2f2f2;
    height:35px;
    margin-left:-5px;
}
.boxsize>div{
    display:flex;
    align-items: center;
}
.boxsize>div>div{
    margin-left:10px;
}
.boxsize>div>div>h4{
    color:#454545;
}
.boxsize>div>div>h5{
    color:#929292;
}
.boxsize>div>span{
    display: block;
    width:45px;
    height:45px;
}
.boxsize>div>span>img {
    width:100%;
    height:100%;
}
</style>