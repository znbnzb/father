<template>
    <div v-if="isshow">
        <headTop title="检验报告单"></headTop>
        <div class="Top_bg">
            <img src="../assets/topbg.png" alt="">
        </div>
         <ul  class="inspection_ul">
             <li v-for="item in isdate"  class="inspection_li li_bg"> 
                <h5>{{item.inspectionDate}}</h5>
                <router-link  :to="{name:'hospital',query:{id:item.inspectionPreject2,id2:item.inspectionDate}}" tag="ol">
                    <li v-for=" sub in item.inspectionPreject2">{{sub.prname}}</li>
                    <span>点击查看</span>
                </router-link> 
             </li>
         </ul>
    </div>
</template>

<script>
import {getinspection} from '../request/api'
import headTop from './headerTop'
import { Toast } from 'vant';
export default {
      name: "cruor",
    data(){
        return {
            isshow:false, //加载
            isdate:'',    //数据 
            orders:{ //排序,拼接地址
                order:'-inspectionDate',
                limit:100
            }
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
                 getinspection(this.orders).then(res=>{
                _this.isshow=true;
                _this.isdate =res.results;
                console.log(res.results);
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
.Top_bg{
    position: absolute;
    top:46px;
    width:100%;
    z-index:-1;
    left:0px;
}
.Top_bg img{
    width:100%;
    height:100%;
}
.inspection_ul{
    margin:2rem 1rem 0rem 1rem;
}

.inspection_ul .inspection_li {
    display:flex ;
    flex-direction: column;
    padding:1rem;
    margin-bottom:0.6rem;
}
.inspection_ul .li_bg{
    background-color:white !important;
    box-shadow: 0.1rem 0.1rem 0.7rem #999999;
    border-radius:0.5rem;
}
.inspection_li{
    position:relative;
}
.inspection_ul>.inspection_li>ol>span{
    color:#999999;
    position:absolute;
    bottom:1.5rem;
    right:1.5rem;
    font-size:0.8rem;
}
.inspection_ul>.inspection_li>ol>span::after{
    content:'';
    width: 0.4rem;
    height: 0.4rem;
    display: inline-block;
    border-top: 2px solid #999999;
    border-right: 2px solid #999999;
    transform: rotate(45deg);
}

.inspection_li h5{
    color:#666666;
    font-size:1rem;
    margin-bottom:0.6rem;
    border-bottom:1px solid #999999;
}
.inspection_li ol{
    margin-left:1.2rem;
}
.inspection_li ol li{
    list-style:circle;
    font-size:0.9rem;
    height:1.5rem;
    color:#999999;
}
</style>