/**
 * 站点基础配置
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
    copyright: 'Copyright © 2025 | 方块酒馆文档站点'
  }
} 