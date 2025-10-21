import { Point } from "@/api/request/swagger";
export default {
  data() {
    return {
      // 查询表单
      formSearchData: {
        reset: true, // 重置
        expendShow: true, // 展开
        value: {
          BillNo: null, // 对应输入框的value字段
          OrderState: null,
          Type: null,
          WarehouseName: null,
          timer: [],
          WarehouseCode: null
        },
        tableSearch: [
          {
            label: "出货单号",
            value: "billNo",
            inputType: "text"
          },
          {
            label: "单据状态",
            value: "orderState",
            inputType: "select",
            children: this.SET_enumsSelect({
              keyword: "orderStateEnum"
            })
          },
          // {
          //   label: "单据类型",
          //   value: "type",
          //   inputType: "select",
          //   children: this.SET_enumsSelect({
          //     keyword: "businessTypeEnums"
          //   })
          // },
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
              format: "yyyy/MM/dd HH:mm:ss"
            }
          },
          {
            label: "项目编码",
            value: "projectCode",
            inputType: "text"
          },
          {
            label: "需求日期",
            value: "requiredDate",
            inputType: "picker",
            props: {
              type: "datetimerange",
              startPlaceholder: "开始时间",
              endPlaceholder: "结束时间",
              placeholder: "选择时间范围",
              valueFormat: "yyyy-MM-dd HH:mm:ss",
              format: "yyyy/MM/dd HH:mm:ss"
            }
          },
          {
            label: "SO",
            value: "soNumber",
            inputType: "text"
          },
          {
            label: "TO",
            value: "experimentToNumber",
            inputType: "text"
          },
          {
            label: "系统/客服/产品工程师",
            value: "engineer",
            inputType: "text"
          },
          {
            label: "系统/客服电话",
            value: "engineerPhone",
            inputType: "text"
          },
          {
            label: "T/TP号",
            value: "experimentTtpNumber",
            inputType: "text"
          },
          {
            label: "领料单类型",
            value: "stockOutType",
            inputType: "select",
            children: this.SET_enumsSelect({
              keyword: "stockOutTypeEnum"
            })
          },
          {
            label: "计划排单时间",
            value: "planDate",
            inputType: "picker",
            props: {
              type: "datetimerange",
              startPlaceholder: "开始时间",
              endPlaceholder: "结束时间",
              placeholder: "选择时间范围",
              valueFormat: "yyyy-MM-dd HH:mm:ss",
              format: "yyyy/MM/dd HH:mm:ss"
            }
          }
        ],
        options: {
          // labelWidth: "400px",
        }
      },
      // 表格数据
      tableData: {
        loading: false,
        emptyImg: true,
        options: {
          selection: true, // 多选框
          index: null, // 序号
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
            prop: "orderStateDesc",
            label: "单据状态",
            minWidth: "120",
            sortable: false,
            show: true
          },
          {
            prop: "billNo",
            label: "出库订单号",
            minWidth: "200",
            sortable: false,
            show: true
          },
          {
            prop: "typeDesc",
            label: "类型", // 0样件 1车身
            minWidth: "200",
            sortable: false,
            show: true
          },
          // {
          //   prop: "sourceNo",
          //   label: "关联上游单号",
          //   minWidth: "200",
          //   sortable: false,
          //   show: true,
          // },
          {
            prop: "companyName",
            label: "公司",
            minWidth: "",
            sortable: false,
            show: true
          },
          {
            prop: "warehouseName",
            label: "出库仓库",
            minWidth: "",
            sortable: false,
            show: true
          },
          {
            prop: "projectCode",
            label: "项目编号",
            minWidth: "120",
            sortable: false,
            show: true
          },
          {
            prop: "projectName",
            label: "项目名称",
            minWidth: "120",
            sortable: false,
            show: true
          },
          {
            prop: "boxCardNumber",
            label: "实验箱卡号",
            minWidth: "150",
            sortable: false,
            show: true
          },
          {
            prop: "experimentToNumber",
            label: "实验T0号",
            minWidth: "",
            sortable: false,
            show: true
          },
          {
            prop: "soNumber",
            label: "SO号",
            minWidth: "",
            sortable: false,
            show: true
          },
          {
            prop: "experimentTtpNumber",
            label: "实验TP/T号",
            minWidth: "200",
            sortable: false,
            show: true
          },
          {
            prop: "requiredDate",
            label: "需求日期",
            minWidth: "",
            sortable: false,
            show: true
          },
          {
            prop: "loadingStandard",
            label: "装车执行标准",
            minWidth: "120",
            sortable: false,
            show: true
          },
          {
            prop: "inspector",
            label: "检测工程师",
            minWidth: "150",
            sortable: false,
            show: true
          },
          {
            prop: "inspectorPhone",
            label: "工程师电话"
          },
          {
            prop: "engineer",
            label: "系统/客服工程师"
          },
          {
            prop: "engineerPhone",
            label: "系统/客服工程师电话"
          },
          {
            prop: "craeteUserName",
            label: "创建人"
          },
          {
            prop: "creationTime",
            label: "创建时间"
          },
          {
            prop: "stockOutTypeDesc",
            label: "领料单类型"
          },
          {
            prop: "details",
            label: "详情",
            fixed: "right",
            minWidth: "50",
            renderSlot: true
          },
          {
            prop: "planDate",
            label: "计划排单时间"
          }
        ], // 表头
        operates: [], // 表格里面的操作按钮
        tableHeightDiff: 300
      },
      paginations: {
        page: 1, // 当前位于那页面
        total: 10, // 总数
        limit: 30, // 一页显示多少条
        pagetionShow: true
      },
      detailsform: {
        dialogFormVisible: false,
        title: "出库订单详情",
        row: {},
        requestData: {
          flage: "add",
          url: Point.point,
          fn: this.getTable
        }
      }
    };
  }
};
