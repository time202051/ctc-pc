<template>
  <div style="box-sizing: border-box">
    <!-- 实验领料单，自建领料-->
    <div style="padding-bottom: 10px; box-sizing: border-box">
      <el-radio-group v-model="materialType">
        <el-radio-button :label="1">实验领料单</el-radio-button>
        <el-radio-button :label="0">自建领料单</el-radio-button>
      </el-radio-group>
    </div>

    <BaseForm
      ref="baseFormRef"
      :form="form"
      :show-btn="false"
    />
    <el-divider />
    <div :class="ns.b('titleBtn')">
      <div :class="ns.b('title')">出库订单明细</div>
      <div :class="ns.b('btn')">
        <el-button
          type="danger"
          plain
          :disabled="!multipleSelection.length"
          @click="handleDelete"
        >删除</el-button>
        <el-button
          type="primary"
          :disabled="!form.value.projectCode"
          @click="onOutOrderPage"
        >获取</el-button>
      </div>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      :max-height="390"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
      />
      <el-table-column
        prop="productCode"
        label="样件编码"
        show-overflow-tooltip
      />
      <el-table-column
        prop="productName"
        label="样件名称"
        show-overflow-tooltip
      />
      <el-table-column
        prop="productBatch"
        label="样件批次"
        show-overflow-tooltip
      />
      <el-table-column
        prop="totalQty"
        label="库存数量"
        show-overflow-tooltip
      />
      <el-table-column
        prop="requestedAmount"
        label="需求数量"
      >
        <template slot-scope="scope">
          <el-input-number
            v-model="scope.row.requestedAmount"
            :min="0"
            label="需求数量"
          />
        </template>
      </el-table-column>
      <el-table-column
        prop="usableQty"
        label="可用库存"
        show-overflow-tooltip
      />
      <el-table-column
        prop="torqueRequirement"
        label="扭矩/其他说明"
      >
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.torqueRequirement"
            placeholder="请输入扭矩/其他说明"
          />
        </template>
      </el-table-column>
      <!-- <el-table-column prop="TSNUmber" label="TS号" show-overflow-tooltip /> -->
      <el-table-column
        prop="projectCode"
        label="项目号"
        show-overflow-tooltip
      />
      <!-- <el-table-column prop="PE" label="PE" show-overflow-tooltip /> -->
      <el-table-column
        prop="cargoLocationCode"
        label="库位号"
        show-overflow-tooltip
      />
      <!-- <el-table-column prop="remarks" label="备注">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.remark"
            type="textarea"
            autosize
            placeholder="请输入内容"
          />
        </template>
      </el-table-column> -->
      <el-table-column
        prop="remark"
        label="备注"
      />
      <el-table-column
        prop="employeeName"
        label="PE名称"
      />
    </el-table>
    <span :class="ns.b('footer')">
      <el-button @click="clearHandler">清空</el-button>
      <el-button
        type="primary"
        @click="onSubmit"
      >提交创建</el-button>
    </span>

    <!-- 选择库存弹框 -->
    <el-dialog
      title="选择库存"
      :visible.sync="dialogVisible"
      :append-to-body="true"
      width="70%"
    >
      <StockTable
        v-if="dialogVisible"
        :project-code="form.value.projectCode"
        :material-type="materialType"
        @submit="handleSubmit"
        @cancel="handleCancel"
      />
    </el-dialog>
  </div>
</template>
<script>
import BaseForm from "@/components/baseForm/index.vue";
import { CarBody, Employee, StockOut } from "@/api/request/swagger";
import { NameSpace } from "@/utils/nameSpace.js";
// 导入stockTable
import StockTable from "@/view/stockOut/CKOrder/from/addSampleDetail/stockTable.vue";
import moment from "moment";
import { throttle } from "lodash";

