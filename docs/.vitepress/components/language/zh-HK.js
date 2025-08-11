/**
 * 香港繁體中文語言配置
 * Hong Kong Traditional Chinese Language Configuration
 */

export const zhHKConfig = {
  label: "繁體中文",
  lang: "zh-HK",
  link: "/zh-HK/",
  title: "BlockTavern 文檔",
  description: "BlockTavern Minecraft 伺服器文檔",
  themeConfig: {
    nav: [
      { text: "首頁", link: "/zh-HK/" },
      { text: "安裝教學", link: "/zh-HK/InstallationTutorial/" },
      { text: "遊戲指南", link: "/zh-HK/GameplayGuide/" },
      { text: "常見問題", link: "/zh-HK/FAQ/" },
      { text: "開發指南", link: "/zh-HK/DevelopmentGuide/" },
    ],
    // Edit link configuration
    editLink: {
      pattern: 'https://github.com/BlockTavern/doc_blocktavern/edit/main/docs/:path',
      text: '在 GitHub 上編輯此頁面'
    },
    // Footer configuration
    footer: {
      message: '基於 MIT 許可證發布',
      copyright: 'Copyright © 2024 BlockTavern'
    },
    // Sidebar configuration
    sidebar: {
      '/zh-HK/InstallationTutorial/': [
        {
          text: '安裝教學',
          items: [
            { text: '概述', link: '/zh-HK/InstallationTutorial/' },
            { text: 'HMCL 安裝', link: '/zh-HK/InstallationTutorial/hmcl-installation' },
            { text: 'PCL2 安裝', link: '/zh-HK/InstallationTutorial/pcl2-installation' },
            { text: '詳細說明', link: '/zh-HK/InstallationTutorial/installation-details' }
          ]
        }
      ],
      '/zh-HK/GameplayGuide/': [
        {
          text: '遊戲指南',
          items: [
            { text: '概述', link: '/zh-HK/GameplayGuide/' },
            { text: '伺服器規則', link: '/zh-HK/GameplayGuide/server-rules' },
            { text: '指令列表', link: '/zh-HK/GameplayGuide/command-list' },
            { text: '圈地順序', link: '/zh-HK/GameplayGuide/enclosure-order' },
            { text: '虛擬指令', link: '/zh-HK/GameplayGuide/dummy-command' }
          ]
        }
      ],
      '/zh-HK/FAQ/': [
        {
          text: '常見問題',
          items: [
            { text: '概述', link: '/zh-HK/FAQ/' },
            { text: '詳細說明', link: '/zh-HK/FAQ/faq-details' }
          ]
        }
      ],
      '/zh-HK/DevelopmentGuide/': [
        {
          text: '開發指南',
          items: [
            { text: '概述', link: '/zh-HK/DevelopmentGuide/' },
            { text: '項目結構', link: '/zh-HK/DevelopmentGuide/project-structure' },
            { text: '配置說明', link: '/zh-HK/DevelopmentGuide/configuration' },
            { text: '開發詳情', link: '/zh-HK/DevelopmentGuide/development-details' },
            { text: '文檔編寫', link: '/zh-HK/DevelopmentGuide/writing-docs' },
            { text: '故障排除', link: '/zh-HK/DevelopmentGuide/troubleshooting' }
          ]
        }
      ]
    },
    // Search configuration
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜尋文檔',
            buttonAriaLabel: '搜尋文檔'
          },
          modal: {
            noResultsText: '無法找到相關結果',
            resetButtonTitle: '清除查詢條件',
            footer: {
              selectText: '選擇',
              navigateText: '切換'
            }
          }
        }
      }
    },
    // Document footer navigation
    docFooter: {
      prev: '上一頁',
      next: '下一頁'
    },
    // Outline configuration
    outline: {
      label: '頁面導航'
    },
    // Last updated text
    lastUpdated: {
      text: '最後更新於',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    // Return to top
    returnToTopLabel: '回到頂部',
    // External link icon
    externalLinkIcon: true,
    // Dark mode switch
    darkModeSwitchLabel: '主題',
    lightModeSwitchTitle: '切換到淺色模式',
    darkModeSwitchTitle: '切換到深色模式'
  }
}