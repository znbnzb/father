import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = { //要设置的全局访问的state对象
    //设置初始化的属性值
    token: '', //用户Token

}

const getters = {
    //实时监听state值的变化 方法名随意，主要是来承载变化的showFooter的值
    ChangeToken(state) { //接收token原生值的改变
        return state.token
    }
}

const mutations = { //自定义改变state初始值的方法，这里面的参数出来state之外还可以再传额外的参数（变量或对象）

    usertoken(state, data) { //从action中获取用户token,改变token原始值
        state.token = data;
    },

}

const actions = {

    setUserToken(context, token) { //从登录框中获取请求下来的token,提交到mutation
        context.commit('usertoken', token)
    },

}

const store = new Vuex.Store({ //新建一个实例
    state,
    getters,
    mutations,
    actions
});





export default store; //暴露出去