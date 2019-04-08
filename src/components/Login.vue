<template>
    <div class="row">
        <div class="center-block">
            <img
                src="../assets/logo.png"
                alt=""
            >
            <p>没有值</p>

        </div>
    </div>

</template>

<script>
import { Toast } from "vant";
import {apiAddress,apiAddress2} from '../request/api'
export default {
    data() {
        return {
            setData: {
                username: "admin",
                password:'111111'
            },
            showa:'我是张乃彬'
        };
    },
 
    created() {
        // this.getuser();
   
        this.add(); //添加数据
    },
    methods: {

        add:function() {
            var _this = this;
            //  let tokenl= window.localStorage.getItem('token')
        //  console.log(token)
        //  console.log(tokenl+'本地的 ')
         apiAddress(_this.setData).then(res=>{
            //  this.$store.commit('usertoken',res.sessionToken);
            console.log('已经登陆了')
             this.$store.dispatch('setUserToken',res.sessionToken);
         })
        }

    }
};
</script>

<style scoped>
</style>