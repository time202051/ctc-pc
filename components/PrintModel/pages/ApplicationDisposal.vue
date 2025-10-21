<template>
  <div class="applicationDisposal-container">
    <HeaderCom v-bind="$attrs" />
    <img
      :src="img1"
      alt="pba"
      style="width: 100%; margin-top: 15px"
      class="headerImg"
    >
    <table class="table-container">
      <thead>
        <tr>
          <th width="60">序号</th>
          <th width="110">*车型</th>
          <th width="110">*VIN码</th>
          <th width="110">发动机号</th>
          <th width="35">数量</th>
          <th width="40">单位</th>
          <th width="120">报废后所得残值金额</th>
          <th width="50">备注</th>
          <th width="6" />
          <th width="60">库位号</th>
          <th width="70">*入库日期</th>
          <th width="100">*信息核对（Y/N)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index">
          <td width="40">{{ index + 1 }}</td>
          <td>{{ item.bodyWorkTypeStr }}</td>
          <td />
          <td />
          <td>{{ item.qty }}</td>
          <td />
          <td />
          <td />
          <td v-if="index === 0" :rowspan="tableData.length" />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td colspan="4" style="text-align: center; font-weight: bold">
            *合计:
          </td>
          <td>{{ totalInfo.qty }}</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
      </tbody>
    </table>
    <img :src="img2" alt="pba" style="width: 100%; margin-top: 15px">
  </div>
</template>

<script>
import HeaderCom from "@/components/PrintModel/com/headerCom.vue";

export default {
  components: {
    HeaderCom
  },
  props: {
    img1: {
      type: String,
      default: ""
    },
    img2: {
      type: String,
      default: ""
    },
    tableData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      totalInfo: {
        qty: 0
      }
    };
  },
  watch: {
    // apiInfo: {
    //   handler(newVal) {
    //     console.log("newVal", newVal);
    //   },
    //   deep: true,
    // },
  },
  created() {
    this.tableData.forEach(item => {
      this.totalInfo.qty += Number(item.qty);
    });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.applicationDisposal-container {
  position: relative;
  .headerImg {
    position: absolute;
    left: 0;
    top: 15px;
  }
  .table-container {
    margin-top: 41px;
  }
}
table {
  border-collapse: collapse;
  width: 100%;
  font-size: 10px;
  td,
  th {
    border: 1px solid #808080;
    padding: 4px;
    text-align: center; // 新增居中样式
  }
}
@media print {
  .applicationDisposal-container {
    position: relative;
    .headerImg {
      position: absolute;
      left: 0;
      top: 15px;
    }
    .table-container {
      margin-top: 41px;
    }
  }
  // table {
  //   font-size: 10px;
  //   border-collapse: collapse;
  //   width: 100%;
  //   td,
  //   th {
  //     border: 1px solid #808080;
  //     padding: 4px;
  //     text-align: center; // 新增居中样式
  //   }
  // }
}
</style>