export default {
  components: { BaseForm, StockTable },
  data() {
    return {
      ns: new NameSpace("addSampleDetail"),
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
                  this.$set(
                    this.form.value,
                    "projectName",
                    tempItem.projectName
                  );
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
              disabled: true,
              remoteMethod: e => this.inspectorRemoteMethod(e, "inspector")
            },
            listeners: {
              change: (item, val) => {
                const { child } = item;
                const tempItem = child.find(e => e.key === val);
                if (!tempItem) {
                  this.$set(this.form.value, "inspectorPhone", null);
                } else {
                  this.$set(
                    this.form.value,
                    "inspectorPhone",
                    tempItem.employeePhoneNumber
                  );
                }
              }
            }
          },
          {
            type: "input",
            label: "检测工程师电话",
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
                  this.$set(
                    this.form.value,
                    "engineerPhone",
                    tempItem.employeePhoneNumber
                  );
                  this.$set(
                    this.form.value,
                    "inspectorPhone",
                    tempItem.employeePhoneNumber
                  );
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
            // listeners: {
            //   change: (item, val) => {
            //     console.log(item, val);
            //     const date = new Date(val);
            //     // 进行时区调整
            //     const adjustedDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
            //     // 格式化日期时间
            //     const dataTemp = adjustedDate.toISOString().slice(0, 19).replace("T", " ");
            //     console.log("1234", dataTemp);
            //     return dataTemp;
            //   }
            // }
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
          projectCode: [
            { required: true, message: "项目号不能为空", trigger: "change" }
          ],
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
          soNumber: [
            { required: true, message: "SO号不能为空", trigger: "change" }
          ],
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
          // engineerPhone: [
          //   {
          //     required: true,
          //     message: "系统/客服/产品工程师电话不能为空",
          //     trigger: "change",
          //   },
          // ],
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
      tableData: [],
      multipleSelection: [],
      dialogVisible: false,
      materialType: 1
    };
  },
  watch: {
    // 自建领料单，不显示so号，to号 t/tp号
    materialType: {
      handler: function(n) {
        if (n === 0) this.onSerialNo();
        const propsList = [
          "soNumber",
          "experimentToNumber",
          "experimentTtpNumber"
        ];
        propsList.forEach(prop => {
          const targetItem = this.form.model.find(item => item.prop === prop);
          // if (targetItem) targetItem.hidden = !!n;
          if (targetItem) {
            if (!targetItem.props) targetItem.props = {};
            this.form.value[prop] = "";
            targetItem.props.disabled = !n;
          }
        });
        this.$nextTick(() => {
          if (this.$refs) this.$refs.baseFormRef.$refs.formRef.clearValidate();
        });
      },
      immediate: true
    }
  },
  created() {
    this.getSelect();
    // 用于初 始化回显
    this.inspectorRemoteMethod(this.form.value?.inspector || "", "inspector");
    this.inspectorRemoteMethod(this.form.value?.engineer || "", "engineer");
    this.initCacheSelectData(); // 添加缓存下拉框数据
    // this.onSerialNo();
    this.form.value.requiredDate = moment().format("YYYY-MM-DD");
  },
  methods: {
    getPhoneCacheSelectDataByName(child, name) {
      if (!child || !Array.isArray(child)) return;
      const temp = child.find(item => item.value === name);
      if (!temp) return;
      return temp.phone;
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

    // 缓存下拉框数据
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
        window.localStorage.setItem(
          "cacheCKOrderOptions",
          JSON.stringify(cacheCKOrderOptions)
        );
        // this.$message.success("提交成功");
      } catch (error) {
        console.error("Error setting cache CKOrder options:", error);
        // this.$message.error("缓存设置失败，请稍后重试。");
      }
    },
    // 获取缓存下拉框数据
    initCacheSelectData() {
      const cacheCKOrderOptions = JSON.parse(
        window.localStorage.getItem("cacheCKOrderOptions")
      );
      if (!cacheCKOrderOptions) return {};
      if (
        cacheCKOrderOptions.inspector &&
        Array.isArray(cacheCKOrderOptions.inspector) &&
        cacheCKOrderOptions.inspector.length > 0
      ) {
        //  在this.form.model中通过prop="inspector"找到child并赋值
        this.form.model.find(item => item.prop === "inspector").child =
          cacheCKOrderOptions.inspector.map(item => ({
            value: item.name,
            key: item.name,
            phone: item.phone
          }));
      }
      if (
        cacheCKOrderOptions.engineer &&
        Array.isArray(cacheCKOrderOptions.engineer) &&
        cacheCKOrderOptions.engineer.length > 0
      ) {
        this.form.model.find(item => item.prop === "engineer").child =
          cacheCKOrderOptions.engineer.map(item => ({
            value: item.name,
            key: item.name,
            phone: item.phone
          }));
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleDelete() {
      this.multipleSelection.forEach(item => {
        const index = this.tableData.findIndex(i => item.id === i.id);
        index !== -1 && this.tableData.splice(index, 1);
      });
    },
    clearHandler() {
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
      // this.tableData = [];
      if (this.materialType === 0) this.onSerialNo();
      this.$refs.baseFormRef.$refs.formRef.resetFields();
    },
    onOutOrderPage() {
      // 打开选择库存弹框
      this.dialogVisible = true;
    },

    handleCancel() {
      this.dialogVisible = false;
    },
    handleSubmit(e) {
      console.log(123, e);

      const temp = e.map(item => {
        return {
          // requestedAmount: item.usableQty,
          requestedAmount: 0,
          ...item
        };
      });
      this.tableData = [...temp, ...this.tableData];
      this.dialogVisible = false;
    },
    // 提交创建
    onSubmit: throttle(function() {
      console.log(123123, this.form.value, this.tableData);
      this.$refs.baseFormRef.validate().then(res => {
        this.setCacheSelectData();
        // if (this.tableData.length === 0) {
        //   return this.$message.error("请勾选一条出库订单明细");
        // }
        // 后端要求字段
        this.tableData.forEach(item => {
          item.bodyWorkTypeDesc = item.productCode;
        });

        // 产品要求需求数量手输，默认0，提交时候必须大于0，否则提示，让用户输入或自己删除当前数据
        const hasRequestedAmount = this.tableData.some(
          item => !item.requestedAmount
        );
        if (hasRequestedAmount) return this.$message.error("请输入需求数量");

        this.post({
          url: StockOut.sampleStockOut,
          data: {
            ...this.form.value,
            stockOutDetailCreateDtos: this.tableData,
            stockOutType: this.materialType ? 1 : 2
          }
        }).then(res => {
          if (res.code !== 200) return;
          this.$message({
            type: "success",
            message: "提交成功"
          });
          this.$emit("submit", {
            form: this.form.value,
            tableData: this.tableData
          });
        });
      });
    }, 3000),

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
    }
  }
};
</script>
<style lang="scss" scoped>
.ol-addSampleDetail-title {
  font-weight: bold;
  font-size: 18px;
  color: #02a7f0;
}

.ol-addSampleDetail-titleBtn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // margin-bottom: 20px;
  padding-bottom: 20px;
}

.ol-addSampleDetail-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  // margin-top: 20px;
  padding-top: 20px;
}

::v-deep .el-divider--horizontal {
  margin: 10px 0;
}
</style>
