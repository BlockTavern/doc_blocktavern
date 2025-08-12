---
title: Конфигурация
description: VitePress 配置文件说明
order: 3
---

# 配置说明

本指南将详细介绍项目的 VitePress 配置文件结构以及如何进行自定义配置。

## 1. 配置文件概述

项目采用模块化配置管理，将不同类型的配置分离到 `docs/.vitepress/components/` 目录下的不同文件中，便于维护和扩展。主要配置文件包括：

-   `docs/.vitepress/config.mjs`: VitePress 主配置文件
-   `docs/.vitepress/components/index.js`: 配置组件统一导出文件
-   `docs/.vitepress/components/site.js`: 站点基础配置
-   `docs/.vitepress/components/nav.js`: 主导航配置（已弃用，请使用语言配置）
-   `docs/.vitepress/components/sidebar.js`: 侧边栏配置（使用 vitepress-sidebar 插件自动生成）
-   `docs/.vitepress/components/language.js`: 多语言配置主文件
-   `docs/.vitepress/components/language/`: 各语言具体配置文件夹
-   `docs/.vitepress/components/social.js`: 社交链接配置
-   `docs/.vitepress/components/editLink.js`: 编辑链接配置

## 2. 站点配置 (`docs/.vitepress/components/site.js`)

站点配置文件定义了网站的基本信息和主题基础设置。该文件包含两个主要配置对象：

### 2.1 站点基础配置 (siteConfig)

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

**注意**: 该配置可以忽略，请前往语言配置进行详细配置。

### 2.2 主题基础配置 (themeBaseConfig)

```javascript
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
  },

  // 中文本地化配置
  outline: {
    label: '页面导航'
  }
}
```

**如何修改：**

直接编辑 `docs/.vitepress/components/site.js` 文件中的对应字段即可。修改后通常需要重新启动开发服务器或重新构建项目。

## 3. 多语言配置

项目支持多语言配置，主要通过以下文件进行管理：

### 3.1 多语言主配置 (`docs/.vitepress/components/language.js`)

```javascript
// 导入各个语言的配置
import { zhConfig } from './language/zh-CN.js'
import { enConfig } from './language/en-US.js'
// ... 其他语言配置

// 多语言配置对象
export const localesConfig = {
  root: zhConfig,        // 默认语言（简体中文）
  // en: enConfig,       // 启用英文版本
  // 其他语言配置（暂时注释，需要时可启用）
}
```

### 3.2 中文配置 (`docs/.vitepress/components/language/zh-CN.js`)

```javascript
export const zhConfig = {
  label: "简体中文",
  lang: "zh-CN",
  link: "/zh-CN/",
  title: "BlockTavern 文档",
  description: "BlockTavern Minecraft 服务器文档",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "安装教程", link: "/zh-CN/InstallationTutorial/installation-details" },
      { text: "游戏指南", link: "/zh-CN/GameplayGuide/command-list" },
      { text: "常见问题", link: "/zh-CN/FAQ/faq-details" },
      { text: "开发指南", link: "/zh-CN/DevelopmentGuide/development-details" }
    ],
    editLink: {
      pattern: "https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path",
      text: "前往 GitHub 编辑此页面"
    },
    outline: { label: "页面导航" },
    lastUpdated: { text: "最后更新于" },
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题"
  }
}
```

**如何修改：**

1. 修改导航配置：编辑 `nav` 数组中的链接和文本
2. 添加新语言：在 `language` 文件夹中创建新的语言配置文件
3. 启用多语言：在 `language.js` 中取消注释相应的语言配置

## 4. 侧边栏配置 (`docs/.vitepress/components/sidebar.js`)

项目使用 `vitepress-sidebar` 插件自动生成侧边栏，无需手动维护侧边栏结构。

```javascript
import { generateSidebar } from "vitepress-sidebar";

export function generateSidebarConfig() {
  return generateSidebar([
    {
      documentRootPath: "docs",
      scanStartPath: "/",
      basePath: "/",
      resolvePath: "/",
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      useFolderTitleFromIndexFile: true,
      useFolderLinkFromIndexFile: false,
      hyphenToSpace: true,
      underscoreToSpace: true,
      capitalizeFirst: true,
      collapsed: true,
      collapseDepth: 2,
      sortMenusByName: false,
      // 更多配置选项...
    }
  ]);
}
```

