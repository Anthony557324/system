<template>
  <div class="container">
    <div class="menu">图床系统</div>
    <el-button @click="login" class="loginbutton">登录</el-button>
  </div>
</template>
<script>
import { useRouter } from 'vue-router';
export default {
  name: 'MainheaderComp',
  setup() {
    const router = useRouter()
    function login() {
      router.push({ name: 'login' })
    }
    return { 
      login 
    }
  }
}
</script>
<style scoped>
.container {
  height: 5.5rem;
  display:flex;
  align-items: center;
}
.menu{
  flex-grow: 1;
  font-size: 1.5rem;
  margin-left: 2rem;
}
.loginbutton{
  margin-right: 2rem;
}
</style>