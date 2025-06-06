/**
 * 游玩指南侧边栏
 */
const gameplaySidebar = [
  {
    text: '游玩指南',
    items: [
      { text: '服务器介绍', link: '/gameplay/introduction' },
      { text: '如何加入服务器', link: '/gameplay/join-server' },
      { text: '基础玩法', link: '/gameplay/basic-gameplay' },
      { text: '高级功能', link: '/gameplay/advanced-features' },
      { text: '服务器规则', link: '/gameplay/server-rules' }
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
      { text: '连接问题', link: '/troubleshooting/connection-issues' },
      { text: '游戏崩溃', link: '/troubleshooting/game-crashes' },
      { text: '延迟问题', link: '/troubleshooting/lag-issues' },
      { text: '权限问题', link: '/troubleshooting/permission-issues' }
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
      { text: '账户相关', link: '/faq/account' },
      { text: '游戏相关', link: '/faq/gameplay' },
      { text: '技术相关', link: '/faq/technical' }
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
      { text: 'Java版安装', link: '/installation/java-edition' },
      { text: '模组安装', link: '/installation/mods' },
      { text: '客户端配置', link: '/installation/client-config' },
      { text: '常用工具', link: '/installation/useful-tools' }
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