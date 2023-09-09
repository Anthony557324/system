<template>
  <el-button @click="upload">上传文件</el-button>
  <input @change="handleFile" ref="file" type="file" style="width: 0;height: 0;"/>
  <div class="tag" v-show="filename">
    <el-tag>{{ filename }}</el-tag>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: 'MyfileComp',
  setup() {
    const file = ref(null)
    const filename = ref('')
    function handleFile(e) {
      console.log(e.target.files);
      console.log(file.value.files);
      filename.value = file.value.files[0].name
    }
    function upload() {
      file.value.click()
    }
    return { file, filename, upload, handleFile }
  }
}
</script>
<style scoped>
.tag {
  margin-top: 10px;
}
</style>