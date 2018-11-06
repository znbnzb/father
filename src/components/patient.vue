<template>
    <div>
       <van-row>
           <van-col span="24">
               <van-nav-bar left-text="返回"
               left-arrow
               @click-left="onClickLeft"
               >

               </van-nav-bar>
           </van-col>
       </van-row>
       <van-row>
           <van-col span="24" class="patient-wrap">
               <div class="patient-img">
                   <img src="../../static/ico_1.jpg" alt="">
               </div>
               
               <div class="patient-main">
                    <van-cell-group>
                        <van-cell value="内容" icon="location">
                         <template slot="title">
                            <span class="van-cell-text">单元格</span>
                        </template>

                        </van-cell>
                    </van-cell-group>
               </div>
           </van-col>
       </van-row>
    </div>
</template>

<script>
export default {
    methods:{
        onClickLeft(){
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped>
.patient-wrap{
    margin-top:10%;
    display:flex;
    flex-direction: column;
    align-items: center;
}
.patient-img{
    width:6rem;
    height: 6rem;
    z-index: 2;
    border-radius: 50%;
    border:1px solid darkblue;

}
.patient-img img {
    width:100%;
    height: 100%;
     border-radius: 50%;
    
}
.patient-main{
    margin-top:-3rem;
    padding: 4rem 1rem 1rem 1rem;
    width: 86%;
    border:1px solid #39d167;
    background-color:aliceblue;
    border-radius: 0.7rem;
    
}
</style>