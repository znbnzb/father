import Vue from 'vue'
import axios from 'axios'
import QS from 'qs';
import store from '../store'
import { Toast } from 'vant';

/** 
 * 提示函数 
 * 禁止点击蒙层、显示5秒后关闭
 */
const tip = msg => {
    Toast({
        message: msg,
        duration: 5000,
        forbidClick: true
    });
}

const bomId = "36238506614a846e385131e37df82705";
const bomkey = "a6205cbd0eaafa2e413978e6fc7e80ba";
const apis = process.env.API_ROOT;
console.log(apis)
axios.defaults.headers.post["Content-type"] = 'application/json';
axios.defaults.headers.post["X-Bmob-Application-Id"] = bomId;
axios.defaults.headers.post["X-Bmob-REST-API-Key"] = bomkey;


axios.defaults.headers.delete["X-Bmob-Application-Id"] = bomId
axios.defaults.headers.delete["X-Bmob-REST-API-Key"] = bomkey



if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = apis; //跨域 在 config/index.js 找到proxyTable
} else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = apis
} else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = apis
}

axios.defaults.timeout = 10000; //请求超时


axios.interceptors.request.use(
    config => {
        var _this = this;
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        // const token = store.state.token;
        const token = store.state.token;
        // if (token) {
        //     config.headers.Authorization = token
        // }
        // 将请求的配置上Bomb的官方配置
        config.headers.get["X-Bmob-Application-Id"] = bomId;
        config.headers.get["X-Bmob-REST-API-Key"] = bomkey;
        config.headers.get["X-Bmob-REST-API-Key"] = bomkey;

        return config;
    },
    error => {
        return Promise.error(error);
    })

// 响应拦截器
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else if (response.status === 201) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是200的情况    
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录                
                // 未登录则跳转登录页面，并携带当前页面的路径                
                // 在登录成功后返回当前页面，这一步需要在登录页操作。                
                case 401:
                    router.replace({
                        path: '/',
                        query: { redirect: router.currentRoute.fullPath }
                    });
                    break;
                    // 403 token过期                
                    // 登录过期对用户进行提示                
                    // 清除本地token和清空vuex中token对象                
                    // 跳转登录页面                
                case 403:
                    Toast({
                        message: '登录过期，请重新登录',
                        duration: 1000,
                        forbidClick: true
                    });
                    // 清除token                    
                    localStorage.removeItem('token');
                    store.commit('loginSuccess', null);
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    setTimeout(() => {
                        router.replace({
                            path: '/Login',
                            query: {
                                redirect: router.currentRoute.fullPath
                            }
                        });
                    }, 1000);
                    break;
                    // 404请求不存在                
                case 404:
                    Toast({
                        message: '网络请求不存在',
                        duration: 1500,
                        forbidClick: true
                    });
                    break;
                case 400:
                    Toast({
                        message: '请求失败',
                        duration: 1500,
                        forbidClick: true
                    });
                    break;
                    // 其他错误，直接抛出错误提示                
                default:
                    Toast({
                        message: error.response.data.message,
                        duration: 1500,
                        forbidClick: true
                    });
            }
            return Promise.reject(error.response);
        }
    }
);

/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
                params: params
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}