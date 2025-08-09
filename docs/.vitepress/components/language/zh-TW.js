/**
 * 繁體中文語言配置
 * Traditional Chinese Language Configuration
 */

export const zhTWConfig = {
  label: '繁體中文',
  lang: 'zh-TW',
  link: '/zh-TW/',
  title: 'BlockTavern 文檔',
  description: 'BlockTavern Minecraft 伺服器文檔',
  themeConfig: {
    nav: [
      { text: '首頁', link: '/zh-TW/' },
      { text: '安裝教程', link: '/zh-TW/InstallationTutorial/' },
      { text: '遊戲指南', link: '/zh-TW/GameplayGuide/' },
      { text: '常見問題', link: '/zh-TW/FAQ/' },
      { text: '開發指南', link: '/zh-TW/DevelopmentGuide/' }
    ],
    sidebar: {
      // 繁體中文側邊欄配置
      '/zh-TW/InstallationTutorial/': [
        {
          text: '安裝教程',
          items: [
            { text: '概覽', link: '/zh-TW/InstallationTutorial/' }
          ]
        }
      ],
      '/zh-TW/GameplayGuide/': [
        {
          text: '遊戲指南',
          items: [
            { text: '概覽', link: '/zh-TW/GameplayGuide/' }
          ]
        }
      ],
      '/zh-TW/FAQ/': [
        {
          text: '常見問題',
          items: [
            { text: '概覽', link: '/zh-TW/FAQ/' }
          ]
        }
      ],
      '/zh-TW/DevelopmentGuide/': [
        {
          text: '開發指南',
          items: [
            { text: '概覽', link: '/zh-TW/DevelopmentGuide/' }
          ]
        }
      ]
    },
    outline: {
      label: '本頁內容'
    },
    docFooter: {
      prev: '上一頁',
      next: '下一頁'
    },
    darkModeSwitchLabel: '主題',
    lightModeSwitchTitle: '切換到淺色主題',
    darkModeSwitchTitle: '切換到深色主題',
    sidebarMenuLabel: '選單',
    returnToTopLabel: '返回頂部',
    lastUpdated: {
      text: '最後更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  }
}

export default zhTWConfig