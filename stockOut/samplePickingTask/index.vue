<!--
 Filename: c:\ljp\奥托立夫CTC\CTC-PC\src\view\stockOut\samplePickingTask\index.vue
 name:拣选任务表-样件
 Created Date: Wednesday, December 25th 2024, 3:52:15 pm
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
    />
  </div>
</template>
<script>
import { StockOut } from "@/api/request/swagger";
export default {
  name: "SamplePickingTask",
  mixins: [],
  props: {},
  data() {
    return {
      multipleSelection: [],
      formSearchData: {
        reset: true, // 重置
        expendShow: true, // 展开
        tableSearchSlice: 4,
        value: {},
        tableSearch: [
          {
            label: "拣选任务号",
            value: "billNo",
            inputType: "text"
          },
          {
            label: "箱卡号",
            value: "boxCardNumber",
            inputType: "text"
          },
          {
            label: "TS号",
            value: "TSNumber",
            inputType: "text"
          },
          {
            label: "创建时间",
            value: "creationTime",
            inputType: "picker",
            props: {
              valueFormat: "yyyy-MM-dd",
              format: "yyyy/MM/dd"
            }
          },
          {
            label: "零件编号",
            value: "productCode",
            inputType: "text"
          },
          {
            label: "项目号",
            value: "projectCode",
            inputType: "text"
          },
          {
            label: "订单号",
            value: "stockOutOrderNo",
            inputType: "text"
          },
          {
            label: "工作台编码",
            value: "stagingCargoLocationName",
            inputType: "text"
          },
          {
            label: "容器号",
            value: "containerCode",
            inputType: "text"
          }
        ]
      },
      // 表格数据
      tableData: {
        loading: false,
        emptyImg: true,
        options: {
          selection: true, // 多选框
          index: true, // 序号
          headTool: true, // 开启头部工具栏
          refreshBtn: true, // 开启表格头部刷新按钮
          downloadBtn: true // 开启表格头部下载按钮
        }, // 序号和复选框
        rows: [], // 表数据
        columns: [
          {
            label: "",
            minWidth: "",
            type: "selection",
            show: true
          },
          {
            prop: "billNo",
            label: "拣选任务号"
          },
          {
            prop: "wavePickTaskStateDesc",
            label: "状态"
          },
          // {
          //   prop: "",
          //   label: "是否缺货"
          // },
          {
            prop: "productCode",
            label: "零件编码"
          },
          {
            prop: "productName",
            label: "零件名称"
          },
          {
            prop: "batchNum",
            label: "批次"
          },
          {
            prop: "cargoLocationName",
            label: "分配库位"
          },
          {
            prop: "qty",
            label: "分配数量"
          },
          {
            prop: "stagingName",
            label: "工作台编码"
          },
          {
            prop: "stagingCargoLocationName",
            label: "拣选库位"
          },
          {
            prop: "pickQty",
            label: "拣选数量"
          },
          {
            prop: "tSNumber",
            label: "TS号"
          },
          {
            prop: "stockOutOrderNo",
            label: "出库订单号"
          },
          {
            prop: "stockOutOrderDetailLine",
            label: "出库单明细行"
          },
          {
            prop: "boxCardNumber",
            label: "箱卡号"
          },
          {
            prop: "aSRSTaskNo",
            label: "关联任务编码"
          },
          {
            prop: "pickUserName",
            label: "拣选人"
          },
          {
            prop: "creationTime",
            label: "创建时间"
          },
          {
            prop: "createUserName",
            label: "创建人"
          },
          {
            prop: "containerCode",
            label: "容器号"
          }
        ], // 表头
        operates: [], // 表格里面的操作按钮
        operatesAttrs: {
          fixed: "right"
        },
        tableHeightDiff: 330
      },
      paginations: {
        page: 1, // 当前位于那页面
        total: 10, // 总数
        limit: 30, // 一页显示多少条
        pagetionShow: true
      }
    };
  },
  computed: {},
  created() {
    this.init();
    this.getSelect();
  },
  mounted() {},
  methods: {
    init() {
      this.get({
        url: StockOut.pickPages,
        isLoading: true,
        data: {
          ...this.formSearchData.value,
          Page: this.paginations.page,
          MaxResultCount: this.paginations.limit
        }
      }).then(res => {
        this.tableData.rows = res.result.items;
        this.paginations.total = res.result.totalCount;
        this.tableData.emptyImg = true;
      });
    },
    getSelect() {},
    handleSearch(from) {
      var self = this;
      self.formSearchData.value = { ...from };
      self.paginations.page = 1;
      this.init();
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
      this.init();
    },
    handleindexChange(val) {
      this.paginations.page = val;
      this.init();
    },
    SelectionChange(row) {
      this.multipleSelection = row;
    },
    // 导出
    exportBtnHandler() {
      //   let timer = this.formSearchData.value.createdTime;
      //   this.formSearchData.value.BeginTime = timer ? timer[0] : "";
      //   this.formSearchData.value.EndTime = timer ? timer[1] : "";
      this.post({
        url: StockOut.exportPick,
        isLoading: true,
        responseType: "blob",
        data: Object.assign(this.formSearchData.value, {
          Page: this.paginations.page,
          MaxResultCount: this.paginations.limit
        })
      }).then(res => {
        this.fnexsl(res); // fnexsl封装的导出方法
      });
    },
    // 撤销拣选
    selectionTaskBtnHandler() {
      const data = this.multipleSelection;
      if (data.length !== 1) return this.$message.info("请勾选一条数据");
      this.post({
        url: StockOut.cancelPickTask,
        data: {
          id: data[0].id
        }
      }).then(res => {
        if (res.code !== 200) return;
        this.$message({
          message: "撤销拣选成功",
          type: "success"
        });
      });
    }
  }
};
</script>
