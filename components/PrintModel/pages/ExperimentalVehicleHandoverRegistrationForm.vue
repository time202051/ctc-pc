<template>
  <div class="experimentalVehicleHandoverRegistrationForm">
    <HeaderCom v-bind="$attrs" />
    <div class="table-container">
      <table>
        <tr>
          <td width="82">整车厂商:</td>
          <td width="82">{{ apiInfo.carNumber }}</td>
          <td width="90">车型项目：</td>
          <td width="82">{{ apiInfo.frameNumber }}</td>
          <td width="110">颜色：</td>
          <td width="82" />
          <td width="80">车架号</td>
          <td width="140" />
        </tr>
        <tr>
          <td>驾驶位置:</td>
          <td />
          <td>变速箱：</td>
          <td />
          <td>SE/PTL/客服：</td>
          <td />
          <td>发动机号</td>
          <td />
        </tr>
      </table>
    </div>

    <img :src="img" alt="pba" style="width: 100%">
  </div>
</template>

<script>
import HeaderCom from "@/components/PrintModel/com/headerCom.vue";

export default {
  components: {
    HeaderCom
  },
  props: {
    img: {
      type: String,
      default: ""
    },
    apiInfo: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.experimentalVehicleHandoverRegistrationForm {
  width: 78%;
  margin: 0 auto;
}
.table-container {
  padding: 0 3px;
}
table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 10px;
  font-size: 14px;
  margin-top: 8px;
  td {
    border: 1px solid #000;
    padding: 5px 0;
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
</style>
