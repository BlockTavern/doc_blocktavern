/**
 * 游玩指南侧边栏
 */
const gameplaySidebar = [
  {
    text: '游玩指南',
    items: [
      { text: '游戏介绍', link: '/components/GameplayGuide/' },
      { text: '基础玩法', link: '/components/GameplayGuide/basic-gameplay' },
      { text: '建筑系统', link: '/components/GameplayGuide/building-system' },
      { text: '冒险探索', link: '/components/GameplayGuide/adventure' },
      { text: '社交互动', link: '/components/GameplayGuide/social' },
      { text: '高级技巧', link: '/components/GameplayGuide/advanced' }
    ]
  }
]

/**
 * 问题解决侧边栏
 */
const troubleshootingSidebar = [
  {
    text: '问题解决',
    items: [
      { text: '连接问题', link: '/troubleshooting/connection-issues' }
    ]
  }
]

/**
 * 常见问题侧边栏
 */
const faqSidebar = [
  {
    text: '常见问题',
    items: [
      { text: '常见问题', link: '/components/FAQ/' },
      { text: '服务器问题', link: '/components/FAQ/server-issues' },
      { text: '游戏问题', link: '/components/FAQ/gameplay-issues' },
      { text: '技术问题', link: '/components/FAQ/technical-issues' }
    ]
  }
]

/**
 * 安装教程侧边栏
 */
const installationSidebar = [
  {
    text: '安装教程',
    items: [
      { text: '安装指南', link: '/components/InstallationTutorial/' },
      { text: '系统要求', link: '/components/InstallationTutorial/requirements' },
      { text: 'Java版安装', link: '/components/InstallationTutorial/java-edition' },
      { text: '基岩版安装', link: '/components/InstallationTutorial/bedrock-edition' },
      { text: '启动器配置', link: '/components/InstallationTutorial/launcher-config' },
      { text: '常见问题', link: '/components/InstallationTutorial/troubleshooting' }
    ]
  }
]

/**
 * 开发指南侧边栏
 */
const developmentSidebar = [
  {
    text: '开发指南',
    items: [
      { text: '快速开始', link: '/components/DevelopmentGuide/' },
      { text: '项目结构', link: '/components/DevelopmentGuide/project-structure' },
      { text: '配置说明', link: '/components/DevelopmentGuide/configuration' },
      { text: '文档编写', link: '/components/DevelopmentGuide/writing-docs' },
      { text: '部署发布', link: '/components/DevelopmentGuide/deployment' },
      { text: '故障排除', link: '/components/DevelopmentGuide/troubleshooting' }
    ]
  }
]

/**
 * 侧边栏配置
 */
export const sidebarConfig = {
  '/gameplay/': gameplaySidebar,
  '/troubleshooting/': troubleshootingSidebar,
  '/faq/': faqSidebar,
  '/installation/': installationSidebar,
  '/components/GameplayGuide/': gameplaySidebar,
  '/components/FAQ/': faqSidebar,
  '/components/InstallationTutorial/': installationSidebar,
  '/components/DevelopmentGuide/': developmentSidebar
}