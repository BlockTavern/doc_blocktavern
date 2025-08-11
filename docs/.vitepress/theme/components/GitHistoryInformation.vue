<template>
  <div class="git-history-information">
    <!-- 最后更新信息 -->
    <div class="last-updated-section">
      <div v-if="lastCommit" class="last-updated">
        <span class="icon">🕒</span>
        最后编辑时间: 
        <time :datetime="lastCommit.commit.author.date">
          {{ formatDate(lastCommit.commit.author.date) }}
        </time>
      </div>
    </div>

    <!-- 文件历史部分 -->
    <div class="file-history-section">
      <div class="history-header" @click="toggleHistory">
        <span class="icon">📝</span>
        <span class="history-title">查看完整历史记录</span>
        <span class="toggle-icon" :class="{ 'expanded': isHistoryExpanded }">▼</span>
      </div>
      
      <div class="history-content" :class="{ 'expanded': isHistoryExpanded }">
        <div v-if="historyLoading" class="loading">
          <span class="loading-spinner"></span>
          加载文件历史中...
        </div>
        <div v-else-if="historyError" class="error">
          <span class="icon">⚠️</span>
          加载文件历史失败: {{ historyError }}
        </div>
        <div v-else class="history-list">
          <div v-for="commit in fileHistory" :key="commit.sha" class="history-item">
            <div class="commit-info">
              <a 
                :href="commit.html_url" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="commit-sha"
              >
                {{ commit.sha.substring(0, 7) }}
              </a>
              <span class="commit-type">feat</span>
              <span class="commit-description">{{ commit.commit.message }}</span>
              <span class="commit-meta">
                <span class="commit-number">#{{ commit.sha.substring(0, 4) }}</span>
                <span class="commit-date">{{ formatDate(commit.commit.author.date) }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useData } from 'vitepress'
import axios from 'axios'

const { page } = useData()

// 响应式数据
const fileHistory = ref([])
const historyLoading = ref(true)
const historyError = ref(null)
const isHistoryExpanded = ref(false)

// 配置
const GITHUB_REPO_OWNER = 'Re0XIAOPA'
const GITHUB_REPO_NAME = 'doc_blocktavern'
const GITHUB_API_BASE = 'https://api.github.com'

// 计算属性
const lastCommit = computed(() => {
  return fileHistory.value.length > 0 ? fileHistory.value[0] : null
})

// 获取当前文件路径
const getCurrentFilePath = () => {
  const filePath = page.value.filePath
  if (!filePath) return null
  
  // 移除 docs/ 前缀，因为 GitHub API 中的路径是相对于仓库根目录的
  return filePath.startsWith('docs/') ? filePath : `docs/${filePath}`
}

// 切换历史记录展开状态
const toggleHistory = () => {
  isHistoryExpanded.value = !isHistoryExpanded.value
}

// 获取文件历史
const fetchFileHistory = async () => {
  try {
    historyLoading.value = true
    historyError.value = null
    
    const filePath = getCurrentFilePath()
    if (!filePath) {
      historyError.value = '无法获取当前文件路径'
      return
    }
    
    // 使用本地 Git API 而不是 GitHub API
    const response = await axios.get('/api/git-history', {
      params: {
        file: filePath,
        type: 'history'
      }
    })
    
    // 转换本地 Git 数据格式为组件期望的格式
    const gitData = response.data
    if (gitData.history && Array.isArray(gitData.history)) {
      fileHistory.value = gitData.history.map(commit => ({
        sha: commit.hash,
        html_url: `https://github.com/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/commit/${commit.hash}`,
        commit: {
          message: commit.message,
          author: {
            name: commit.authorName,
            email: commit.authorEmail,
            date: commit.date
          }
        }
      }))
    } else {
      fileHistory.value = []
    }
  } catch (error) {
    console.error('获取文件历史失败:', error)
    historyError.value = error.response?.data?.error || error.message || '未知错误'
  } finally {
    historyLoading.value = false
  }
}

// 格式化日期
const formatDate = (dateString) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now - date)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 1) {
    return '1 天前'
  } else if (diffDays < 7) {
    return `${diffDays} 天前`
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7)
    return `${weeks} 周前`
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30)
    return `${months} 个月前`
  } else {
    const years = Math.floor(diffDays / 365)
    return `${years} 年前`
  }
}

// 组件挂载时获取数据
onMounted(() => {
  fetchFileHistory()
})
</script>

<style scoped>
.git-history-information {
  margin: 2rem 0;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  overflow: hidden;
}

.icon {
  font-size: 1rem;
}

.loading {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  padding: 1rem;
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--vp-c-divider);
  border-top: 2px solid var(--vp-c-brand-1);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--vp-c-danger-1);
  font-size: 0.9rem;
  padding: 1rem;
}

/* 最后更新样式 */
.last-updated-section {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
}

.last-updated {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

/* 文件历史样式 */
.file-history-section {
  background-color: var(--vp-c-bg);
}

.history-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s ease;
  border-bottom: 1px solid var(--vp-c-divider);
}

.history-header:hover {
  background-color: var(--vp-c-bg-soft);
}

.history-title {
  flex: 1;
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.toggle-icon {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.toggle-icon.expanded {
  transform: rotate(180deg);
}

.history-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.history-content.expanded {
  max-height: 1000px;
}

.history-list {
  padding: 0;
}

.history-item {
  border-bottom: 1px solid var(--vp-c-divider);
  transition: background-color 0.2s ease;
}

.history-item:last-child {
  border-bottom: none;
}

.history-item:hover {
  background-color: var(--vp-c-bg-soft);
}

.commit-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  font-size: 0.85rem;
}

.commit-sha {
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
  min-width: 60px;
}

.commit-sha:hover {
  text-decoration: underline;
}

.commit-type {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  min-width: 40px;
  text-align: center;
}

.commit-description {
  flex: 1;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
}

.commit-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
  flex-shrink: 0;
}

.commit-number {
  font-family: var(--vp-font-family-mono);
}

.commit-date {
  white-space: nowrap;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .git-history-information {
    margin: 1rem 0;
  }
  
  .commit-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem;
  }
  
  .commit-description {
    white-space: normal;
    overflow: visible;
    text-overflow: unset;
  }
  
  .commit-meta {
    align-self: flex-end;
  }
}
</style>