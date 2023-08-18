<template>
    <header-comp></header-comp>
    <div class="body">
      <nav-comp></nav-comp>
      <body-comp></body-comp>
    </div>
  </template>
  <script>
  import BodyComp from '@/components/layout/Body.vue'
  import HeaderComp from '@/components/layout/Header.vue'
  import NavComp from '@/components/layout/Nav.vue'
  export default {
    name: 'HomeComp',
    components: {
      BodyComp,
      HeaderComp,
      NavComp
    },
    setup() {}
  }
  </script>
  <style scoped>
  .body {
    height: calc(100% - 5.5rem);
    width: 100%;
    display: flex;
  }
  </style>