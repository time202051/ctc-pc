<template>
  <div class="right-content">
    <!-- 表单信息部分 -->
    <div class="form-info">
      <div class="row">
        <div class="col">
          <span>检测工程师(电话)：</span>
          <span class="underline">{{ formData.engineer }}</span>
        </div>
        <div class="col">
          <span>系统产品工程师(电话)：</span>
          <span class="underline">{{ formData.systemEngineer }}</span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <span>项目名称：</span>
          <span class="underline">{{ formData.projectName }}</span>
        </div>
        <div class="col">
          <span>项目号：</span>
          <span class="underline">{{ formData.projectNo }}</span>
        </div>
        <div class="col">
          <span>成本中心：</span>
          <span class="underline">{{ formData.costCenter }}</span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <span>实验室号：</span>
          <span class="underline">{{ formData.labNo }}</span>
        </div>
        <div class="col">
          <span>SO号：</span>
          <span class="underline">{{ formData.soNo }}</span>
        </div>
        <div class="col">
          <span>填单日期：</span>
          <span class="underline">{{ formData.fillDate }}</span>
        </div>
        <div class="col">
          <span>需求日期：</span>
          <span class="underline">{{ formData.requireDate }}</span>
        </div>
      </div>
      <div class="checkBox-box">
        <!-- 装车标准选项 -->
        <div class="standards">
          <span>装车执行标准：</span>
          <label v-for="(item, index) in standards" :key="index">
            <input v-model="item.checked" type="checkbox" class="input-box">
            {{ item.label }}
          </label>
        </div>

        <!-- 实验类型选项 -->
        <div>
          <div class="test-types">
            <span>实验类型：</span>
            <label v-for="(item, index) in testTypes" :key="index">
              <input v-model="item.checked" type="checkbox" class="input-box">
              <span>{{ item.label }}</span>
              <div v-if="item.label == '高低温度'" class="underlineCheck">:</div>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- 表格部分 -->
    <div class="table-container">
      <table class="main-table">
        <thead>
          <tr>
            <th>NO</th>
            <th>样件名称</th>
            <th>数量</th>
            <th>批次/状态</th>
            <th>库位号</th>
            <th>T-或TP-</th>
            <th>备注</th>
            <th>扭矩需求</th>
            <th>物料员</th>
            <th>样件签收</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.batch }}</td>
            <td>{{ item.location }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.remark }}</td>
            <td>{{ item.demand }}</td>
            <td v-if="index === 0" :rowspan="tableData.length" class="signature-cell">
              <div class="signature-text">物料员签名/日期</div>
            </td>
            <td v-if="index === 0" :rowspan="tableData.length" class="signature-cell">
              <div class="signature-text">样件签收人签名/日期</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 底部说明 -->
    <div class="footer-notes">
      <p>
        （黄底部分PE/SE填写；请系统产品工程师相应填写；空白代表无任何要求；未填写的物料，物料员拒绝发料）
      </p>
      <p>（以上签章全部完成后由物料员待此单复印，一份用于库存管理，一份交装车组工作完结号）</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        engineer: "",
        systemEngineer: "",
        projectName: "",
        projectNo: "",
        costCenter: "",
        labNo: "",
        soNo: "",
        fillDate: "",
        requireDate: ""
      },
      standards: [
        { label: "装车指导书", checked: false },
        { label: "规范指导", checked: false }
      ],
      testTypes: [
        { label: "高低温度", checked: false },
        { label: "箱内外温湿", checked: false },
        { label: "特态点爆", checked: false }
      ],
      tableData: []
    };
  },
  created() {
    this.initTableData();
  },
  methods: {
    initTableData() {
      this.tableData = Array(52)
        .fill()
        .map((_, index) => ({
          name: "测试样件额为",
          quantity: "123",
          batch: "A001",
          location: "L001",
          type: "T-001",
          remark: "备注信息",
          demand: "正常"
        }));
    }
  }
};
</script>

<style lang="scss" scoped>
.pab-deployment {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  // padding: 20px;
  font-size: 14px;
  background: #fff;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.logo {
  width: 120px;
  height: auto;
}

.title {
  flex: 1;
  text-align: center;
}

.title .zh {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
}

.title .en {
  font-size: 18px;
}

