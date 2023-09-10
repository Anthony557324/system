<template>
  <div class="container">
    <img class='background' src="https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&w=600" alt="广告页背景图">
  </div>
</template>
<script>
export default {
  name: 'MainbodyComp',
  setup() {}
}
</script>
<style scoped>
.container {
  height: calc(100%-5.5rem);
  overflow-y: auto;
}
.background{
  width: 100%;
}
</style>