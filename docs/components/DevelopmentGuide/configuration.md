# 配置说明

## 模块化配置

项目采用模块化配置管理，将不同类型的配置分离到不同文件中。

## 站点配置 (site.js)

```javascript
export const siteConfig = {
  title: 'BlockTavern Docs',
  description: 'BlockTavern Minecraft 服务器 - 方块酒馆聚集地',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }]
  ]
}
```

## 主题配置 (site.js)

```javascript
export const themeBaseConfig = {
  logo: '/logo.png',
  search: {
    provider: 'local'
  },
  lastUpdated: {
    text: '最后更新于',
    formatOptions: {
      dateStyle: 'short',
      timeStyle: 'medium'
    }
  },
  footer: {
    message: 'BlockTavern Docs',
    copyright: 'Copyright © 2025 | 方块酒馆文档站点'
  }
}
```

## 导航配置 (nav.js)

定义顶部导航栏的结构和链接：

```javascript
export const navConfig = [
  { 
    text: '首页', 
    link: '/' 
  },
  { 
    text: '游玩指南', 
    link: '/gameplay/' 
  },
  { 
    text: '常见问题', 
    link: '/faq/' 
  },
  { 
    text: '安装教程', 
    link: '/installation/' 
  },
  { 
    text: '开发指南', 
    link: '/components/DevelopmentGuide/' 
  }
]
```

### 导航项配置说明
- `text`: 显示的文本
- `link`: 链接地址，以 `/` 开头的相对路径

## 侧边栏配置 (sidebar.js)

定义不同路径下的侧边栏结构，支持多级嵌套：

```javascript
// 开发指南侧边栏示例
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

// 侧边栏配置映射
export const sidebarConfig = {
  '/gameplay/': gameplaySidebar,
  '/troubleshooting/': troubleshootingSidebar,
  '/faq/': faqSidebar,
  '/installation/': installationSidebar,
  '/components/DevelopmentGuide/': developmentSidebar
}
```

### 侧边栏配置说明
- 每个路径对应一个侧边栏配置
- `text`: 分组标题
- `items`: 子项列表
- `link`: 页面链接地址

## 社交链接配置 (social.js)

定义页面右上角的社交媒体链接：

```javascript
export const socialLinksConfig = [
  { 
    icon: 'github', 
    link: 'https://github.com/Re0XIAOPA/doc_blocktavern' 
  }
  // 可以根据需要添加更多社交链接
  // { icon: 'discord', link: 'https://discord.gg/your-server' },
  // { icon: 'twitter', link: 'https://twitter.com/your-account' },
  // { icon: 'youtube', link: 'https://youtube.com/your-channel' }
]
```

### 支持的图标类型
- `github`
- `discord`
- `twitter`
- `youtube`
- `facebook`
- `instagram`
- `linkedin`

## 配置文件位置

所有配置文件位于 `docs/.vitepress/components/` 目录下：

- `site.js` - 站点和主题配置
- `nav.js` - 导航配置
- `sidebar.js` - 侧边栏配置
- `social.js` - 社交链接配置

## 修改配置

1. 编辑对应的配置文件
2. 保存文件
3. 开发服务器会自动重新加载配置
4. 刷新浏览器查看效果

### 添加新页面的步骤

1. 在 `docs/components/` 下创建新的目录和文件
2. 在 `sidebar.js` 中添加对应的侧边栏配置
3. 在 `nav.js` 中添加导航链接（如需要）
4. 重启开发服务器查看效果