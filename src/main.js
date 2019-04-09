import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'vant/lib/vant-css/index.css';
import { routes } from './routes'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css';
//图片懒加载
import {
    Lazyload
} from 'vant';
// import axios from './request/api'
import store from './store' //引入store
Vue.use(VueRouter)
Vue.use(Vant)
Vue.use(Lazyload);







Vue.config.productionTip = false
const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('token')
    if (to.path == '/Login') {
        next()
    } else {
        if (token == '' || token == null) {
            next('/Login');
        } else {
            next()
        }
    }

})
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})