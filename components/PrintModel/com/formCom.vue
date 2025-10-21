<template>
  <div class="formCom-container">
    <div class="formData-container">
      <div class="formItem">
        <div class="item">
          <div>检测工程师(电话)：</div>
          <div class="underline">
            {{ formData.inspectorName }}--{{ formData.inspectorPhone }}
          </div>
        </div>
        <div class="item">
          <div>系统\产品工程师(电话)：</div>
          <div class="underline">
            {{ formData.engineerName }}--{{ formData.engineerPhone }}
          </div>
        </div>
      </div>
      <div class="formItem">
        <div class="item">
          <div>项目名称：</div>
          <div class="underline">{{ formData.projectName }}</div>
        </div>
        <div class="item">
          <div>项目号：</div>
          <div class="underline">{{ formData.projectCode }}</div>
        </div>
        <div class="item">
          <div>成本中心：</div>
          <div class="underline">{{ formData.costCenter }}</div>
        </div>
      </div>
      <div class="formItem">
        <div class="item">
          <div>实验TO号：</div>
          <div class="underline">{{ formData.experimentTtpNumber }}</div>
        </div>
        <div class="item">
          <div>SO号：</div>
          <div class="underline">{{ formData.soNumber }}</div>
        </div>
        <div class="item">
          <div>填单日期：</div>
          <div class="underline">{{ formData.filledFormDate }}</div>
        </div>
        <div class="item">
          <div>需求日期：</div>
          <div class="underline">{{ formData.requiredDate }}</div>
        </div>
      </div>
      <template v-if="[1, 2, 4].includes($attrs.type)">
        <div class="fcb">
          <div class="formItem-checkbox">
            <div>装车执行标准：</div>
            <div v-for="(eItem, i) in loadingStandardList" :key="i">
              <input v-model="eItem.value" type="checkbox">
              <div>{{ eItem.label }}</div>
            </div>
          </div>
          <div class="formItem-checkbox">
            <div>实验类型：</div>
            <div>
              <input type="checkbox">
              <div>高低温度：</div>
              <div class="underline-min" />
            </div>
            <div>
              <input type="checkbox">
              <div>箱内外常温度</div>
            </div>
            <div>
              <input type="checkbox">
              <div>静态点爆</div>
            </div>
          </div>
        </div>
      </template>
      <template v-if="$attrs.type === 3">
        <div class="formItem-checkbox gap3">
          <div>装车执行标准：</div>
          <div v-for="(eItem, i) in loadingStandardList3" :key="i">
            <input v-model="eItem.value" type="checkbox">
            <div>{{ eItem.label }}</div>
          </div>
        </div>
        <div class="formItem-checkbox gap3">
          <div>装车执行标准：</div>
          <div v-for="(eItem, i) in options3" :key="i">
            <input type="checkbox">
            <div>{{ eItem.label }}</div>
          </div>
        </div>
      </template>
      <template v-if="[5].includes($attrs.type)">
        <div class="fcb">
          <div class="formItem">
            <div class="item">
              <div>实验室T/TP号：</div>
              <div class="underline" />
            </div>
          </div>
          <div class="formItem-checkbox">
            <div>装车执行标准：</div>
            <div v-for="(eItem, i) in loadingStandardList" :key="i">
              <input v-model="eItem.value" type="checkbox">
              <div>{{ eItem.label }}</div>
            </div>
          </div>
        </div>
      </template>
      <template v-if="[6].includes($attrs.type)">
        <div class="fcb">
          <div class="formItem-checkbox">
            <div>装车执行标准：</div>
            <div v-for="(eItem, i) in options6" :key="i">
              <input v-model="eItem.value" type="checkbox">
              <div>{{ eItem.label }}</div>
            </div>
          </div>
          <div class="formItem-checkbox">
            <div>装车执行标准：</div>
            <div v-for="(eItem, i) in loadingStandardList" :key="i">
              <input v-model="eItem.value" type="checkbox">
              <div>{{ eItem.label }}</div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <table>
      <thead>
        <tr>
          <th>NO.</th>
          <th v-for="(col, index) in $attrs.tableColumns" :key="index">
            {{ col.label }}
          </th>
          <template v-if="$attrs.type === 7">
            <th width="70">包装数量</th>
          </template>
          <template v-else>
            <th width="60">物料员</th>
            <th width="70">样件签收</th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index">
          <td width="40">{{ index + 1 }}</td>
          <td v-for="(col, index) in $attrs.tableColumns" :key="index">
            {{ item[col.prop] }}
          </td>

          <template v-if="$attrs.type === 7">
            <th v-if="index === 0" width="70" :rowspan="tableData.length">
              <div class="line-text" />
            </th>
          </template>
          <template v-else>
            <th v-if="index === 0" width="60" :rowspan="tableData.length">
              <div class="line-text">物料员签名 / 日期</div>
            </th>
            <th v-if="index === 0" width="60" :rowspan="tableData.length">
              <div class="line-text">车辆准备组成员签收/日期</div>
            </th>
          </template>
        </tr>
      </tbody>
    </table>

    <div class="form-text">
      （黄底部分PE/SE填写；请系统\产品工程师相应填写；空白代表无任何要求；未填写的物料，物料员拒绝发料）
    </div>
    <div class="form-text">
      （以上步骤全部完成后由物料员将此单复印，一份用于库存管理，一份交于装车组工作流转）
    </div>
  </div>
