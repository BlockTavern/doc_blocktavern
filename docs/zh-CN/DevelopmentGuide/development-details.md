---
title: 开发细节
description: 开发文档站点开发细节。
---

# 快速开始

欢迎来到 BlockTavern 文档站点开发指南！

## 项目概述

BlockTavern 文档站点基于 VitePress 构建，用于提供 Minecraft 服务器的完整文档。

### 技术栈

- **VitePress**: 静态站点生成器
- **Markdown**: 文档编写格式
- **JavaScript**: 配置文件
- **GitHub Actions**: 自动化部署

## 环境要求

- **Node.js**: 版本 16.0 或更高
- **npm**: 版本 7.0 或更高
- **Git**: 用于版本控制

## 开始开发

### 1. 克隆项目

```bash
git clone https://github.com/Re0XIAOPA/doc_blocktavern.git
cd doc_blocktavern
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run docs:dev
```

访问 `http://localhost:5173` 预览文档站点。

### 4. 构建项目

```bash
npm run docs:build
```
