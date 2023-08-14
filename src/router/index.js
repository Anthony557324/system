import { createRouter, createWebHistory } from "vue-router";

import HomeComp from '@/components/layout/Home.vue'
import LoginComp from '@/components//layoutLogin.vue'
import MainComp from '@/components//layoutMain.vue'
import PersonInfoComp from '@/components/layout/Personinfo.vue'

const routes = [
    { path: '/', name: 'main', component: MainComp },
    { path: '/login', name: 'login', component: LoginComp },
    { path: '/home', name: 'home', component: HomeComp },
    // 测试如何在setup函数中获取路由参数
    { path: '/home/:id', name:'personinfo',component: PersonInfoComp },
    // { path: '/home/:id/test', component: HomeComp },
    // 通配符路由，必须放在最后
    // 路由条目可以使用重定向
    { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
    history: createWebHistory(),
    routes, // `routes: routes`的缩写
})

export default router