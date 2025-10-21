<!--
Filename: c:\ljp\奥托立夫CTC\CTC-PC\src\view\stockOut\CKOrder\index.vue
name: 出库订单-车身
Created Date: Thursday, December 5th 2024, 9:16:15 am
Author: lijiapeng
Copyright (c) 2024 Your Company
-->
<template>
  <div>
    <FormSearch
      :form-search-data="formSearchData"
      @handleSearch="handleSearch"
      @handleReset="handleReset"
    />
    <MyTable
      :paginations="paginations"
      :btnlist="this.hasBtn(this)"
      :empty-img="tableData.emptyImg"
      :table-data="tableData"
      :multiple-selection="multipleSelection"
      @SelectionChange="SelectionChange"
      @handleSizeChange="handleSizeChange"
      @handleindexChange="handleindexChange"
    >
      <template slot="details" slot-scope="scope">
        <div style="color: #1682e6; cursor: pointer" @click.stop.prevent="onDetails(scope)">
          查看
        </div>
      </template>
    </MyTable>

    <!-- 详情表格弹窗 -->
    <el-dialog title="出库订单详情" :visible.sync="detailDialogVisible" width="70%">
      <DetailTable v-if="detailDialogVisible" :id="stockOutId" />
    </el-dialog>

    <!-- 新增弹窗 -->
    <el-dialog
      title="新增出货订单--车身"
      :visible.sync="addDetailDialogVisible"
      width="80%"
      top="5vh"
    >
      <AddDetail v-if="addDetailDialogVisible" @submit="onCarBodySubmit" />
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">清空</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span> -->
    </el-dialog>

    <!-- 样件弹窗 -->
    <el-dialog
      title="新增出货订单--样件"
      :visible.sync="addSampleDetailDialogVisible"
      width="80%"
      top="5vh"
    >
      <!-- fullscreen -->
      <AddSampleDetail
        v-if="addSampleDetailDialogVisible"
        :detailData="detailData"
        @submit="onSuccessSampleSubmit"
      />
    </el-dialog>

    <detailsdialogTemplate ref="detailsdialogTemplate" :form="detailsform" />

    <el-dialog
      title="制单出库"
      :visible.sync="zdVisible"
      width="400px"
      top="30vh"
      @close="zdCancelHandler"
    >
      <div>
        <el-select v-model="regionId" placeholder="请选择盘点区域选择">
          <el-option
            v-for="item in options"
            :key="item.key"
            :label="item.value"
            :value="item.key"
          />
        </el-select>
        <div class="dialog-footer">
          <el-button @click="zdCancelHandler">取消</el-button>
          <el-button type="primary" @click="zdHandler">确定</el-button>
        </div>
      </div>
    </el-dialog>

    <el-dialog title="订单打印" :visible.sync="printModelVisible" width="230mm" top="5vh">
      <PrintModel v-if="printModelVisible" :id="id" :white-list-by-type="typeGroupEnum.CKOrder" />
    </el-dialog>

    <el-dialog title="打印箱卡标签" :visible.sync="boxCardPrintVisible" width="130mm" top="5vh">
      <BoxCardPrint v-if="boxCardPrintVisible" :img-url="imgUrl" />
    </el-dialog>

    <el-dialog title="出库订单明细" :visible.sync="showsplitOrderDialog" top="5vh">
      <OutboundOrderDetails
        v-if="showsplitOrderDialog"
        @cancel="showsplitOrderDialog = false"
        @submit="onSplitOrderSubmit"
      ></OutboundOrderDetails>
    </el-dialog>
  </div>
