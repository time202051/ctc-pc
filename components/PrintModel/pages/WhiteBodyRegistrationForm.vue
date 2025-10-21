<template>
  <div class="whiteBodyRegistrationForm">
    <HeaderCom v-bind="$attrs" />
    <div class="table-container">
      <table>
        <tr>
          <td width="82">整车厂商:</td>
          <td width="140">{{ apiInfo.carNumber }}</td>
          <td width="71">车型项目：</td>
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
.whiteBodyRegistrationForm {
  width: 74%;
  margin: 0 auto;
}
.table-container {
  padding: 0 3px;
}
table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 18px;
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
  color: #888686;
}
</style>
