<template>
  <screen-container>
    <div class="screen-dashboard">
      <!-- 大屏内容 -->
      <div class="header-section">
        <h1>CTC 大屏监控系统</h1>
        <div class="status-info">
          <span>当前状态: {{ currentStatus }}</span>
          <span>更新时间: {{ updateTime }}</span>
        </div>
      </div>

      <div class="content-section">
        <div class="left-panel">
          <div class="data-card">
            <h3>任务类型: {{ taskType }}</h3>
            <div class="data-item">
              <span>当前物料单号: {{ materialNumber || '暂无' }}</span>
            </div>
            <div class="data-item">
              <span>项目编码/名称/实验室号: {{ projectInfo || '暂无数据' }}</span>
            </div>
            <div class="data-item">
              <span>TO号: {{ toNumber || '暂无' }}</span>
            </div>
            <div class="data-item">
              <span>工作位: {{ workstation || '暂无' }}</span>
            </div>
            <div class="data-item">
              <span>SO号: {{ soNumber || '暂无' }}</span>
            </div>
            <div class="data-item">
              <span>PE号:
                <span :class="peStatus === '正常' ? 'status-normal' : 'status-error'">
                  {{ peStatus || '暂无' }}
                </span>
              </span>
            </div>
          </div>
        </div>

        <div class="right-panel">
          <div class="data-list">
            <div v-for="(item, index) in dataList" :key="index" class="list-item">
              <div class="item-header">
                <span class="item-type">{{ item.type }}</span>
                <span class="item-quantity">数量: {{ item.quantity }}</span>
              </div>
              <div class="item-details">
                <span>SKU: {{ item.sku || '暂无' }}</span>
                <span>SO号: {{ item.soNumber }}</span>
                <span>TO号: {{ item.toNumber }}</span>
                <span>订单号: {{ item.orderNumber }}</span>
                <span>物料名称: {{ item.materialName }}</span>
                <span>PC: {{ item.pc || '暂无' }}</span>
                <span>状态:
                  <span :class="item.status === '正常' ? 'status-normal' : 'status-pending'">
                    {{ item.status }}
                  </span>
                </span>
                <span>制卡号: {{ item.cardNumber || '暂无' }}</span>
                <span>制卡日期: {{ item.cardDate || '暂无' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </screen-container>
</template>

<script>
import ScreenContainer from '@/components/ScreenContainer'
import { optimizeDataLoading } from '@/utils/screenOptimization'

export default {
  name: 'ScreenExample',
  components: {
    ScreenContainer
  },
  mixins: [optimizeDataLoading()],
  data() {
    return {
      currentStatus: '运行中',
      updateTime: '',
      taskType: '手动出库',
      materialNumber: '',
      projectInfo: '',
      toNumber: '',
      workstation: '测试出库作业',
      soNumber: '',
      peStatus: '正常',
      dataList: []
    }
  },
  methods: {
    async loadData() {
      // 模拟数据加载
      await new Promise(resolve => setTimeout(resolve, 500))

      this.updateTime = new Date().toLocaleString()
      this.materialNumber = 'MAT001'
      this.projectInfo = 'PROJ001/测试项目/实验室001'
      this.toNumber = 'TO202309281109'
      this.soNumber = 'SO202309281109'

      this.dataList = [
        {
          type: '成品出库单',
          quantity: 1,
          sku: 'SKU001',
          soNumber: 'SO202309281109',
          toNumber: 'TO202309281109',
          orderNumber: 'CK00001506',
          materialName: 'LED P40',
          pc: '',
          status: '正常',
          cardNumber: '',
          cardDate: '2019.05.201905'
        },
        {
          type: '成品出库单',
          quantity: 61,
          sku: 'SKU002',
          soNumber: 'SO202309281110',
          toNumber: 'TO202309281110',
          orderNumber: 'CK00001507',
          materialName: 'P799 IC',
          pc: '',
          status: '待出库',
          cardNumber: '',
          cardDate: '2019.05.201905'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.screen-dashboard {
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #fff;
  font-family: 'Microsoft YaHei', sans-serif;
  overflow: hidden;
}

.header-section {
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid #008cff;

  h1 {
    margin: 0 0 10px 0;
    font-size: 32px;
    color: #008cff;
    text-align: center;
  }

  .status-info {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    color: #ccc;
  }
}

.content-section {
  display: flex;
  height: calc(100vh - 120px);
  padding: 20px;
  gap: 20px;
}

.left-panel {
  flex: 1;

  .data-card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 20px;
    border: 1px solid #333;

    h3 {
      margin: 0 0 20px 0;
      color: #008cff;
      font-size: 20px;
    }

    .data-item {
      margin-bottom: 15px;
      font-size: 16px;

      span {
        display: block;
        margin-bottom: 5px;
      }
    }
  }
}

.right-panel {
  flex: 1;

  .data-list {
    height: 100%;
    overflow-y: auto;

    .list-item {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 6px;
      padding: 15px;
      margin-bottom: 15px;
      border: 1px solid #333;

      .item-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        .item-type {
          color: #008cff;
          font-weight: bold;
        }

        .item-quantity {
          color: #00ff88;
          font-weight: bold;
        }
      }

      .item-details {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        font-size: 14px;
        color: #ccc;

        span {
          padding: 2px 0;
        }
      }
    }
  }
}

.status-normal {
  color: #00ff88;
  font-weight: bold;
}

.status-error {
  color: #ff4444;
  font-weight: bold;
}

.status-pending {
  color: #ffaa00;
  font-weight: bold;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #333;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: #008cff;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #00aaff;
}
</style>
