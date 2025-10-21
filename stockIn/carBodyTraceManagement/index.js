import { Point, StockInfo, CarBody } from "@/api/request/swagger";
import {
  carBodyTypeOptions,
  stateDesOptions,
  virtualLocOptions,
  carBodyTypeList
} from "@/static/carbody.js";
import { tagStatusOptions } from "@/static/carbody.js";

export default {
  data() {
    return {
      storageLocationList: [],
      isNew: false,
      // 查询表单
      formSearchData: {
        reset: true, // 重置
        expendShow: true, // 展开
        tableSearchSlice: 5,
        value: {
          DocNo: null, // 对应输入框的value字段
          QualityCheckStateType: null,
          QualityCheckState: null,
          timer: []
        },
        tableSearch: [
          {
            label: "标签号",
            value: "carBodyTagNumber",
            inputType: "text"
          },
          {
            label: "车架号",
            value: "frameNumber",
            inputType: "text"
            // value: "QualityCheckStateType",
            // inputType: "select",
            // children: this.SET_enumsSelect({
            //   keyword: "qualityCheckTypeEnum",
            // }),
          },
          {
            label: "项目号",
            value: "projectCode",
            inputType: "text"
          },
          {
            label: "状态描述",
            value: "statusDescription",
            inputType: "select",
            // 0整车/1白车身/2碰撞加固车身/3爆破切割车身/4侧面切割下车身
            children: [
              {
                key: 0,
                value: "整车"
              },
              {
                key: 1,
                value: "白车身"
              },
              {
                key: 2,
                value: "碰撞加固车身"
              },
              {
                key: 3,
                value: "爆破切割车身"
              },
              {
                key: 4,
                value: "侧面切割下车身"
              }
            ]
          },
          {
            label: "实验状态",
            value: "experimentStatus",
            inputType: "select",
            // 0实验前 1实验中 2实验后
            children: [
              {
                key: 0,
                value: "实验前"
              },
              {
                key: 1,
                value: "实验中"
              },
              {
                key: 2,
                value: "实验后"
              }
            ]
          },
          {
            label: "状态",
            value: "tagStatus",
            inputType: "select",
            children: tagStatusOptions
          },
          {
            label: "车身类型",
            value: "bodyWorkType",
            inputType: "select",
            children: carBodyTypeList
          },
          {
            label: "项目名称",
            value: "projectName",
            inputType: "text"
          },
          {
            label: "入场日期",
            inputType: "picker",
            value: "admissionDate",
            props: {
              valueFormat: "yyyy-MM-dd",
              format: "yyyy/MM/dd"
            }
          },
          {
            label: "打印次数",
            value: "tagPrintNumber",
            inputType: "number"
          },
          {
            label: "创建时间",
            value: "createdTime",
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
            label: "虚拟项目",
            value: "tempProject",
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
            type: "selection"
          },
          {
            prop: "carBodyTagNumber",
            label: "车身标签号",
            minWidth: "120"
          },
          {
            prop: "tagStatusDesc",
            label: "标签状态"
          },
          {
            prop: "company",
            label: "公司"
          },
          {
            prop: "wareHouseName",
            label: "仓库"
          },
          {
            prop: "frameNumber",
            label: "车架号"
          },
          {
            prop: "bodyWorkTypeDesc",
            label: "车身类型",
            minWidth: "130"
          },
          {
            prop: "regionName",
            label: "区域"
          },
          {
            prop: "storageLocationStr",
            label: "存放位置"
          },
          {
            prop: "qty",
            label: "数量"
          },
          {
            prop: "statusDescription1Str",
            label: "状态描述1"
          },
          {
            prop: "statusDescription2",
            label: "状态描述2"
          },
          {
            prop: "projectCode",
            label: "项目号"
          },
          {
            prop: "projectName",
            label: "项目名称"
          },
          {
            prop: "projectStatusStr",
            label: "项目状态"
          },
          {
            prop: "customerName",
            label: "客户名称"
          },
          {
            prop: "admissionDate",
            label: "进场日期"
          },
          {
            prop: "experimentStatusDesc",
            label: "实验状态"
          },
          {
            prop: "tagPrintNumber",
            label: "标签打印次数"
          },
          {
            prop: "receivedUser",
            label: "接收人"
          },
          {
            prop: "containerCodeStr",
            label: "承载托盘号"
          },
          {
            prop: "wcsTaskNo",
            label: "WCS关联任务号"
          },
          {
            prop: "agvTaskNo",
            label: "AGV关联任务号"
          },
          {
            prop: "otherRemark",
            label: "单据备注"
          },
          {
            prop: "createdBy",
            label: "创建人"
          },
          {
            prop: "uditUser",
            label: "审核人"
          },
          {
            prop: "createdTime",
            label: "创建时间"
          },
          {
            prop: "tempProject",
            label: "虚拟项目"
          }
        ], // 表头
        operatesAttrs: {
          fixed: "right"
        },
        operates: [
          {
            label: "上传",
            method: (...args) => this.handleUpload(...args)
          },
          {
            label: "查看",
            method: (...args) => this.handleView(...args)
          }
        ], // 表格里面的操作按钮
        tableHeightDiff: 330
      },
      paginations: {
        page: 1, // 当前位于那页面
        total: 10, // 总数
        limit: 30, // 一页显示多少条
        pagetionShow: true
      },
      // detailsform: {
      //   outerVisible: false,
      //   title: "质检单明细",
      //   row: {},
      //   requestData: {
      //     flage: "add",
      //     fn: this.getTable,
      //   },
      // },
      form: {
        dialogFormVisible: false,
        width: "80%",
        title: "新增/编辑入场信息",
        model: [
          {
            label: "项目号",
            type: "select",
            prop: "projectCode",
            apiUrl: "", // 模糊查询下拉框接口地址
            child: [
              // {
              //   value: "第一个",
              //   key: "1",
              // },
            ],
            props: {
              multiple: false,
              filterable: true,
              allowCreate: true,
              defaultFirstOption: false
            },
            // CarBody.getProjectListByCode
            listeners: {
              change: (item, val) => {
                const { child } = item;
                const tempItem = child.find(e => e.key === val);
                if (!tempItem) {
                  this.$set(this.form.value, "projectName", "");
                  this.$set(this.form.value, "projectStatus", null);
                  // this.form.value.projectStatus = null;
                  // this.form.value.projectName = "";
                  // this.form.value.projectStatus = null;
                } else {
                  this.$set(
                    this.form.value,
                    "projectName",
                    tempItem.projectName
                  );
                  this.$set(
                    this.form.value,
                    "projectStatus",
                    tempItem.projectStatus
                  );
                  // this.form.value.projectName = tempItem?.projectName;
                  // this.form.value.projectStatus = tempItem?.projectStatus;
                  // 判断当前是否是新建
                  this.isNew = !item.child.some(e => e.projectCode === val);
                  // console.log(item,val, this.form.value, this.isNew);
                }
              }
            }
          },
          {
            label: "项目名称",
            type: "input",
            prop: "projectName"
          },
          {
            label: "项目状态",
            type: "select",
            prop: "projectStatus",
            child: [
              {
                value: "正常",
                key: 0
              },
              {
                value: "保密一级",
                key: 1
              },
              {
                value: "保密二级",
                key: 2
              }
            ]
          },
          {
            label: "入场时间",
            type: "date",
            prop: "admissionDate",
            props: {
              format: "yyyy/MM/dd",
              valueFormat: "yyyy-MM-dd"
            }
          },
          {
            label: "车身类别",
            type: "select",
            prop: "bodyWorkType",
            child: carBodyTypeList
          },
          {
            label: "车型编号",
            type: "input",
            prop: "carNumber"
          },
          {
            label: "车架号(VIN)",
            type: "slot",
            name: "carBodyNum",
            prop: "frameNumber"
          },
          {
            label: "状态描述1",
            type: "select",
            prop: "statusDescription1",
            child: carBodyTypeOptions
          },
          {
            label: "存放位置",
            type: "select",
            prop: "storageLocation",
            props: {
              filterable: true,
              remote: true,
              remoteMethod: query => this.getVirtualCargo(query)
            },
            listeners: {
              clear: () => this.getVirtualCargo("")
            },
            child: []
          },
          {
            label: "客户名称",
            type: "input",
            prop: "customerName"
          },
          {
            label: "状态描述2",
            type: "input",
            prop: "statusDescription2"
          },
          {
            label: "接收人",
            type: "select",
            prop: "employeeInfoId",
            child: [],
            props: {
              filterable: true,
              remote: true,
              remoteMethod: this.remoteMethod
            }
          },
          {
            label: "其他备注",
            type: "input",
            prop: "otherRemark"
          }
        ],
        rules: {
          projectCode: [
            { required: true, message: "请输入项目号", trigger: "blur" }
          ],
          projectName: [
            { required: true, message: "请输入项目名称", trigger: "blur" }
          ],
          projectStatus: [
            { required: true, message: "请选择项目状态", trigger: "blur" }
          ],
          admissionDate: [
            { required: true, message: "请选择入场时间", trigger: "blur" }
          ],
          bodyWorkType: [
            { required: true, message: "请选择车身类别", trigger: "blur" }
          ],
          // carNumber: [{ required: true, message: "请输入车型编号", trigger: "blur" }],
          frameNumber: [
            { required: true, message: "请输入车架号(VIN)", trigger: "blur" }
          ],
          statusDescription1: [
            { required: true, message: "请选择状态描述1", trigger: "blur" }
          ],
          statusDescription2: [
            { required: true, message: "请选择状态描述2", trigger: "blur" }
          ],
          // storageLocation: [
          //   { required: true, message: "请选择存放位置", trigger: "blur" }
          // ],
          employeeInfoId: [
            { required: true, message: "请选择接收人", trigger: "blur" }
          ],
          customerName: [
            { required: true, message: "请输入客户名称", trigger: "blur" }
          ]
        },
        value: {
          projectStatus: null,
          projectName: ""
          // warehouseCode: "", //仓库
          // ownerCode: "", //货主
          // shipperName: "", //质检人员
          // remark: "", //备注
          // rcsj: "",
        },
        requestData: {
          url: CarBody.addAdmissionInfo,
          flage: "add",
          fn: this.getTable
        }
      }
    };
  },
  created() {
    this.getVirtualCargo();
  },
  methods: {
    getVirtualCargo(query = "") {
      this.get({
        url: `${CarBody.virtualCargo}?name=${query}`
      }).then(res => {
        if (!this.form || !this.form.model) return;
        const tempItem = this.form.model.find(
          item => item.prop === "storageLocation"
        );
        if (!tempItem) return;
        tempItem.child =
          res.result.map(item => {
            return {
              key: item.id,
              value: item.warehouseLocationName,
              ...item
            };
          }) || [];
      });
    }
  }
};
