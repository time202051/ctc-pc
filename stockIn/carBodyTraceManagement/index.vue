<template>
  <div class="carBodyTraceManagement-container">
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
    <dialogTemplate
      :form="form"
      @close="closeHandler"
      @submitForm="onSubmitForm"
    >
      <template v-slot:carBodyNum="{ item }">
        <el-input
          v-model="form.value[item.prop]"
          placeholder="请输入车架号(VIN)"
          clearable
          :disabled="frameNumberDisabled"
        >
          <template slot="append">
            <el-button
              type="text"
              :disabled="frameNumberDisabled"
              @click="getTBNum"
            >获取TB号</el-button>
          </template>
        </el-input>
      </template>
    </dialogTemplate>

    <el-dialog
      title="终处理结果"
      :visible.sync="disposeDialogVisible"
      width="350px"
      top="30vh"
    >
      <el-radio-group v-model="result">
        <el-radio :label="6">客户自提</el-radio>
        <el-radio :label="5">直接报废</el-radio>
      </el-radio-group>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="disposeDialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="onDisposeSumbit"
        >确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="打印车身标签"
      :visible.sync="printCarVisible"
      width="110mm"
      top="30vh"
    >
      <PrintCar
        v-if="printCarVisible"
        :id="admissionInfoId"
      />
    </el-dialog>

    <el-dialog
      title="打印"
      :visible.sync="printModelVisible"
      width="230mm"
      top="5vh"
    >
      <PrintModel
        v-if="printModelVisible"
        :id="id"
        :white-list-by-type="typeGroupEnum.carBodyTraceManagement"
      />
    </el-dialog>
    <el-dialog
      title="批量打印"
      :visible.sync="printModeMorelVisible"
      width="230mm"
      top="5vh"
    >
      <PrintModel
        v-if="printModeMorelVisible"
        :id="id"
        :white-list-by-type="typeGroupEnum.carBodyTraceManagementMore"
        :table-data="multipleSelection"
      />
    </el-dialog>
    <UploadImageDialog
      :visible.sync="uploadImageVisible"
      @confirm="handleUploadConfirm"
    />

    <el-dialog
      title="查看图片"
      :visible.sync="visible"
      width="40%"
      top="5vh"
      @close="handleClose"
    >
      <div>
        <el-image
          v-if="imageUrl"
          :src="imageUrl"
          :preview-src-list="[imageUrl]"
        />
        <el-empty
          v-else
          description="暂无图片"
        />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { CarBody, Employee } from "@/api/request/swagger";
import PrintCar from "./printCar.vue";
import minxin from "./index.js";
import PrintModel from "@/components/PrintModel/index.vue";
import { typeGroupEnum } from "@/components/PrintModel/staticData.js";
import UploadImageDialog from "./UploadImageDialog.vue";
import moment from "moment";

