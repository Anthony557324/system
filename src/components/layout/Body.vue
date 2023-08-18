<template>
    <div class="container">
      <router-view></router-view>
    </div>
  </template>
  <script>
  export default {
    name: 'BodyComp',
    setup() {}
  }
  </script>
  <style scoped>
  .container {
    height: 100%;
    width: calc(100% - 20rem);
    overflow-y: auto;
  }
  </style>