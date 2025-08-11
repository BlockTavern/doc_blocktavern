---
title: 配置说明（旧）
description: 服务器配置说明目录
order: 3
---

# 配置说明（旧）

本指南将介绍项目的配置文件以及如何自定义站点配置。

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

## 侧边栏配置 (自动生成)

::: warning 配置变更
从 2025年1月 开始，项目已启用自动侧边栏生成功能。手动配置的 `sidebar.js` 文件已弃用但保留作为参考。
:::

项目现在使用 `vitepress-sidebar` 插件自动生成侧边栏，无需手动维护配置：

```javascript
// config.mjs 中的自动侧边栏配置
import { generateSidebar } from 'vitepress-sidebar'

export default {
  themeConfig: {
    sidebar: generateSidebar({
      documentRootPath: 'docs',
      scanStartPath: 'components',
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      hyphenToSpace: true,
      underscoreToSpace: true,
      capitalizeFirst: true,
      collapsed: true,
      collapseDepth: 2,
      sortMenusByName: true,
      includeRootIndexFile: false,
      includeFolderIndexFile: true,
      excludeFiles: ['README.md'],
      rootGroupText: '文档导航',
      rootGroupCollapsed: false
    })
  }
}
```

### 自动侧边栏特性
- **智能扫描**: 自动扫描 `components` 目录下的所有 Markdown 文件
- **标题提取**: 从文件的 H1 标题或 Front Matter 中提取菜单标题
- **层级结构**: 根据文件夹结构自动生成多级侧边栏
- **实时更新**: 添加或删除文件时自动更新侧边栏
- **智能排序**: 按文件名自动排序，保持结构清晰

### 旧配置文件状态
- `sidebar.js` 文件已弃用但未删除，作为历史参考保留
- 如需自定义侧边栏行为，请修改 `config.mjs` 中的 `generateSidebar` 参数

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

::: tip 简化流程
使用自动侧边栏生成后，添加新页面变得非常简单！
:::

1. 在 `docs/components/` 下创建新的目录和 Markdown 文件
2. 在文件中添加合适的标题（H1）或 Front Matter
3. 保存文件，侧边栏会自动更新
4. 如需要，在 `nav.js` 中添加顶部导航链接

**示例**：
```markdown
---
title: 我的新页面
---

# 我的新页面

页面内容...
```

**文件命名建议**：
- 使用小写字母和连字符：`my-new-page.md`
- 文件夹名会自动转换为侧边栏分组标题
- `index.md` 文件会作为该目录的首页

<Contributors />

<GitHistoryInformation />