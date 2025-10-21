<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      border
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column
        prop="tSNumber"
        label="TP"
        show-overflow-tooltip
        align="center"
      >
      </el-table-column>
    </el-table>
    <div class="btn-box">
      <el-button type="primary" @click="onSubmit">确定</el-button>
    </div>
  </div>
</template>

<script>
import { StockOut } from "@/api/request/swagger";

export default {
  props: {
    boxCardNumber: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      tableData: [
        //     {
        //     tSNumber: '2016-05-01',
        // }, {
        //     tSNumber: '2016-05-02',
        // }, {
        //     tSNumber: '2016-05-03',
        // }, {
        //     tSNumber: '2016-05-04',
        // }, {
        //     tSNumber: '2016-05-05',
        // }
      ],
      multipleSelection: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const res = await this.get({
        url: StockOut.tSNumberManagements,
        data: {
          boxCardNumber: this.boxCardNumber,
        },
      });
      if (res.code !== 200) return;
      this.tableData = res.result;
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    onSubmit() {
      const arr = this.multipleSelection.map((item) => item.tSNumber);
      console.log(arr);
      this.$emit("submit", arr);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-box {
  margin-top: 20px !important;
  text-align: center;
}
</style>
