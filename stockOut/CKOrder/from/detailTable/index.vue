<template>
  <div>
    <MyTable
      :show-btn-box="false"
      :paginations="paginations"
      :empty-img="tableData.emptyImg"
      :table-data="tableData"
      :btnlist="[]"
      @handleSizeChange="handleSizeChange"
      @handleindexChange="handleindexChange"
    />
  </div>
</template>
<script>
import { OutBound } from "@/api/request/swagger";
import minxin from "./index.js";
export default {
  name: "DetailTable",
  mixins: [minxin],
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.get({
        url: OutBound.getCKOrderDetailList,
        isLoading: true,
        data: {
          stockOutId: this.id,
          Page: this.paginations.page,
          MaxResultCount: this.paginations.limit
        }
      }).then(res => {
        this.tableData.rows = res.result.items;
        this.paginations.total = res.result.totalCount; // 是否传了分页
        this.tableData.emptyImg = true;
      });
    },
    handleSizeChange(val) {
      this.paginations.page = 1;
      this.paginations.limit = val;
      this.init();
    },
    handleindexChange(val) {
      this.paginations.page = val;
      this.init();
    }
  }
};
</script>
<style lang='' scoped>
</style>
