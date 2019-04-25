<template>
    <van-row>
        <van-col span="20" class="login_wrap">
            <!-- logon -->
            <div class="logo">
                <img src="../assets/login.png" alt="">
            </div>
            <!-- logonText -->
            <div class="loginText">
                <p>定期体检项目综合平台</p>
                <div class="loginHr"></div>
                <span>wwww.lyfirst.top</span>
            </div>
            <!-- 登录表单 -->
            <form action="" class="loginForm">
                <section class="login_set">
                    <div class="form_group">
                        <i class="userimg"></i>
                        <input type="text" placeholder="请输入用户名" v-model='users.username'>
                    </div>
                    <div class="form_group">
                        <i class="pawssimg"></i>
                        <input type="password" placeholder="请输入密码" v-model="users.password">
                    </div>
                </section>
                <button type="button" class="btn" @click="LoginUser">登录</button>
            </form>
        </van-col>
    </van-row>
</template>

<script>
import { Toast } from "vant";
import { Logininfo } from "../request/api";
export default {
    data() {
        return {
            users: {
                username: "admin",
                password: "111111"
            },
        };
    },

    created() {

    },
    methods: {
        LoginUser: function() {
            var _this = this;
            if(_this.users.username ==='' || _this.users.password ==='' ){
                Toast.fail('账号或密码不能为空');
            }else {
                Logininfo(_this.users).then(res => {
                console.log(res);
                window.localStorage.setItem('token', res.sessionToken);
                this.$store.dispatch("setUserToken", res.sessionToken);
                Toast.loading({
                mask: true,
                message: '登录成功',
                duration:1000
                });
                setTimeout(()=>{
                    _this.$router.push('/'); 
                },1000)
            });
            }  
        },
    }
};
</script>

<style scoped>
/* 外边框 */
.login_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding:0% 5% 2% 5%;
    position: fixed;
    background-image: url(../assets/loginbg.jpg);
    /* background-color:lightgrey; */
    background-size: 100% 100%;
}
/* Logo */
.login_wrap .logo {
    width: 236px;
    height: 236px;
}
.login_wrap .logo img {
    width: 100%;
    height: 100%;
}
/* loginText */
.login_wrap .loginText{
    color:#ffff;
    letter-spacing: 0.2rem;
    margin-top:-0.7rem;
    font-size:1.8rem;
    text-align: center;
}
.login_wrap .loginText p{
    color:#ffff;
}
.login_wrap .loginText .loginHr{
    width: 100%;
    margin-top:0.2rem;
    height:3px;
    margin-bottom: -0.4rem;
    background-color:#ffff;
}
.login_wrap .loginText span{
    font-size:1.2rem;
    color:#ffff;
}
/* 登录表单 */
.loginForm{
    box-sizing:border-box;
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top:5rem;
}
.loginForm .login_set{
    display: flex;
    width:85%;
    flex-direction: column;
    align-items: center;
}
.loginForm .form_group{
    width:100%;
    position: relative;
    height: 3.5rem;
}
.loginForm .form_group i{
    position:absolute;
    left:0rem;
    display: inline-block;
    width:20px;
    height:20px;
}
.loginForm .form_group .userimg{
    background-image: url(../assets/user.png);
    background-size:100% 100%;
}
.loginForm .form_group .pawssimg{
    background-image: url(../assets/pawss.png);
    background-size:100% 100%;
}
.loginForm .form_group input{
    width:100%;
    border:0px;
    color:#999999;
    font-size:0.9rem;
    padding-left:2rem;
    background:none;
    border-bottom: 1px solid #4ce4b1;
}
.loginForm .form_group input:focus{
    border-bottom:1px solid #999999;
}
.loginForm .btn {
    border:none;
    background:none;
    background-color:#4ce4b1;
    color:#ffff;
    font-size:1.2rem;
    border-radius: 2rem;
    width:85%;
    height:3.3rem;
    letter-spacing: 0.5rem;
    margin-left:0.7rem;
}
</style>