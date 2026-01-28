/**
 * 站点基础配置
 * 该配置会影响整个站点的基础信息，如标题、描述、语言等
 * 注意：如果添加了新的页面，需要在侧边栏配置中添加对应的链接
 * 现在配置你可以前往Zh-CN、En-US版本的主导航（如果需要），
 * 
 * !!!! 该配置可以忽略 请前往语言配置进行详细配置
 * 
 */
export const siteConfig = {
  title: 'BlockTavern Docs',
  description: 'BlockTavern Minecraft 服务器 - 方块酒馆聚集地',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }]
  ]
}

/**
 * 主题基础配置
 */
export const themeBaseConfig = {
  logo: '/logo.png',
  
  // 搜索配置
  search: {
    provider: 'local'
  },

  // 上次更新时间
  lastUpdated: {
    text: '最后更新于',
    formatOptions: {
      dateStyle: 'short',
      timeStyle: 'medium'
    }
  },

  // 页脚配置
  footer: {
    message: 'BlockTavern Docs',
    copyright: `Copyright © 2025${new Date().getFullYear() > 2025 ? ' - ' + new Date().getFullYear() : ''} | 方块酒馆文档站点`
  },

  // 中文本地化配置
  outline: {
    label: '页面导航'
  },

  docFooter: {
    prev: '上一页',
    next: '下一页'
  },

  darkModeSwitchLabel: '主题',
  lightModeSwitchTitle: '切换到浅色模式',
  darkModeSwitchTitle: '切换到深色模式',
  sidebarMenuLabel: '菜单',
  returnToTopLabel: '返回顶部'
}