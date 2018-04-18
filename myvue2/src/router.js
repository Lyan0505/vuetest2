import Vue from 'vue';
import Router from 'vue-router'

export default[
    //一级路由
    {
        path:'/',
        redirect: { path: '/notfound' }
    },
    {
        "path": "/notfound",
        component: resolve => require(['./404.vue'], resolve),
      },
    {
        path:'/home',
        component: resolve=>require(['./page/home/main.vue'], resolve)
        


    }
]

