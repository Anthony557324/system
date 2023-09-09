<template>
  <el-button @click="upload">选择文件</el-button>
  <input @change="handleFile" ref="file" type="file" style="width: 0;height: 0;" />
  <div class="tag" v-show="filename">
    <el-tag>{{ filename }}</el-tag>
  </div>
  <div>
    <el-button @click="testServer">上传文件</el-button>
  </div>
  <div>
    <el-button @click="uploadFileBase64">base64上传</el-button>
  </div>
  <img src="">
</template>

<script>
import { ref } from "vue";
import { selfServer } from '@/http/axios.js'
export default {
  name: 'MyfileComp',
  setup() {
    const file = ref(null)
    const filename = ref('')

    // reader
    const base64Reader = new FileReader()
    function getReaderResult() {

    }
    // 事件注册的同时，要考虑事件卸载时机

    const formData = new FormData()
    function handleFile(e) {
      console.log(e.target.files);
      console.log(file.value.files);
      filename.value = file.value.files[0].name
      formData.append('file', file.value.files[0])
    }
    function upload() {
      file.value.click()
    }

    // formData 表单上传文件
    function testServer() {
      selfServer.post('/upload', formData)
    }

    // base64 编码
    function uploadFileBase64() {

    }
    return { file, filename, upload, handleFile, testServer, uploadFileBase64 }
  }
}
</script>
<style scoped>
.tag {
  margin-top: 10px;
}
</style>