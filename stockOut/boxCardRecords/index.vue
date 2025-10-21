<!--
 Filename: c:\ljp\奥托立夫CTC\CTC-PC\src\view\stockOut\boxCardRecords\index.vue
 name: 新增箱卡回库记录管理
 Created Date: Thursday, December 26th 2024, 10:39:19 am
 Author: lijiapeng
 Copyright (c) 2024 Your Company
-->
<template>
  <div>
    <FormSearch
      :form-search-data="formSearchData"
      @handleSearch="handleSearch"
      @handleReset="handleReset"
    >
    </FormSearch>
    <MyTable
      :paginations="paginations"
      :btnlist="this.hasBtn(this)"
      :emptyImg="tableData.emptyImg"
      :tableData="tableData"
      :multipleSelection="multipleSelection"
      @SelectionChange="SelectionChange"
      @handleSizeChange="handleSizeChange"
      @handleindexChange="handleindexChange"
    >
    </MyTable>
  </div>
</template>
<script>
import { StockOut } from "@/api/request/swagger";
export default {
  name: "boxCardRecords",
  mixins: [],
  props: {},
  data() {
    return {
      formSearchData: {
        reset: true, //重置
        expendShow: true, //展开
        tableSearchSlice: 4,
        value: {},
        tableSearch: [
          {
            label: "项目号",
            value: "projectCode",
            inputType: "text"
          },
          {
            label: "箱卡号",
            value: "boxCardCode",
            inputType: "text"
          },
          {
            label: "容器号",
            value: "containerCode",
            inputType: "text"
          },
          {
            label: "状态",
            value: "inWarehouseStatus",
            inputType: "select",
            children: [
              { key: 1, value: "在库" },
              { key: 2, value: "出库" }
            ]
          },
          {
            label: "类型",
            value: "boxRestockType",
            inputType: "select",
            children: [
              { key: 1, value: "实验后样件" },
              { key: 2, value: "PV实验后样件" }
            ]
          },
          {
            label: "创建时间",
            value: "timer",
            inputType: "picker",
            props: {
              type: "datetimerange",
              startPlaceholder: "开始时间",
              endPlaceholder: "结束时间",
              placeholder: "选择时间范围",
              valueFormat: "yyyy-MM-dd HH:mm:ss"
            }
          }
          // {
          //   label: "创建时间",
          //   value: "createdTime",
          //   inputType: "picker",
          //   props: {
          //     valueFormat: "yyyy-MM-dd",
          //     format: "yyyy/MM/dd",
          //   },
          // },
        ]
      },
      // 表格数据
      tableData: {
        loading: false,
        emptyImg: true,
        options: {
          selection: true, //多选框
          index: true, //序号
          headTool: true, //开启头部工具栏
          refreshBtn: true, //开启表格头部刷新按钮
          downloadBtn: true //开启表格头部下载按钮
        }, //序号和复选框
        rows: [], //表数据
        columns: [
          {
            label: "",
            minWidth: "",
            type: "selection"
          },
          {
            prop: "recordCode",
            label: "记录号"
          },
          {
            prop: "projectCode",
            label: "项目号"
          },
          {
            prop: "boxCardCode",
            label: "箱卡号"
          },
          {
            prop: "containerCode",
            label: "容器号"
          },
          {
            prop: "inWarehouseStatusDesc",
            label: "状态"
          },
          {
            prop: "inWarehouseTime",
            label: "入库日期"
          },
          {
            prop: "inWarehouseDays",
            label: "在库天数"
          },
          {
            prop: "createdTime",
            label: "创建时间"
          },
          {
            prop: "createdBy",
            label: "创建人"
          }
        ], //表头
        operates: [], //表格里面的操作按钮
        // operatesAttrs: {
        //   fixed: "right",
        // },
        tableHeightDiff: 255
      },
      paginations: {
        page: 1, //当前位于那页面
        total: 10, //总数
        limit: 30, //一页显示多少条
        pagetionShow: true
      },
      multipleSelection: []
    };
  },
  computed: {},
  created() {
    this.init();
  },
  mounted() {},
  methods: {
    init() {
      let timer = this.formSearchData.value.timer;
      this.formSearchData.value.BeginTime = timer ? timer[0] : "";
      this.formSearchData.value.EndTime = timer ? timer[1] : "";
      this.get({
        url: StockOut.pagedResult,
        isLoading: true,
        data: {
          ...this.formSearchData.value,
          Page: this.paginations.page,
          MaxResultCount: this.paginations.limit
        }
      }).then(res => {
        console.log("234", res, this.tableData);
        this.tableData.rows = res.result.items;
        this.paginations.total = res.result.totalCount;
        this.tableData.emptyImg = true;
      });
    },
    getSelect() {},
    SelectionChange(row) {
      this.multipleSelection = row;
    },
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
    //导出
    exportBtnHandler() {
      let timer = this.formSearchData.value.timer;
      this.formSearchData.value.BeginTime = timer ? timer[0] : "";
      this.formSearchData.value.EndTime = timer ? timer[1] : "";
      this.post({
        url: StockOut.exportBoxCardRecord,
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
    //批量出库
    outStorageBtnHandler() {
      const data = this.multipleSelection;
      if (!data.length) return this.$message.info("请选择数据");
      const boxCardIdList = data.map(item => item.id) || [];
      console.log("批量出库");
      this.post({
        url: StockOut.approvalOutStock,
        data: {
          boxCardIdList
        }
      }).then(res => {
        if (res.code != 200) return;
        this.$message({
          type: "success",
          message: "操作成功!"
        });
      });
    }
  }
};
</script>
