<template>
    <div>
         <headTop title="住院情况"></headTop>
        <p>住院情况：hospital</p>
        <slot name="11"></slot>
    </div>
</template>

<script>
import {getreport} from '../request/api'
import headTop from './headerTop'
export default {
  name: "hospital",
   data(){
       return{
            getdate: {
                where: 
                {
                    "$and":
                        [
                            {
                                "inspectionType":
                                {
                                    "$in":[]
                                }
                            },
                            {
                                "inspectionDate":""
                            }
                        ]
                },
                limint:100
            },
            items:[]
       }
   },
   created(){
       this.getpaths();
   },
   methods:{
       getpaths:function(){
           var _this =this;
            _this.$route.query.id.forEach(itemss=>{
                _this.items.push(itemss.type);
            })
             _this.getdate.where.$and[0].inspectionType.$in=_this.items; 
            _this.getdate.where.$and[1].inspectionDate=_this.$route.query.id2; 
           getreport(_this.getdate).then(res=>{
               console.log(res.results)
           })
       }
   },
    components:{
        headTop
    }
};
</script>

<style scoped>
</style>