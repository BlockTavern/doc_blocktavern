<script setup>
import { ref, onMounted, computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
const isHome = computed(() => frontmatter.value.layout === 'home')

const isVisible = ref(false)

// 公告配置
const announcement = {
  title: '访问加速提示',
  content: '如果您访问当前站点速度较慢，<br/>请尝试访问我们的加速站点：<br/><br/><a href="https://docs-cn.blocktavern.cn" target="_blank" style="color: var(--vp-c-brand); font-weight: bold; text-decoration: underline;">docs-cn.blocktavern.cn</a>',
  buttonText: '我知道了'
}

const close = () => {
  isVisible.value = false
  // 使用 sessionStorage 代替 localStorage，这样关闭浏览器后重新打开会再次显示
  // 或者你可以使用带版本号的 key，只有当版本号变化时才再次显示
  sessionStorage.setItem('blocktavern-announcement-closed-session', 'true')
}

onMounted(() => {
  // 检查是否已经关闭过
  const isClosed = sessionStorage.getItem('blocktavern-announcement-closed-session')
  if (!isClosed) {
    // 延迟一点显示，体验更好
    setTimeout(() => {
      isVisible.value = true
    }, 500)
  }
})
</script>

<template>
  <Transition name="fade">
    <div v-if="isVisible && isHome" class="popup-overlay">
      <div class="popup-container">
        <div class="popup-header">
          <h3>{{ announcement.title }}</h3>
        </div>
        <div class="popup-content" v-html="announcement.content"></div>
        <div class="popup-footer">
          <button @click="close" class="popup-btn">{{ announcement.buttonText }}</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
}

.popup-container {
  background: var(--vp-c-bg);
  width: 90%;
  max-width: 400px;
  border-radius: 12px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  animation: popIn 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}

.popup-header {
  padding: 20px 24px 10px;
  text-align: center;
}

.popup-header h3 {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.popup-content {
  padding: 10px 24px 24px;
  text-align: center;
  color: var(--vp-c-text-2);
  font-size: 1rem;
  line-height: 1.6;
}

.popup-footer {
  padding: 0 24px 24px;
  display: flex;
  justify-content: center;
}

.popup-btn {
  background: var(--vp-c-brand);
  color: white;
  border: none;
  padding: 10px 32px;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.popup-btn:hover {
  filter: brightness(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.popup-btn:active {
  filter: brightness(0.9);
  transform: translateY(0) scale(0.98);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
