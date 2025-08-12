<template>
  <div class="contributors-container">
    <h2>{{ texts.title }}</h2>
    <div v-if="loading" class="loading">{{ texts.loading }}</div>
    <div v-else-if="error" class="error">{{ texts.error }}: {{ error.message }}</div>
    <div v-else class="contributors-grid">
      <a v-for="contributor in contributors" :key="contributor.id" :href="contributor.html_url" target="_blank" rel="noopener noreferrer" class="contributor-card">
        <img :src="contributor.avatar_url" :alt="contributor.login" class="contributor-avatar" />
        <span class="contributor-name">{{ contributor.login }}</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useData } from 'vitepress'
import axios from 'axios'

const { site } = useData()

// 多语言文本配置
const i18nTexts = {
  'zh-CN': {
    title: '# 贡献者',
    loading: '加载中...',
    error: '加载贡献者失败'
  },
  'zh-TW': {
    title: '# 貢獻者',
    loading: '載入中...',
    error: '載入貢獻者失敗'
  },
  'zh-HK': {
    title: '# 貢獻者',
    loading: '載入中...',
    error: '載入貢獻者失敗'
  },
  'en-US': {
    title: '# Contributors',
    loading: 'Loading...',
    error: 'Failed to load contributors'
  },
  'ja-JP': {
    title: '# 貢献者',
    loading: '読み込み中...',
    error: '貢献者の読み込みに失敗しました'
  },
  'ko-KR': {
    title: '# 기여자',
    loading: '로딩 중...',
    error: '기여자 로드 실패'
  },
  'fr-FR': {
    title: '# Contributeurs',
    loading: 'Chargement...',
    error: 'Échec du chargement des contributeurs'
  },
  'de-DE': {
    title: '# Mitwirkende',
    loading: 'Laden...',
    error: 'Fehler beim Laden der Mitwirkenden'
  },
  'es-ES': {
    title: '# Colaboradores',
    loading: 'Cargando...',
    error: 'Error al cargar colaboradores'
  },
  'ru-RU': {
    title: '# Участники',
    loading: 'Загрузка...',
    error: 'Ошибка загрузки участников'
  }
}

// 获取当前语言的文本
const getCurrentTexts = () => {
  const { page } = useData()
  // 获取当前路径来判断语言
  const currentPath = page.value.relativePath || ''
  let currentLang = page.value.lang || 'zh-CN'
  
  // 从路径中提取语言代码
  if (currentPath.startsWith('en-US/')) {
    currentLang = 'en-US'
  } else if (currentPath.startsWith('zh-TW/')) {
    currentLang = 'zh-TW'
  } else if (currentPath.startsWith('zh-HK/')) {
    currentLang = 'zh-HK'
  } else if (currentPath.startsWith('ja-JP/')) {
    currentLang = 'ja-JP'
  } else if (currentPath.startsWith('ko-KR/')) {
    currentLang = 'ko-KR'
  } else if (currentPath.startsWith('fr-FR/')) {
    currentLang = 'fr-FR'
  } else if (currentPath.startsWith('de-DE/')) {
    currentLang = 'de-DE'
  } else if (currentPath.startsWith('es-ES/')) {
    currentLang = 'es-ES'
  } else if (currentPath.startsWith('ru-RU/')) {
    currentLang = 'ru-RU'
  } else if (currentPath.startsWith('zh-CN/') || !currentPath.includes('/')) {
    currentLang = 'zh-CN'
  }
  
  // 调试信息（开发环境下）
  if (process.env.NODE_ENV === 'development') {
    console.log('Contributors Language Debug:', {
      'page.lang': page.value.lang,
      'relativePath': currentPath,
      'detected': currentLang,
      'available': Object.keys(i18nTexts)
    })
  }
  
  return i18nTexts[currentLang] || i18nTexts['zh-CN']
}

const texts = computed(() => getCurrentTexts())

const contributors = ref([])
const loading = ref(true)
const error = ref(null)

