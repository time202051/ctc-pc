<template>
  <div class="image-uploader" :class="{ 'fit-parent': fitParent }">
    <input
      ref="fileInput"
      type="file"
      :accept="accept"
      :multiple="multiple"
      style="display: none"
      @change="handleUpload"
    >

    <!-- 空状态：仅在无图时显示（单图/多图都适用） -->
    <div v-if="!photos.length" class="upload-area">
      <button type="button" class="upload-btn" @click="openPicker">上传图片</button>
    </div>

    <!-- 有图时展示 -->
    <div v-else class="photo-display">
      <div class="photos-list">
        <div v-for="(photo, index) in photos" :key="index" class="photo-item">
          <img
            :src="photo"
            :alt="`已上传图片${index + 1}`"
            class="uploaded-photo"
            title="点击预览"
            @click="previewImage(photo)"
          >
          <button type="button" class="delete-btn" title="删除此图片" @click="deletePhoto(index)">
            ×
          </button>
        </div>
      </div>

      <!-- 多图时保留添加/清空；单图时隐藏 -->
      <div v-if="multiple" class="photo-actions">
        <button type="button" class="add-btn" :disabled="disableAdd" @click="openPicker">
          添加图片
        </button>
        <button type="button" class="clear-btn" @click="clearAll">清除所有</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageUploader",
  props: {
    multiple: { type: Boolean, default: true },
    accept: { type: String, default: "image/*" },
    max: { type: Number, default: Infinity }, // 仅在 multiple=true 时有效
    dedupe: { type: Boolean, default: true },
    // 开启后：空状态与已上传状态都按父容器宽高自适应
    fitParent: { type: Boolean, default: false }
  },
  data() {
    return {
      photos: [],
      signatures: []
    };
  },
  computed: {
    disableAdd() {
      return this.multiple ? this.photos.length >= this.max : this.photos.length >= 1;
    }
  },
  methods: {
    openPicker() {
      if (this.disableAdd) return;
      this.$refs.fileInput && this.$refs.fileInput.click();
    },
    handleUpload(event) {
      const files = event.target.files;
      if (!files || !files.length) {
        event.target.value = "";
        return;
      }
      const pendingReads = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!file) continue;

        const signature = `${file.name}-${file.size}-${file.lastModified}`;
        if (this.dedupe && this.signatures.includes(signature)) {
          this.$message && this.$message.warning("该图片已存在，跳过上传");
          continue;
        }

        pendingReads.push(
          this.readFileAsDataURL(file).then(dataUrl => {
            console.log("read file as data url:", dataUrl, signature);
            if (this.dedupe && this.photos.includes(dataUrl)) {
              this.$message && this.$message.warning("该图片已存在，跳过上传");
              return null;
            }
            return { dataUrl, signature };
          })
        );
      }
      console.log(222, pendingReads);
      Promise.all(pendingReads).then(results => {
        const validItems = results.filter(Boolean);
        if (!validItems.length) {
          event.target.value = "";
          return;
        }

        let next = this.photos.slice();
        for (const item of validItems) {
          if (this.multiple) {
            if (next.length >= this.max) break;
            next.push(item.dataUrl);
            this.signatures.push(item.signature);
          } else {
            next = [item.dataUrl];
            this.signatures = [item.signature];
            break; // 单图模式：只保留一张并结束
          }
        }
        this.photos = next;
        event.target.value = "";
      });
    },
    readFileAsDataURL(file) {
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = e => resolve(e.target.result);
        reader.readAsDataURL(file);
      });
    },
    deletePhoto(index) {
      const next = this.photos.slice();
      next.splice(index, 1);
      this.photos = next;
      this.signatures.splice(index, 1);
      if (this.$refs.fileInput) this.$refs.fileInput.value = "";
    },
    clearAll() {
      this.photos = [];
      this.signatures = [];
      if (this.$refs.fileInput) this.$refs.fileInput.value = "";
    },
    previewImage(src) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        const dialog = document.createElement("div");
        dialog.style.position = "fixed";
        dialog.style.top = "0";
        dialog.style.left = "0";
        dialog.style.width = "100%";
        dialog.style.height = "100%";
        dialog.style.backgroundColor = "rgba(0,0,0,0.8)";
        dialog.style.display = "flex";
        dialog.style.justifyContent = "center";
        dialog.style.alignItems = "center";
        dialog.style.zIndex = "9999";
        dialog.innerHTML =
          '<img src="' +
          src +
          '" alt="预览图片" style="max-width: 90%; max-height: 90%; object-fit: contain;">';
        document.body.appendChild(dialog);
        dialog.addEventListener("click", e => {
          if (e.target === dialog) dialog.remove();
        });
      };
    }
  }
};
</script>

<style scoped lang="scss">
.image-uploader {
  width: 100%;
}

/* 让组件充满父容器（父容器需有明确高度） */
.image-uploader.fit-parent {
  height: 100%;
}

/* 空态：若充满父容器，按钮区域也充满父容器高度；否则使用默认最小高度 */
.upload-area {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  width: 100%;
  border: 1px dashed #ccc;
  background-color: #fafafa;

  .upload-btn {
    padding: 8px 16px;
    background-color: #409eff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      background-color: #66b1ff;
    }
  }
}

.image-uploader.fit-parent .upload-area {
  min-height: 0;
  height: 100%;
  width: 100%;
}

/* 已上传态：容器链路都占满父容器以便图片居中 */
.photo-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.image-uploader.fit-parent .photo-display,
.image-uploader.fit-parent .photos-list,
.image-uploader.fit-parent .photo-item {
  height: 100%;
}

.photos-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
  width: 100%;
}

.photo-item {
  position: relative;
  display: flex;
  align-items: center; /* 垂直居中图片 */
  justify-content: center; /* 水平居中图片 */
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  background-color: #fff;
}

/* 图片：宽度铺满容器，高度随容器自适应且保持比例，自动上下留白并居中（letterbox） */
.uploaded-photo {
  width: 100%;
  height: 100%;
   object-fit: contain;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
}

/* 删除按钮 */
.delete-btn {
  position: absolute;
  top: 2px;
  right: 2px;
  background-color: #f56c6c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  z-index: 1;

  &:hover {
    background-color: #f78989;
  }
}

/* 操作按钮区域（仅多图时显示） */
.photo-actions {
  display: flex;
  gap: 10px;
  margin-top: 10px;

  .add-btn,
  .clear-btn {
    padding: 6px 12px;
    background-color: #409eff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;

    &:hover {
      background-color: #66b1ff;
    }
  }

  .clear-btn {
    background-color: #f56c6c;

    &:hover {
      background-color: #f78989;
    }
  }
}

/* 打印隐藏所有按钮与空态 */
@media print {
  .upload-btn,
  .clear-btn,
  .add-btn,
  .delete-btn {
    display: none !important;
  }
  .upload-area {
    display: none !important;
  }
}
</style>
