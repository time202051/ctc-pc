<template>
  <div>
    <HeaderCom v-bind="$attrs" />
    <div class="title-container">
      <div>项目号</div>
      <div class="project-nr">ProjectNr:{{ apiInfo.projectCode }}</div>
      <div class="info-bar">信息栏 实验后样件 Post-test Samples</div>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="(item, index) in columns" :key="index" :width="item.width">
            <div>{{ item.label }}</div>
            <div>{{ item.labelEN }}</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in apiInfo.printStockOutDetailOutputList"
          :key="index"
        >
          <td v-for="(e, i) in columns" :key="i">{{ item[e.prop] }}</td>
        </tr>
      </tbody>
    </table>
    <img :src="img2" alt="pba" style="width: 100%; margin-top: 15px" />
  </div>
</template>

<script>
import HeaderCom from "@/components/PrintModel/com/headerCom.vue";

export default {
  components: {
    HeaderCom,
  },
  props: {
    img2: {
      type: String,
      default: "",
    },
    apiInfo: {
      type: Object,
      default: () => {
        return {};
      },
    },
    // tableData: {
    //   type: Array,
    //   default: [],
    // },
  },
  data() {
    return {
      columns: [
        {
          label: "日期",
          labelEN: "Date",
          prop: "date",
          width: "60",
        },
        {
          label: "样件名称",
          labelEN: "Product",
          prop: "productName",
        },
        {
          label: "实验号",
          labelEN: "TO/T",
          prop: "experimentTtpNumber",
        },
        {
          label: "箱号",
          labelEN: "Carton no.",
          prop: "boxCardNumber",
        },
        {
          label: "样件编号",
          labelEN: "TP/TS",
          prop: "experimentTtpNumber",
        },
        {
          label: "数量",
          labelEN: "Qty",
          prop: "qty",
        },
        {
          label: "单位",
          labelEN: "Unit",
          prop: "unit",
        },
        {
          label: "库位号",
          labelEN: "Location",
          prop: "cargoLocationCode",
        },
        {
          label: "备注",
          labelEN: "Remark",
          prop: "remarks",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.title-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
  margin-top: 15px;
  margin-bottom: 10px;
  font-weight: bold;
}
.project-nr {
  width: 200px;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #000;
    margin-top: 1px;
    margin-left: 83px;
  }
}
.info-bar {
  font-size: 16px;
  //   font-weight: bold;
}
table {
  border-collapse: collapse;
  width: 100%;
  font-size: 10px;
  td,
  th {
    border: 1px solid #000;
    padding: 4px;
    text-align: center; // 新增居中样式
  }
}
</style>