</template>
<script>
import { StockOut, ILT, OutBound } from "@/api/request/swagger";
import minxin from "./index.js";
import detailsdialogTemplate from "./from/details/index.vue";
import DetailTable from "./from/detailTable/index.vue";
import AddDetail from "./from/addDetail/index.vue";
import AddSampleDetail from "./from/addSampleDetail/index.vue";
import PrintModel from "@/components/PrintModel/index.vue";
import BoxCardPrint from "./boxCardPrint.vue";
import { typeGroupEnum } from "@/components/PrintModel/staticData.js";
import OutboundOrderDetails from "./outboundOrderDetails.vue";
export default {
  name: "SonTemplate",
  components: {
    detailsdialogTemplate,
    DetailTable,
    AddDetail,
    AddSampleDetail,
    PrintModel,
    BoxCardPrint,
    OutboundOrderDetails
  },
  mixins: [minxin],
  data() {
    return {
      multipleSelection: [],
      detailDialogVisible: false,
      addDetailDialogVisible: false,
      addSampleDetailDialogVisible: false,
      stockOutId: "", // 出货单ID
      printModelVisible: false,
      boxCardPrintVisible: false,
      id: "",
      typeGroupEnum: typeGroupEnum,
      imgUrl: "",
      zdVisible: false,
      options: [],
      regionId: "",
      // 拆单
      showsplitOrderDialog: false,
      detailData: {}
    };
  },
  mounted() {
    this.getTable();
    this.getSelectOptions();
  },
  methods: {
    getSelectOptions() {
      this.get({
        url: ILT.regionSelect,
        isLoading: false
      }).then(res => {
        this.options = res.result;
      });
    },
    getTable() {
      let query = this.formSearchData.value;
      query.BeginTime = query.timer?.[0];
      query.EndTime = query.timer?.[1];
      query.RequiredDateBeginTime = query.requiredDate?.[0];
      query.RequiredDateEndTime = query.requiredDate?.[1];
      query.PlanDateBegin = query.planDate?.[0];
      query.PlanDateEnd = query.planDate?.[1];
      this.get({
        url: StockOut.outOrderPages,
        isLoading: true,

        data: Object.assign(query, {
          Page: this.paginations.page,
          MaxResultCount: this.paginations.limit,
          type: 8 // 样件
        })
      }).then(res => {
        this.tableData.rows = res.result.items;
        this.paginations.total = res.result.totalCount; // 是否传了分页
        this.tableData.emptyImg = true;
        console.log("34445", this.multipleSelection);
      });
    },
    SelectionChange(row) {
      this.multipleSelection = row;
    },
    handleSearch(from) {
      var self = this;
      self.formSearchData.value = { ...from };
      self.paginations.page = 1;
      this.getTable();
    },
    handleReset() {
      for (let key in this.formSearchData.value) {
        this.formSearchData.value[key] = null;
      }
      this.paginations.page = 1;
    },
    handleSizeChange(val) {
      this.paginations.page = 1;
      this.paginations.limit = val;
      this.getTable();
    },
    handleindexChange(val) {
      this.paginations.page = val;
      this.getTable();
    },
    // 新增-车身领料
    async onCarBodySubmit(e) {
      const { form, tableData } = e;
      // 后端要求时间补零
      const res = await this.post({
        url: StockOut.addStockOut,
        data: {
          ...form,
          requiredDate: `${form.requiredDate} 00:00:00`,
          stockOutDetailCreateDtos: tableData
        }
      });
      if (res.code !== 200) return;
      this.addDetailDialogVisible = false;
      this.getTable();
      this.$message({ type: "success", message: "操作成功!" });
    },
    onSuccessSampleSubmit() {
      this.addSampleDetailDialogVisible = false;
      this.getTable();
    },
    // 查看
    // details(row) {
    //   this.detailsform.row = row.row;
    //   setTimeout(() => {
    //     this.$refs.detailsdialogTemplate.getTable();
    //     this.detailsform.dialogFormVisible = true;
    //   }, 10);
    // },
    onDetails({ row }) {
      this.detailDialogVisible = true;
      this.stockOutId = row.id;
    },
    // export() {
    //   let query = this.formSearchData.value;
    //   query.BeginTime = query.timer?.[0];
    //   query.EndTime = query.timer?.[1];
    //   query.ArrivalBeginTime = query.arrivalTimer?.[0];
    //   query.ArrivalEndTime = query.arrivalTimer?.[1];
    //   this.post({
    //     url: OutBound.exportCKOrder,
    //     isLoading: true,
    //     responseType: "blob",
    //     data: Object.assign(query, {
    //       Page: this.paginations.page,
    //       MaxResultCount: this.paginations.limit,
    //     }),
    //   }).then((res) => {
    //     this.fnexsl(res); //fnexsl封装的导出方法
    //   });
    // },
    // 新建-车身领料
    addBodyRequ() {
      console.log("新建-车身领料");
      this.addDetailDialogVisible = true;
    },
    // 编辑-样件领料
    addSampleBtnHandler() {
      this.detailData = {};
      this.addSampleDetailDialogVisible = true;
    },
    // 审核
    examine() {
      const data = this.multipleSelection;
      if (data.length !== 1) return this.$message.info("请选择一条数据");
      const { id, orderState } = data[0];
      // 已审核不能点击
      if (orderState !== 1) return this.$message.error("该订单已审核");
      this.put({
        url: `${StockOut.checkStockOut}/${id}`
      }).then(res => {
        if (res.code !== 200) return;
        this.getTable();
        this.$message({
          type: "success",
          message: "审核成功!"
        });
      });
    },
    // 制单出库
    stockOut() {
      const data = this.multipleSelection;
      if (data.length !== 1) return this.$message.info("请勾选一条数据");
      this.zdVisible = true;
    },
    zdCancelHandler() {
      this.zdVisible = false;
      this.regionId = "";
    },
    zdHandler() {
      const data = this.multipleSelection;
      if (!this.regionId) return this.$message.error("请选择盘点区域!");
      this.post({
        url: StockOut.stockOutMate,
        data: {
          stockoutId: data[0].id,
          RegionId: this.regionId
        }
      }).then(res => {
        if (res.code !== 200) return;
        this.getTable();
        this.$message({
          type: "success",
          message: "制单出库成功"
        });
        this.zdCancelHandler();
      });
    },
    // 打印
    print() {
      // 只能类型为"样件出库"才能显示弹框
      const data = this.multipleSelection;
      if (data.length !== 1) return this.$message.info("请勾选一条数据");
      if (data[0].type !== 8) {
        return this.$message.info("该订单类型不支持打印,请选择样件出库类型!");
      }
      console.log("打印");
      this.printModelVisible = true;
      this.id = this.multipleSelection[0].id;
    },
    // 打印箱卡标签
    boxCardPrintBtnHandler() {
      const data = this.multipleSelection;
      if (data.length !== 1) return this.$message.info("请勾选一条数据");
      // 就是打印一张图片
      this.imgUrl = data[0].boxCardUrl || "";
      this.boxCardPrintVisible = true;
    },
    deleteBtnHandler() {
      const data = this.multipleSelection;
      if (data.length !== 1) return this.$message.info("请勾选一条数据");
      this.$confirm("此操作将永久删除该数据, 是否继续?")
        .then(() => {
          this.del({
            url: `${StockOut.deleteStockOut}/${data[0].id}`
          }).then(res => {
            if (res.code !== 200) return;
            this.getTable();
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          });
        })
        .catch(() => {});
    },
    splitOrderBtnHandler() {
      const data = this.multipleSelection;
      if (data.length !== 1) return this.$message.info("请勾选一条数据");
      const row = data[0];
      if (row.orderState !== 1) return this.$message.info("请选择单据状态为【创建】的订单数据");
      this.showsplitOrderDialog = true;
    },
    onSplitOrderSubmit() {
      this.getTable();
      this.showsplitOrderDialog = false;
      this.$message({
        type: "success",
        message: "拆单成功"
      });
    },
    // 编辑
    async editBtnHandler() {
      const data = this.multipleSelection;
      if (data.length !== 1) return this.$message.info("请勾选一条数据");
      const row = data[0];
      if (row.orderState !== 1) return this.$message.info("当前单据状态无法编辑");
      if (![2, 1, 4].includes(row.stockOutType)) return this.$message.info("当前数据不可编辑");
      const res = await this.get({
        url: OutBound.getCKOrderDetailList,
        isLoading: true,
        data: {
          stockOutId: row.id,
          Page: 1,
          MaxResultCount: 9999
        }
      });
      this.detailData = {
        ...row,
        stockOutDetailCreateDtos: res.result.items
      };
      this.addSampleDetailDialogVisible = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.dialog-footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
</style>
