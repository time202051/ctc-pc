<template>
  <div>
    <HeaderCom v-bind="$attrs" />
    <LayoutModel title="样件需求信息">
      <FormCom :api-info="formData" v-bind="$attrs" />
    </LayoutModel>
    <LayoutModel title="装车检查">
      <img src="@/assets/print/ic1.png" alt="pba" style="width: 100%">
    </LayoutModel>
    <LayoutModel title="拆车检查">
      <img src="@/assets/print/ic2.png" alt="pba" style="width: 100%">
    </LayoutModel>
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

<style lang="scss" scoped></style>
