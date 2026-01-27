<template>
  <div class="changelog-wrapper">
    <h2 class="changelog-title">{{ texts.title }}</h2>
    <div class="changelog">
      <div class="changelog-header" @click="toggleExpanded">
        <div class="last-edited">
          <svg class="clock-icon" viewBox="0 0 16 16" width="16" height="16">
            <path fill="currentColor"
              d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7-3.25v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5a.75.75 0 0 1 1.5 0Z">
            </path>
          </svg>
          <span v-if="lastCommit">{{ texts.lastEdited }} {{ formatRelativeTime(lastCommit.commit.author.date) }}</span>
          <span v-else>{{ texts.loading }}</span>
        </div>
        <div class="view-history">
          <svg class="list-icon" viewBox="0 0 16 16" width="16" height="16">
            <path fill="currentColor" d="M2 4h8v1H2V4zm0 3h8v1H2V7zm0 3h8v1H2v-1z" />
          </svg>
          <span class="view-history-link">
            {{ isExpanded ? texts.collapse : texts.viewFullHistory }}
          </span>
          <svg class="chevron-icon" :class="{ 'rotated': isExpanded }" viewBox="0 0 16 16" width="16" height="16">
            <path fill="currentColor"
              d="M4.427 9.573l3.396-3.396a.25.25 0 01.354 0l3.396 3.396a.25.25 0 01-.177.427H4.604a.25.25 0 01-.177-.427z" />
          </svg>
        </div>
      </div>

      <div v-if="historyLoading" class="loading">{{ texts.loading }}</div>
      <div v-else-if="historyError" class="error">{{ historyError }}</div>
      <div v-else class="changelog-content" :class="{ 'expanded': isExpanded }">
        <div v-if="displayedCommits.length === 0 && isExpanded" class="no-history">
          {{ texts.noHistory }}
        </div>
        <div v-for="(commit, index) in displayedCommits" :key="commit.sha" class="changelog-entry"
          :class="{ 'visible-entry': isExpanded }"
          :style="{ 'transition-delay': isExpanded ? `${index * 20}ms` : `${(displayedCommits.length - 1 - index) * 15}ms` }">
          <!-- 提交条目 -->
          <div class="commit-entry" :class="{ 'version-entry': isVersionCommit(commit) }">
            <div class="commit-indicator">
              <svg v-if="isVersionCommit(commit)" class="version-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 2.5L13 7.5H3L8 2.5Z" />
              </svg>
              <div v-else class="commit-dot"></div>
            </div>
            <div class="commit-content">
              <a class="commit-hash" :href="commit.html_url" target="_blank">
                {{ commit.sha.substring(0, 7) }}
              </a>
              <span class="commit-separator">-</span>
              <span class="commit-type" :class="`type-${getCommitType(commit.commit.message)}`">
                {{ getCommitType(commit.commit.message) }}
              </span>
              <span v-if="getCommitScope(commit.commit.message)" class="commit-scope">
                ({{ getCommitScope(commit.commit.message) }})
              </span>
              <span class="commit-message">{{ getCommitDescription(commit.commit.message) }}</span>
              <a v-if="getCommitPR(commit.commit.message)" class="commit-pr"
                :href="`https://github.com/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/pull/${getCommitPR(commit.commit.message).substring(1)}`"
                target="_blank">
                ({{ getCommitPR(commit.commit.message) }})
              </a>
              <span class="commit-time">{{ formatCommitTime(commit.commit.author.date) }}</span>
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

const { page, site } = useData()

