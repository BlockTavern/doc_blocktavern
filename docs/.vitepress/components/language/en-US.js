/**
 * 英文语言配置
 * English Language Configuration
 */

export const enConfig = {
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
      // 英文侧边栏配置
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

export default enConfig