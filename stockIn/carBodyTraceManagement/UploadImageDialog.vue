<template>
  <el-dialog
    title="上传图片"
    :visible.sync="visible"
    width="500px"
    @close="handleClose"
  >
    <el-upload
      class="upload-container"
      action="#"
      :http-request="customUpload"
      :file-list="fileList"
      :on-exceed="handleExceed"
      :on-remove="handleRemove"
      :before-upload="beforeUpload"
      :limit="1"
      list-type="picture-card"
      accept="image/*"
    >
      <i class="el-icon-plus"></i>
      <!-- <div slot="tip" class="el-upload__tip">最多上传2张图片</div>  -->
    </el-upload>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleConfirm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "UploadImageDialog",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      fileList: [],
    };
  },
  methods: {
    handleClose() {
      this.fileList = [];
      this.$emit("update:visible", false);
      this.$emit("close");
    },
    handleExceed() {
      this.$message.warning("最多只能上传1张图片");
    },
    handleRemove(file, fileList) {
      this.fileList = fileList;
    },
    beforeUpload(file) {
      // 验证是否为图片
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        this.$message.error("只能上传图片文件!");
        return false;
      }
      return true;
    },
    customUpload(options) {
      const file = options.file;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        file.url = reader.result;
        this.fileList.push(file);
      };
    },
    handleConfirm() {
      // 当用户点击确定按钮时，将文件列表传递给父组件
      this.$emit("confirm", this.fileList);
      this.handleClose();
    },
  },
};
</script>

<style scoped>
.upload-container {
  display: flex;
  justify-content: center;
}
</style>