// 多语言文本配置
const i18nTexts = {
  'zh-CN': {
    title: '# 更新日志',
    lastEdited: '最后编辑',
    viewFullHistory: '查看完整历史',
    collapse: '收起',
    loading: '加载中...',
    noHistory: '暂无日志',
    timeFormat: {
      dayAgo: '{n} 天前',
      daysAgo: '{n} 天前',
      weekAgo: '{n} 周前',
      weeksAgo: '{n} 周前',
      monthAgo: '{n} 个月前',
      monthsAgo: '{n} 个月前',
      yearAgo: '超过 {n} 年前',
      yearsAgo: '超过 {n} 年前',
      onDayAgo: '于 {n} 天前',
      onDaysAgo: '于 {n} 天前',
      onWeekAgo: '于 {n} 周前',
      onWeeksAgo: '于 {n} 周前',
      onMonthAgo: '于 {n} 个月前',
      onMonthsAgo: '于 {n} 个月前',
      onYearAgo: '于超过 {n} 年前',
      onYearsAgo: '于超过 {n} 年前'
    },
    errors: {
      noFilePath: '无法获取当前文件路径',
      fetchFailed: '获取文件历史失败',
      unknown: '未知错误'
    }
  },
  'zh-TW': {
    title: '# 更新日誌',
    lastEdited: '最後編輯',
    viewFullHistory: '查看完整歷史',
    collapse: '收起',
    loading: '載入中...',
    noHistory: '暫無日誌',
    timeFormat: {
      dayAgo: '{n} 天前',
      daysAgo: '{n} 天前',
      weekAgo: '{n} 週前',
      weeksAgo: '{n} 週前',
      monthAgo: '{n} 個月前',
      monthsAgo: '{n} 個月前',
      yearAgo: '超過 {n} 年前',
      yearsAgo: '超過 {n} 年前',
      onDayAgo: '於 {n} 天前',
      onDaysAgo: '於 {n} 天前',
      onWeekAgo: '於 {n} 週前',
      onWeeksAgo: '於 {n} 週前',
      onMonthAgo: '於 {n} 個月前',
      onMonthsAgo: '於 {n} 個月前',
      onYearAgo: '於超過 {n} 年前',
      onYearsAgo: '於超過 {n} 年前'
    },
    errors: {
      noFilePath: '無法取得目前檔案路徑',
      fetchFailed: '取得檔案歷史失敗',
      unknown: '未知錯誤'
    }
  },
  'zh-HK': {
    title: '# 更新日誌',
    lastEdited: '最後編輯',
    viewFullHistory: '查看完整歷史',
    collapse: '收起',
    loading: '載入中...',
    noHistory: '暫無日誌',
    timeFormat: {
      dayAgo: '{n} 日前',
      daysAgo: '{n} 日前',
      weekAgo: '{n} 星期前',
      weeksAgo: '{n} 星期前',
      monthAgo: '{n} 個月前',
      monthsAgo: '{n} 個月前',
      yearAgo: '超過 {n} 年前',
      yearsAgo: '超過 {n} 年前',
      onDayAgo: '於 {n} 日前',
      onDaysAgo: '於 {n} 日前',
      onWeekAgo: '於 {n} 星期前',
      onWeeksAgo: '於 {n} 星期前',
      onMonthAgo: '於 {n} 個月前',
      onMonthsAgo: '於 {n} 個月前',
      onYearAgo: '於超過 {n} 年前',
      onYearsAgo: '於超過 {n} 年前'
    },
    errors: {
      noFilePath: '無法取得目前檔案路徑',
      fetchFailed: '取得檔案歷史失敗',
      unknown: '未知錯誤'
    }
  },
  'en-US': {
    title: '# Changelog',
    lastEdited: 'Last edited',
    viewFullHistory: 'View full history',
    collapse: 'Collapse',
    loading: 'Loading...',
    noHistory: 'No history available',
    timeFormat: {
      dayAgo: '{n} day ago',
      daysAgo: '{n} days ago',
      weekAgo: '{n} week ago',
      weeksAgo: '{n} weeks ago',
      monthAgo: '{n} month ago',
      monthsAgo: '{n} months ago',
      yearAgo: 'over {n} year ago',
      yearsAgo: 'over {n} years ago',
      onDayAgo: 'on {n} day ago',
      onDaysAgo: 'on {n} days ago',
      onWeekAgo: 'on {n} week ago',
      onWeeksAgo: 'on {n} weeks ago',
      onMonthAgo: 'on {n} month ago',
      onMonthsAgo: 'on {n} months ago',
      onYearAgo: 'on over {n} year ago',
      onYearsAgo: 'on over {n} years ago'
    },
    errors: {
      noFilePath: 'Unable to get current file path',
      fetchFailed: 'Failed to fetch file history',
      unknown: 'Unknown error'
    }
  },
  'ja-JP': {
    title: '# 変更履歴',
    lastEdited: '最終編集',
    viewFullHistory: '完全な履歴を表示',
    collapse: '折りたたむ',
    loading: '読み込み中...',
    noHistory: '履歴がありません',
    timeFormat: {
      dayAgo: '{n}日前',
      daysAgo: '{n}日前',
      weekAgo: '{n}週間前',
      weeksAgo: '{n}週間前',
      monthAgo: '{n}ヶ月前',
      monthsAgo: '{n}ヶ月前',
      yearAgo: '{n}年以上前',
      yearsAgo: '{n}年以上前',
      onDayAgo: '{n}日前に',
      onDaysAgo: '{n}日前に',
      onWeekAgo: '{n}週間前に',
      onWeeksAgo: '{n}週間前に',
      onMonthAgo: '{n}ヶ月前に',
      onMonthsAgo: '{n}ヶ月前に',
      onYearAgo: '{n}年以上前に',
      onYearsAgo: '{n}年以上前に'
    },
    errors: {
      noFilePath: '現在のファイルパスを取得できません',
      fetchFailed: 'ファイル履歴の取得に失敗しました',
      unknown: '不明なエラー'
    }
  },
  'ko-KR': {
    title: '# 변경 기록',
    lastEdited: '마지막 편집',
    viewFullHistory: '전체 기록 보기',
    collapse: '접기',
    loading: '로딩 중...',
    noHistory: '기록이 없습니다',
    timeFormat: {
      dayAgo: '{n}일 전',
      daysAgo: '{n}일 전',
      weekAgo: '{n}주 전',
      weeksAgo: '{n}주 전',
      monthAgo: '{n}개월 전',
      monthsAgo: '{n}개월 전',
      yearAgo: '{n}년 이상 전',
      yearsAgo: '{n}년 이상 전',
      onDayAgo: '{n}일 전에',
      onDaysAgo: '{n}일 전에',
      onWeekAgo: '{n}주 전에',
      onWeeksAgo: '{n}주 전에',
      onMonthAgo: '{n}개월 전에',
      onMonthsAgo: '{n}개월 전에',
      onYearAgo: '{n}년 이상 전에',
      onYearsAgo: '{n}년 이상 전에'
    },
    errors: {
      noFilePath: '현재 파일 경로를 가져올 수 없습니다',
      fetchFailed: '파일 기록 가져오기 실패',
      unknown: '알 수 없는 오류'
    }
  },
  'fr-FR': {
    title: '# Journal des modifications',
    lastEdited: 'Dernière modification',
    viewFullHistory: 'Voir l\'historique complet',
    collapse: 'Réduire',
    loading: 'Chargement...',
    noHistory: 'Aucun historique disponible',
    timeFormat: {
      dayAgo: 'il y a {n} jour',
      daysAgo: 'il y a {n} jours',
      weekAgo: 'il y a {n} semaine',
      weeksAgo: 'il y a {n} semaines',
      monthAgo: 'il y a {n} mois',
      monthsAgo: 'il y a {n} mois',
      yearAgo: 'il y a plus de {n} an',
      yearsAgo: 'il y a plus de {n} ans',
      onDayAgo: 'il y a {n} jour',
      onDaysAgo: 'il y a {n} jours',
      onWeekAgo: 'il y a {n} semaine',
      onWeeksAgo: 'il y a {n} semaines',
      onMonthAgo: 'il y a {n} mois',
      onMonthsAgo: 'il y a {n} mois',
      onYearAgo: 'il y a plus de {n} an',
      onYearsAgo: 'il y a plus de {n} ans'
    },
    errors: {
      noFilePath: 'Impossible d\'obtenir le chemin du fichier actuel',
      fetchFailed: 'Échec de la récupération de l\'historique du fichier',
      unknown: 'Erreur inconnue'
    }
  },
  'de-DE': {
    title: '# Änderungsprotokoll',
    lastEdited: 'Zuletzt bearbeitet',
    viewFullHistory: 'Vollständige Historie anzeigen',
    collapse: 'Einklappen',
    loading: 'Wird geladen...',
    noHistory: 'Keine Historie verfügbar',
    timeFormat: {
      dayAgo: 'vor {n} Tag',
      daysAgo: 'vor {n} Tagen',
      weekAgo: 'vor {n} Woche',
      weeksAgo: 'vor {n} Wochen',
      monthAgo: 'vor {n} Monat',
      monthsAgo: 'vor {n} Monaten',
      yearAgo: 'vor über {n} Jahr',
      yearsAgo: 'vor über {n} Jahren',
      onDayAgo: 'vor {n} Tag',
      onDaysAgo: 'vor {n} Tagen',
      onWeekAgo: 'vor {n} Woche',
      onWeeksAgo: 'vor {n} Wochen',
      onMonthAgo: 'vor {n} Monat',
      onMonthsAgo: 'vor {n} Monaten',
      onYearAgo: 'vor über {n} Jahr',
      onYearsAgo: 'vor über {n} Jahren'
    },
    errors: {
      noFilePath: 'Aktueller Dateipfad kann nicht abgerufen werden',
      fetchFailed: 'Fehler beim Abrufen der Dateihistorie',
      unknown: 'Unbekannter Fehler'
    }
  },
  'es-ES': {
    title: '# Registro de cambios',
    lastEdited: 'Última edición',
    viewFullHistory: 'Ver historial completo',
    collapse: 'Contraer',
    loading: 'Cargando...',
    noHistory: 'No hay historial disponible',
    timeFormat: {
      dayAgo: 'hace {n} día',
      daysAgo: 'hace {n} días',
      weekAgo: 'hace {n} semana',
      weeksAgo: 'hace {n} semanas',
      monthAgo: 'hace {n} mes',
      monthsAgo: 'hace {n} meses',
      yearAgo: 'hace más de {n} año',
      yearsAgo: 'hace más de {n} años',
      onDayAgo: 'hace {n} día',
      onDaysAgo: 'hace {n} días',
      onWeekAgo: 'hace {n} semana',
      onWeeksAgo: 'hace {n} semanas',
      onMonthAgo: 'hace {n} mes',
      onMonthsAgo: 'hace {n} meses',
      onYearAgo: 'hace más de {n} año',
      onYearsAgo: 'hace más de {n} años'
    },
    errors: {
      noFilePath: 'No se puede obtener la ruta del archivo actual',
      fetchFailed: 'Error al obtener el historial del archivo',
      unknown: 'Error desconocido'
    }
  },
  'ru-RU': {
    title: '# Журнал изменений',
    lastEdited: 'Последнее редактирование',
    viewFullHistory: 'Посмотреть полную историю',
    collapse: 'Свернуть',
    loading: 'Загрузка...',
    noHistory: 'История недоступна',
    timeFormat: {
      dayAgo: '{n} день назад',
      daysAgo: '{n} дней назад',
      weekAgo: '{n} неделю назад',
      weeksAgo: '{n} недель назад',
      monthAgo: '{n} месяц назад',
      monthsAgo: '{n} месяцев назад',
      yearAgo: 'более {n} года назад',
      yearsAgo: 'более {n} лет назад',
      onDayAgo: '{n} день назад',
      onDaysAgo: '{n} дней назад',
      onWeekAgo: '{n} неделю назад',
      onWeeksAgo: '{n} недель назад',
      onMonthAgo: '{n} месяц назад',
      onMonthsAgo: '{n} месяцев назад',
      onYearAgo: 'более {n} года назад',
      onYearsAgo: 'более {n} лет назад'
    },
    errors: {
      noFilePath: 'Невозможно получить путь к текущему файлу',
      fetchFailed: 'Не удалось получить историю файла',
      unknown: 'Неизвестная ошибка'
    }
  }
}

