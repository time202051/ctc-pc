export default {
  data() {
    return {
      tableData: {
        loading: false,
        emptyImg: true,
        options: {
          selection: false, // 多选框
          headTool: false, // 开启头部工具栏
          refreshBtn: false, // 开启表格头部刷新按钮
          downloadBtn: false // 开启表格头部下载按钮
        }, // 序号和复选框
        rows: [], // 表数据
        columns: [
          {
            label: "行号",
            width: "50",
            type: "index"
          },
          {
            label: "物料编码",
            prop: "wlbm"
          },
          {
            label: "物料名称",
            prop: "selection"
          },
          {
            prop: "lack",
            label: "货次号"
          },
          {
            prop: "productCode",
            label: "收获日期"
          },
          {
            prop: "onwerCode",
            label: "数量"
          },
          {
            prop: "onwerName",
            label: "明细备注"
          },
          {
            prop: "productName",
            label: "扭矩要求"
          },
          {
            prop: "basicUnitName",
            label: "TS编号"
          },
          {
            prop: "packagingRate",
            label: "更新时间"
          }
        ], // 表头
        operates: [], // 表格里面的操作按钮
        tableHeightDiff: 350
      },
      paginations: {
        pagetionShow: false
      }
    };
  }
};
