<template>
  <div class="header-container-old">
    <img v-if="isShowLogo" :src="logo" class="logo" :style="{ width: width }">
    <div v-else />
    <div class="title">
      <div class="zh">{{ titleCN }}</div>
      <div class="en">{{ titleEN }}</div>
    </div>
    <div>
      <img v-if="!hiddenAutoliv" src="@/assets/print/autoliv.png" style="width: 170px">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleCN: {
      type: String,
      default: ""
    },
    titleEN: {
      type: String,
      default: ""
    },
    hiddenAutoliv: {
      type: Boolean,
      default: false
    },
    isShowLogo: {
      type: Boolean,
      default: true
    },
    logo: {
      type: String,
      default: require("@/assets/logo/autoliv-logo.png")
    },
    width: {
      type: String,
      default: "80px"
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.header-container-old {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  // padding: 10px 0;
  .title {
    font-size: 20px;
    font-weight: 900;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
@media print {
  .title {
    font-weight: 900;
  }
}
</style>
