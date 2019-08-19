import Vue from 'vue'
import commonjs from './assets/script/common.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import MintUI from 'mint-ui'

import App from './App.vue'
import router from './router'
import './assets/css/common.min.css'
import 'mint-ui/lib/style.css'
//ajax请求模块
import axios from 'axios';

Vue.use(VueAwesomeSwiper, MintUI)

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true;

Vue.prototype.$axios = axios;
//公用js模块

Vue.prototype.$commonjs = commonjs; //公用js引用
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: h => h(App),
    router
})

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    console.log(to);
    document.querySelector('meta[name="keywords"]').setAttribute('content', to.meta.keywords);
    document.querySelector('meta[name="description"]').setAttribute('content', to.meta.description);
    next();
})