<template>
  <div class="nonProductionWarehousing-container">
    <HeaderCom v-bind="$attrs" />
    <div class="header-container">
      <div class="checkbox-container">
        <div>信息栏</div>
        <div v-for="(item, index) in checkboxList" :key="index" class="item-container">
          <input v-model="item.value" type="checkbox" />
          <div class="label-container">
            <div>{{ item.label }}</div>
            <div>{{ item.labelEN }}</div>
          </div>
        </div>
      </div>
      <div class="no-text">No:{{ count }}</div>
    </div>
    <div class="content-container">
      <div class="table1">
        <div>以下由入库人填写</div>
        <table ref="leftTable">
          <thead>
            <tr>
              <th :width="20">
                <div>编号</div>
                <div>NO.</div>
              </th>
              <th v-for="(item, index) in columns" :key="index" :width="item.width">
                <div>{{ item.label }}</div>
                <div>{{ item.labelEN }}</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableData" :key="index">
              <td>{{ index + 1 }}</td>
              <td v-for="(e, i) in columns" :key="i">{{ item[e.prop] }}</td>
            </tr>
          </tbody>
        </table>
        <div class="footer-box1">
          <div>签字栏</div>
          <div class="footer-body">
            <div>
              <div>入库人签字：</div>
              <div>Issued By:</div>
            </div>
            <div>
              <div>仓管员签字：</div>
              <div>W/H Tech:</div>
            </div>
            <div>
              <div>日期 Date:</div>
            </div>
            <div>
              <div>日期 Date:</div>
            </div>
          </div>
        </div>
      </div>
      <div class="table2">
        <div>以下由仓库员填写</div>
        <table ref="rightTable">
          <thead>
            <tr>
              <th :width="20">
                <div>编号</div>
                <div>NO.</div>
              </th>
              <th v-for="(item, index) in columns1" :key="index" :width="item.width">
                <div>{{ item.label }}</div>
                <div>{{ item.labelEN }}</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableData" :key="index">
              <td>{{ index + 1 }}</td>
              <td v-for="(e, i) in columns1" :key="i">{{ item[e.prop] }}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <!-- 保持高度一致 -->
          <div :style="{ opacity: 0 }">签</div>
          <div class="footer-body2">
            <div>
              <div>QAD专员签字：</div>
              <div>QAD Specialist:</div>
            </div>
            <div>
              <div>日期 Date:</div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-container">
        <div>第一联 1st Page: 仓管联 Shipper（白）</div>
        <div>第二联 2nd Page: 入库人留底 Receiver（红）</div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from "@/components/PrintModel/com/headerCom.vue";
import { mapState } from "vuex";

export default {
  components: {
    HeaderCom
  },
  props: {
    img: {
      type: String,
      default: ""
    },
    tableData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      checkboxList: [
        {
          label: "工程样件",
          labelEN: "Component Parts",
          value: false
        },
        {
          label: "试验样件",
          labelEN: "Test Parts",
          value: false
        },
        {
          label: "调试品",
          labelEN: "Debugging",
          value: false
        },
        {
          label: "成品",
          labelEN: "FG",
          value: false
        },
        {
          label: "包装材料",
          labelEN: "Package Materials",
          value: false
        },
        {
          label: "其他",
          labelEN: "Others",
          value: false
        }
      ],
      columns: [
        {
          label: "零件号",
          labelEN: "Part Number",
          prop: "productCode",
          width: "52"
        },
        {
          label: "零件名称",
          labelEN: "Part Name",
          prop: "productName"
        },
        {
          label: "项目名称",
          labelEN: "Project Name",
          prop: "projectName",
          width: "53"
        },
        {
          label: "项目号",
          labelEN: "Project No.",
          prop: "projectCode",
          width: "53"
        },
        {
          label: "入库数量",
          labelEN: "Qty",
          prop: "qty",
          width: "37"
        },
        {
          label: "单位",
          labelEN: "Unit",
          prop: "unit",
          width: "22"
        },
        {
          label: "状态描述",
          labelEN: "Describe",
          prop: "statusDescription",
          width: "37"
        },
        {
          label: "用途",
          labelEN: "Purpose",
          prop: "",
          width: "35"
        },
        {
          label: "接收人",
          labelEN: "Recipient",
          prop: "receivedUser",
          width: "42"
        },
        {
          label: "到期日",
          labelEN: "Due Date",
          prop: "",
          width: "37"
        }
      ],
      // tableData: [],
      columns1: [
        {
          label: "分箱批次",
          labelEN: "Lot",
          prop: "receivedBatch",
          width: "37"
        },
        {
          label: "数量/箱",
          labelEN: "PCS/Carton",
          prop: "qty",
          width: "45"
        },
        {
          label: "库位号",
          labelEN: "Location",
          prop: "storageLocationStr"
        },
        {
          label: "海关监管号",
          labelEN: "Certificate No.",
          prop: "",
          width: "66"
        }
      ],
      code: "",
      storageKey: "printNonProductionWarehousingCounter"
    };
  },
  computed: {
    ...mapState("user", ["count"]) // 映射user模块中的count状态
  },
  watch: {
    tableData: {
      deep: true,
      handler() {
        this.$nextTick(this.syncRowHeights);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.syncRowHeights();
      window.addEventListener("resize", this.syncRowHeights, { passive: true });
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.syncRowHeights);
  },
  methods: {
    syncRowHeights() {
      const leftTable = this.$refs.leftTable;
      const rightTable = this.$refs.rightTable;
      if (!leftTable || !rightTable) return;

      const leftRows = leftTable.querySelectorAll("tbody tr");
      const rightRows = rightTable.querySelectorAll("tbody tr");

      const rowCount = Math.min(leftRows.length, rightRows.length);

      // 先清除行内高度，重新让内容自适应
      for (let i = 0; i < rowCount; i++) {
        leftRows[i].style.height = "";
        rightRows[i].style.height = "";
      }

      // 然后按行取最大高度并同步
      for (let i = 0; i < rowCount; i++) {
        const lh = leftRows[i].getBoundingClientRect().height;
        const rh = rightRows[i].getBoundingClientRect().height;
        const h = Math.max(lh, rh) + "px";
        leftRows[i].style.height = h;
        rightRows[i].style.height = h;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.nonProductionWarehousing-container {
  font-size: 9px;
}
.checkbox-container {
  display: flex;
  align-items: center;
  gap: 10px;
}
.item-container {
  display: flex;
  align-items: center;
  gap: 2px;
}
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0 10px 0;
  .no-text {
    width: 120px;
  }
}
table {
  border-collapse: collapse;
  // min-height: 400px; // 添加最小高度
  font-size: 8px;
  td,
  th {
    border: 1px solid #000;
    padding: 3px 1px;
    text-align: center; // 新增居中样式
  }
}
.content-container {
  min-height: 400px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  // justify-content: space-between;
  // .table2 {
  //   flex: 1;
  // }
  .page-container {
    transform: rotate(90deg);
    transform-origin: left top;
    white-space: nowrap;
    display: flex;
    align-items: center;
    width: 10px;
    box-sizing: border-box;
    margin-top: 60px; // 新增垂直距离
  }
}
.footer-container {
  width: calc(100% - 10px);
  margin-top: 15px;
}
.footer-box1 {
  .footer-body {
    height: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    border: 1px solid #000;
    padding: 3px;
    box-sizing: border-box;
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
}
.footer-body2 {
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid #000;
}
</style>
