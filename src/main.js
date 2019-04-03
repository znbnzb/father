import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'vant/lib/vant-css/index.css';
import {
    routes
} from './routes'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css';
//图片懒加载
import {
    Lazyload
} from 'vant';
import axios from './request/api'
import {
    store
} from './store/store.js'
Vue.use(VueRouter)
Vue.use(Vant)
Vue.use(Lazyload);







Vue.config.productionTip = false
const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})