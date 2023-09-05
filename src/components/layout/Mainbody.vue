<template>
    <div class="container">
      <el-button @click="login">跳转登录</el-button>
    </div>
  </template>
  <script>
  import { useRouter } from 'vue-router';
  export default {
    name: 'MainbodyComp',
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
    height: calc(100%-5.5rem);
    overflow-y: auto;
  }
  </style>