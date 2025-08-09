/**
 * 多语言配置
 * VitePress 多语言支持配置
 */

// 中文配置（根语言）
const zhConfig = {
  label: '简体中文',
  lang: 'zh-CN'
}

// 英文配置
const enConfig = {
  label: 'English',
  lang: 'en-US',
  link: '/en/',
  title: 'BlockTavern Docs',
  description: 'BlockTavern Minecraft Server Documentation',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Installation', link: '/en/InstallationTutorial/' },
      { text: 'Gameplay Guide', link: '/en/GameplayGuide/' },
      { text: 'FAQ', link: '/en/FAQ/' },
      { text: 'Development', link: '/en/DevelopmentGuide/' }
    ],
    sidebar: {
      // 英文侧边栏配置将在这里添加
      '/en/InstallationTutorial/': [
        {
          text: 'Installation Tutorial',
          items: [
            { text: 'Overview', link: '/en/InstallationTutorial/' }
          ]
        }
      ],
      '/en/GameplayGuide/': [
        {
          text: 'Gameplay Guide',
          items: [
            { text: 'Overview', link: '/en/GameplayGuide/' }
          ]
        }
      ],
      '/en/FAQ/': [
        {
          text: 'FAQ',
          items: [
            { text: 'Overview', link: '/en/FAQ/' }
          ]
        }
      ],
      '/en/DevelopmentGuide/': [
        {
          text: 'Development Guide',
          items: [
            { text: 'Overview', link: '/en/DevelopmentGuide/' }
          ]
        }
      ]
    },
    outline: {
      label: 'On this page'
    },
    docFooter: {
      prev: 'Previous',
      next: 'Next'
    },
    darkModeSwitchLabel: 'Theme',
    lightModeSwitchTitle: 'Switch to light theme',
    darkModeSwitchTitle: 'Switch to dark theme',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Return to top',
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  }
}

// 多语言配置对象
export const localesConfig = {
  root: zhConfig,
  en: enConfig  // 启用英文版本
}

// 导出单独的配置以便按需使用
export { zhConfig, enConfig }