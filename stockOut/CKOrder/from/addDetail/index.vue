<template>
  <div>
    <BaseForm ref="baseFormRef" :form="form" :show-btn="false" />
    <el-divider />
    <div :class="ns.b('titleBtn')">
      <div :class="ns.b('title')">出库订单明细</div>
      <div :class="ns.b('btn')">
        <!-- <el-button
          type="danger"
          plain
          :disabled="!multipleSelection.length"
          @click="handleDelete"
          >删除</el-button
        > -->
        <el-button type="primary" @click="onOutOrderPage">获取</el-button>
      </div>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      :max-height="390"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column prop="carBodyTagNumber" label="车身编码" width="180" show-overflow-tooltip />
      <el-table-column
        prop="statusDescription1Desc"
        label="车身名称"
        width="180"
        show-overflow-tooltip
        align="center"
      />
      <el-table-column prop="admissionDate" label="批次号" show-overflow-tooltip align="center" />
      <el-table-column label="申请数量" show-overflow-tooltip width="80" align="center"
        >1</el-table-column
      >
      <el-table-column label="可用库存" show-overflow-tooltip width="80" align="center"
        >1</el-table-column
      >
      <el-table-column prop="address" label="扭矩/其他说明" show-overflow-tooltip align="center" />
      <el-table-column prop="otherRemark12" label="备注" show-overflow-tooltip align="center" />
    </el-table>
    <span :class="ns.b('footer')">
      <el-button @click="clearHandler">清空</el-button>
      <el-button type="primary" @click="onSubmit">提交创建</el-button>
    </span>
  </div>
</template>
<script>
import { StockOut, CarBody, Employee } from "@/api/request/swagger";
import BaseForm from "@/components/baseForm/index.vue";
import { NameSpace } from "@/utils/nameSpace.js";
import moment from "moment";
import { throttle } from "lodash";

