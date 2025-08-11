<template>
  <div class="git-history-information">
    <!-- 贡献者部分 -->
    <div class="contributors-section">
      <h2 class="section-title">
        <span class="icon">👥</span>
        贡献者
      </h2>
      <div v-if="contributorsLoading" class="loading">
        <span class="loading-spinner"></span>
        加载贡献者中...
      </div>
      <div v-else-if="contributorsError" class="error">
        <span class="icon">⚠️</span>
        加载贡献者失败: {{ contributorsError }}
      </div>
      <div v-else class="contributors-list">
        <a 
          v-for="contributor in contributors" 
          :key="contributor.login"
          :href="contributor.html_url" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="contributor-item"
          :title="`${contributor.login} - ${contributor.contributions} 次贡献`"
        >
          <img 
            :src="contributor.avatar_url" 
            :alt="contributor.login" 
            class="contributor-avatar"
            loading="lazy"
          />
          <div class="contributor-info">
            <span class="contributor-name">{{ contributor.login }}</span>
            <span class="contributor-contributions">{{ contributor.contributions }} 次贡献</span>
          </div>
        </a>
      </div>
    </div>

    <!-- 文件历史部分 -->
    <div class="file-history-section">
      <h2 class="section-title">
        <span class="icon">📝</span>
        文件历史
      </h2>
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
          <div class="commit-header">
            <a 
              :href="commit.html_url" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="commit-link"
            >
              <span class="commit-sha">{{ commit.sha.substring(0, 7) }}</span>
            </a>
            <span class="commit-date">{{ formatDate(commit.commit.author.date) }}</span>
          </div>
          <div class="commit-message">{{ commit.commit.message }}</div>
          <div class="commit-author">
            <img 
              :src="commit.author?.avatar_url || 'https://github.com/ghost.png'" 
              :alt="commit.commit.author.name" 
              class="author-avatar"
              loading="lazy"
            />
            <span class="author-name">{{ commit.commit.author.name }}</span>
            <span class="author-email">{{ commit.commit.author.email }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 最后更新信息 -->
    <div class="last-updated-section">
      <div v-if="lastCommit" class="last-updated">
        <span class="icon">🕒</span>
        最后更新于 
        <time :datetime="lastCommit.commit.author.date">
          {{ formatDate(lastCommit.commit.author.date) }}
        </time>
        由 
        <a 
          :href="lastCommit.author?.html_url || '#'" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="author-link"
        >
          {{ lastCommit.commit.author.name }}
        </a>
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
const contributors = ref([])
const fileHistory = ref([])
const contributorsLoading = ref(true)
const historyLoading = ref(true)
const contributorsError = ref(null)
const historyError = ref(null)

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

// 获取贡献者列表
const fetchContributors = async () => {
  try {
    contributorsLoading.value = true
    contributorsError.value = null
    
    const response = await axios.get(
      `${GITHUB_API_BASE}/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/contributors`,
      {
        params: {
          per_page: 100
        }
      }
    )
    
    contributors.value = response.data
  } catch (error) {
    console.error('获取贡献者失败:', error)
    contributorsError.value = error.response?.data?.message || error.message || '未知错误'
  } finally {
    contributorsLoading.value = false
  }
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
    
    const response = await axios.get(
      `${GITHUB_API_BASE}/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/commits`,
      {
        params: {
          path: filePath,
          per_page: 20
        }
      }
    )
    
    fileHistory.value = response.data
  } catch (error) {
    console.error('获取文件历史失败:', error)
    historyError.value = error.response?.data?.message || error.message || '未知错误'
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
  fetchContributors()
  fetchFileHistory()
})
</script>

<style scoped>
.git-history-information {
  margin: 2rem 0;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 0.5rem;
}

.icon {
  font-size: 1.1rem;
}

.loading {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
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
}

/* 贡献者样式 */
.contributors-section {
  margin-bottom: 2rem;
}

.contributors-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.contributor-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background-color: var(--vp-c-bg);
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: all 0.2s ease;
  min-width: 0;
}

.contributor-item:hover {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
  transform: translateY(-1px);
}

.contributor-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--vp-c-divider);
  flex-shrink: 0;
}

.contributor-info {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.contributor-name {
  font-weight: 500;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.contributor-contributions {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  white-space: nowrap;
}

/* 文件历史样式 */
.file-history-section {
  margin-bottom: 2rem;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.history-item {
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background-color: var(--vp-c-bg);
  transition: border-color 0.2s ease;
}

.history-item:hover {
  border-color: var(--vp-c-brand-1);
}

.commit-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.commit-link {
  text-decoration: none;
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

.commit-link:hover {
  text-decoration: underline;
}

.commit-sha {
  font-family: var(--vp-font-family-mono);
  font-size: 0.85rem;
  padding: 0.2rem 0.4rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider);
}

.commit-date {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.commit-message {
  font-size: 0.95rem;
  line-height: 1.4;
  margin-bottom: 0.75rem;
  color: var(--vp-c-text-1);
}

.commit-author {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.author-avatar {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid var(--vp-c-divider);
}

.author-name {
  font-weight: 500;
  font-size: 0.85rem;
  color: var(--vp-c-text-1);
}

.author-email {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}

/* 最后更新样式 */
.last-updated-section {
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 1rem;
}

.last-updated {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.author-link {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
}

.author-link:hover {
  text-decoration: underline;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .git-history-information {
    padding: 1rem;
    margin: 1rem 0;
  }
  
  .contributors-list {
    gap: 0.5rem;
  }
  
  .contributor-item {
    padding: 0.4rem;
  }
  
  .contributor-avatar {
    width: 28px;
    height: 28px;
  }
  
  .commit-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .commit-author {
    flex-wrap: wrap;
  }
}
</style>