// 获取当前语言的文本
const getCurrentTexts = () => {
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
    console.log('GitHistory Language Debug:', {
      'page.lang': page.value.lang,
      'relativePath': currentPath,
      'detected': currentLang,
      'available': Object.keys(i18nTexts)
    })
  }

  return i18nTexts[currentLang] || i18nTexts['zh-CN']
}

const texts = computed(() => getCurrentTexts())

// 响应式数据
const fileHistory = ref([])
const historyLoading = ref(true)
const historyError = ref(null)
const isExpanded = ref(false)
const displayLimit = ref(5)

// 配置
const GITHUB_REPO_OWNER = 'Re0XIAOPA'
const GITHUB_REPO_NAME = 'doc_blocktavern'
const GITHUB_API_BASE = 'https://api.github.com'

// 最后一次提交
const lastCommit = computed(() => {
  return fileHistory.value.length > 0 ? fileHistory.value[0] : null
})

// 显示的提交记录 - 始终显示所有数据，通过CSS控制可见性
const displayedCommits = computed(() => {
  return fileHistory.value
})

// 切换展开状态 - 优化性能
let isToggling = false
const toggleExpanded = () => {
  if (isToggling) return

  isToggling = true
  requestAnimationFrame(() => {
    isExpanded.value = !isExpanded.value
    setTimeout(() => {
      isToggling = false
    }, 50)
  })
}