export default {
  name: "AddDetail",
  components: { BaseForm },
  mixins: [],
  props: {
    type: {
      type: Number,
      default: 1 // 1新增 2编辑
    },
    detailData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      ns: new NameSpace("addDetail"),
      form: {
        model: [
          {
            label: "项目号",
            type: "select",
            prop: "projectCode",
            child: [],
            props: {
              multiple: false,
              filterable: true,
              allowCreate: true,
              defaultFirstOption: false
            },
            listeners: {
              change: (item, val) => {
                const { child } = item;
                const tempItem = child.find(e => e.key === val);
                if (!tempItem) {
                  this.$set(this.form.value, "projectName", "");
                  this.form.value.projectId = "";
                } else {
                  this.$set(this.form.value, "projectName", tempItem.projectName);
                  this.form.value.projectId = tempItem.id;
                }
              }
            }
          },
          {
            type: "input",
            label: "项目名称",
            prop: "projectName"
          },
          {
            type: "input",
            label: "成本中心",
            prop: "costCenter"
          },
          {
            type: "input",
            label: "SO号",
            prop: "soNumber",
            props: {
              disabled: true
            }
          },
          {
            type: "select",
            label: "检测工程师",
            prop: "inspector",
            child: [],
            props: {
              filterable: true,
              remote: true,
              allowCreate: true,
              remoteMethod: e => this.inspectorRemoteMethod(e, "inspector"),
              disabled: true
            },
            listeners: {
              change: (item, val) => {
                const { child } = item;
                const tempItem = child.find(e => e.key === val);
                if (!tempItem) {
                  this.$set(this.form.value, "inspectorPhone", null);
                } else {
                  this.$set(this.form.value, "inspectorPhone", tempItem.employeePhoneNumber);
                }
              }
            }
          },
          {
            type: "input",
            label: "检测工程师电话1",
            prop: "inspectorPhone",
            props: {
              disabled: true
            }
          },
          {
            type: "input",
            label: "实验TO号",
            prop: "experimentToNumber",
            props: {
              disabled: true
            }
          },
          {
            type: "select",
            label: "系统/客服/产品工程师",
            prop: "engineer",
            child: [],
            props: {
              filterable: true,
              remote: true,
              allowCreate: true,
              remoteMethod: e => this.inspectorRemoteMethod(e, "engineer")
            },
            listeners: {
              change: (item, val) => {
                const { child } = item;
                const tempItem = child.find(e => e.key === val);
                if (!tempItem) {
                  this.$set(this.form.value, "engineerPhone", null);
                  this.$set(this.form.value, "inspectorPhone", null);
                  this.$set(this.form.value, "inspector", null);
                } else {
                  this.$set(this.form.value, "engineerPhone", tempItem.employeePhoneNumber);
                  this.$set(this.form.value, "inspectorPhone", tempItem.employeePhoneNumber);
                  this.$set(this.form.value, "inspector", tempItem.key);
                }
              }
            }
          },
          {
            type: "input",
            label: "系统/客服/产品工程师电话",
            prop: "engineerPhone"
          },
          {
            type: "input",
            label: "实验T/TP号",
            prop: "experimentTtpNumber",
            props: {
              disabled: true
            }
          },
          {
            type: "date",
            label: "需求日期",
            prop: "requiredDate",
            props: {
              format: "yyyy/MM/dd",
              valueFormat: "yyyy-MM-dd"
            }
          },
          {
            type: "select",
            label: "装车执行标准",
            prop: "loadingStandard",
            child: [
              {
                value: "装车指导书",
                key: "装车指导书"
              },
              {
                value: "现场指导",
                key: "现场指导"
              }
            ]
          }
        ],
        rules: {
          loadingStandard: [
            {
              required: true,
              message: "装车执行标准不能为空",
              trigger: "change"
            }
          ],
          projectCode: [{ required: true, message: "项目号不能为空", trigger: "change" }],
          projectName: [
            {
              required: true,
              message: "项目名称不能为空",
              trigger: "change"
            }
          ],
          costCenter: [
            {
              required: true,
              message: "成本中心不能为空",
              trigger: "change"
            }
          ],
          soNumber: [{ required: true, message: "SO号不能为空", trigger: "change" }],
          experimentToNumber: [
            {
              required: true,
              message: "实验TO号不能为空",
              trigger: "change"
            }
          ],
          // inspector: [
          //   {
          //     required: true,
          //     message: "检测工程师不能为空",
          //     trigger: "change"
          //   }
          // ],
          // inspectorPhone: [
          //   {
          //     required: true,
          //     message: "检测工程师电话不能为空",
          //     trigger: "change"
          //   }
          // ],
          engineer: [
            {
              required: true,
              message: "系统/客服/产品工程师不能为空",
              trigger: "change"
            }
          ],
          experimentTtpNumber: [
            {
              required: true,
              message: "实验T/TP号不能为空",
              trigger: "change"
            }
          ],
          requiredDate: [
            {
              required: true,
              message: "需求日期不能为空",
              trigger: "change"
            }
          ]
        },
        value: {
          projectCode: "",
          projectName: "",
          costCenter: "",
          soNumber: "",
          inspector: "",
          inspectorPhone: "",
          experimentToNumber: "",
          engineer: "",
          engineerPhone: "",
          experimentTtpNumber: "",
          requiredDate: "",
          loadingStandard: "装车指导书"
        },
        attrs: {
          labelWidth: "190px"
        }
      },
      tableData: [
        // {
        //   id: "111",
        //   date: "2016-05-02",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1518 弄"
        // },
        // {
        //   id: "222",
        //   date: "2016-05-04",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1517 弄"
        // }
      ],
      multipleSelection: []
    };
  },
  computed: {},
  watch: {},
  created() {
    this.init();
    this.form.value.requiredDate = moment().format("YYYY-MM-DD");
  },
  methods: {
    init() {
      if (this.type === 1) {
        // 新建
        // 用于初 始化回显
        this.onSerialNo();
      } else if (this.type === 2) {
        // 编辑
        Object.keys(this.detailData).forEach(key => {
          this.form.value[key] = this.detailData[key];
        });
      }
      this.getSelect();
      this.inspectorRemoteMethod(this.form.value?.inspector || "", "inspector");
      this.inspectorRemoteMethod(this.form.value?.engineer || "", "engineer");
      this.initCacheSelectData(); // 添加缓存下拉框数据
    },
    getSelect() {
      this.get({
        url: CarBody.getProjectList
      }).then(res => {
        const tempList = res.result.map(item => {
          return {
            key: item.projectCode,
            value: item.projectCode,
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
    // 接口获取生成TO，TP，SO号
    async onSerialNo() {
      const res = await this.get({
        url: StockOut.serialNo
      });
      if (res.code !== 200) return;
      const { experimentToNumber, experimentTtpNumber, soNumber } = res.result;
      this.form.value.experimentToNumber = experimentToNumber;
      this.form.value.experimentTtpNumber = experimentTtpNumber;
      this.form.value.soNumber = soNumber;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // handleDelete() {
    //   this.multipleSelection.forEach((item) => {
    //     const index = this.tableData.findIndex(
    //       (i) => item.admissionInfoId === i.admissionInfoId
    //     );
    //     index !== -1 && this.tableData.splice(index, 1);
    //   });
    // },
    clearHandler() {
      this.onSerialNo();
      // 校验工程师，校验工程师电话，系统/客服/产品工程师，系统/客服/产品工程师电话
      // 上面四个不要清空，其他清空
      this.form.value = {
        ...this.form.value,
        projectCode: "",
        projectName: "",
        costCenter: "",
        soNumber: "",
        // inspector: "",
        // inspectorPhone: "",
        experimentToNumber: "",
        // engineer: "",
        // engineerPhone: "",
        experimentTtpNumber: "",
        requiredDate: moment().format("YYYY-MM-DD"),
        loadingStandard: "装车指导书"
      };
      this.$refs.baseFormRef.$refs.formRef.resetFields();
    },
    // 检测工程师模糊查询
    async inspectorRemoteMethod(val, keyword = "inspector") {
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
        keyword,
        handleData: this.form.model,
        list: tempList,
        config: {
          type: "type",
          prop: "prop",
          children: "child"
        }
      });
    },
    // 缓存下拉框数据(防止后期扩展多条，暂用数组)
    setCacheSelectData() {
      try {
        // 只保存上次的提交数据
        const cacheCKOrderOptions = {
          inspector: [
            {
              name: this.form.value.inspector || "",
              phone: this.form.value.inspectorPhone || ""
            }
          ],
          engineer: [
            {
              name: this.form.value.engineer,
              phone: this.form.value.engineerPhone
            }
          ]
        };
        window.localStorage.setItem("cacheCKOrderOptions", JSON.stringify(cacheCKOrderOptions));
        // this.$message.success("提交成功");
      } catch (error) {
        console.error("Error setting cache CKOrder options:", error);
        // this.$message.error("缓存设置失败，请稍后重试。");
      }
    },
    // 获取缓存下拉框数据
    initCacheSelectData() {
      const cacheCKOrderOptions = JSON.parse(window.localStorage.getItem("cacheCKOrderOptions"));
      if (!cacheCKOrderOptions) return {};
      if (
        cacheCKOrderOptions.inspector &&
        Array.isArray(cacheCKOrderOptions.inspector) &&
        cacheCKOrderOptions.inspector.length > 0
      ) {
        const { name, phone } = cacheCKOrderOptions.inspector[0];
        this.form.value.inspector = name;
        this.form.value.inspectorPhone = phone;
      }
      if (
        cacheCKOrderOptions.engineer &&
        Array.isArray(cacheCKOrderOptions.engineer) &&
        cacheCKOrderOptions.engineer.length > 0
      ) {
        const { name, phone } = cacheCKOrderOptions.engineer[0];
        this.form.value.engineer = name;
        this.form.value.engineerPhone = phone;
      }
    },
    // 获取
    async onOutOrderPage() {
      const res = await this.get({
        url: StockOut.getAdmissionInfoPage,
        data: {
          projectId: this.form.value.projectId,
          employeeInfoId: this.form.value.inspector
        }
      });
      if (res.code !== 200) return;
      this.tableData = res.result.map(item => {
        return {
          ...item,
          otherRemark12: `${item.statusDescription1Desc}_${item.statusDescription2}`
        };
      });
    },
    // 提交创建
    onSubmit: throttle(async function () {
      if (this.multipleSelection.length != 1) {
        return this.$message.error("只允许录入一条明细车身");
      }
      await this.$refs.baseFormRef.validate().then(() => {
        // if (this.tableData.length !== 1)
        //   return this.$message.error("只允许录入一条明细车身");
        this.setCacheSelectData();
        this.$emit("submit", {
          form: this.form.value,
          tableData: this.multipleSelection
        });
      });
    }, 3000)
  }
};
</script>
<style lang="scss" scoped>
.ol-addDetail-title {
  font-weight: bold;
  font-size: 18px;
  color: #02a7f0;
}

.ol-addDetail-titleBtn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.ol-addDetail-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

::v-deep .el-divider--horizontal {
  margin: 10px 0;
}
</style>
