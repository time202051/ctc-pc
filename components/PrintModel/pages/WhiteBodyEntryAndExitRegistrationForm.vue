<template>
  <div class="whiteBodyEntryAndExitRegistrationForm">
    <HeaderCom v-bind="$attrs" />
    <div class="table-container">
      <table>
        <tr>
          <td width="82">整车厂商:</td>
          <td width="140">{{ apiInfo.carNumber }}</td>
          <td width="75">车型项目：</td>
          <td>{{ apiInfo.frameNumber }}</td>
          <td width="80">车辆类型：</td>
          <td width="140">
            <div class="checkbox">
              <div>
                <input type="checkbox">
                <div>白车身</div>
              </div>
              <div>
                <input type="checkbox">
                <div>白车身</div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>实验类型：</td>
          <td>
            <div class="checkbox">
              <div>
                <input type="checkbox">
                <div>爆破</div>
              </div>
              <div>
                <input type="checkbox">
                <div>正常碰撞</div>
              </div>
            </div>
          </td>
          <td colspan="2" class="kf">SE/PIL/客服：</td>
          <td colspan="2" />
        </tr>
      </table>
    </div>

    <!-- 可以添加图片的主体表格 -->
    <div class="inspection-table-container">
      <table class="inspection-table">
        <tr>
          <td width="80" />
          <td class="step-title">Step1-白车身</td>
          <td class="step-title">Step2-加固车身</td>
        </tr>
        <tr>
          <td class="category-cell">检查项目</td>
          <td class="step-cell">
            <div class="inspection-items">
              <div class="item">
                <input type="checkbox">
                <span>左前车门</span>
              </div>
              <div class="item">
                <input type="checkbox">
                <span>左后车门</span>
              </div>
              <div class="item">
                <input type="checkbox">
                <span>右前车门</span>
              </div>
              <div class="item">
                <input type="checkbox">
                <span>右后门</span>
              </div>
              <div class="item">
                <input type="checkbox">
                <span>前引擎盖</span>
              </div>
              <div class="item">
                <input type="checkbox">
                <span>后备箱盖</span>
              </div>
              <div class="item">
                <input type="checkbox">
                <div />
              </div>
            </div>
          </td>
          <td class="step-cell">
            <div class="blank-area">
              <div class="blank-line" />
            </div>
          </td>
        </tr>
        <tr>
          <td class="category-cell">照片信息</td>
          <td class="photo-cell">
            <!-- 文件输入元素始终存在 -->
            <input
              ref="step1FileInput"
              type="file"
              accept="image/*"
              multiple
              style="display: none"
              @change="handleStep1PhotoUpload"
            >
            <div v-if="!step1Photos.length" class="upload-area">
              <button type="button" class="upload-btn" @click="addStep1Photo">上传图片</button>
            </div>
            <div v-if="step1Photos.length" class="photo-display">
              <div class="photos-list">
                <div v-for="(photo, index) in step1Photos" :key="index" class="photo-item">
                  <img
                    :src="photo"
                    :alt="`Step1照片${index + 1}`"
                    class="uploaded-photo"
                    title="点击预览"
                    @click="previewImage(photo)"
                  >
                  <button
                    type="button"
                    class="delete-btn"
                    title="删除此图片"
                    @click="deleteStep1Photo(index)"
                  >
                    ×
                  </button>
                </div>
              </div>
              <div class="photo-actions">
                <button type="button" class="add-btn" @click="addStep1Photo">添加图片</button>
                <button type="button" class="clear-btn" @click="clearStep1Photo">清除所有</button>
              </div>
            </div>
          </td>
          <td class="photo-cell">
            <!-- 文件输入元素始终存在 -->
            <!-- <ImageUploader :multiple="true" :fitParent="true"></ImageUploader> -->
            <input
              ref="step2FileInput"
              type="file"
              accept="image/*"
              multiple
              style="display: none"
              @change="handleStep2PhotoUpload"
            >

            <div v-if="!step2Photos.length" class="upload-area">
              <button type="button" class="upload-btn" @click="addStep2Photo">上传图片</button>
            </div>
            <div v-if="step2Photos.length" class="photo-display">
              <div class="photos-list">
                <div v-for="(photo, index) in step2Photos" :key="index" class="photo-item">
                  <img
                    :src="photo"
                    :alt="`Step2照片${index + 1}`"
                    class="uploaded-photo"
                    title="点击预览"
                    @click="previewImage(photo)"
                  >
                  <button
                    type="button"
                    class="delete-btn"
                    title="删除此图片"
                    @click="deleteStep2Photo(index)"
                  >
                    ×
                  </button>
                </div>
              </div>
              <div class="photo-actions">
                <button type="button" class="add-btn" @click="addStep2Photo">添加图片</button>
                <button type="button" class="clear-btn" @click="clearStep2Photo">清除所有</button>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <!-- number输入框 -->
    <div class="number-input-container">
      请输入行数：
      <input v-model="rowNumber" type="number" min="0" max="100">
    </div>

    <!-- 表格 -->
    <div class="out-in-table">
      <table class="print-table">
        <thead>
          <tr>
            <th colspan="6">出库</th>
            <th colspan="3">返库</th>
          </tr>
          <tr>
            <th>日期</th>
            <th>实验室</th>
            <th>领用人</th>
            <th>实验类型</th>
            <th>仓管员</th>
            <th>更新看板</th>
            <th>返回日期</th>
            <th>仓管员</th>
            <th>更新看板</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in Number(rowNumber)" :key="i">
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import HeaderCom from "@/components/PrintModel/com/headerCom.vue";
// import ImageUploader from "@/components/PrintModel/com/ImageUploader.vue";

