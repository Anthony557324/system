<template>
    <div>控制台</div>
    <el-button @click="logout">退出</el-button>
</template>
<script>
import { useRouter } from 'vue-router';

export default {
    name: 'HomeComp',
    setup() {
        const router = useRouter()
        function logout(){
            router.push('/main')
        }
        return {
            logout
        }
     }
}
</script>