<template>
  <div class="git-history-information">
    <!-- 统一的头部区域 -->
    <div class="history-header" @click="toggleHistory">
      <div class="header-left">
        <Clock class="icon" :size="16" />
        <span class="last-updated-text">最后编辑时间:</span>
        <time v-if="lastCommit" :datetime="lastCommit.commit.author.date" class="last-updated-time">
          {{ formatDate(lastCommit.commit.author.date) }}
        </time>
        <span v-else class="last-updated-time">未知</span>
      </div>
      <div class="header-right">
        <History class="icon" :size="16" />
        <span class="history-title">查看完整历史记录</span>
        <ChevronDown class="toggle-icon" :size="14" :class="{ 'expanded': isHistoryExpanded }" />
      </div>
    </div>

    <!-- 文件历史部分 -->
    <div class="file-history-section">
      
      <div class="history-content" :class="{ 'expanded': isHistoryExpanded }">
        <div v-if="historyLoading" class="loading">
          <span class="loading-spinner"></span>
          加载文件历史中...
        </div>
        <div v-else-if="historyError" class="error">
          <AlertTriangle class="icon" :size="16" />
          加载文件历史失败: {{ historyError }}
        </div>
        <div v-else class="history-list">
          <div v-for="commit in fileHistory" :key="commit.sha" class="history-item">
            <div class="commit-info">
              <div class="commit-left">
                <ExternalLink class="commit-icon" :size="14" />
                <a 
                  :href="commit.html_url" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="commit-sha"
                >
                  {{ commit.sha.substring(0, 7) }}
                </a>
                <span class="commit-separator">-</span>
                <span class="commit-type">{{ getCommitType(commit.commit.message) }}</span>
                <span class="commit-scope" v-if="getCommitScope(commit.commit.message)">
                  ({{ getCommitScope(commit.commit.message) }})
                </span>
                <span class="commit-separator">:</span>
                <span class="commit-description">{{ getCommitDescription(commit.commit.message) }}</span>
              </div>
              <div class="commit-right">
                <span class="commit-number">(#{{ commit.sha.substring(0, 3) }})</span>
                <span class="commit-date">{{ formatDate(commit.commit.author.date) }}</span>
              </div>
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
import { Clock, GitCommit, User, ExternalLink, ChevronDown, ChevronUp, Loader2, AlertCircle } from 'lucide-vue-next'

const { page, site } = useData()

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
  
  // 处理多语言路径
  // 在VitePress多语言环境中，filePath可能不包含语言前缀
  // 需要根据当前语言环境补全路径
  let fullPath = filePath
  
  // 如果路径不以docs/开头，添加docs/前缀
  if (!fullPath.startsWith('docs/')) {
    // 检查是否需要添加语言前缀
    const currentLang = page.value.lang || 'zh-CN'
    if (currentLang !== 'zh-CN' && !fullPath.startsWith(currentLang + '/')) {
      fullPath = `${currentLang}/${fullPath}`
    }
    fullPath = `docs/${fullPath}`
  }
  
  return fullPath
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
    
    // 首先尝试从静态 JSON 文件中读取历史数据（用于生产环境）
    try {
      const baseUrl = site.value.base || '/'
      const gitHistoryUrl = baseUrl.endsWith('/') ? `${baseUrl}git-history.json` : `${baseUrl}/git-history.json`
      const response = await fetch(gitHistoryUrl)
      if (response.ok) {
        const gitHistoryData = await response.json()
        
        // 验证JSON数据结构
        if (!gitHistoryData || typeof gitHistoryData !== 'object') {
          throw new Error('无效的JSON数据格式')
        }
        
        // 检查是否有files字段（新格式）或直接文件数据（旧格式）
        const filesData = gitHistoryData.files || gitHistoryData
        const fileData = filesData[filePath]
        
        if (fileData && fileData.history && Array.isArray(fileData.history)) {
          // 验证历史记录数据
          const validHistory = fileData.history.filter(commit => {
            return commit.hash && commit.authorName && commit.date && commit.message
          })
          
          if (validHistory.length === 0) {
            throw new Error('没有有效的历史记录数据')
          }
          
          fileHistory.value = validHistory.map(commit => ({
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
          
          console.log(`✅ 成功加载 ${validHistory.length} 条历史记录`)
          return
        } else {
          console.log(`⚠️ 文件 ${filePath} 没有历史记录数据`)
        }
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
    } catch (staticError) {
      console.log('静态历史数据不可用，尝试本地 API:', staticError.message)
    }
    
    // 如果静态数据不可用，回退到本地 Git API（用于开发环境）
    try {
      const response = await axios.get('/api/git-history', {
        params: {
          file: filePath,
          type: 'history'
        },
        timeout: 10000 // 10秒超时
      })
      
      // 验证响应数据
      if (!response.data || typeof response.data !== 'object') {
        throw new Error('API返回无效数据格式')
      }
      
      // 转换本地 Git 数据格式为组件期望的格式
      const gitData = response.data
      if (gitData.history && Array.isArray(gitData.history)) {
        // 验证历史记录数据
        const validHistory = gitData.history.filter(commit => {
          return commit.hash && commit.authorName && commit.date && commit.message
        })
        
        if (validHistory.length === 0) {
          console.warn('API返回的历史记录为空或无效')
          fileHistory.value = []
          return
        }
        
        fileHistory.value = validHistory.map(commit => ({
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
        
        console.log(`✅ 从API成功加载 ${validHistory.length} 条历史记录`)
      } else {
        console.warn('API返回数据中没有有效的history字段')
        fileHistory.value = []
      }
    } catch (apiError) {
      console.error('本地 Git API 也不可用:', apiError)
      
      // 根据错误类型提供更具体的错误信息
      if (apiError.code === 'ECONNABORTED') {
        historyError.value = '请求超时，请稍后重试'
      } else if (apiError.response) {
        historyError.value = `API错误 (${apiError.response.status}): ${apiError.response.statusText}`
      } else if (apiError.request) {
        historyError.value = '网络连接失败，请检查网络状态'
      } else {
        historyError.value = `获取历史记录失败: ${apiError.message}`
      }
      
      fileHistory.value = []
    }
  } catch (error) {
    console.error('获取文件历史失败:', error)
    historyError.value = error.message || '未知错误'
    fileHistory.value = []
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

// 解析提交类型
const getCommitType = (message) => {
  const match = message.match(/^(\w+)(\(.+\))?:/)
  return match ? match[1] : 'feat'
}

// 解析提交作用域
const getCommitScope = (message) => {
  const match = message.match(/^\w+\((.+)\):/)
  return match ? match[1] : null
}

// 解析提交描述
const getCommitDescription = (message) => {
  const match = message.match(/^\w+(\(.+\))?:\s*(.+)$/)
  return match ? match[2] : message
}

// 组件挂载时获取历史记录
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
  color: var(--vp-c-text-2);
  flex-shrink: 0;
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

/* 统一头部样式 */
.history-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s ease;
  border-bottom: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
}

.history-header:hover {
  background-color: var(--vp-c-bg-soft);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.last-updated-text {
  color: var(--vp-c-text-2);
}

.last-updated-time {
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* 文件历史样式 */
.file-history-section {
  background-color: var(--vp-c-bg);
}

.history-title {
  flex: 1;
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.toggle-icon {
  color: var(--vp-c-text-2);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
  flex-shrink: 0;
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
  justify-content: space-between;
  padding: 0.75rem 1rem;
  font-size: 0.85rem;
  gap: 1rem;
}

.commit-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
}

.commit-icon {
  color: var(--vp-c-text-3);
  flex-shrink: 0;
}

.commit-sha {
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.8rem;
}

.commit-sha:hover {
  text-decoration: underline;
}

.commit-separator {
  color: var(--vp-c-text-3);
  font-weight: normal;
}

.commit-type {
  color: var(--vp-c-brand-1);
  font-weight: 500;
  font-size: 0.85rem;
}

.commit-scope {
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
}

.commit-description {
  color: var(--vp-c-text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex: 1;
}

.commit-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
  flex-shrink: 0;
  white-space: nowrap;
}

.commit-number {
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-3);
}

.commit-date {
  color: var(--vp-c-text-2);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .git-history-information {
    margin: 1rem 0;
  }
  
  .history-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem;
  }
  
  .header-left,
  .header-right {
    width: 100%;
    justify-content: space-between;
  }
  
  .commit-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem;
  }
  
  .commit-left {
    width: 100%;
    flex-wrap: wrap;
  }
  
  .commit-description {
    white-space: normal;
    overflow: visible;
    text-overflow: unset;
    width: 100%;
    margin-top: 0.25rem;
  }
  
  .commit-right {
    align-self: flex-end;
    margin-top: 0.25rem;
  }
}
</style>