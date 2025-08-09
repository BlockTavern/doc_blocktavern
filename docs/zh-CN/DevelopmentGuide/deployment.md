---
title: 部署发布
description: 服务器部署发布目录
---

# 部署发布

## 自动化部署

项目使用 GitHub Actions 进行自动化部署。

### 部署流程

1. **触发条件**：推送到 `main` 分支
2. **构建环境**：Ubuntu 最新版本
3. **Node.js 版本**：18.x
4. **部署目标**：GitHub Pages

### 部署配置

部署配置位于 `.github/workflows/deploy.yml`：

1. 检出代码
2. 设置 Node.js 环境
3. 安装依赖
4. 构建项目
5. 部署到 GitHub Pages

## 手动部署

### 1. 构建项目

```bash
npm run docs:build
```

### 2. 上传构建文件

将 `docs/.vitepress/dist/` 目录下的文件上传到服务器。

## 域名配置

使用自定义域名：

1. 在 `docs/public/` 目录下创建 `CNAME` 文件
2. 在文件中写入你的域名
3. 在域名提供商处配置 DNS 记录

## 预览构建

本地预览生产版本：

```bash
npm run docs:build
npm run docs:preview
```