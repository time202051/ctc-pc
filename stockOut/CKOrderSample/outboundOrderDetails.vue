<template>
  <div>
    <ol-table
      :showBtnBox="false"
      :paginations="paginations"
      :btnlist="this.hasBtn(this)"
      :empty-img="tableData.emptyImg"
      :table-data="tableData"
      :multiple-selection="multipleSelection"
      @SelectionChange="SelectionChange"
      @handleSizeChange="handleSizeChange"
      @handleindexChange="handleindexChange"
    >
    </ol-table>
    <div :class="ns.b('footer')">
      <el-button @click="onCancel">返回</el-button>
      <el-button type="primary" @click="onSubmit">执行拆单</el-button>
    </div>
  </div>
</template>

<script>
import { NameSpace } from "@/utils/nameSpace.js";
export default {
  props: {},
  data() {
    return {
      ns: new NameSpace("outboundOrderDetails"),
      multipleSelection: [],
      // 表格数据
      tableData: {
        loading: false,
        emptyImg: true,
        options: {
          selection: true, // 多选框
          index: null, // 序号
          headTool: false, // 开启头部工具栏
          refreshBtn: false, // 开启表格头部刷新按钮
          downloadBtn: false // 开启表格头部下载按钮
        }, // 序号和复选框
        rows: [], // 表数据
        columns: [], // 表头
        operates: [], // 表格里面的操作按钮
        tableHeightDiff: 300
      },
      paginations: {
        page: 1, // 当前位于那页面
        total: 10, // 总数
        limit: 30, // 一页显示多少条
        pagetionShow: true
      }
    };
  },
  mounted() {},
  methods: {
    getTable() {
      //   this.get({
      //     url: StockOut.outOrderPages,
      //     isLoading: true,
      //     data: Object.assign(query, {
      //       Page: this.paginations.page,
      //       MaxResultCount: this.paginations.limit,
      //       type: 8 // 样件
      //     })
      //   }).then(res => {
      //     this.tableData.rows = res.result.items;
      //     this.paginations.total = res.result.totalCount; // 是否传了分页
      //     this.tableData.emptyImg = true;
      //     console.log("34445", this.multipleSelection);
      //   });
    },
    SelectionChange(row) {
      this.multipleSelection = row;
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
    onCancel() {
      this.$emit("cancel");
    },
    onSubmit() {
      this.$emit("submit");
    }
  }
};
</script>

<style lang="scss" scoped>
.ol-outboundOrderDetails-footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>
