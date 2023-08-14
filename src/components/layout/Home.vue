<template>
    <div>控制台</div>
    <el-button @click="logout">退出</el-button>
</template>
<script>
import { useRouter,useRoute } from 'vue-router';

export default {
    name: 'HomeComp',
    setup() {
        const router = useRouter()
        const route = useRoute()
        function logout() {
            // 跳转到登录页
            router.push({ name: 'main' })
        }
        return {
            logout
        }
    }
}
</script>