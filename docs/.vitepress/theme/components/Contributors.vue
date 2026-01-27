<template>
  <div class="contributors-container">
    <h2>{{ texts.title }}</h2>
    <div v-if="loading" class="loading">{{ texts.loading }}</div>
    <div v-else-if="error" class="error">{{ texts.error }}: {{ error.message }}</div>
    <div v-else class="contributors-grid">
      <a v-for="contributor in contributors" :key="contributor.id" :href="contributor.html_url" target="_blank"
        rel="noopener noreferrer" class="contributor-card">
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

const { site, page } = useData()

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

    // 获取当前文件路径
    const filePath = page.value.filePath
    let fullPath = filePath
    if (!fullPath) {
      error.value = texts.value.error
      return
    }

    // 处理多语言路径补全
    if (!fullPath.startsWith('docs/')) {
      const currentLang = page.value.lang || 'zh-CN'
      if (currentLang !== 'zh-CN' && !fullPath.startsWith(currentLang + '/')) {
        fullPath = `${currentLang}/${fullPath}`
      }
      fullPath = `docs/${fullPath}`
    }

    // 首先尝试从静态 JSON 文件中读取历史数据
    let loadedFromStatic = false

    // 开发环境下跳过静态文件检查，直接使用 API，以便获得实时数据和调试日志
    const isDev = import.meta.env.DEV

    if (!isDev) {
      try {
        const baseUrl = site.value.base || '/'
        const gitHistoryUrl = baseUrl.endsWith('/') ? `${baseUrl}git-history.json` : `${baseUrl}/git-history.json`
        const response = await fetch(gitHistoryUrl)

        if (response.ok) {
          const gitHistoryData = await response.json()
          const filesData = gitHistoryData.files || gitHistoryData
          const fileData = filesData[fullPath]

          if (fileData && fileData.contributors && Array.isArray(fileData.contributors) && fileData.contributors.length > 0) {
            contributors.value = fileData.contributors.map(c => ({
              login: c.name || c.login,
              avatar_url: c.avatar || c.avatar_url,
              html_url: `https://github.com/${c.name || c.login}`,
              contributions: c.contributions
            }));
            loadedFromStatic = true
          }
        }
      } catch (err) {
        console.warn('Failed to load static contributors, falling back to API:', err)
      }
    }

    // 如果静态文件没有数据（如开发环境），尝试本地 API
    if (!loadedFromStatic) {
      try {
        const apiUrl = `/api/git-history?file=${encodeURIComponent(fullPath)}&type=contributors`
        const apiResponse = await fetch(apiUrl)

        if (apiResponse.ok) {
          const apiData = await apiResponse.json()

          // API 返回的是 { contributors: [...], ... } 格式
          if (apiData.contributors && Array.isArray(apiData.contributors)) {
            contributors.value = apiData.contributors.map(c => ({
              login: c.name || c.login,
              avatar_url: c.avatar || c.avatar_url,
              html_url: c.html_url || `https://github.com/${c.name || c.login}`,
              contributions: c.contributions
            }))
          } else if (Array.isArray(apiData)) {
            contributors.value = apiData.map(c => ({
              login: c.name || c.login,
              avatar_url: c.avatar || c.avatar_url,
              html_url: c.html_url || `https://github.com/${c.name || c.login}`,
              contributions: c.contributions
            }))
          }
        }
      } catch (apiErr) {
        console.error('Failed to load contributors from API:', apiErr)
      }
    }

  } catch (err) {
    error.value = texts.value.error
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
  transition: all 0.3s ease;
  padding: 6px 14px;
  border-radius: 24px;
  border: 1px solid var(--vp-c-divider);
  background-color: transparent;
  cursor: pointer;
  /* Webkit内核浏览器兼容（Chrome/Safari） */
  -webkit-user-drag: none;
  /* 禁止文本选中（可选，防止拖拽时连带选中文本） */
  user-select: none;
  /* 兼容Firefox（可选，实际效果不如HTML属性） */
  -moz-user-select: none;
}

.contributor-card:hover {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-soft);
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.contributor-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
  border: 1px solid var(--vp-c-divider);
  object-fit: cover;
  /* 禁用图片拖拽 */
  -webkit-user-drag: none;
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