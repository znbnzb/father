<template>
    <div v-if="isshow">
        <headTop title2="检验报告单"></headTop>
        <div class="box"></div>
        <!-- 目前药量简介 -->
            <van-panel title="标题" desc="描述信息" status="状态">
                
                
            </van-panel>
         <div class="box"></div>
        <van-tabs v-model="activeTabs" color="#A7C942">
            <van-tab title="最新检查">
                    <van-collapse v-model="activeName" accordion>
                        <van-collapse-item title="血浆凝血酶原时间测定（仪器法)" icon="description" name="1">
                            <table class="tables">
                                <tr>
                                        <th>项目名称</th>
                                        <th>缩写</th>
                                        <th>结果</th>
                                        <th>单位</th>
                                        <th>异常</th>
                                        <th>参考范围</th>
                                </tr>
                                <tr v-for="item in dataObj">
                                    <td>{{item.projectName}}</td>
                                    <td>{{item.acronym}}</td>
                                    <td>{{item.result}}</td>
                                    <td>{{item.unit}}</td>
                                    <td>{{item.abnormal}}</td>
                                    <td>{{item.reference}}</td>
                                </tr>
                            </table>
                        </van-collapse-item>
                    </van-collapse>
            </van-tab>
            <van-tab title="往期检查">内容 2</van-tab>
        </van-tabs>
    
    </div>
</template>

<script>
import {getreport} from '../request/api'
import headTop from './headerTop'
import { Toast } from 'vant';
export default {
      name: "cruor",
    data(){
        return {
            activeName:'1',
            isshow:false,
            dataObj:{},
            activeTabs:0,
            

        }
    },
    created(){
        this.getdata();
    },
    methods:{
        getdata:function(){
            var _this=this;
            Toast.loading({
                mask:true,
                message:'加载中...',
                duration:500
            })
            setTimeout(()=>{
                 getreport().then(res=>{
                _this.isshow=true;
                _this.dataObj=res.results; 
            })
            },500)  
        }
    },
  components:{
    headTop 
}
};
</script>

<style scoped>
.box{
    height:5px;
}
.tables {
    width:100%;
    border-collapse:collapse;

}
.tables th{
    font-size:0.9rem;
    background-color:#A7C942;
}
.tables td{
    font-size:0.7rem;
    text-align: center;
}
.tables td,.tables th {
    border:1px solid #98bf21;
    padding:2px 3px 2px 3px; 
}
</style>