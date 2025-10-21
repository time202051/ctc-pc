import { Table, TableColumn, Button, Pagination } from "element-ui";
import { VNode } from "vue";

interface IOptions
  extends Omit<
    Table,
    "data" | "rowClassName" | "height" | "defaultSort" | "maxHeight"
  > {
  index?: Number | Boolean; //是否显示序号
  headTool?: boolean; //是否显示表头工具栏
  refreshBtn?: boolean; //是否显示刷新按钮
  downloadBtn?: boolean; //是否显示下载按钮,打印
  selection?: boolean; // 【组件中未见使用】
}

// 组件中有种自定义渲染的进度条， （pickingProgress，bindingProgress，collectingProgress是表格中自定义显示进度条时候的定死的值）
interface IRow {
  pickingProgress?: number | any;
  bindingProgress?: number | any;
  collectingProgress?: number | any;
  [key: string]: any;
}
// 表头
interface IColumns extends Omit<TableColumn, "showOverflowTooltip" | "prop"> {
  prop: keyof IRow | string; //自定义内容---字段名
  show?: boolean; //是否显示该列，如果false不会出现再数组中
  overHidden?: boolean; //替代showOverflowTooltip
  render?: (row: any) => VNode; //自定义渲染函数,scope.row
  // 自定义内容
  progress?: boolean; //自定义内容---是否显示进度条
  renderSlot?: boolean; //具名插槽name="detail"【后期可改成动态name，实现多个插槽】
}

// 操作 表格最后一列
interface IOperates extends Pick<Button, "size" | "type" | "icon" | "plain"> {
  isShow?: boolean | ((row: any, index: number) => boolean); //是否显示操作列
  disabled?: boolean | ((row: any, index: number) => boolean); //是否禁用该操作
  method?: (row: any, index: number) => void; //操作方法
  label?: string; //按钮文字
}

// 表格传的形式
interface ITableData {
  loading: boolean;
  options: IOptions[]; //el-table的v-bind="options"
  rows: IRow[]; //el-table的data
  columns: IColumns[];
  operates: IOperates[];
  operatesAttrs?: Object; //操作按钮的v-bind="operatesAttrs"
  tableHeightDiff?: number;
  sort?: Object; //排序规则，详见官网https://element.eleme.io/#/zh-CN/component/table
  emptyImg?: boolean; //是否显示空数据图片
}

// 分页
interface IPaginations extends Omit<Pagination, "currentPage" | "layout"> {
  page: number; //当前页,就是currentPage
  pagetionShow?: boolean; //是否显示分页
  page_sizes?: number[]; //每页显示条数，:page-sizes="paginations.page_sizes || pageSizes"
  refresh?: boolean; //分页组件右侧是否显示刷新分页按钮，执行this.$emit('refreshTableBTN')，父组件中可以执行自定义逻辑
}
