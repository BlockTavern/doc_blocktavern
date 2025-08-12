/**
 * 香港繁體中文語言配置
 * Hong Kong Traditional Chinese Language Configuration
 */

export const zhHKConfig = {
  label: "繁體中文(HK)",
  lang: "zh-HK",
  link: "/zh-HK/",
  title: "BlockTavern 文檔",
  description: "BlockTavern Minecraft 伺服器文檔",
  themeConfig: {
    nav: [
      { text: "首頁", link: "/zh-HK/" },
      {
        text: "安裝教學",
        link: "/zh-HK/InstallationTutorial/installation-details",
      },
      { text: "遊戲指南", link: "/zh-HK/GameplayGuide/command-list" },
      { text: "常見問題", link: "/zh-HK/FAQ/faq-details" },
      { text: "開發指南", link: "/zh-HK/DevelopmentGuide/development-details" },
    ],
    // Edit link configuration
    editLink: {
      pattern: 'https://github.com/BlockTavern/doc_blocktavern/edit/main/docs/:path',
      text: '在 GitHub 上編輯此頁面'
    },
    // 侧边栏配置由 vitepress-sidebar 插件自动生成
    // sidebar 配置已在主配置文件中统一处理
    // 其他主题配置
    
    // Outline configuration
    outline: {
      label: '本頁內容'
    },
    // Document footer navigation
    docFooter: {
      prev: '上一頁',
      next: '下一頁'
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