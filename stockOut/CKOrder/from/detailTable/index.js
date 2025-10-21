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
          downloadBtn: false, // 开启表格头部下载按钮
          height: "400px"
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
            prop: "materialCode"
          },
          {
            label: "物料名称",
            prop: "materialName"
          },
          {
            prop: "batchNumber",
            label: "货次号"
          },
          {
            prop: "creationTime",
            label: "收货日期"
          },
          {
            prop: "requestedAmount",
            label: "数量",
            width: "50px"
          },
          {
            prop: "remarks",
            label: "车身备注"
          },
          {
            prop: "torqueRequirement",
            label: "扭矩要求"
          },
          {
            prop: "tsNumber",
            label: "TS编号"
          },
          {
            prop: "markQty",
            label: "实际拣选数量"
          },
          {
            prop: "boxCode",
            label: "实验箱卡号"
          },
          {
            prop: "creationTime",
            label: "创建时间"
          }
        ], // 表头
        operates: [], // 表格里面的操作按钮
        tableHeightDiff: 350
      },
      paginations: {
        page: 1, // 当前位于那页面
        total: 0, // 总数
        limit: 20, // 一页显示多少条
        pagetionShow: true
      }
    };
  }
};
