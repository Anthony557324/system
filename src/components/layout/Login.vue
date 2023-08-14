<template>
    <div>登录页</div>
    用户id<el-input v-model="userId"></el-input>
    <el-button @click="login">登录</el-button>
</template>
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ref } from "vue";
export default {
    name: 'LoginComp',
    setup() {
        const router = useRouter()
        function login() {
            router.push({ name: 'home' })
        }
        const userId = ref('')
        return {
            login,
            userId
        }
    }
}
</script>