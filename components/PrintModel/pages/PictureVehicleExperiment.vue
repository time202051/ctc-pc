<template>
  <div>
    <HeaderCom v-bind="$attrs" />
    <div class="content">
      <div v-for="(label, index) in list" :key="index" class="item-box">
        <div class="header">{{ label }}</div>
        <div class="body">
          <ImageUploader :multiple="false" fit-parent />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from "@/components/PrintModel/com/headerCom.vue";
import ImageUploader from "@/components/PrintModel/com/ImageUploader.vue";

export default {
  components: {
    HeaderCom,
    ImageUploader
  },
  props: {
    list: {
      type: Array,
      default: () => {
        return []; // ['入场1:', '入场2:', '出厂1:', '出厂2:']
      }
    },
    apiInfo: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      coverPhoto: []
    };
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
  .item-box {
    border: 1px solid #000;
    height: 350px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .header {
      // 虚线
      border-bottom: 1px dashed #000;
      padding: 3px;
    }
    .body {
      flex: 1;
      display: flex;
      align-items: center;
      height: calc(100% - 40px);
    }
  }
}
</style>