.divider {
  width: 100%;
  height: 4px;
  border-top: 1px solid #ff1111;
  border-bottom: 1px solid #ff1111;
  margin: 20px 0;
}

.main-content-wrapper {
  display: flex;
  width: 100%;
  min-height: 100%;
  position: relative;
}

.left-info {
  width: 40px;
  margin-right: 10px;
  display: flex;
  align-items: stretch;
}

.green-block {
  background-color: #00ff00;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  min-height: 100%;
  width: 80px;
}

.vertical-text {
  writing-mode: vertical-lr;
  text-orientation: upright;
  white-space: nowrap;
  font-size: 16px;
  text-align: center;
  letter-spacing: 2px;
  font-weight: normal;
}

.right-content {
  flex: 1;
}

.form-info {
  // margin-bottom: 10px;
}

.row {
  display: flex;
  margin-bottom: 15px;
  gap: 20px;
  flex-wrap: nowrap;
  align-items: center;
}

.col {
  flex: 1;
  white-space: nowrap;
  display: flex;
  align-items: flex-end;
}
.col span:first-child {
  white-space: nowrap;
}

.underline {
  border-bottom: 1px solid #000;
  padding: 0 5px;
  min-width: 100px;
  display: inline-block;
  margin-left: 5px;
}
.checkBox-box {
  display: flex;
  gap: 20px;
}
.standards,
.test-types {
  margin: 10px 0;
  display: flex;
  align-items: center;
  .input-box {
    margin-right: 4px;
  }
}

.standards label,
.test-types label {
  margin-right: 20px;
  display: flex;
  align-items: center;
  position: relative;
  font-weight: 500;

  .underlineCheck {
    min-width: 40px;
    // right: 0;
    // bottom: 0;
  }
  .underlineCheck::after {
    content: "";
    position: absolute;
    bottom: 0%;
    right: -10px;
    // transform: translate(-50%, -50%);
    width: 40px;
    height: 1px;
    border-bottom: 1px solid #000;
  }
}

.main-table {
  width: 100%;
  border-collapse: collapse;
}

.main-table th,
.main-table td {
  border: 1px solid #000;
  padding: 8px;
  text-align: center;
}

.main-table th {
  background-color: #f0f0f0;
}

.main-table tr:nth-child(even) td {
  background-color: #fff9e6;
}

.signature-cell {
  background-color: #f5f5f5;
  width: 80px;
  .signature-text {
    color: #dfdedd;
  }
}

// .vertical-signature {
//   // writing-mode: vertical-lr;
//   // text-orientation: upright;
//   letter-spacing: 1px;
//   font-size: 12px;
// }

.footer-notes {
  font-size: 12px;
  color: #666;
  // margin-top: 20px;
}

.footer-notes p {
  margin: 5px 0;
}

.button-container {
  margin-top: 20px;
  text-align: center;
}

@media print {
  // @page {
  //   margin: 0.5cm;
  //   size: A4;
  // }
  .pab-deployment {
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 0;
  }

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    page-break-after: avoid;
  }

  .main-content-wrapper {
    min-height: calc(100vh - 2cm);
    // page-break-before: avoid;
    // page-break-inside: auto;
  }

  .left-info {
    height: auto;
    position: relative;
  }

  .green-block {
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00ff00 !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  .vertical-text {
    position: sticky;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: normal;
  }

  .right-content {
    flex: 1;
    page-break-inside: auto;
  }

  .form-info {
    page-break-inside: avoid;
  }

  .table-container {
    page-break-before: avoid;
    page-break-inside: auto;
  }

  .main-table {
    border-collapse: collapse;
    width: 100%;
    page-break-inside: auto;
  }

  .main-table th,
  .main-table td {
    border: 1px solid #000;
    padding: 4px 8px;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  .main-table th {
    background-color: #f0f0f0 !important;
  }

  .main-table tr:nth-child(even) td {
    background-color: #fff9e6 !important;
  }

  .signature-cell {
    background-color: #f5f5f5 !important;
  }

  .footer-notes {
    page-break-inside: avoid;
    page-break-before: auto;
  }

  #no-print {
    display: none !important;
  }

  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    color-adjust: exact !important;
  }
}
</style>
