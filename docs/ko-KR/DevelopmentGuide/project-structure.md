---
title: 프로젝트 구조
description: 服务器项目结构目录
order: 2
---


# 项目结构

BlockTavern 文档项目采用 VitePress 构建，支持多语言国际化。

## 目录结构

```
doc_blocktavern/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 自动部署
├── docs/
│   ├── .vitepress/
│   │   ├── components/         # 模块化配置目录
│   │   │   ├── index.js        # 配置统一导出
│   │   │   ├── site.js         # 站点基础配置
│   │   │   ├── language.js     # 多语言主配置
│   │   │   ├── language/       # 各语言配置文件
│   │   │   │   ├── zh-CN.js    # 中文配置
│   │   │   │   ├── en-US.js    # 英文配置
│   │   │   │   └── ...         # 其他语言
│   │   │   ├── nav.js          # 导航配置
│   │   │   ├── sidebar.js      # 侧边栏配置
│   │   │   ├── social.js       # 社交链接
│   │   │   ├── editLink.js     # 编辑链接
│   │   │   └── mdItCustomAttrs.js # Markdown 扩展
│   │   ├── config.mjs          # VitePress 主配置
│   │   ├── theme/              # 主题定制
│   │   ├── plugins/            # 插件目录
│   │   └── cache/              # 构建缓存
│   ├── zh-CN/                  # 中文文档
│   │   ├── DevelopmentGuide/   # 开发指南
│   │   ├── FAQ/                # 常见问题
│   │   ├── GameplayGuide/      # 游戏指南
│   │   ├── InstallationTutorial/ # 安装教程
│   │   └── index.md            # 中文首页
│   ├── en/                     # 英文文档
│   ├── fr/                     # 法文文档
│   ├── de/                     # 德文文档
│   ├── es/                     # 西班牙文文档
│   ├── ja/                     # 日文文档
│   ├── ko/                     # 韩文文档
│   ├── ru/                     # 俄文文档
│   ├── zh-TW/                  # 繁体中文文档
│   ├── public/                 # 静态资源
│   │   └── logo.png            # 站点图标
│   └── obsolete/               # 废弃文件
├── package.json                # 项目依赖
├── package-lock.json           # 依赖锁定
└── README.md                   # 项目说明
```

## 核心目录说明

### `.vitepress/` 配置目录

**主要文件**：
- `config.mjs`: VitePress 主配置入口
- `components/`: 模块化配置管理
- `theme/`: 自定义主题样式
- `plugins/`: 功能插件扩展
- `cache/`: 构建缓存文件

**配置组件** (`components/`)：
- `site.js`: 站点基础信息
- `language.js`: 多语言主配置
- `language/`: 各语言具体配置
- `sidebar.js`: 自动侧边栏生成
- `nav.js`: 顶部导航菜单
- `social.js`: 社交媒体链接
- `editLink.js`: 编辑页面链接

### 多语言文档结构

**支持语言**：
- `zh-CN/`: 简体中文（主要语言）
- `en/`: 英文
- `zh-TW/`: 繁体中文
- `fr/`, `de/`, `es/`, `ja/`, `ko/`, `ru/`: 其他语言

**文档模块**：
- `DevelopmentGuide/`: 开发指南
- `FAQ/`: 常见问题
- `GameplayGuide/`: 游戏指南
- `InstallationTutorial/`: 安装教程

### 资源目录

- `public/`: 全局静态资源（图标、图片等）
- `zh-CN/public/`: 中文专用资源
- `obsolete/`: 已废弃的文档文件

## 文件命名规范

::: tip 命名约定
- 文件名使用小写字母和连字符：`installation-guide.md`
- 目录名采用 PascalCase：`DevelopmentGuide/`
- 每个目录必须包含 `index.md` 作为首页
- 图片资源放在对应的子目录中
:::

## 自动化功能

- **侧边栏自动生成**：基于文件结构和 Front Matter
- **多语言路由**：自动处理语言切换
- **GitHub Actions 部署**：代码推送自动构建发布
- **本地搜索**：内置全文搜索功能

<Contributors />

<GitHistoryInformation />