import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = { //要设置的全局访问的state对象
    //设置初始化的属性值
    showFooter: true,
    changableNum: 0,
    myname: '张乃彬'
}

const getters = { //实时监听state值的变化
    isShow(state) { //方法名随意，主要是来承载变化的showFooter的值
        return state.showFooter
    },
    getChangedNum(state) {
        return state.changableNum
    },
    getMyName(state) {
        return state.myname
    }
}

const mutations = { //自定义改变state初始值的方法，这里面的参数出来state之外还可以再传额外的参数（变量或对象）
    show(state) {
        state.showFooter = true;
    },
    hide(state) {
        state.showFooter = false;
    },
    newNum(state, sum) {
        state.changableNum += sum;
    }
}

const store = new Vuex.Store({ //新建一个实例
    state,
    getters,
    mutations
});





export default store; //暴露出去