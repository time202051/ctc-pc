<!--
 Filename: c:\ljp\奥托立夫CTC\CTC-PC\src\view\stockIn\sampleCodeDiskInfoManagement\index.vue
 name: 码盘信息管理-样件
 Created Date: Wednesday, December 25th 2024, 3:16:57 pm
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
import { BindRecord } from "@/api/request/swagger";
export default {
  name: "sampleCodeDiskInfoManagement",
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
            label: "标签号",
            value: "tagNumber",
            inputType: "text",
          },
          {
            label: "物料码",
            value: "productCode",
            inputType: "text",
          },
          {
            label: "托盘编码",
            value: "containerCode",
            inputType: "text",
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
              valueFormat: "yyyy-MM-dd HH:mm:ss",
            },
          },
          // {
          //   label: "创建时间",
          //   value: "creationTime",
          //   inputType: "picker",
          //   props: {
          //     valueFormat: "yyyy-MM-dd",
          //     format: "yyyy/MM/dd",
          //   },
          // },
          {
            label: "批次号",
            value: "batch",
            inputType: "text",
          },
          {
            label: "物料名称",
            value: "productName",
            inputType: "text",
          },
          {
            label: "分配库位",
            value: "cargoLocationCode",
            inputType: "text",
          },
        ],
      },
      // 表格数据
      tableData: {
        loading: false,
        emptyImg: true,
        options: {
          selection: true, //多选框
          index: false, //序号
          headTool: true, //开启头部工具栏
          refreshBtn: true, //开启表格头部刷新按钮
          downloadBtn: true, //开启表格头部下载按钮
        }, //序号和复选框
        rows: [], //表数据
        columns: [
          {
            label: "",
            type: "selection",
          },
          {
            prop: "tagNumber",
            label: "标签号",
          },
          {
            prop: "bindStateEnumDesc",
            label: "码盘状态",
          },
          {
            prop: "productCode",
            label: "物料编码",
          },
          {
            prop: "productName",
            label: "物料名称",
          },
          {
            prop: "companyName",
            label: "单位",
          },
          {
            prop: "batch",
            label: "批次",
          },
          {
            prop: "qty",
            label: "数量",
          },
          {
            prop: "containerCode",
            label: "容器编码",
          },
          {
            prop: "containerType",
            label: "容器类型",
          },
          {
            prop: "areaCode",
            label: "区域编码",
          },
          {
            prop: "regionCode",
            label: "库区编码",
          },
          {
            prop: "cargoLocationCode",
            label: "分配库位",
          },
          {
            prop: "roadWayCode",
            label: "分配通道",
          },
          {
            prop: "taskNo",
            label: "关联任务号",
          },
          {
            prop: "remark",
            label: "码盘明细备注",
          },
          {
            prop: "createUser",
            label: "创建人",
          },
          {
            prop: "creationTime",
            label: "创建时间",
          },
        ], //表头
        operates: [], //表格里面的操作按钮
        operatesAttrs: {
          fixed: "right",
        },
        tableHeightDiff: 290,
      },
      paginations: {
        page: 1, //当前位于那页面
        total: 10, //总数
        limit: 30, //一页显示多少条
        pagetionShow: true,
      },
      multipleSelection: [],
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
      let timer = this.formSearchData.value.timer;
      this.formSearchData.value.BeginTime = timer ? timer[0] : "";
      this.formSearchData.value.EndTime = timer ? timer[1] : "";
      this.get({
        url: BindRecord.pageBindRecord,
        isLoading: true,
        data: {
          ...this.formSearchData.value,
          Page: this.paginations.page,
          MaxResultCount: this.paginations.limit,
        },
      }).then((res) => {
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
        url: BindRecord.exportBindRecord,
        isLoading: true,
        responseType: "blob",
        data: Object.assign(this.formSearchData.value, {
          Page: this.paginations.page,
          MaxResultCount: this.paginations.limit,
        }),
      }).then((res) => {
        this.fnexsl(res); //fnexsl封装的导出方法
      });
    },
    cancelCodeDiskBtnHandler() {
      let data = this.multipleSelection;
      if (data.length != 1) return this.$message.info("请勾选一条数据");
      const row = data[0];
      this.post({
        url: BindRecord.cancelBindRecord,
        data: {
          bindRecordId: row.id,
          bindCancleType: 1,
          tagNumber: row.tagNumber,
        },
      }).then(() => {
        this.init();
        this.$message({
          type: "success",
          message: "删除成功!",
        });
      });
    },
  },
};
</script>
