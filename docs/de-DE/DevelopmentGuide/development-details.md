---
title: Beitragsleitfaden
description: BlockTavern 文档贡献完整指南
order: 1
---

# 贡献指南

欢迎参与 BlockTavern 文档项目！本指南将帮助您快速上手并提交高质量的贡献。

## 环境准备

### 系统要求

- **Node.js** 18+ 
- **Git** 最新版本
- **GitHub** 账号

### 开发工具推荐

- **VS Code** + Markdown 扩展
- **GitHub Desktop**（可选）

::: tip 图片优化
使用本地图片前请压缩文件大小，或使用稳定的图床服务，以提升加载速度。
:::

## 快速开始

### 1. Fork 项目

1. 访问项目仓库：[doc_blocktavern](https://github.com/Re0XIAOPA/doc_blocktavern)
2. 点击右上角 **Fork** 按钮
3. 等待 Fork 完成

### 2. 本地开发

```bash
# 克隆你的 Fork
git clone https://github.com/YOUR_USERNAME/doc_blocktavern.git
cd doc_blocktavern

# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev
```

访问 `http://localhost:5173` 预览文档站点。

### 3. 创建分支

```bash
# 创建功能分支
git checkout -b feature/your-feature-name

# 或修复分支
git checkout -b fix/your-fix-name
```

## 贡献流程

### 1. 编写内容

- 在 `docs/zh-CN/` 目录下编辑或创建文档
- 遵循 [文档编写规范](./writing-docs.md)
- 实时预览：保存后浏览器自动刷新

### 2. 提交更改

```bash
# 添加更改的文件
git add .

# 提交更改（使用规范的提交信息）
git commit -m "docs: 添加新功能说明"

# 推送到你的 Fork
git push origin feature/your-feature-name
```

### 3. 创建 Pull Request

1. 访问你的 Fork 仓库页面
2. 点击 **Compare & pull request** 按钮
3. 填写 PR 信息：
   - **标题**：简洁描述更改内容
   - **描述**：详细说明更改原因和影响
4. 点击 **Create pull request**

### 4. 等待审核

- 项目维护者会审核你的 PR
- 可能会要求修改或补充
- 审核通过后会合并到主分支

## 提交规范

### 提交信息格式

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**类型（type）**：
- `docs`: 文档更新
- `feat`: 新功能
- `fix`: 修复问题
- `style`: 格式调整
- `refactor`: 重构

**示例**：
```bash
git commit -m "docs(guide): 添加安装教程"
git commit -m "fix(config): 修复侧边栏配置错误"
git commit -m "feat(search): 添加搜索功能"
```

### 分支命名规范

- `feature/功能名称`: 新功能开发
- `fix/问题描述`: 问题修复
- `docs/文档类型`: 文档更新
- `refactor/重构内容`: 代码重构

## 贡献类型

### 文档贡献

- **新增文档**：创建新的指南或教程
- **完善内容**：补充现有文档的详细信息
- **修复错误**：纠正文档中的错误信息
- **翻译工作**：将中文文档翻译为其他语言

### 技术贡献

- **配置优化**：改进 VitePress 配置
- **样式美化**：优化文档站点样式
- **功能增强**：添加新的文档功能
- **性能优化**：提升站点加载速度

## 质量标准

### 文档质量

- [ ] 内容准确无误
- [ ] 语言表达清晰
- [ ] 结构层次合理
- [ ] 代码示例可运行
- [ ] 链接有效可访问
- [ ] 图片清晰适当

### 技术质量

- [ ] 代码风格一致
- [ ] 配置语法正确
- [ ] 构建测试通过
- [ ] 兼容性良好

## 获得帮助

遇到问题时可以：

1. **查看现有文档**：[项目结构](./project-structure.md)、[配置说明](./configuration.md)
2. **提交 Issue**：在 GitHub 仓库中创建问题报告
3. **联系维护者**：通过 GitHub 或社区渠道
4. **参考资源**：[VitePress 官方文档](https://vitepress.dev/)

---

感谢您的贡献！每一份贡献都让 BlockTavern 文档变得更好。

<Contributors />

<GitHistoryInformation />