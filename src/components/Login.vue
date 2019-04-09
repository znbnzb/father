<template>
    <van-row>
        <van-col
            span="20"
            class="login_wrap"
        >
            <div class="logo">
                <img
                    src="../assets/logo.png"
                    alt=""
                >
            </div>
            <div class="login_text">
                体检项目综合平台
            </div>
            <div class="login">
                <van-cell-group>
                    <van-field
                        v-model="users.username"
                        required
                        clearable
                        label="用户名"
                        right-icon="question-o"
                        placeholder="请输入用户名"
                        @click-right-icon="$toast('question')"
                    />

                    <van-field
                        v-model="users.password"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        required
                    />
                </van-cell-group>
            </div>
            <div class="login_btn">
                <van-button size="large" type='primary' @click="LoginUser">立即登录</van-button>
            </div>
            
        </van-col>
        
    </van-row>
</template>

<script>
import { Toast } from "vant";
import { apiAddress, apiAddress2 } from "../request/api";
export default {
    data() {
        return {
            users: {
                username: "admin",
                password: "111111"
            },
            showa: "我是张乃彬"
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
                apiAddress(_this.users).then(res => {
                console.log(res);
                window.localStorage.setItem('token', res.sessionToken);
            
                this.$store.dispatch("setUserToken", res.sessionToken);
                _this.$router.push('/'); 
            });
            }
            
        }
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
    padding:18% 5% 2% 5%;
    position: fixed;
    background-image: url(../assets/bg2.png);
    /* background-color:lightgrey; */
    background-size: 100% 100%;
}
/* Logo */
.login_wrap .logo {
    width: 165px;
    height: 150px;
}
.login_wrap .logo img {
    width: 100%;
    height: 100%;
}
/* Login-text */
.login_wrap .login_text {
    font-size: 28px;
    margin-top: 5%;
    margin-bottom:7%;
    color: white;
}
/* Login */
.login_wrap .login {
    width:90%;
    color: white;
}
.login_wrap .login_btn {
    margin-top:7%;
    width:90%;
}
</style>