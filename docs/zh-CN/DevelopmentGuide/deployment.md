---
title: 贡献提交
description: 贡献者提交贡献
order: 6
---

# 贡献提交

感谢您对 BlockTavern 项目的贡献！本页面将指导您如何提交贡献，包括文档、代码或其他类型的贡献。

## 贡献流程

1. **Fork 项目**：点击项目页面右上角的 "Fork" 按钮，创建自己的项目副本。
2. **克隆项目**：将项目克隆到本地。
3. **创建分支**：在本地创建一个新分支，用于提交贡献。
4. **提交贡献**：在新分支上提交你的贡献，包括文档、代码或其他变更。
5. **提交 Pull Request**：将新分支推送到你的 Fork 仓库，然后创建一个 Pull Request 到主项目。
6. **等待审核**：项目维护者会审核你的 Pull Request，可能会要求一些变更或信息。
7. **合并贡献**：一旦审核通过，项目维护者会合并你的贡献到主项目。

## 贡献规范

- 文档贡献：请确保文档内容准确、详细，符合项目的技术规范。
- 代码贡献：请遵循项目的代码风格和规范，编写清晰、易维护的代码。
- 其他贡献：根据项目的需求，提交其他类型的贡献，如翻译、测试等。

## 具体步骤

### 1. Fork 项目

1. 登录 GitHub 账号。
2. 访问项目页面：[https://github.com/Re0XIAOPA/doc_blocktavern](https://github.com/Re0XIAOPA/doc_blocktavern)
3. 点击页面右上角的 "Fork" 按钮，创建自己的项目副本。
4. 等待项目复制完成，你会在自己的 GitHub 账号下看到一个与原项目同名的项目。
5. 点击项目页面右上角的 "Code" 按钮，复制项目的 HTTPS 地址。
6. 使用 `git clone` 命令克隆项目到本地。
```bash
git clone https://github.com/Re0XIAOPA/doc_blocktavern.git
```
7. 进入项目目录。
```bash
cd doc_blocktavern
```
8. 下载项目依赖。
```bash
npm install
```
9. 运行开发服务器。
```bash
npm run docs:dev
```
10. 打开浏览器，访问 `http://localhost:5173` ，你将看到部署的文档界面。
11. 开始编写文档，修改 `docs/zh-CN/` 目录下的文件。
12. 保存文件后，浏览器会自动刷新，你可以实时预览你的修改。
13. 当你完成文档编写后，停止开发服务器。
```bash
Ctrl + C
```
14. 打开项目目录。
```bash
cd doc_blocktavern
```
15. 添加你修改的文件。
```bash
git add . 
```
16. 提交你的贡献。
```bash
git commit -m "docs(content): 添加新页面"
```
17. 推送你的分支到 Fork 仓库。
```bash
git push origin main
```
18. 返回 GitHub仓库页面，点击页面右上角的 "Pull Request" 按钮，点击 "New pull request"。
19. 点击左下角的 "Compare & pull request" 按钮，然后点击 "Create pull request"。
20. 写下你的 Pull Request 描述，点击 "Create pull request" 按钮，将你的贡献提交到主项目。
21. 等待项目维护者审核你的 Pull Request，可能会要求你做一些修改。
22. 审核通过后，项目维护者会将你的贡献合并到主项目。
23. 恭喜你，你已经成功提交了一个贡献！