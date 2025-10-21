/**
 * 大屏项目优化工具
 */

// 防抖函数，用于优化频繁的DOM操作
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// 节流函数，用于限制函数执行频率
export function throttle(func, limit) {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// 预加载关键资源
export function preloadCriticalResources() {
  // 预加载关键CSS
  const criticalCSS = document.createElement('link')
  criticalCSS.rel = 'preload'
  criticalCSS.as = 'style'
  criticalCSS.href = '/static/css/app.css'
  document.head.appendChild(criticalCSS)

  // 预加载关键字体
  const criticalFont = document.createElement('link')
  criticalFont.rel = 'preload'
  criticalFont.as = 'font'
  criticalFont.type = 'font/woff2'
  criticalFont.href = '/static/fonts/element-icons.woff'
  criticalFont.crossOrigin = 'anonymous'
  document.head.appendChild(criticalFont)
}

// 优化大屏项目的初始化
export function optimizeScreenInit() {
  // 设置初始样式，防止闪烁
  const style = document.createElement('style')
  style.textContent = `
    [v-cloak] {
      display: none !important;
    }
    .screen-container {
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
    .screen-container.loaded {
      opacity: 1;
    }
  `
  document.head.appendChild(style)

  // 预加载关键资源
  preloadCriticalResources()
}

// 数据加载优化
export function optimizeDataLoading(component) {
  return {
    data() {
      return {
        dataLoaded: false,
        loadingError: false
      }
    },
    async created() {
      try {
        // 确保数据完全加载后再显示
        await this.loadData()
        this.dataLoaded = true
        this.$nextTick(() => {
          // 触发加载完成事件
          this.$emit('data-loaded')
        })
      } catch (error) {
        console.error('数据加载失败:', error)
        this.loadingError = true
      }
    },
    methods: {
      async loadData() {
        // 子组件需要实现这个方法
        throw new Error('loadData method must be implemented')
      }
    }
  }
}