### 配置说明

- `documentRootPath`: 文档根目录
- `useTitleFromFileHeading`: 从文件标题获取侧边栏标题
- `useTitleFromFrontmatter`: 从 frontmatter 获取标题
- `collapsed`: 默认折叠状态
- `collapseDepth`: 折叠深度

**优势**: 自动根据文件结构生成侧边栏，无需手动维护，支持多语言。

**如何修改：**

根据需要调整 `generateSidebar` 函数的配置参数，详细配置选项请参考 `vitepress-sidebar` 插件文档。

## 5. 社交链接配置 (`docs/.vitepress/components/social.js`)

社交链接配置文件定义了页面上显示的社交媒体链接。

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

- `github`: GitHub
- `discord`: Discord
- `twitter`: Twitter/X
- `youtube`: YouTube
- `linkedin`: LinkedIn
- `facebook`: Facebook

## 6. 编辑链接配置 (`docs/.vitepress/components/editLink.js`)

编辑链接配置允许用户直接跳转到 GitHub 编辑页面。

```javascript
export const editLink = {
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path',
      text: '前往 GitHub 编辑此页面',
    }
  },
  frontmatter: {
    lastUpdated: true,
    contributors: true,
    editLink: {
      pattern: 'https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path',
      text: '前往 GitHub 编辑此页面',
    }
  }
};
```

### 配置说明

- `pattern`: GitHub 编辑链接模板，`:path` 会被替换为当前页面路径
- `text`: 编辑链接显示的文本
- `lastUpdated`: 显示最后更新时间
- `contributors`: 显示贡献者信息

## 7. 主配置文件 (`docs/.vitepress/config.mjs`)

主配置文件是 VitePress 的入口配置，它整合了所有模块化配置。

```javascript
import { defineConfig } from 'vitepress'
import { 
  siteConfig, 
  themeBaseConfig, 
  navConfig, 
  socialLinksConfig, 
  localesConfig, 
  generateSidebarConfig, 
  editLink, 
  mdItCustomAttrs 
} from './components/index.js'

export default defineConfig({
  ...siteConfig,
  locales: localesConfig,
  markdown: {
    config: mdItCustomAttrs
  },
  themeConfig: {
    ...themeBaseConfig,
    nav: navConfig,
    sidebar: generateSidebarConfig(),
    socialLinks: socialLinksConfig,
    ...editLink.themeConfig
  }
})
```

## 8. 环境变量

项目使用环境变量来管理不同环境下的配置。主要环境变量包括：

```bash
# 开发环境
NODE_ENV=development

# 生产环境
NODE_ENV=production

# 基础路径（如果部署在子目录）
BASE_URL=/docs/
```

**在配置中使用环境变量：**

```javascript
export const siteConfig = {
  base: process.env.BASE_URL || '/',
  // 其他配置...
}
```

## 9. 常见问题与故障排除

### 9.1 配置相关问题

- **配置不生效**: 确保修改了正确的配置文件，并重启开发服务器
- **侧边栏不显示**: 检查文件结构是否符合 `vitepress-sidebar` 插件要求
- **多语言切换问题**: 验证 `language.js` 中的路径配置是否正确

### 9.2 构建相关问题

- **构建失败**: 检查所有配置文件的 ES6 模块语法是否正确
- **路径错误**: 确保所有文件路径使用正确的相对路径或绝对路径

### 9.3 开发建议

1. **模块化配置**: 保持配置文件的模块化结构，便于维护
2. **文档结构**: 遵循既定的文档目录结构，确保侧边栏自动生成正常工作
3. **多语言支持**: 新增语言时，确保在 `language.js` 中正确配置

---

通过以上配置说明，你应该能够根据项目需求对各个配置文件进行相应的修改和定制。如果遇到具体问题，建议查阅 [VitePress 官方文档](https://vitepress.dev/) 或 [vitepress-sidebar 插件文档](https://vitepress-sidebar.cdget.com/)。

<Contributors />

<GitHistoryInformation />