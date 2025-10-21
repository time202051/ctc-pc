<template>
  <div
    :class="['screen-container', { 'loaded': isLoaded }]"
    v-cloak
  >
    <slot v-if="isLoaded"></slot>
    <div v-else class="loading-placeholder">
      <div class="loading-spinner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScreenContainer',
  data() {
    return {
      isLoaded: false
    }
  },
  mounted() {
    // 确保所有子组件和数据都加载完成后再显示
    this.$nextTick(() => {
      setTimeout(() => {
        this.isLoaded = true
      }, 100) // 给一个短暂的延迟确保样式完全加载
    })
  }
}
</script>

<style lang="scss" scoped>
.screen-container {
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &.loaded {
    opacity: 1;
  }
}

.loading-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #333;
  border-top: 3px solid #008cff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
