---
title: 故障排除
description: 服务器故障排除目录
order: 5
---

# 故障排除

快速解决 BlockTavern 文档开发中的常见问题。

## 开发问题

### 服务器启动失败

```bash
npm run docs:dev
```

**解决方案**：
- 检查 Node.js 版本（推荐 18+）
- 重新安装依赖：`rm -rf node_modules && npm install`
- 检查端口占用：`netstat -ano | findstr :5173`

### 构建失败

```bash
npm run docs:build
```

**解决方案**：
- 检查 Markdown 语法错误
- 验证所有内部链接有效性
- 检查配置文件语法

### 页面异常

**常见症状**：内容显示错误、样式异常

**解决方案**：
- 清除浏览器缓存（Ctrl+F5）
- 检查 Front Matter 格式
- 验证图片路径正确性

### 搜索失效

**解决方案**：
- 重新构建项目
- 检查浏览器控制台错误
- 验证搜索配置

## 调试技巧

### 开发调试

**浏览器开发者工具**（F12）：
- 控制台查看错误信息
- 网络面板检查资源加载
- 元素面板调试样式

**VitePress 调试模式**：
```bash
# Windows
set DEBUG=vitepress:* && npm run docs:dev

# Linux/Mac
DEBUG=vitepress:* npm run docs:dev
```

**构建调试**：
```bash
npm run docs:build -- --debug
```

### 生产调试

**本地预览**：
```bash
npm run docs:build
npm run docs:preview
```

**文件检查**：
- 构建输出：`docs/.vitepress/dist/`
- 静态资源：`docs/.vitepress/dist/assets/`
- 页面文件：检查 HTML 结构

### 常用工具

- **链接检查**：使用 `markdown-link-check` 验证链接
- **语法检查**：使用 `markdownlint` 检查格式
- **性能分析**：浏览器 Lighthouse 工具

## 配置问题

### 侧边栏不显示

**原因**：文件结构不符合自动生成规则

**解决方案**：
- 确保目录包含 `index.md` 文件
- 检查文件命名规范（小写+连字符）
- 验证 Front Matter 格式正确

### 多语言切换异常

**解决方案**：
- 检查 `language.js` 配置
- 确保各语言目录结构一致
- 验证路径映射正确

### 图片无法显示

**解决方案**：
- 使用相对路径：`./images/pic.png`
- 检查文件是否存在于 `public/` 目录
- 验证文件名大小写匹配

## 部署问题

### GitHub Pages 部署失败

**解决方案**：
- 检查 GitHub Actions 工作流配置
- 确保 `base` 路径设置正确
- 验证仓库权限和分支设置

### 静态资源 404

**解决方案**：
- 检查 `base` 配置是否匹配部署路径
- 确保资源文件在 `public/` 目录
- 验证构建输出完整性

## 快速诊断

::: tip 问题排查步骤
1. **查看错误信息**：控制台/终端输出
2. **检查文件结构**：确保符合规范
3. **验证配置**：语法和路径正确性
4. **清理重建**：删除缓存重新构建
5. **对比工作版本**：Git 差异比较
:::

<Contributors />

<GitHistoryInformation />