// 检查是否为版本提交
const isVersionCommit = (commit) => {
  const message = commit.commit.message.toLowerCase()
  return message.includes('release') || message.includes('version') || /v\d+\.\d+\.\d+/.test(message)
}

// 从提交信息中获取版本号
const getVersionFromCommit = (commit) => {
  const message = commit.commit.message
  const versionMatch = message.match(/v?(\d+\.\d+\.\d+[^\s]*)/)
  return versionMatch ? `v${versionMatch[1]}` : 'Release'
}

// 获取提交信息中的PR号
const getCommitPR = (message) => {
  const prMatch = message.match(/\(#(\d+)\)/)
  return prMatch ? `#${prMatch[1]}` : null
}

// 安全的日期解析函数，兼容iOS Safari
const parseDate = (dateString) => {
  if (!dateString) return null

  // 尝试直接解析
  let date = new Date(dateString)

  // 如果解析失败，尝试处理ISO格式的日期字符串
  if (isNaN(date.getTime())) {
    // 将空格替换为T，确保ISO格式兼容性
    const isoString = dateString.replace(' ', 'T')
    date = new Date(isoString)
  }

  // 如果仍然失败，尝试手动解析常见格式
  if (isNaN(date.getTime())) {
    // 处理 "YYYY-MM-DD HH:mm:ss +ZZZZ" 格式
    const match = dateString.match(/(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2}):(\d{2})\s*([+-]\d{4})?/)
    if (match) {
      const [, year, month, day, hour, minute, second, timezone] = match
      const isoString = `${year}-${month}-${day}T${hour}:${minute}:${second}${timezone || 'Z'}`
      date = new Date(isoString)
    }
  }

  return isNaN(date.getTime()) ? null : date
}

// 格式化提交时间
const formatCommitTime = (dateString) => {
  const date = parseDate(dateString)
  if (!date) return texts.value.errors.unknown

  const now = new Date()
  const diffTime = Math.abs(now - date)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 1) {
    return texts.value.timeFormat.onDayAgo.replace('{n}', '1')
  } else if (diffDays < 7) {
    return texts.value.timeFormat.onDaysAgo.replace('{n}', diffDays)
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7)
    const format = weeks > 1 ? texts.value.timeFormat.onWeeksAgo : texts.value.timeFormat.onWeekAgo
    return format.replace('{n}', weeks)
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30)
    const format = months > 1 ? texts.value.timeFormat.onMonthsAgo : texts.value.timeFormat.onMonthAgo
    return format.replace('{n}', months)
  } else {
    const years = Math.floor(diffDays / 365)
    const format = years > 1 ? texts.value.timeFormat.onYearsAgo : texts.value.timeFormat.onYearAgo
    return format.replace('{n}', years)
  }
}

