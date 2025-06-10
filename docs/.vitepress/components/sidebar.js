/**
 * 游玩指南侧边栏
 */
const gameplaySidebar = [
  {
    text: '游玩指南',
    items: [
      { text: '服务器介绍', link: '/gameplay/introduction' }
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
      { text: '账户相关', link: '/faq/account' }
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
      { text: 'Java版安装', link: '/installation/java-edition' }
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
  '/installation/': installationSidebar
} 