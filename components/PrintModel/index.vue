<template>
  <div class="print-model">
    <div class="header-container-box">
      <div>打印模板:</div>
      <el-select v-model="type" placeholder="请选择" @change="modelInit">
        <el-option
          v-for="item in options"
          :key="item.type"
          :label="item.label"
          :value="item.type"
        />
      </el-select>
    </div>
    <el-divider>模板预览</el-divider>
    <div id="printBox" class="print-box">
      <component :is="componentName" v-bind="{ ...currentItem, ...$attrs }" :api-info="apiInfo" />
    </div>
    <el-divider />
    <div style="text-align: center">
      <!-- <el-button type="primary" @click="printModel">
        打印---{{ componentName }}---{{ currentItem.type }}
      </el-button> -->
      <el-button type="primary" @click="printModel">打印</el-button>
    </div>
  </div>
</template>

<script>
import printJS from "print-js";
import { StockOut } from "@/api/request/swagger";
import { staticData } from "./staticData.js";
import { mapActions } from "vuex";
import { typeGroupEnum } from "@/components/PrintModel/staticData.js";

const requireComponent = require.context("./pages", false, /\.vue$/);
const modules = {};
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = fileName.replace(/^\.\/(.*)\.vue$/, "$1");
  modules[componentName] = componentConfig.default || componentConfig;
});

export default {
  components: {
    ...modules // 展开动态导入的组件
  },
  props: {
    id: {
      // 字符串
      type: String,
      default: ""
    },
    whiteListByType: {
      // 字符串数组
      type: Array,
      default: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    }
  },
  data() {
    return {
      componentName: "",
      options: [],
      currentItem: {}, // 当前选中的组件
      apiInfo: {},
      type: null
    };
  },
  created() {
    //  过滤staticData，type包含在whiteListByType中显示
    this.options = staticData.filter(item => this.whiteListByType.includes(item.type));
    // this.type = this.options[0].type;
    // this.currentItem = this.options[0];
    // this.componentName = this.currentItem.componentName;
    // this.getComData(this.id);
  },
  methods: {
    ...mapActions("user", ["setCount"]),
    async getComData(id) {
      const sampleApiWhiteList = [1, 2, 3, 4, 5, 6, 7, 9, 11];
      const printCarbodyStockOutWhiteList = [0, 10, 13, 14, 15, 16, 17];
      if (sampleApiWhiteList.includes(this.currentItem.type)) {
        // 样件
        const res = await this.post({
          url: StockOut.printSamplesStockOut,
          isLoading: false,
          data: {
            id,
            printType: 1
          }
        });
        this.apiInfo = res.result;
      } else if (printCarbodyStockOutWhiteList.includes(this.currentItem.type)) {
        // 车身
        const res = await this.post({
          url: StockOut.printCarbodyStockOut,
          isLoading: false,
          data: {
            id
          }
        });
        this.apiInfo = res.result || {};
      }
    },
    printModel() {
      printJS({
        printable: "printBox",
        type: "html",
        targetStyles: ["*"],
        scanStyles: false,
        documentTitle: "",
        ignoreElements: ["no-print"],
        onPrintDialogClose: () => {},
        style: `
          @page {
            margin: 5mm;
            size: A4;
          }
          ${Array.from(document.styleSheets)
    .map(styleSheet => {
      try {
        return Array.from(styleSheet.cssRules)
          .map(rule => rule.cssText)
          .join("");
      } catch (e) {
        return "";
      }
    })
    .join("")}`
      });
      if (this.type === 12) {
        this.setCount();
      }
    },
    // 初始化模型数据
    async modelInit(val) {
      this.currentItem = staticData.find(item => item.type === val);
      this.componentName = this.currentItem.componentName;
      await this.getComData(this.id);
      console.log("打印内容", this.componentName, this.currentItem.type);
    }
  }
};
</script>

<style lang="scss" scoped>
.header-container-box {
  display: flex;
  align-items: center;
  width: 400px;

  div {
    white-space: nowrap;
  }
}

.print-box {
  // border: 1px solid #ccc;
  width: 210mm;
  margin: 0 auto;
  background: white;
  font-family: SimSun, "宋体", serif !important;
}

// 打印样式
@media print {
  // 强制所有元素打印颜色， 强制所有元素打印颜色
  * {
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
  }
}
</style>