</template>

<script>
export default {
  props: {
    apiInfo: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      formData: {},
      tableData: [],
      loadingStandardList: [
        {
          label: "装车指导书",
          value: false
        },
        {
          label: "现场指导",
          value: false
        }
      ],
      loadingStandardList3: [
        {
          label: "装车指导书",
          value: false
        },
        {
          label: "视频教程",
          value: false
        },
        {
          label: "现场指导",
          value: false
        }
      ],
      options3: [
        {
          label: "IC"
        },
        {
          label: "SAB"
        },
        {
          label: "PAB"
        }
      ],
      options6: [
        {
          label: "主驾"
        },
        {
          label: "副驾"
        },
        {
          label: "后排左"
        },
        {
          label: "后排右"
        }
      ]
    };
  },
  watch: {
    apiInfo: {
      handler(newVal) {
        this.formData = JSON.parse(JSON.stringify(newVal));
        const temp = JSON.parse(
          JSON.stringify(newVal.printStockOutDetailOutputList)
        );
        this.tableData = temp; // Array(6).fill(temp).flat();

        this.loadingStandardList.forEach(item => {
          item.value = !!(item.label == newVal.loadingStandard);
        });
        this.loadingStandardList3.forEach(item => {
          item.value = !!(item.label == newVal.loadingStandard);
        });
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
.formData-container {
  .underline {
    display: inline-block;
    min-width: 100px;
    border-bottom: 1px solid #000;
    padding: 0 2px;

    &:empty::after {
      content: "\00a0";
      display: inline-block;
      min-width: 100px;
    }
  }
}
.formData-container {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 14px;
}
.formItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .item {
    display: flex;
    align-items: center;
    white-space: nowrap;
    .underline {
      flex: 1;
    }
  }
}

.formItem-checkbox {
  display: flex;
  align-items: center;
  gap: 5px;
  div {
    display: flex;
    align-items: center;
    input {
      margin-right: 3px;
    }
  }
  .underline-min {
    display: inline-block;
    min-width: 30px;
    border-bottom: 1px solid #000;
    padding: 0 2px;

    &:empty::after {
      content: "\00a0";
      display: inline-block;
    }
  }
}
.fcb {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

table {
  border-collapse: collapse;
  width: 100%;
  font-size: 12px;
  td,
  th {
    border: 1px solid #000;
    padding: 8px;
    text-align: center; // 新增居中样式
  }
}
.line-text {
  // width: 10px;
  margin: 0 auto;
  color: rgba(0, 0, 0, 0.2);
}
.gap3 {
  gap: 20px;
}
.form-text {
  color: #818181;
  font-size: 12px;
  margin-top: 4px;
}
@media print {
  table {
    font-size: 12px;
    border-collapse: collapse;
    width: 100%;
    td,
    th {
      border: 1px solid #000;
      padding: 8px;
      text-align: center; // 新增居中样式
    }
  }
}
</style>
