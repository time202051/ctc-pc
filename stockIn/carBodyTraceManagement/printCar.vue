<template>
  <div class="container-box">
    <div id="printCarContent" class="printCarContent">
      <div id="qrcode" class="qrcode" />
      <div>标签号:{{ info.carBodyTagNumber }}</div>
      <div>车架号:{{ info.frameNumber }}</div>
      <div>车身类型:{{ info.bodyWorkTypeStr }}</div>
      <div>项目号:{{ info.projectCode }}</div>
      <div class="row">
        <div>状态1:{{ info.statusDescription1Str }}</div>
        <div>项目名称:{{ info.projectName }}</div>
      </div>
      <div class="row">
        <div>状态2:{{ info.statusDescription2 }}</div>
        <div>项目状态:{{ info.projectStatusStr }}</div>
      </div>
      <div class="row">
        <div>PE:{{ info.receivedUser }}</div>
        <div>电话:{{ info.employeePhoneNumber }}</div>
        <div>入场:{{ info.admissionDate }}</div>
      </div>
    </div>
    <el-button type="primary" :style="{ marginTop: '10px' }" @click="onPrint"
      >打印</el-button
    >
  </div>
</template>
<script>
import QRCode from "qrcodejs2";
import printJS from "print-js";
import { CarBody } from "@/api/request/swagger";
export default {
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      info: {
        bqh: "",
        qrCode: "",
      },
    };
  },
  created() {
    this.init();
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.generateQRCode();
    // });
  },
  methods: {
    init() {
      this.post({
        url: `${CarBody.printLabel}/${this.id}`,
      }).then((res) => {
        console.log(res);
        this.info = res.result;
        this.generateQRCode();
      });
    },
    generateQRCode() {
      // 清除已存在的二维码
      if (document.getElementById("qrcode")) {
        document.getElementById("qrcode").innerHTML = "";
      }
      // 生成新的二维码
      new QRCode("qrcode", {
        text: this.info.carBodyTagNumber || "", // 需要生成二维码的内容
        width: 140,
        height: 140,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    },
    onPrint() {
      printJS({
        printable: "printCarContent",
        type: "html",
        targetStyles: ["*"],
        scanStyles: false,
        documentTitle: "",
        ignoreElements: ["no-print"],
        // css: "./printModel.scss",
        style: `
          @page {
            margin:0;
            size: 100mm 70mm;
          }
          ${Array.from(document.styleSheets)
            .map((styleSheet) => {
              try {
                return Array.from(styleSheet.cssRules)
                  .map((rule) => rule.cssText)
                  .join("");
              } catch (e) {
                return "";
              }
            })
            .join("")}`,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.container-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.printCarContent {
  width: 100mm;
  height: 70mm;
  // padding: 10px 5px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border: 1px solid #000;
  white-space: nowrap;
  font-size: 12px;
  padding: 10px 5px;

  overflow: hidden;
  .qrcode {
    position: absolute;
    right: 10px;
    top: 10px;
  }
}

.row {
  display: flex;
  align-items: center;
  width: 100%;
  div {
    flex: 1;
    white-space: nowrap;
  }
}
@media print {
  // @page {
  //   size: 60mm 40mm; // 设置打印页面尺寸
  //   margin: 0; // 去除页边距
  // }
  .printCarContent {
    width: 100mm !important; // 确保打印尺寸
    height: 70mm !important; // 确保打印尺寸
    padding: 10px 5px;
    border-width: 0 !important;
    page-break-inside: avoid; // 防止分页
    position: relative;
    font-size: 12px;
  }
}
</style>
