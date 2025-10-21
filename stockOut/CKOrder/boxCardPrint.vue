<template>
  <div class="container-box">
    <div id="boxCardPrintContent" class="boxCardPrintContent">
      <img v-if="imgUrl" :src="imgUrl" />
    </div>
    <el-button type="primary" :style="{ marginTop: '10px' }" @click="onPrint"
      >打印</el-button
    >
  </div>
</template>

<script>
import printJS from "print-js";
export default {
  props: {
    // imgUrl: {
    //   type: String,
    //   default:
    //     "https://www.bowumi.com/wp-content/uploads/tupianbd/2/253/1775241873/1986031809.jpg",
    // },
    imgUrl: {
      type: String,
      default: "",
      // default: require("@/assets/logo/boxCardImg.png"),
    },
  },
  data() {
    return {};
  },
  created() {
    this.init();
  },
  methods: {
    init() {},
    onPrint() {
      printJS({
        printable: "boxCardPrintContent",
        type: "html",
        targetStyles: ["*"],
        scanStyles: false,
        documentTitle: "",
        ignoreElements: ["no-print"],
        // css: "./printModel.scss",
        style: `
          @page {
            margin: 0;
            size:73mm 115mm;
          }
          ${Array.from(document.styleSheets)
            .map((styleSheet) => {
              try {
                return Array.from(styleSheet.cssRules)
                  .map((rule) => rule.cssText)
                  .join("");
              } catch (e) {
                return "";
              }
            })
            .join("")}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.boxCardPrintContent {
  width: 73mm;
  height: 115mm;
  box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border: 1px solid #000;
  white-space: nowrap;
  font-size: 10px;
  overflow: hidden;
  margin: 0 auto;

  img {
    transform: rotate(-90deg) scale(1.64);
    object-fit: contain;
    width: 100%;
    height: 100%;
    transform-origin: center center; /* 确保图片以中心点进行缩放 */
  }
}

@media print {
  .boxCardPrintContent {
    // width: 70mm !important; // 打印时宽度自适应
    // height: 110mm !important; // 打印时高度自适应
    // // border-width: 0 !important;
    page-break-inside: avoid; // 防止分页
  }
}
</style>
