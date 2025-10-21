<template>
  <div>
    <!-- 搜索框 -->
    <div style="display: flex; align-items: center; margin-bottom: 10px; gap: 10px">
      <el-input
        v-model="formData.productCode"
        placeholder="请输入样号名筛选"
        clearable
        style="width: 200px"
      />
      <el-input
        v-model="formData.boxCode"
        placeholder="请输入箱卡号"
        clearable
        style="width: 200px"
      />
      <el-input
        v-model="formData.projectCode"
        placeholder="请输入项目号"
        clearable
        style="width: 200px"
      />
      <el-input
        v-model="formData.customProductCode"
        placeholder="请输入客户件号"
        clearable
        style="width: 200px"
      />
      <el-input
        v-model="formData.productBatch"
        placeholder="请输入物料批次"
        clearable
        style="width: 200px"
      />
      <el-input
        v-model="formData.employeeName"
        placeholder="请输入PE名称"
        clearable
        style="width: 200px"
      />
      <el-input
        v-model="formData.productName"
        placeholder="请输入样件名称"
        clearable
        style="width: 200px"
      />
      <el-input
        v-model="formData.projectName"
        placeholder="请输入项目名称"
        clearable
        style="width: 200px"
      />
      <el-button
        type="primary"
        @click="search"
      >搜索</el-button>
      <el-button
        type="primary"
        class="reset"
        @click="onReset"
      >重置</el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      border
      :max-height="800"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="40"
        align="center"
      />
      <el-table-column
        prop="boxCode"
        label="箱卡号"
        align="center"
      />
      <el-table-column
        prop="productCode"
        label="样件号"
        align="center"
      />
      <el-table-column
        prop="productName"
        label="样件名称"
        align="center"
      />
      <el-table-column
        prop="productBatch"
        label="批次号"
        align="center"
      />
      <el-table-column
        prop="usableQty"
        label="可用库存"
        align="center"
      />
      <el-table-column
        prop="totalQty"
        label="库存数量"
        align="center"
      />

      <el-table-column
        prop="cargoLocationCode"
        label="库位号"
        align="center"
      />
      <el-table-column
        prop="projectCode"
        label="项目号"
        align="center"
      />
      <el-table-column
        prop="projectName"
        label="项目名称"
        align="center"
      />
      <el-table-column
        prop="employeeName"
        label="PE"
        align="center"
      />
      <el-table-column
        prop="customProductCode"
        label="客户件号"
        align="center"
      />
      <!-- <el-table-column
        prop="statusDescription"
        label="状态描述"
        align="center"
      /> -->

      <el-table-column
        prop="remark"
        label="库存备注"
        align="center"
      />
      <el-table-column
        v-if="!materialType"
        label="TP勾选"
      >
        <template slot-scope="scope">
          <el-button
            type="text"
            @click="TPHandler(scope.row)"
          >明细</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination-box"
      :current-page="pagination.currentPage"
      :page-sizes="[10, 30, 50, 100]"
      :page-size="pagination.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total"
      @size-change="sizeChange"
      @current-change="currentChange"
    />
    <div style="text-align: center; margin-top: 20px">
      <el-button @click="cancel">取消</el-button>
      <el-button
        type="primary"
        @click="submit"
      >提交</el-button>
    </div>
    <el-dialog
      title="TP"
      :visible.sync="showTP"
      :append-to-body="true"
      width="400px"
    >
      <TP
        v-if="showTP"
        :box-card-number="rowId"
        @submit="onTp"
      />
    </el-dialog>
  </div>
</template>

<script>
import { Reserve } from "@/api/request/swagger";
import TP from "./TP.vue";

export default {
  components: {
    TP
  },
  props: {
    projectCode: {
      type: String,
      default: ""
    },
    materialType: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      multipleSelection: [],
      productCode: "",
      boxCode: "",
      formData: {
        productCode: "",
        boxCode: "",
        projectCode: "",
        projectName: "",
        productBatch: "",
        customProductCode: "",
        employeeName: "",
        productName: ""
      },
      tableData: [],
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      },
      showTP: false,
      rowId: "",
      tpCacheMap: new Map()
    };
  },
  created() {
    this.$set(this.formData, "projectCode", this.projectCode);
    this.initTableData();
  },
  methods: {
    // 初始化表格数据
    // sampleStockOut
    initTableData() {
      this.get({
        url: Reserve.getRealTimeStockList,
        data: {
          Page: this.pagination.currentPage,
          MaxResultCount: this.pagination.pageSize,
          // productCode: this.productCode,
          // projectCode: this.projectCode,
          // boxCode: this.boxCode,
          stockType: 0,
          IsInStock: true,
          MinQuantity: true,
          InformationEnum: 1,
          // 只自建领料单 添加hasBoxCode
          hasBoxCode: !this.materialType,
          ...this.formData
        }
      }).then(res => {
        this.tableData = res.result.items;
        this.pagination.total = res.result.totalCount;
      });
    },
    // 搜索按钮
    search() {
      this.pagination.currentPage = 1;
      this.initTableData();
    },
    onReset() {
      this.formData = {};
      this.$set(this.formData, "projectCode", this.projectCode);
      this.initTableData();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 取消按钮
    cancel() {
      this.$emit("cancel");
    },
    // 提交按钮
    submit() {
      // 遍历this.multipleSelection，如果id在this.tpCacheMap中，则将this.tpCacheMap的value赋值给当前数据的TSNumber
      this.multipleSelection.forEach(item => {
        if (this.tpCacheMap.has(item.boxCode)) {
          item.TSNumber = this.tpCacheMap.get(item.boxCode);
        }
      });
      this.$emit("submit", this.multipleSelection);
    },
    sizeChange(val) {
      this.pagination.pageSize = val;
      this.initTableData();
    },
    currentChange(val) {
      this.pagination.currentPage = val;
      this.initTableData();
    },
    TPHandler(row) {
      this.rowId = row.boxCode;
      this.showTP = true;
    },
    onTp(val) {
      // 向缓存中添加，键是this.rowId,指的是val
      this.tpCacheMap.set(this.rowId, val);
      this.showTP = false;
    }
  }
};
</script>

<style lang="scss" scope>
.pagination-box {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
.reset {
  margin-left: 0 !important;
}
</style>
