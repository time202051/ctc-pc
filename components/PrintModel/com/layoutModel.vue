<template>
  <div class="pab-deployment">
    <div class="divider" />
    <div class="main-content-wrapper">
      <div class="left-info">
        {{ title }}
      </div>
      <div class="right-content">
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  mixins: [],
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.pab-deployment {
  width: 100%;
  // margin: 0 auto;
  // padding: 20px;
  font-size: 14px;
  background: #fff;
  .divider {
    width: 100%;
    height: 4px;
    border-top: 1px solid #ff1111;
    border-bottom: 1px solid #ff1111;
    margin: 15px 0;
  }
  .main-content-wrapper {
    display: flex;
    width: 100%;
    gap: 10px;
    .left-info {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      padding: 10px;

      background-color: #00ff00;
      border: 1px solid #000;
      // writing-mode: vertical-lr;
      font-size: 16px;
      /* 防止内容溢出 */
      overflow: auto;
    }
    .right-content {
      flex: 1;
      /* 防止内容溢出 */
      overflow: auto;
    }
  }
}

// @media print {
//   .pab-deployment {
//     /* 确保容器在打印时保持布局 */
//     display: block;
//     position: relative;
//     page-break-inside: auto; /* 允许内容在页面间断开 */
//   }

//   .main-content {
//     /* 移除之前的相对定位 */
//     position: static;
//     /* 强制保持flex布局 */
//     display: flex !important;
//     /* 防止flex容器本身被打断 */
//     break-inside: auto;
//     /* 防止flex容器被分页打断 */
//     /* 确保flex布局在每页重新开始 */
//     position: relative;
//     /* 确保每页都重新开始flex布局 */
//     flex-direction: row;
//     flex-wrap: nowrap;
//     width: 100% !important;
//     gap: 10px;
//     background-color: aqua;
//   }

//   .left-info {
//     /* 确保固定宽度 */
//     width: 40px !important;
//     min-width: 40px;
//     flex: 0 0 40px;
//     /* 其他属性保持不变 */
//     break-inside: avoid;
//     // page-break-inside: avoid;
//     page-break-inside: auto;
//     // background-color: red;
//   }
//   .right-content {
//     background-color: #000;
//     /* 保持flex布局 */
//     flex: 1 1 auto;
//     /* 允许内容在页面间断开 */
//     page-break-inside: auto;
//   }
// }
</style>
