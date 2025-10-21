<template>
  <div>
    <HeaderCom v-bind="$attrs" />
    <div class="content">
      <div class="table-container">
        <table>
          <tr>
            <td width="88">车型</td>
            <td width="105">{{ apiInfo.frameNumber }}</td>
            <td width="88">颜色</td>
            <td />
            <td width="61">VIN</td>
            <td width="357" />
          </tr>
        </table>
      </div>
      <img :src="img" alt="pba" style="width: 100%">
    </div>
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
table {
  border-collapse: collapse;
  width: 100%;
  padding: 0 4px;
  td,
  th {
    border: 1px solid #000;
    padding: 4px;
    text-align: center; // 新增居中样式
    height: 35px;
  }
}
.table-container {
  padding: 0 3px 0 2px;
  margin-top: 15px;
}
.content {
  position: relative;
  margin-top: 15px;
  padding-top: 20px;
  box-sizing: border-box;
  table {
    position: absolute;
    left: 2px;
    top: 0;
    width: calc(100% - 5px);
  }
}
</style>
