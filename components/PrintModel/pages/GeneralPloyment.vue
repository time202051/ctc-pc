<template>
  <div>
    <HeaderCom v-bind="$attrs" />
    <LayoutModel title="样件需求信息">
      <FormCom :api-info="formData" v-bind="$attrs" />
    </LayoutModel>
    <LayoutModel v-if="img1" title="装车检查">
      <img :src="img1" alt="pba" style="width: 100%">
    </LayoutModel>
    <LayoutModel v-if="img2" title="拆车检查">
      <img :src="img2" alt="pba" style="width: 100%">
    </LayoutModel>
    <div v-if="img3" class="layout-other">
      <img :src="img3" alt="pba" style="width: 100%">
    </div>
  </div>
</template>

<script>
import LayoutModel from "@/components/PrintModel/com/layoutModel.vue";
import HeaderCom from "@/components/PrintModel/com/headerCom.vue";
import FormCom from "@/components/PrintModel/com/formCom.vue";
export default {
  components: {
    LayoutModel,
    FormCom,
    HeaderCom
  },
  props: {
    apiInfo: {
      type: Object,
      default: () => {}
    },
    img1: {
      type: String,
      default: ""
    },
    img2: {
      type: String,
      default: ""
    },
    img3: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      formData: {}
    };
  },
  watch: {
    apiInfo: {
      handler(newVal) {
        this.formData = JSON.parse(JSON.stringify(newVal));
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
.layout-other {
  margin-top: 15px;
  margin-left: 50px;
}
</style>