const fetchContributors = async () => {
  try {
    loading.value = true
    error.value = null
    
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
        const contributorMap = new Map()
        
        // 遍历所有文件的历史记录
        Object.values(filesData).forEach(fileData => {
          if (fileData.history && Array.isArray(fileData.history)) {
            fileData.history.forEach(commit => {
              const { authorName, authorEmail } = commit
              if (authorName && authorEmail) {
                const key = `${authorName}|${authorEmail}`
                if (contributorMap.has(key)) {
                  contributorMap.get(key).contributions++
                } else {
                  contributorMap.set(key, {
                    login: authorName,
                    avatar_url: `https://github.com/${authorName}.png`,
                    html_url: `https://github.com/${authorName}`,
                    contributions: 1,
                    email: authorEmail
                  })
                }
              }
            })
          }
        })
        
        // 转换为数组并按贡献数排序
        contributors.value = Array.from(contributorMap.values())
          .sort((a, b) => b.contributions - a.contributions)
        
        console.log(`✅ 成功加载 ${contributors.value.length} 位贡献者`)
        return
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
          type: 'contributors'
        },
        timeout: 10000 // 10秒超时
      })
      
      // 验证响应数据
      if (!response.data || typeof response.data !== 'object') {
        throw new Error('API返回无效数据格式')
      }
      
      const gitData = response.data
      const contributorMap = new Map()
      
      // 处理API返回的数据
      if (gitData.files) {
        Object.values(gitData.files).forEach(fileData => {
          if (fileData.history && Array.isArray(fileData.history)) {
            fileData.history.forEach(commit => {
              const { authorName, authorEmail } = commit
              if (authorName && authorEmail) {
                const key = `${authorName}|${authorEmail}`
                if (contributorMap.has(key)) {
                  contributorMap.get(key).contributions++
                } else {
                  contributorMap.set(key, {
                    login: authorName,
                    avatar_url: `https://github.com/${authorName}.png`,
                    html_url: `https://github.com/${authorName}`,
                    contributions: 1,
                    email: authorEmail
                  })
                }
              }
            })
          }
        })
      }
      
      // 转换为数组并按贡献数排序
      contributors.value = Array.from(contributorMap.values())
        .sort((a, b) => b.contributions - a.contributions)
      
      console.log(`✅ 从API成功加载 ${contributors.value.length} 位贡献者`)
    } catch (apiError) {
      console.error('本地 Git API 也不可用:', apiError)
      
      // 根据错误类型提供更具体的错误信息
      if (apiError.code === 'ECONNABORTED') {
        error.value = '请求超时，请稍后重试'
      } else if (apiError.response) {
        error.value = `API错误 (${apiError.response.status}): ${apiError.response.statusText}`
      } else if (apiError.request) {
        error.value = '网络连接失败，请检查网络状态'
      } else {
        error.value = `获取贡献者失败: ${apiError.message}`
      }
      
      contributors.value = []
    }
  } catch (err) {
    console.error('获取贡献者失败:', err)
    error.value = texts.value.error + ': ' + err.message
    contributors.value = []
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchContributors()
})
</script>

<style scoped>
.contributors-container {
  padding: 20px 0;
  text-align: left;
  margin: 20px 0;
  max-width: 100%;
  background-color: transparent;
  box-shadow: none;
}

h2 {
  margin-bottom: 20px;
  font-size: 1.5em;
  color: var(--vp-c-text-1);
  padding-bottom: 10px;
}

.loading,
.error {
  font-size: 1em;
  color: var(--vp-c-text-2);
  margin-top: 10px;
}

.contributors-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: flex-start;
  max-width: 100%;
  margin: 0;
}

.contributor-card {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: background-color 0.2s ease-in-out;
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid var(--vp-c-bg);
  background-color: transparent;
}

.contributor-card:hover {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-brand-1);
  text-decoration: none;
}

.contributor-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
  border: 1px solid var(--vp-c-divider);
  object-fit: cover;
}

.contributor-name {
  font-weight: normal;
  font-size: 0.9em;
  color: var(--vp-c-text-1);
}

.contributor-card:hover .contributor-name {
  color: var(--vp-c-brand-1);
}
</style>