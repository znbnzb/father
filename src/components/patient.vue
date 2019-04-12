<template>
    <div>
         <headTop title="患者简介"></headTop>
        <!-- 个人简介模块 -->
        <van-row class="patient">
            <van-col span="24">
                <van-card
                    num="2"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                />
            </van-col>
        </van-row>
        <!-- 步骤条 -->
        <van-row>
            <van-col span="24">
                步骤条
            </van-col>
        </van-row>
    </div>
</template>

<script>
import headTop from './headerTop'
export default {
    name: "patient",
    data() {
        return {

        };
    },
    components:{
        headTop
    }
    
};
</script>

<style scoped>
.t-icon::before {
    content: "";
    margin-right: 0.5rem;
    width: 0.2rem;
    height: 1.4rem;
    /* display: inline-block; */
    background-color: #39d167;
}
.t-icon {
    font-size: 1.3rem;
    width: 100%;
    font-weight: bold;
    line-height: 1.4rem;
}
.patient {
    margin-top: 1rem;
}
</style>