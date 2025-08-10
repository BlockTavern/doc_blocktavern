---
title: 故障排除
description: 服务器故障排除目录
order: 5
---

# 故障排除
本页面将帮助您解决在开发和使用 BlockTavern 过程中可能遇到的一些常见问题。无论是文档编写、配置错误还是部署问题，我们都将提供详细的解决方案和调试技巧。

## 常见问题

### 开发服务器启动失败

**问题**：运行 `npm run docs:dev` 时出错

**解决方案**：
1. 检查 Node.js 版本是否符合要求
2. 删除 `node_modules` 目录并重新安装依赖
3. 检查端口是否被占用

### 构建失败

**问题**：运行 `npm run docs:build` 时出错

**解决方案**：
1. 检查所有 Markdown 文件的语法
2. 确保所有链接都是有效的
3. 检查配置文件是否有语法错误

### 页面显示异常

**问题**：页面内容显示不正确或样式异常

**解决方案**：
1. 清除浏览器缓存
2. 检查 Markdown 语法
3. 验证 Front Matter 配置
4. 检查图片路径是否正确

### 搜索功能不工作

**问题**：站点搜索功能无法正常工作

**解决方案**：
1. 确保搜索配置正确
2. 重新构建项目
3. 检查是否有 JavaScript 错误

## 调试技巧

### 开发模式调试

1. **使用浏览器开发者工具**：
   - 检查控制台错误
   - 查看网络请求
   - 调试 JavaScript 代码

2. **VitePress 调试模式**：
   ```bash
   DEBUG=vitepress:* npm run docs:dev
   ```

3. **检查构建输出**：
   ```bash
   npm run docs:build -- --debug
   ```

### 生产环境调试

1. **本地预览生产版本**：
   ```bash
   npm run docs:build
   npm run docs:preview
   ```

2. **检查构建文件**：
   查看 `docs/.vitepress/dist/` 目录下的文件

3. **验证链接**：
   使用工具检查所有链接的有效性

   <Contributors />