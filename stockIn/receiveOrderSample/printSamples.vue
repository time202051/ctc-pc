<template>
  <div v-show="false">
    <div
      id="printCarContent"
      class="printCarContent"
    >
      <div
        v-for="(item, index) in infos"
        :key="index"
        class="item"
      >
        <div
          :id="`qrcode-${item.tagNumber}`"
          class="qrcode"
        />
        <div>标签号:{{ item.tagNumber }}</div>
        <div>ALV零件号:{{ item.productCode }}</div>
        <div>入库单号:{{ item.billNo }}</div>
        <div>样件名称:{{ item.productName }}</div>
        <div>项目号:{{ item.projectCode }}</div>
        <div class="row">
          <div>项目名称:{{ item.projectName }}</div>
          <div>客户件号:{{ item.customProductCode }}</div>
          <div>状态描述:{{ item.statusDescription }}</div>
        </div>
        <div class="row">
          <div>数量:{{ item.qty }}</div>
          <div>PE:{{ item.receivedUser }}</div>
          <div>项目状态:{{ item.projectStatusStr }}</div>
        </div>
        <div class="row">
          <div>批次:{{ item.receivedBatch }}</div>
          <div>入场:{{ item.createdTime }}</div>
        </div>
      </div>
    </div>
    <el-button
      type="primary"
      :style="{ marginTop: '10px' }"
      @click="onPrint"
    >打印</el-button>
  </div>
</template>
<script>
import QRCode from "qrcodejs2";
import printJS from "print-js";
import { StockIn } from "@/api/request/swagger";
export default {
  data() {
    return {
      infos: [
        // {
        //   id: "64faa3ee-e78c-716e-32fa-3a19d453d73d",
        //   tagNumber: "YJ202505120003",
        //   stockInOrderStateStr: "已收货",
        //   stockInOrderState: 1,
        //   billNo: "20250512000001",
        //   company: "奥托立夫",
        //   wareHouseName: "测试数据库",
        //   customProductCode: null,
        //   productId: "00a41200-4012-70a8-23e6-3a1987749307",
        //   productCode: "ALV2504270001",
        //   productName: "23451345345",
        //   qty: 2,
        //   assembledQty: 0,
        //   statusDescription: null,
        //   unit: null,
        //   unitId: null,
        //   projectId: "4d30afb8-e456-fcbd-f558-3a18713c7c11",
        //   projectCode: "12321",
        //   projectName: "aa",
        //   projectStatus: 0,
        //   projectStatusStr: "保密Ⅱ级",
        //   tempProject: null,
        //   receivedBatch: "2025-05-12",
        //   tagPrintNumber: 66,
        //   employeeInfoId: "9991c635-1c5e-f2a5-f237-3a16efb8e64e",
        //   receivedUser: "测试员工2",
        //   employeePhoneNumber: "13412341231",
        //   storageLocation: "19b4680c-2e4c-f6a7-1800-3a18fc28c94c",
        //   storageLocationStr: "外库位046",
        //   remark: null,
        //   createdBy: "admin",
        //   createdTime: "2025-05-12 09:40:57",
        //   extraProperties: {},
        // },
        // {
        //   id: "d23a2ec2-513b-d6d6-9050-3a1a45f16b0d",
        //   tagNumber: "YJ202506030001",
        //   stockInOrderStateStr: "创建",
        //   stockInOrderState: 0,
        //   billNo: null,
        //   company: "奥托立夫",
        //   wareHouseName: "测试数据库",
        //   customProductCode: null,
        //   productId: "20122e50-e908-b67e-db27-3a1a45f16ac3",
        //   productCode: "ALV202500001",
        //   productName: "231",
        //   qty: 1,
        //   assembledQty: 0,
        //   statusDescription: "1",
        //   unit: "MM",
        //   unitId: null,
        //   projectId: "8d656497-7148-86fc-4dd5-3a1925542e0b",
        //   projectCode: "11112222121",
        //   projectName: "测试XM001",
        //   projectStatus: 0,
        //   projectStatusStr: "保密Ⅰ级",
        //   tempProject: null,
        //   receivedBatch: "2025-06-03",
        //   tagPrintNumber: 4,
        //   employeeInfoId: "2fec1dc3-9621-6dd4-ad8f-3a17047fecf3",
        //   receivedUser: "15522233333",
        //   employeePhoneNumber: "15553434345",
        //   storageLocation: "6a859b50-8a61-67c6-1574-3a18fc28c94c",
        //   storageLocationStr: "外库位053",
        //   remark: null,
        //   createdBy: "admin",
        //   createdTime: "2025-06-03 11:10:10",
        //   extraProperties: {},
        // },
      ]
    };
  },

  methods: {
    generateQRCode(infos = []) {
      // 清除已存在的二维码
      infos.forEach(item => {
        if (document.getElementById(`qrcode-${item.tagNumber}`)) {
          document.getElementById(`qrcode-${item.tagNumber}`).innerHTML = "";
        }
        // 生成新的二维码
        new QRCode(`qrcode-${item.tagNumber}`, {
          text: item.tagNumber || "", // 需要生成二维码的内容
          width: 150,
          height: 150,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H
        });
      });
    },
    onPrintJS() {
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
    },
    onPrint(ids = []) {
      this.post({
        url: `${StockIn.sampleBatchPrintLabel}`,
        data: {
          stockInIds: ids
        }
      }).then(res => {
        this.infos = res.result || [];
        this.$nextTick(() => {
          // 保证DOM一定存在
          this.generateQRCode(res.result);
          this.onPrintJS();
        });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.printCarContent {
  font-size: 12px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  .item {
    padding: 10px 5px;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    .qrcode {
      position: absolute;
      right: 10px;
      top: 10px;
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
  }
}

@media print {
  .printCarContent {
    width: 100mm !important; // 确保打印尺寸
    height: 70mm !important; // 确保打印尺寸
    border-width: 0 !important;
    // page-break-before: always;
    page-break-inside: avoid;
    position: relative;
    font-size: 12px;
    position: absolute !important;
    top: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    left: 0 !important;
    .item {
      height: 100% !important;
      display: flex !important;
      flex-direction: column !important;
      justify-content: space-between !important;
      page-break-inside: avoid; // 防止分页
      page-break-before: always;
      position: relative !important;
      .qrcode {
        position: absolute !important;
        right: 10px !important;
        top: 10px !important;
      }
    }
  }
}
</style>
