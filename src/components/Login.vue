<template>
    <div>登录页</div>
    <el-button @click="login">登录</el-button>
</template>
<script>
import { useRouter } from 'vue-router';

export default {
    name: 'LoginComp',
    setup() {
        const router = useRouter()
        function login(){
            router.push('/home')
        }
        return{
            login
        }
     }
}
</script>