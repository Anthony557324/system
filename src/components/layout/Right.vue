<template>
    <div class="container">
        <div class="logincard">
            <div>登录页</div>
            <div class="userbox">        
                <div class="userdiv">用户名</div>
                <el-input v-model="userId"></el-input>
            </div>
            <div class="userbox">        
                <div class="userdiv">密码</div>
                <el-input v-model="userMima"></el-input>
            </div>

        
        <div class="mima">
            <el-checkbox>记住密码</el-checkbox>
            <div class="mimabox">
                <div>新注册账号 </div>
                <div>找回密码</div>
            </div>
        </div>
        <el-button @click="login">登录</el-button>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
    name: 'RightComp',
    setup() {
        const router = useRouter()
        function login() {
            // 跳转到首页
            router.push({
                name: 'home', query: {
                    userId: userId.value
                }
            })
        }
        const userId = ref('')
        return {
            login,
            userId
        }
    }
}
</script>
<style scoped>
.container {
    height: 100%;
    width: calc(100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.logincard{
    height: 30rem;
    width: 30rem;
    background-color: aqua;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.userbox{
    display: flex;
}
.userdiv{
    width: 4rem;
    height: 2.5rem;
}
.mima{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.mimabox {
    display: flex;
}
</style>