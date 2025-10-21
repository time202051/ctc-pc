<template>
  <div class="car-inspection">
    <!-- 第一行 -->
    <div class="row">
      <div class="col">
        <span>拆车日期：</span>
        <span class="underline">{{ formData.dismantleDate }}</span>
      </div>
      <div class="col">
        <span>拆车人员：</span>
        <span class="underline">{{ formData.dismantlePerson }}</span>
      </div>
    </div>

    <!-- 第二行 -->
    <div class="row check-items">
      <div class="col">
        <input type="checkbox" v-model="formData.partIdentified" />
        <span>试验后样件标识、编号</span>
      </div>
      <div class="col">
        <input type="checkbox" v-model="formData.carCleaned" />
        <span>车内清洁、无异物</span>
      </div>
      <div class="col">
        <span>车身检查：</span>
        <input type="checkbox" v-model="formData.carNormal" />
        <span>无异常</span>
        <input type="checkbox" v-model="formData.carAbnormal" />
        <span>有异常，见下表</span>
      </div>
    </div>

    <!-- 异常描述表格 -->
    <table class="inspection-table">
      <tr>
        <td class="label-cell">异常内容描述:</td>
        <td class="label-cell">产品/系统工程师意见:</td>
        <td class="label-cell">
          返修后效果确认:<br />
          <span class="sub-text">(由产品/系统工程师确认)</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "CarInspectionModel",
  data() {
    return {
      formData: {
        dismantleDate: "",
        dismantlePerson: "",
        partIdentified: false,
        carCleaned: false,
        carNormal: false,
        carAbnormal: false
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.car-inspection {
  width: 100%;
  margin-top: 5px;
  page-break-inside: avoid;
}

.row {
  display: flex;
  margin-bottom: 15px;
  gap: 20px;
  align-items: center;
}

.col {
  flex: 1;
  white-space: nowrap;
  display: flex;
  align-items: flex-end;
}

.underline {
  border-bottom: 1px solid #000;
  padding: 0 5px;
  min-width: 100px;
  display: inline-block;
  margin-left: 5px;
}

.check-items {
  input[type="checkbox"] {
    margin-right: 5px;
  }
  .col {
    display: flex;
    align-items: center;
    span {
      margin-right: 10px;
    }
  }
}

.inspection-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;

  td {
    border: 1px solid #000;
    height: 80px;

    &.label-cell {
      width: 150px;
      height: 80px;
      text-align: center;
      vertical-align: top;
    }
  }
}

.sub-text {
  font-size: 12px;
  color: #dfdedd;
}

@media print {
  .car-inspection {
    page-break-inside: avoid;
  }

  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
}
</style>