// 格式化相对时间
const formatRelativeTime = (dateString) => {
  const date = parseDate(dateString)
  if (!date) return texts.value.errors.unknown

  const now = new Date()
  const diffTime = Math.abs(now - date)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 1) {
    return texts.value.timeFormat.dayAgo.replace('{n}', '1')
  } else if (diffDays < 7) {
    return texts.value.timeFormat.daysAgo.replace('{n}', diffDays)
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7)
    const format = weeks > 1 ? texts.value.timeFormat.weeksAgo : texts.value.timeFormat.weekAgo
    return format.replace('{n}', weeks)
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30)
    const format = months > 1 ? texts.value.timeFormat.monthsAgo : texts.value.timeFormat.monthAgo
    return format.replace('{n}', months)
  } else {
    const years = Math.floor(diffDays / 365)
    const format = years > 1 ? texts.value.timeFormat.yearsAgo : texts.value.timeFormat.yearAgo
    return format.replace('{n}', years)
  }
}

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



// 获取文件历史
const fetchFileHistory = async () => {
  try {
    historyLoading.value = true
    historyError.value = null

    const filePath = getCurrentFilePath()
    if (!filePath) {
      historyError.value = texts.value.errors.noFilePath
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

        let rawHistory = []

        if (fileData && fileData.history && Array.isArray(fileData.history)) {
          rawHistory = fileData.history
        } else if (fileData && fileData.months && Array.isArray(fileData.months)) {
          // console.log(`📡 正在获取 ${fileData.months.length} 个月份的历史记录...`)
          const historyBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`

          try {
            const monthPromises = fileData.months.map(async (month) => {
              try {
                const res = await fetch(`${historyBase}history/${month}.json`)
                if (res.ok) {
                  const monthData = await res.json()
                  return monthData[filePath] || []
                }
              } catch (e) {
                console.warn(`Failed to fetch history for ${month}:`, e)
              }
              return []
            })

            const results = await Promise.all(monthPromises)
            rawHistory = results.flat().sort((a, b) => new Date(b.date) - new Date(a.date))
          } catch (err) {
            console.error('Failed to fetch monthly history:', err)
          }
        }

        if (rawHistory.length > 0) {
          // 验证历史记录数据
          const validHistory = rawHistory.filter(commit => {
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

          // History loaded successfully
          return
        } else {
          // No history data for this file
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
    console.error(texts.value.errors.fetchFailed + ':', error)
    historyError.value = error.message || texts.value.errors.unknown
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
.changelog-wrapper {
  margin: 1rem 0;
}

.changelog-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 1rem 0;
  padding: 0;
  border: none;
}

.changelog {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--vp-c-bg);
}

.changelog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: var(--vp-c-bg-soft);
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s ease;
}

@media (max-width: 480px) {
  .changelog-header {
    gap: 8px;
    align-items: flex-start;
  }

  .view-history {
    align-self: flex-end;
  }

  .view-history-link {
    display: none;
  }

}

.changelog-header:hover {
  background-color: var(--vp-c-bg-alt);
}

.changelog-header:hover .last-edited {
  color: var(--vp-c-link);
}

.changelog-header:hover .clock-icon {
  color: var(--vp-c-link);
}

.changelog-header:hover .view-history {
  color: var(--vp-c-link);
}

.changelog-header:hover .list-icon {
  color: var(--vp-c-link);
}

.changelog-header:hover .chevron-icon {
  color: var(--vp-c-link);
}

.last-edited {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--vp-c-text-2);
  font-weight: bold;
  transition: color 0.2s ease;
}

.clock-icon {
  color: var(--vp-c-text-3);
  transition: color 0.2s ease;
}

.view-history {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  gap: 4px;
  font-size: 13px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: color 0.2s ease;
  margin-left: auto;
}



.list-icon {
  color: var(--vp-c-text-3);
  display: block;
  width: 24px;
  height: 240x;
  transition: color 0.2s ease;
}

.view-history-link {
  font-weight: bold;
}

.chevron-icon {
  color: var(--vp-c-text-3);
  transition: transform 0.2s ease, color 0.2s ease;
}

.chevron-icon.rotated {
  transform: rotate(180deg);
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  color: var(--vp-c-text-2);
  font-size: 14px;
}

.error {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  color: var(--vp-c-danger-1);
  font-size: 14px;
}

.no-history {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  color: var(--vp-c-text-2);
  font-size: 14px;
  font-style: italic;
  transition: all 0.25s ease;
}

.changelog-content {
  max-height: 0;
  padding: 0 12px;
  overflow: hidden;
  opacity: 0;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.25s ease;
}

.changelog-content.expanded {
  max-height: 1500px;
  padding: 12px;
  opacity: 1;
}

.changelog-entry {
  margin-bottom: 0;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transform: translateY(-8px);
  transition: all 0.2s ease;
  pointer-events: none;
  width: 100%;
  box-sizing: border-box;
}

.changelog-entry.visible-entry {
  max-height: 80px;
  opacity: 1;
  transform: translateY(0);
  margin-bottom: 6px;
  pointer-events: auto;
}

.changelog-entry:last-child {
  margin-bottom: 0;
}

.commit-entry {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 0;
  line-height: 1.4;
  width: 100%;
  box-sizing: border-box;
  flex-wrap: nowrap;
  min-width: 0;
}

.version-entry {
  margin: 8px 0;
}

.commit-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.commit-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--vp-c-text-3);
}

.version-icon {
  width: 12px;
  height: 12px;
  color: var(--vp-c-brand-1);
}

.commit-content {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  min-width: 0;
  font-size: 14px;
}

.commit-hash {
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
  color: var(--vp-c-brand-1);
  font-weight: 600;
  flex-shrink: 0;
}

.commit-hash:hover {
  text-decoration: underline;
}

.commit-separator {
  color: var(--vp-c-text-3);
  font-size: 14px;
  flex-shrink: 0;
}

.commit-type {
  font-size: 12px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  flex-shrink: 0;
  line-height: 1;
}

/* 不同提交类型的颜色 */
.type-feat {
  background-color: #10b981;
  color: white;
}

.type-fix {
  background-color: #ef4444;
  color: white;
}

.type-docs {
  background-color: #3b82f6;
  color: white;
}

.type-style {
  background-color: #8b5cf6;
  color: white;
}

.type-refactor {
  background-color: #f59e0b;
  color: white;
}

.type-test {
  background-color: #06b6d4;
  color: white;
}

.type-chore {
  background-color: #6b7280;
  color: white;
}

.type-ci {
  background-color: #84cc16;
  color: white;
}

.type-perf {
  background-color: #f97316;
  color: white;
}

.type-build {
  background-color: #64748b;
  color: white;
}

.commit-scope {
  font-size: 12px;
  color: var(--vp-c-text-2);
  font-weight: 500;
  flex-shrink: 0;
}

.commit-message {
  color: var(--vp-c-text-1);
  font-size: 14px;
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.commit-pr {
  font-size: 14px;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
  flex-shrink: 0;
}

.commit-pr:hover {
  text-decoration: underline;
}

.commit-time {
  font-size: 12px;
  color: var(--vp-c-text-2);
  flex-shrink: 0;
  margin-left: auto;
}



/* 响应式设计 */
@media (max-width: 768px) {
  .changelog-header {
    gap: 8px;
    align-items: flex-start;
  }

  .view-history {
    align-self: flex-end;
  }

  .changelog-content {
    padding: 0 12px;
  }

  .changelog-entry {
    gap: 8px;
  }

  .commit-message {
    font-size: 13px;
  }
}
</style>