export default {
  components: {
    HeaderCom
    // ImageUploader
  },
  props: {
    img1: {
      type: String,
      default: ""
    },
    img2: {
      type: String,
      default: ""
    },
    apiInfo: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      rowNumber: 20,
      step1Photos: [],
      step2Photos: [],
      // 记录已上传文件签名（文件名-大小-修改时间），用于快速去重
      step1Signatures: [],
      step2Signatures: []
    };
  },
  methods: {
    // 处理Step1照片上传
    handleStep1PhotoUpload(event) {
      const files = event.target.files;
      if (files && files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          if (!file) continue;
          const signature = `${file.name}-${file.size}-${file.lastModified}`;
          // 先基于签名去重
          if (this.step1Signatures.includes(signature)) {
            this.$message && this.$message.warning("该图片已存在，跳过上传");
            continue;
          }
          const reader = new FileReader();
          reader.onload = e => {
            const photoData = e.target.result;
            // 再基于数据串去重，双保险
            if (this.step1Photos.includes(photoData)) {
              this.$message && this.$message.warning("该图片已存在，跳过上传");
              return;
            }
            this.step1Photos.push(photoData);
            this.step1Signatures.push(signature);
          };
          reader.readAsDataURL(file);
        }
      }
      // 清空input值，允许重复选择相同文件
      event.target.value = "";
    },

    // 处理Step2照片上传
    handleStep2PhotoUpload(event) {
      const files = event.target.files;
      if (files && files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          if (!file) continue;
          const signature = `${file.name}-${file.size}-${file.lastModified}`;
          // // 先基于签名去重
          // if (this.step2Signatures.includes(signature)) {
          //   this.$message && this.$message.warning("该图片已存在，跳过上传");
          //   continue;
          // }
          const reader = new FileReader();
          reader.onload = e => {
            const photoData = e.target.result;
            // 再基于数据串去重，双保险
            if (this.step2Photos.includes(photoData)) {
              this.$message && this.$message.warning("该图片已存在，跳过上传");
              return;
            }
            this.step2Photos.push(photoData);
            this.step2Signatures.push(signature);
          };
          reader.readAsDataURL(file);
        }
      }
      // 清空input值，允许重复选择相同文件
      event.target.value = "";
    },

    // 清除Step1照片
    clearStep1Photo() {
      this.step1Photos = [];
      this.step1Signatures = [];
      this.$refs.step1FileInput.value = "";
    },

    // 清除Step2照片
    clearStep2Photo() {
      this.step2Photos = [];
      this.step2Signatures = [];
      this.$refs.step2FileInput.value = "";
    },

    // 删除Step1照片
    deleteStep1Photo(index) {
      this.step1Photos.splice(index, 1);
      this.step1Signatures.splice(index, 1);
    },

    // 删除Step2照片
    deleteStep2Photo(index) {
      this.step2Photos.splice(index, 1);
      this.step2Signatures.splice(index, 1);
    },

    // 添加Step1照片
    addStep1Photo() {
      this.$refs.step1FileInput.click();
    },

    // 添加Step2照片
    addStep2Photo() {
      this.$refs.step2FileInput.click();
    },

    // 预览图片
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
        dialog.innerHTML = `<img src="${src}" alt="预览图片" style="max-width: 90%; max-height: 90%; object-fit: contain;">`;
        document.body.appendChild(dialog);

        dialog.addEventListener("click", event => {
          if (event.target === dialog) {
            dialog.remove();
          }
        });
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.whiteBodyEntryAndExitRegistrationForm {
  width: 100%;
  margin: 0 auto;
}
.table-container {
  // padding: 0 3px;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 10px;
  font-size: 14px;
  margin-top: 8px;
  td {
    border: 1px solid #000;
    padding: 5px 2px;
    box-sizing: border-box;
    text-align: center;
  }
}

