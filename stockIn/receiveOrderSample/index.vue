<!--
  Filename: c:\ljp\奥托立夫CTC\CTC-PC\src\view\stockIn\receiveOrderSample\index.vue
  name: 收货订单-样件
  Created Date: Tuesday, December 24th 2024, 9:02:55 am
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
    <!-- 编辑,查看弹窗 -->
    <el-dialog :title="`${this.form.title}-收货订单`" :visible.sync="dialogVisible" width="1000px">
      <BaseForm
        v-if="dialogVisible"
        :form="form"
        @onCancel="dialogVisible = false"
        @onSubmit="onSubmit"
      />
    </el-dialog>
    <ImportExsl :importform="importform" :download-url="StockIn.importTemplateStockIn" />
    <PrintSamples ref="printSamplesRef" />
    <el-dialog title="打印" :visible.sync="printModelVisible" width="230mm" top="5vh">
      <!-- :id="id" -->
      <PrintModel
        v-if="printModelVisible"
        :white-list-by-type="typeGroupEnum.receiveOrderSample"
        :table-data="multipleSelection"
      />
    </el-dialog>
  </div>
</template>
<script>
import { InBound, Basic, Matter, CarBody, Employee, Product, StockIn } from "@/api/request/swagger";
import BaseForm from "@/components/baseForm";
import ImportExsl from "@/view/product/materiel/from/importExsl/index.vue";
import moment from "moment";
import { tagStatusOptions } from "@/static/carbody.js";
import PrintSamples from "./printSamples.vue";
import PrintModel from "@/components/PrintModel/index.vue";
import { typeGroupEnum } from "@/components/PrintModel/staticData.js";
export default {
  name: "ReceiveOrderSample",
  components: { BaseForm, ImportExsl, PrintModel, PrintSamples },
  mixins: [],
  props: {},
  data() {
    return {
      typeGroupEnum: typeGroupEnum,
      StockIn: StockIn,
      Employee: Employee,
      formSearchData: {
        reset: true, // 重置
        expendShow: true, // 展开
        tableSearchSlice: 4,
        value: {},
        tableSearch: [
          {
            label: "标签号",
            value: "tagNumber",
            inputType: "text"
          },
          {
            label: "ALV零件号",
            value: "productCode",
            inputType: "text"
          },
          {
            label: "项目号",
            value: "projectCode",
            inputType: "input"
          },
          {
            label: "状态描述",
            value: "statusDescription",
            inputType: "text"
          },
          {
            label: "状态",
            value: "stockInOrderState",
            inputType: "select",
            children: [
              {
                key: 0,
                value: "创建"
              },
              {
                key: 1,
                value: "已收货"
              },
              {
                key: 2,
                value: "已上架"
              }
            ]
          },
          {
            label: "零件名称",
            value: "productName",
            inputType: "text"
          },
          {
            label: "项目名称",
            value: "projectName",
            inputType: "text"
          },
          {
            label: "批次日期",
            value: "receivedBatch",
            inputType: "picker",
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
            label: "创建人",
            value: "createdBy",
            inputType: "text"
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
          }
        ]
      },
      // 表格数据
      tableData: {
        loading: false,
        emptyImg: true,
        options: {
          selection: true, // 多选框
          index: false, // 序号
          headTool: true, // 开启头部工具栏
          refreshBtn: true, // 开启表格头部刷新按钮
          downloadBtn: true, // 开启表格头部下载按钮
          rowClassName: ({ row }) => {
            // 逾期两天（当前时间减去 row.createdTime时间大于2天），且状态是已收货（row.stockInOrderState === 1）的数据标红
            const now = moment();
            const createdTime = moment(row.createdTime);
            const overdue = now.diff(createdTime, "days") > 2 && row.stockInOrderState === 1;
            return overdue ? "overdue-row" : "";
          }
        }, // 序号和复选框
        rows: [], // 表数据
        columns: [
          {
            label: "",
            type: "selection"
          },
          {
            prop: "tagNumber",
            label: "收货标签号",
            minWidth: "120"
          },
          {
            prop: "stockInOrderStateDesc",
            label: "状态"
          },
          {
            prop: "billNo",
            label: "入库订单号"
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
            prop: "productCode",
            label: "ALV零件号"
          },
          {
            prop: "productName",
            label: "零件名称"
          },
          {
            prop: "qty",
            label: "收货数量"
          },
          {
            prop: "statusDescription",
            label: "状态描述"
          },
          {
            prop: "unit",
            label: "零件单位"
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
            prop: "receivedBatch",
            label: "批次日期"
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
            prop: "remark",
            label: "备注"
          },
          {
            prop: "createdBy",
            label: "创建人"
          },
          {
            prop: "createdTime",
            label: "创建时间"
          },
          {
            prop: "customProductCode",
            label: "客户件号"
          }
        ], // 表头
        operates: [
          // {
          //   isShow: () => {
          //     return true;
          //   },
          //   label: "编辑",
          //   method: this.editHandler,
          // },
          // {
          //   isShow: () => {
          //     return true;
          //   },
          //   label: "查看",
          //   method: this.detailHandler,
          // },
        ], // 表格里面的操作按钮
        operatesAttrs: {
          fixed: "right"
        },
        tableHeightDiff: 290
      },
      paginations: {
        page: 1, // 当前位于那页面
        total: 10, // 总数
        limit: 30, // 一页显示多少条
        pagetionShow: true
      },
      multipleSelection: [],
      dialogVisible: false,

      form: {
        type: 0, // 0详情，1新增, 2编辑
        title: "",
        // 默认值
        defaultValue: {
          projectStatus: 0,
          receivedBatch: moment().format("YYYY-MM-DD"),
          productCode: "自建"
        },
        value: {
          projectCode: "",
          projectName: "",
          projectStatus: 0,
          productCode: "",
          productName: "",
          qty: null,
          statusDescription: "",
          companyName: "",
          receivedBatch: moment().format("YYYY-MM-DD"),
          employeeInfoId: "",
          employeePhoneNumber: "",
          remark: "",
          storageLocation: ""
        },
        model: [
          {
            label: "项目号",
            type: "select",
            prop: "projectCode",
            child: [
              // {
              //   value: "第一个",
              //   key: "1",
              // },
            ],
            props: {
              multiple: false,
              filterable: true
              // allowCreate: true,
              // defaultFirstOption: false,
              // multiple: false,
              // filterable: true,
              // remote: true,
              // remoteMethod: (e) => this.projectCodeRemoteMethod(e),
            },
            keyup: e => {
              const { event, item, form } = e;
              const { key } = event;
              if (key == "Enter") {
                this.projectCodeRemoteMethod(event.target.value);
              }
            },
            listeners: {
              change: (item, val) => {
                const { child } = item;
                const tempItem = child.find(e => e.key === val);
                if (!tempItem) {
                  this.$set(this.form.value, "projectName", "");
                  this.$set(this.form.value, "projectStatus", null);
                } else {
                  this.$set(this.form.value, "projectName", tempItem.projectName);
                  this.$set(this.form.value, "projectStatus", tempItem.projectStatus);
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
            prop: "productCode",
            label: "ALV零件号",
            type: "select",
            props: {
              disabled: false,
              multiple: false,
              filterable: true,
              defaultFirstOption: false
              // allowCreate: true,
              // remote: true,
              // remoteMethod: (e) => this.productCodeRemoteMethod(e),
            },
            child: [{ key: "自建", value: "自建" }],
            keyup: e => {
              const { event, item, form } = e;
              const { key } = event;
              if (key == "Enter") {
                this.productCodeRemoteMethod(event.target.value);
              }
            },
            listeners: {
              change: (item, val) => {
                // 带出零件名称，自定义时候清空
                const tempItem = item.child.find(e => e.key == val);
                const unitTemp = this.form.model.find(e => e.prop === "unitId");

                // 零件号有值，零件名称禁止编辑
                const productNameTemp = this.form.model.find(e => e.prop === "productName");
                productNameTemp.props.disabled = !!val && tempItem.key != "自建";
                this.$set(this.form.value, "unitId", "");

                if (tempItem && tempItem.key) {
                  this.$set(this.form.value, "productName", tempItem.productName);
                  // 勾选的零件号要带出单位，且禁止编辑
                  this.$set(this.form.value, "unitId", tempItem.basicUnitId);
                  if (tempItem.key == "自建") {
                    unitTemp.disabled = false;
                  } else {
                    unitTemp.disabled = true;
                  }
                } else {
                  this.$set(this.form.value, "productName", "");
                  unitTemp.disabled = false;
                }
              }
            }
          },
          {
            prop: "productName",
            label: "零件名称",
            type: "input",
            props: {
              disabled: false
            }
          },
          {
            prop: "qty",
            label: "收货数量",
            type: "number",
            props: {
              min: 1
            }
          },
          {
            prop: "statusDescription",
            label: "状态描述",
            type: "input"
          },
          {
            prop: "unitId",
            label: "单位",
            type: "select",
            child: [],
            disabled: false
          },
          {
            prop: "receivedBatch",
            label: "收货批次",
            type: "date",
            props: {
              format: "yyyy/MM/dd",
              valueFormat: "yyyy-MM-dd"
            }
          },
          {
            prop: "employeeInfoId",
            label: "接收人(PE)",
            type: "select",
            child: [],
            props: {
              filterable: true,
              remote: true,
              allowCreate: false,
              remoteMethod: e => this.receivedUserRemoteMethod(e)
            },
            listeners: {
              change: (item, val) => {
                const { child } = item;
                const tempItem = child.find(e => e.key === val);
                if (!tempItem) {
                  this.$set(this.form.value, "employeePhoneNumber", null);
                  this.form.value.employeePhoneNumber = null;
                } else {
                  this.$set(this.form.value, "employeePhoneNumber", tempItem.employeePhoneNumber);
                }
              }
            }
          },
          {
            prop: "employeePhoneNumber",
            label: "手机号",
            type: "input"
          },
          {
            prop: "remark",
            label: "备注",
            type: "input"
          },
          // {
          //   prop: "storageLocation",
          //   label: "外仓编码",
          //   type: "select",
          //   child: []
          // },
          {
            label: "外仓编码",
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
            prop: "customProductCode",
            label: "客户件号",
            type: "input"
          }
        ],
        rules: {
          // employeePhoneNumber: [
          //   {
          //     required: true,
          //     message: "手机号不能为空",
          //     trigger: "blur",
          //   },
          //   {
          //     pattern: /^1[3-9]\d{9}$/,
          //     message: "请输入有效的手机号",
          //     trigger: "blur",
          //   },
          // ],
          projectCode: [
            {
              required: true,
              message: "项目号不能为空",
              trigger: "blur"
            }
          ],
          projectName: [
            {
              required: true,
              message: "项目名称不能为空",
              trigger: "blur"
            }
          ],
          projectStatus: [
            {
              required: true,
              message: "项目状态不能为空",
              trigger: "blur"
            }
          ],
          // productCode: [
          //   {
          //     required: true,
          //     message: "ALV零件号不能为空",
          //     trigger: "blur",
          //   },
          // ],
          productName: [
            {
              required: true,
              message: "零件名称不能为空",
              trigger: "blur"
            }
          ],
          qty: [
            {
              required: true,
              message: "收货数量不能为空",
              trigger: "blur"
            }
          ],
          receivedBatch: [
            {
              required: true,
              message: "收货批次不能为空",
              trigger: "blur"
            }
          ],
          employeeInfoId: [
            {
              required: true,
              message: "接收人不能为空",
              trigger: "blur"
            }
          ]
          // storageLocation: [
          //   {
          //     required: true,
          //     message: "外仓编码不能为空",
          //     trigger: "blur"
          //   }
          // ]
        },
        attrs: {
          labelWidth: "100px"
        }
      },
      importform: {
        dialogFormVisible: false,
        url: StockIn.importStockIn
      },
      // id: "",
      printModelVisible: false,
      ids: []
    };
  },
  computed: {},
  created() {
    this.init();
    this.getSelect();
    this.getVirtualCargo();
  },
  methods: {
    init() {
      const { createdTime = [] } = this.formSearchData.value || {};

      const params = {
        ...this.formSearchData.value,
        Page: this.paginations.page,
        MaxResultCount: this.paginations.limit
      };
      if (createdTime) {
        Object.assign(params, {
          BeginTime: createdTime[0] || "",
          EndTime: createdTime[1] || ""
        });
      }

      this.get({
        url: StockIn.pagedResult,
        isLoading: true,
        data: params
      }).then(res => {
        this.tableData.rows = res.result.items;
        this.paginations.total = res.result.totalCount;
        this.tableData.emptyImg = true;
      });
    },
    getVirtualCargo(query = "") {
      this.get({
        url: `${CarBody.virtualCargo}?name=${query}`
      }).then(res => {
        if (!this.form || !this.form.model) return;
        const tempItem = this.form.model.find(item => item.prop === "storageLocation");
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
    },
    getSelect() {
      // this.get({
      //   url: CarBody.getProjectList,
      // }).then((res) => {
      //   const tempList = res.result.map((item) => {
      //     return {
      //       key: item.projectCode,
      //       value: item.projectCode,
      //       ...item,
      //     };
      //   });
      //   this.Handle_Select({
      //     keyword: "projectCode",
      //     handleData: this.form.model,
      //     list: tempList,
      //     config: {
      //       type: "type",
      //       prop: "prop",
      //       children: "child",
      //     },
      //   });
      // });

      this.get({
        url: Product.dicByUnit
      }).then(res => {
        this.Handle_Select({
          keyword: "unitId",
          handleData: this.form.model,
          list: res.result,
          config: {
            type: "type",
            prop: "prop",
            children: "child"
          }
        });
      });
    },
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

    // 零件号 远程查询
    productCodeRemoteMethod(val) {
      this.get({
        url: `${Product.productByCode}?productCode=${val}`
      }).then(res => {
        if (res.code !== 200) return;
        const tempList = res.result.map(item => {
          return {
            key: item.productCode,
            value: `${item.productCode}--${item.productName}`,
            ...item
          };
        });
        this.Handle_Select({
          keyword: "productCode",
          handleData: this.form.model,
          list: [{ key: "自建", value: "自建" }, ...tempList],
          config: {
            type: "type",
            prop: "prop",
            children: "child"
          }
        });
      });
    },
    projectCodeRemoteMethod(val) {
      this.get({
        url: `${CarBody.getProjectListByCode}?projectCode=${val}`
      }).then(res => {
        if (res.code !== 200) return;
        const tempList = res.result.map(item => {
          return {
            key: item.projectCode,
            value: `${item.projectCode}--${item.projectName}`,
            ...item
          };
        });
        this.Handle_Select({
          keyword: "projectCode",
          handleData: this.form.model,
          list: tempList,
          config: {
            type: "type",
            prop: "prop",
            children: "child"
          }
        });
      });
    },
    // 创建人模糊查询
    async receivedUserRemoteMethod(val) {
      const res = await this.get({
        url: `${Employee.employeeInfoByName}?employeeName=${val}`
      });
      if (res.code !== 200) return;
      const tempList = res.result.map(item => {
        return {
          key: item.id,
          value: item.employeeName,
          ...item
        };
      });
      this.Handle_Select({
        keyword: "employeeInfoId",
        handleData: this.form.model,
        list: tempList,
        config: {
          type: "type",
          prop: "prop",
          children: "child"
        }
      });
    },
    // 是否需要二级提示，是否确认创建？(二级提示处理：如果项目号或者零件号为新数据，需要二级提示，是否确认创建?)
    async hasNotify() {
      const { result: isNewRecord } = await this.get({
        url: StockIn.checkIsNewRecord,
        data: {
          productCode: this.form.value.productCode,
          projectCode: this.form.value.projectCode
        }
      });
      return isNewRecord;
    },
    addApiHandler() {
      this.post({
        url: StockIn.addStockIn,
        data: this.form.value,
        isLoading: true
      }).then(res => {
        this.$message({ type: "success", message: "操作成功!" });
        this.dialogVisible = false;
        this.init();
      });
    },
    async onSubmit() {
      const { type } = this.form;
      if (type === 1) {
        // 新增
        // 如果项目号或者零件号为新数据，需要二级提示，是否确认创建？
        if (await this.hasNotify()) {
          this.$confirm("当前项目号/零件号为新记录，是否继续？确认后将自动保存", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }).then(() => {
            this.addApiHandler();
          });
        } else {
          this.addApiHandler();
        }
      } else if (type === 2) {
        // 编辑
        this.put({
          url: `${StockIn.editStockIn}/${this.form.value.id}`,
          data: this.form.value,
          isLoading: true
        }).then(res => {
          this.init();
          this.dialogVisible = false;
          this.message({ type: "success", message: "操作成功!" });
        });
      }
    },

    importHandler() {
      this.importform.dialogFormVisible = true;
      this.init();
    },
    // 创建
    addBtnHandler() {
      this.form.value = { ...this.form.defaultValue }; // 赋默认值
      this.form.type = 1;
      const temp = this.form.model.find(e => e.prop === "productCode");
      temp.props.disabled = false;
      this.dialogVisible = true;
    },
    // 编辑
    editBtnHandler() {
      // 单选
      let data = this.multipleSelection;
      if (data.length === 0 || data.length > 1) {
        return this.$message.info("请选择一条数据");
      }
      // 只有创建状态才可以编辑
      if (data[0].stockInOrderState) {
        return this.$message.info("当前状态不可编辑");
      }
      this.get({
        url: `${StockIn.detailStockIn}/${data[0].id}`
      }).then(res => {
        this.form.value = { ...res.result }; // 赋返回值的所有
        this.receivedUserRemoteMethod(this.form.value?.receivedUser || ""); // 用于初始化回显
        this.productCodeRemoteMethod(this.form.value?.productCode || ""); // 用于初始化回显
        this.form.type = 2;
        const temp = this.form.model.find(e => e.prop === "productCode");
        temp.props.disabled = true;
        this.dialogVisible = true;
      });
    },
    // 删除
    deleteBtnHandler() {
      // 单选
      let data = this.multipleSelection;
      if (data.length !== 1) return this.$message.info("请选择一条数据");
      const id = data[0].id;
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.del({
            url: `${StockIn.deleteStockIn}/${id}`
          }).then(() => {
            this.init();
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    deletesBtnHandler() {
      let data = this.multipleSelection;
      if (!data.length) return this.$message.info("请勾选数据");
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.post({
            url: `${StockIn.batchDeleteStockIn}`,
            data: {
              stockInIdList: data.map(item => item.id)
            }
          }).then(() => {
            this.init();
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 审核
    checkBtnHandler() {
      // 单选
      let data = this.multipleSelection;
      if (data.length === 0) return this.$message.info("请选择一条数据");
      const ids = this.multipleSelection.reduce((acc, item) => {
        acc.push(item.id);
        return acc;
      }, []);
      this.post({
        url: StockIn.auditStockIn,
        data: ids
      }).then(res => {
        if (res.code !== 200) return this.$message.error(res.error.message);
        this.init();
        this.$message({ type: "success", message: "审核成功!" });
      });
    },
    // 打印样件标签
    printSampleLabelBtnHandler() {
      let data = this.multipleSelection;
      if (!data.length) return this.$message.info("未勾选打印数据");
      const ids = data.map(item => item.id) || [];
      this.$refs.printSamplesRef.onPrint(ids);
    },
    importBtnHandler() {
      this.importform.dialogFormVisible = true;
      this.init();
    },
    exportBtnHandler() {
      let timer = this.formSearchData.value.createdTime;
      this.formSearchData.value.BeginTime = timer ? timer[0] : "";
      this.formSearchData.value.EndTime = timer ? timer[1] : "";
      this.post({
        url: StockIn.exportStockIn,
        isLoading: true,
        responseType: "blob",
        data: Object.assign(this.formSearchData.value, {
          Page: this.paginations.page,
          MaxResultCount: this.paginations.limit
        })
      }).then(res => {
        this.fnexsl(res);
      });
    },
    printBtnHandler(row) {
      let data = this.multipleSelection;
      if (!data.length) return this.$message.info("请选择数据");
      this.printModelVisible = true;
      // this.id = this.multipleSelection[0].id;
    },
    // 复制
    copyBtnHandler() {
      let data = this.multipleSelection;
      if (data.length != 1) return this.$message.info("请选择一条数据");
      const id = this.multipleSelection[0].id;
      this.post({
        url: `/api/app/stock-in/${id}/copy-stock-in`,
        data: {
          id: id
        }
      }).then(res => {
        if (res.code !== 200) return;
        this.init();
        this.$message({ type: "success", message: "复制成功!" });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
::v-deep .overdue-row {
  background: #f56c6c !important;
}
</style>
