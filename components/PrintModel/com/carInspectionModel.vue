<template>
  <div class="car-inspection">
    <div class="header-row">
      <div class="date-field">
        <span>装车日期：</span><span class="underline">{{ inspectionData.date }}</span>
      </div>
      <div class="date-field">
        <span>装车人员：</span><span class="underline">{{ inspectionData.person }}</span>
      </div>
    </div>

    <!-- 主检查表格 -->
    <table class="inspection-table">
      <thead>
        <tr>
          <th rowspan="2">检查项目</th>
          <th rowspan="2">检查内容</th>
          <th colspan="3">紧固螺栓类型</th>
          <th rowspan="2">实打扭矩</th>
          <th rowspan="2">实测电阻/检查结果</th>
        </tr>
        <tr>
          <th>原厂</th>
          <th>共用</th>
          <th>普通</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in inspectionItems" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.content }}</td>
          <td>{{ item.original }}</td>
          <td>{{ item.shared }}</td>
          <td>{{ item.normal }}</td>
          <td>{{ item.torque }}</td>
          <td>{{ item.result }}</td>
        </tr>
      </tbody>
    </table>

    <table class="equipment-table">
      <tr>
        <td>电阻测量设备编号</td>
        <td>{{ inspectionData.equipmentNo }}</td>
        <td>校准有效期</td>
        <td>{{ inspectionData.calibrationDate }}</td>
      </tr>
    </table>

    <!-- 新增签名表格 -->
    <table class="signature-table">
      <tr>
        <td class="statement-cell">
          我已确认以上装车所使用的样件状态符合需求；并对样件的装车做了全面检查，符合装车及试验要求
        </td>
        <td class="signature-cell">签名/日期<br />(产品/系统工程师)</td>
        <td class="signature-cell">签名/日期<br />(检测工程师)</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "CarInspectionModel",
  data() {
    return {
      inspectionData: {
        date: "",
        person: "",
        equipmentNo: "",
        calibrationDate: ""
      },
      inspectionItems: [
        {
          id: 1,
          name: "副驾气囊 PAB",
          content: "电阻(2.5 + 0.5- 0.5)Ω，达到规定扭矩",
          original: "",
          shared: "",
          normal: "",
          torque: "Nm",
          result: "Ω"
        },
        {
          id: 2,
          name: "副驾座椅",
          content: "安装达到规定扭矩，导轨活动正常",
          original: "",
          shared: "",
          normal: "",
          torque: "Nm",
          result: ""
        },
        {
          id: 3,
          name: "仪表板总成",
          content: "达到扭矩要求；安装平常，卡扣无误",
          original: "",
          shared: "",
          normal: "",
          torque: "Nm",
          result: ""
        },
        {
          id: 4,
          name: "压力管",
          content: "气管无折弯、破裂；气管接头完整，不松动",
          original: "",
          shared: "",
          normal: "",
          torque: "NA",
          result: ""
        },
        {
          id: 5,
          name: "气囊线束",
          content: "引线短路；线束匹配，接头无松动",
          original: "",
          shared: "",
          normal: "",
          torque: "NA",
          result: ""
        },
        {
          id: 6,
          name: "实验号标签",
          content: "是否每个样件都有实验号标签及一一对应",
          original: "",
          shared: "",
          normal: "",
          torque: "NA",
          result: ""
        },
        {
          id: 7,
          name: "车身清洁",
          content: "地面吸尘；车内无工具、异物、样件等遗留",
          original: "",
          shared: "",
          normal: "",
          torque: "NA",
          result: ""
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.car-inspection {
  padding-top: 5px;
  font-size: 14px;
  page-break-inside: avoid;
  .header-row {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    // flex布局中的元素间距20px
    gap: 40px;
    .date-field {
      display: flex;
      align-items: flex-end;
    }
  }

  .underline {
    border-bottom: 1px solid #000;
    min-width: 100px;
    display: inline-block;
    margin: 0 5px;
  }
}

.inspection-table {
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #000;
    padding: 2px 0;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
}

.equipment-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 5px;
  table-layout: auto;
  margin: 15px 0;

  td {
    border: 1px solid #000;
    padding: 2px 5px;
    text-align: center;
    white-space: nowrap;
  }
  td:nth-child(odd) {
    width: 1px; // 让宽度由内容决定
  }
}

.signature-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;

  td {
    border: 1px solid #000;
    padding: 2px 5px;
    text-align: center;
  }

  .statement-cell {
    width: 40%;
    text-align: left;
    white-space: normal;
  }

  .signature-cell {
    width: 30%;
    color: #dfdedd;
  }
}

@media print {
  .car-inspection {
    page-break-inside: avoid;
  }
}
</style>
