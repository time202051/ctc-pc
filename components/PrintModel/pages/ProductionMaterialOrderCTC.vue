<template>
  <div>
    <HeaderCom v-bind="$attrs" />

    <div class="fcs">
      <div class="title-container">
        <div>项目号</div>
        <div class="project-nr">ProjectNr:{{ apiInfo.projectCode }}</div>
      </div>
      <div class="title-container">
        <div>样件单号</div>
        <div class="project-nr">SO Number</div>
      </div>
    </div>
    <div class="user-container">
      <div>用途</div>
      <div
        v-for="(item, index) in checkboxList"
        :key="index"
        class="checkbox-item"
      >
        <input
          v-model="item.value"
          type="checkbox"
        >
        <div>{{ item.label }}</div>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th
            v-for="(item, index) in columns"
            :key="index"
            :width="item.width"
          >
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
          <td
            v-for="(e, i) in columns"
            :key="i"
          >{{ e.prop == 'projectName'? apiInfo.projectName : item[e.prop] }}</td>
        </tr>
      </tbody>
    </table>
    <img
      :src="img2"
      alt="pba"
      style="width: 100%; margin-top: 15px"
    >
  </div>
</template>

<script>
import HeaderCom from "@/components/PrintModel/com/headerCom.vue";
export default {
  components: {
    HeaderCom
  },
  props: {
    img2: {
      type: String,
      default: ""
    },
    // tableData: {
    //   type: Array,
    //   default: [],
    // },
    apiInfo: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      checkboxList: [
        {
          label: "实验样件Test Parts",
          value: false
        },
        {
          label: "工程样件 Eng Parts",
          value: false
        },
        {
          label: "其他 Others",
          value: false
        }
      ],
      columns: [
        {
          label: "日期",
          labelEN: "Date",
          prop: "date",
          width: "60"
        },
        {
          label: "项目名称",
          labelEN: "Project Name",
          prop: "projectName"
        },
        {
          label: "货格",
          labelEN: "Location",
          prop: "cargoLocationCode"
        },
        {
          label: "零件号",
          labelEN: "Part Numbe",
          prop: "productCode"
        },
        {
          label: "零件名称",
          labelEN: "Part Name",
          prop: "productName"
        },
        {
          label: "单位",
          labelEN: "Unit",
          prop: "unit"
        },
        {
          label: "批次号",
          labelEN: "Batch Number",
          prop: "batchNumber"
        },
        {
          label: "参考及备注",
          labelEN: "Reference & Remarks",
          prop: "remarks"
        },
        {
          label: "数量",
          labelEN: "Qty",
          prop: "qty"
        }
      ]
    };
  }
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
  font-size: 12px;
  // font-weight: bold;
}
.project-nr {
  width: 220px;
  overflow: hidden;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #000;
    margin-left: 60px;
  }
}

.user-container {
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 20px;
  // font-weight: bold;
  .checkbox-item {
    display: flex;
    align-items: center;
    gap: 4px;
  }
}
table {
  border-collapse: collapse;
  width: 100%;
  font-size: 10px;
  margin-top: 10px;
  td,
  th {
    border: 1px solid #000;
    padding: 4px 2px;
    text-align: center; // 新增居中样式
  }
}
.fcs {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
