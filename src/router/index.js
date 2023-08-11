import { createRouter, createWebHistory } from "vue-router";

import HomeComp from '@/components/Home.vue'
import LoginComp from '@/components/Login.vue'
import MainComp from '@/components/Main.vue'

const routes = [
    { path: '/', component: MainComp },
    { path: '/login', component: LoginComp },
    { path: '/home', component: HomeComp }
]

const router = createRouter({
    history: createWebHistory(),
    routes, // `routes: routes`的缩写
})

export default router