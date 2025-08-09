---
title: 项目结构
description: 服务器项目结构目录
---


# 项目结构

## 目录结构

```
doc_blocktavern/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 部署配置
├── docs/
│   ├── .vitepress/
│   │   ├── components/         # 配置组件目录
│   │   │   ├── index.js        # 组件统一导出
│   │   │   ├── site.js         # 站点基础配置
│   │   │   ├── nav.js          # 导航配置
│   │   │   ├── sidebar.js      # 侧边栏配置
│   │   │   └── social.js       # 社交链接配置
│   │   ├── config.js           # VitePress 主配置文件
│   │   └── theme/              # 主题定制目录
│   ├── components/             # 文档组件目录
│   │   ├── DevelopmentGuide/   # 开发指南
│   │   ├── FAQ/                # 常见问题
│   │   ├── GameplayGuide/      # 游玩指南
│   │   └── InstallationTutorial/ # 安装教程
│   ├── public/                 # 静态资源目录
│   │   └── logo.png            # 站点 Logo
│   └── index.md                # 首页内容
├── package.json                # 项目依赖配置
└── README.md                   # 项目说明
```

## 重要目录说明

### `.vitepress/` 目录

VitePress 的配置目录：

- **config.js**: 主配置文件
- **components/**: 配置组件，分模块管理
- **theme/**: 主题定制

### `components/` 目录

文档内容按功能模块划分：

- **DevelopmentGuide/**: 开发相关文档
- **FAQ/**: 常见问题解答
- **GameplayGuide/**: 游戏玩法指南
- **InstallationTutorial/**: 安装教程

### `public/` 目录

静态资源文件，如图片、图标等。