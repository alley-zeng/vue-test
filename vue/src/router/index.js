import Vue from 'vue'
import VueRouter from 'vue-router'
import typeList from '../recycle/typeList'
import Home from '../recycle/home'
import Test from '../recycle/test'
import Brandlist from '../recycle/brandlist'
import detail from '../recycle/detail'
import SearchIndex from '../recycle/searchindex'
import user from '../recycle/user/center'
import login from '../login/index';
Vue.use(VueRouter)
export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/typeList',
            component: typeList,
            meta: {
                title: '回收商品列表'
            }
        },
        {
            path: '/test',
            component: Test,
            meta: {
                title: '登录'
            }
        },
        {
            path: '/brandlist',
            name: 'brandlist',
            component: Brandlist,
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: '首页'
            }
        },
        {
            path: '/searchindex',
            name: 'searchindex',
            component: SearchIndex,
            meta: {
                title: '回收商品查找'
            }
        },
        {
            path: '/detail',
            name: 'detail',
            component: detail,
            meta: {
                title: '商品状态描述'
            }
        },
        {
            path: '/user',
            name: 'user',
            component: user,
            meta: {
                title: '登录'
            }
        },
        {
            path: '/login',
            name: 'login',
            component: login,
            meta: {
                title: '登录',
                keywords: 'nininini',
                description: '4546456'
            }
        }
    ]
})