.checkbox {
  display: flex;
  align-items: center;
  justify-content: space-around;
  div {
    display: flex;
    align-items: center;
    input {
      margin-right: 5px;
    }
  }
}
.kf {
  color: #a7a7a7;
}

// 检查表格样式
.inspection-table-container {
  // padding: 0 3px;
  margin-top: 20px;
}

.inspection-table {
  table-layout: fixed;
  .photo-cell {
    height: auto;
    // height: 300px;
    min-height: 250px;
    width: 400px;
    padding: 10px;
    vertical-align: top;
  }

  .step-title {
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
    font-size: 16px;
    width: calc(50% - 40px) !important;
    // overflow: hidden;
  }

  .inspection-items {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    .item {
      display: flex;
      align-items: center;
      gap: 8px;

      input[type="checkbox"] {
        margin: 0;
      }

      span {
        font-size: 14px;
      }
      div {
        width: 150px;
        height: 16px;
        border-bottom: 1px solid #000;
      }
    }
  }

  .blank-area {
    height: 40px;
    position: relative;
    .blank-line {
      position: absolute;
      right: 0;
      bottom: 0;
      height: 1px;
      width: 120px;
      background-color: #000;
    }
  }

  .upload-area {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 200px;
    width: 100%;
    border: 1px dashed #ccc;
    background-color: #fafafa;

    .upload-btn {
      padding: 8px 16px;
      background-color: #409eff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;

      &:hover {
        background-color: #66b1ff;
      }
    }
  }

  .photo-display {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;

    .photos-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      justify-content: flex-start;
      align-items: center;
      // padding: 5px;
      // border: 1px solid #ddd;
      // border-radius: 4px;
      // background-color: #f5f5f5;
      width: 100%;
    }

    .photo-item {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: auto;
      border: 1px solid #ddd;
      border-radius: 4px;
      overflow: hidden;
      background-color: #fff;

      img {
        display: block;
        width: 100%;
        height: auto;
        max-height: 400px;
        object-fit: contain;
        cursor: pointer;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.8;
        }
      }

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
    }

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
  }
}

.out-in-table {
  margin-top: 10px;
}

.print-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.print-table th,
.print-table td {
  border: 1px solid #000;
  padding: 10px 4px;
  font-size: 12px;
  text-align: center;
  word-wrap: break-word;
}

/* 正文单元格最小高度 */
.print-table tbody td {
  height: 28px;
}

/* 新增：行数控制面板样式（打印时已在 @media print 隐藏） */
.number-input-container {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  background: #f5f7fa;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  color: #606266;
  font-size: 12px;
}
.number-input-container input[type="number"] {
  width: 100px;
  padding: 4px 6px;
  border: 1px solid #dcdfe6;
  border-radius: 3px;
}
.number-input-container input[type="number"]:focus {
  outline: none;
  border-color: #409eff;
  box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.15);
}
.number-input-container .control-hint {
  color: #909399;
}

@media print {
  .upload-btn,
  .clear-btn,
  .add-btn,
  .number-input-container,
  .delete-btn {
    display: none !important;
  }

  .upload-area {
    display: none !important;
  }

  .photo-display {
    .photos-list {
      // display: flex !important;
      // flex-direction: column !important;
      // gap: 5px !important;
      // border: none !important;
      // background-color: transparent !important;
      // align-items: center !important;
    }

    .photo-item {
      // width: 300px !important;
      // height: auto !important;
      // border: 1px solid #000 !important;
      // margin-bottom: 5px !important;
    }

    .photo-actions {
      display: none !important;
    }
  }

  .photo-cell {
    height: auto !important;
    width: 400px !important;
    padding: 10px !important;
  }

  .blank-area {
    .blank-line {
      display: block !important;
    }
  }

  /* 新增：打印时表头重复显示 */
  .print-table thead {
    display: table-header-group;
  }
  .print-table tfoot {
    display: table-footer-group;
  }
  .print-table tr {
    page-break-inside: avoid;
  }

  .out-in-table {
    margin-top: 20px;
  }
}
</style>

