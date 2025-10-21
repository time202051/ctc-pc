<template>
  <div class="handover-registration">
    <HeaderCom v-bind="$attrs" />
    <div class="table-container">
      <table>
        <tr>
          <td width="52">整车厂商:</td>
          <td />
          <td width="52">车型颜色：</td>
          <td />
          <td width="52">颜色：</td>
          <td />
          <td width="52">车架号：</td>
          <td width="120">{{ apiInfo.frameNumber }}</td>
        </tr>
        <tr>
          <td>驾驶位置：</td>
          <td />
          <td>变速箱：</td>
          <td />
          <td>SE/PTL客服：</td>
          <td />
          <td>发动机号：</td>
          <td />
        </tr>
      </table>
    </div>

    <img :src="img" alt="pba" style="width: 100%" />
  </div>
</template>

<script>
import HeaderCom from "@/components/PrintModel/com/headerCom.vue";

export default {
  components: {
    HeaderCom,
  },
  props: {
    img: {
      type: String,
      default: "",
    },
    apiInfo: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.handover-registration {
  width: 67%;
  margin: 0 auto;
}
.table-container {
  padding: 0 3px;
}
table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 10px;
  font-size: 10px;
  margin-top: 8px;
  td {
    border: 1px solid #000;
    padding: 5px 0;
    text-align: center;
  }
}
</style>
