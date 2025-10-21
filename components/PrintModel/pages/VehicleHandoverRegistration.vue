<template>
  <!-- F113 实验车辆交接登记单 2.1 -->
  <div>
    <HeaderCom v-bind="$attrs" :style="{ marginBottom: '15px' }" />
    <table>
      <tr>
        <td width="90">整车厂商：</td>
        <td />
        <td width="90">车型颜色：</td>
        <td />
        <td width="90">颜色：</td>
        <td />
        <td width="90">车架号：</td>
        <td width="210">{{ apiInfo.frameNumber }}</td>
      </tr>
      <tr>
        <td>库位号：</td>
        <td />
        <td>实验室：</td>
        <td />
        <td>实验人员：</td>
        <td />
        <td>发动机号：</td>
        <td />
      </tr>
    </table>

    <img
      src="@/assets/print/vehicleHandoverRegistration1.png"
      alt="pba"
      style="width: 100%"
    >
  </div>
</template>

<script>
import HeaderCom from "../com/headerCom.vue";
export default {
  components: {
    HeaderCom
  },
  props: {
    apiInfo: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 15px;
  font-size: 12px;
  td {
    border: 1px solid #000;
    padding: 8px;
  }
}
@media print {
  table {
    font-size: 12px;
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 15px;

    td {
      border: 1px solid #000;
      padding: 8px;
    }
  }
}
</style>