export default {
  name: "CarBodyTraceManagement",
  components: {
    PrintCar,
    PrintModel,
    UploadImageDialog
  },
  mixins: [minxin],
  data() {
    return {
      CarBody: CarBody,
      typeGroupEnum: typeGroupEnum,
      multipleSelection: [],
      warehouseList: [], // 仓库
      ownerList: [], // 货主
      result: 6,
      disposeDialogVisible: false,
      frameNumberDisabled: false, // 车架号是否disabled
      printCarVisible: false,
      admissionInfoId: "",
      printModelVisible: false,
      id: "",
      printModeMorelVisible: false,
      uploadImageVisible: false, // 上传图片对话框可见性
      rowId: "",
      visible: false,
      imageUrl: null
    };
  },
  mounted() {
    this.getTable();
    this.getSelect();
  },
  methods: {
    // 获取表格数据
    async getTable() {
      try {
        // 解构并设置默认值,提高代码健壮性
        const { createdTime = [] } = this.formSearchData.value || {};

        // 构建查询参数
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
        // 发起请求并处理响应
        const { result: { items = [], totalCount = 0 } = {}} = await this.get({
          url: CarBody.pagedResult,
          isLoading: true,
          data: params
        });

        // 更新表格数据
        this.tableData = {
          ...this.tableData,
          rows: items,
          emptyImg: true
        };
        this.paginations.total = totalCount;
      } catch (error) {
        console.error("获取表格数据失败:", error);
        this.$message.error("获取表格数据失败，请稍后重试");
      }
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
    isOnlySelect() {
      const selectedCount = this.multipleSelection.length;

      if (selectedCount !== 1) {
        this.$message.info("请选择一条数据");
        return false;
      }

      return true;
    },
    // 详情页弹出层
    // detail(row) {
    //   this.detailsform.row = row.row;
    //   setTimeout(() => {
    //     this.$refs.detailsdialogTemplate.getTable();
    //     this.detailsform.outerVisible = true;
    //   }, 10);
    // },
    // make() {
    //   let value = this.createform.value;
    //   this.createform.title = "质检制单";
    //   this.createform.requestData.flage = "add";
    //   this.createform.outerVisible = true;
    //   value.warehouseCode = this.warehouseList?.[0]?.key;
    //   value.ownerCode = this.ownerList?.[0]?.key;
    //   value.remark = "";
    //   this.$refs.createTemplate.getTable();
    // },
    SelectionChange(row) {
      this.multipleSelection = row;
    },
    handleSearch(from) {
      var self = this;
      self.formSearchData.value = { ...from };
      self.paginations.page = 1;
      this.getTable();
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
      this.getTable();
    },
    handleindexChange(val) {
      this.paginations.page = val;
      this.getTable();
    },
    getTBNum() {
      console.log("获取TB号");
    },
    onDisposeSumbit() {
      const data = this.multipleSelection;
      const tempData =
        data.map(item => {
          return item.admissionInfoId;
        }) || [];
      this.put({
        url: `${CarBody.finalProcessedAdmissionInfo}?tagStatus=${this.result}`,
        isLoading: false,
        data: tempData
      }).then(res => {
        this.form.requestData.fn();
        this.disposeDialogVisible = false;
        this.$message.success("终处理提交操作成功");
      });
    },

    create() {
      this.frameNumberDisabled = false;
      this.form.value = {
        admissionDate: ""
      };
      this.form.value.admissionDate = moment().format("YYYY-MM-DD");
      this.form.requestData = {
        url: CarBody.addAdmissionInfo,
        flage: "autoArrange"
        // fn: this.getTable
      };
      this.form.dialogFormVisible = true;
    },

    // 编辑
    update() {
      this.getSelect();
      // this.form.value.admissionDate = "";
      let data = this.multipleSelection;
      if (data.length == 0 || data.length > 1) {
        return this.$message.info("请选择一条数据");
      }
      // 只允许创建状态下可编辑
      if (data[0].tagStatus != 0) {
        return this.$message.info(`${data[0].tagStatusDesc}状态无法编辑`);
      }
      this.frameNumberDisabled = true;
      this.get({
        url: CarBody.detailAdmissionInfoById + "/" + data[0].admissionInfoId
      }).then(res => {
        this.form.value = { ...res.result }; // 赋返回值的所有
        this.form.value.id = res.result.admissionInfoId;
        this.form.model[0].disabled = false;
        this.form.model[1].disabled = false;
        this.form.model[2].disabled = false;
        this.form.requestData.flage = "update";
        this.remoteMethod(this.form.value?.receivedUser || ""); // 用于初始化回显
        this.form.dialogFormVisible = true;
      });
      this.form.requestData = {
        url: CarBody.editAdmissionInfo,
        flage: "update",
        fn: this.getTable
      };
      this.form.dialogFormVisible = true;
    },

    // 审核
    check() {
      if (!this.isOnlySelect()) return;
      let data = this.multipleSelection;
      // if (data.length == 0) this.$message.info("请勾选数据");
      // console.log("this.multipleSelection", this.multipleSelection);
      const tempData =
        data.map(item => {
          return item.admissionInfoId;
        }) || [];
      this.post({
        url: CarBody.auditAdmissionInfo,
        isLoading: false,
        data: tempData
      }).then(res => {
        this.getTable();
        this.$message.success("审核成功");
      });
    },
    // 出库
    outWarehouse() {
      if (!this.isOnlySelect()) return;
    },
    // 终处理
    dispose() {
      if (!this.isOnlySelect()) return;
      this.result = 6;
      this.disposeDialogVisible = true;
    },
    // 打印
    print() {
      if (!this.isOnlySelect()) return;
      const currentItem = this.multipleSelection[0];
      this.admissionInfoId = currentItem.admissionInfoId || "";
      this.printCarVisible = true;
    },
    // 删除
    delete() {
      if (!this.isOnlySelect()) return;
      let data = this.multipleSelection;
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.del({
            url: CarBody.delAdmissionInfo + "/" + data[0].admissionInfoId
          }).then(res => {
            this.getTable();
            this.$message.success("删除成功");
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 导出
    export() {
      let timer = this.formSearchData.value.createdTime;
      this.formSearchData.value.BeginTime = timer ? timer[0] : "";
      this.formSearchData.value.EndTime = timer ? timer[1] : "";
      this.post({
        url: CarBody.exportStock,
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
    closeHandler() {
      this.form.model[0].disabled = false;
      this.form.model[1].disabled = false;
      this.form.model[2].disabled = false;
      this.frameNumberDisabled = true;
      this.form.dialogFormVisible = false;
    },
    async onSaveHandler() {
      const res = await this.post({
        url: this.form.requestData.url,
        data: this.form.value,
        isLoading: true
      });
      if (res.code !== 200) return;
      this.form.dialogFormVisible = false;
      this.$message({
        type: "success",
        message: "新建成功!"
      });
      this.getTable();
    },
    // 创建弹框新建
    async onSubmitForm() {
      if (this.isNew) {
        this.$confirm(
          "当前项目号/新记录，是否继续？确认后将自动保存！",
          "提示",
          {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }
        ).then(() => {
          this.onSaveHandler();
        });
      } else {
        this.onSaveHandler();
      }
    },
    // 创建人模糊查询
    async remoteMethod(val) {
      const res = await this.get({
        url: `${Employee.employeeInfoByName}?employeeName=${val}`
      });
      if (res.code != 200) return;
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
    printBtnHandler(row) {
      // 只能勾选一条数据
      if (this.multipleSelection.length !== 1) { return this.$message.info("请选择一条数据"); }
      this.printModelVisible = true;
      this.id = this.multipleSelection[0].admissionInfoId;
    },
    scrapPrintBtnHandler() {
      // 必须勾选
      if (this.multipleSelection.length === 0) { return this.$message.info("请勾选数据"); }
      this.printModeMorelVisible = true;
    },
    // 上传图片
    handleUpload(row, index) {
      this.rowId = row.admissionInfoId;
      this.uploadImageVisible = true;
    },
    // 处理图片上传完成
    async handleUploadConfirm(fileList) {
      try {
        const formData = new FormData();
        fileList.forEach(file => {
          formData.append("file", file); // 假设后端接口接收的字段名为'files'
        });

        const res = await this.post({
          url: `/api/app/admission-info/${this.rowId}/upload-file`, // 替换为实际的上传接口地址
          data: formData
        });

        if (res.code === 200) {
          this.$message.success("图片上传成功");
        } else {
          this.$message.error("图片上传失败");
        }
      } catch (error) {
        console.error("上传失败:", error);
        this.$message.error("图片上传失败");
      }
    },
    // 查看图片
    handleView(row) {
      this.post({
        url: `/api/app/admission-info/${row.admissionInfoId}/down-file`,
        responseType: "blob"
      }).then(blob => {
        // 判断blob是Blob类型
        if (blob instanceof Blob) {
          this.visible = true;
          this.imageUrl = URL.createObjectURL(blob);
        }
      });
    },
    // 关闭弹框
    handleClose() {
      this.visible = false;
      this.imageUrl = null;
    }
  }
};
</script>
<style lang="scss" scoped></style>
