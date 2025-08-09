---
layout: home

hero:
  name: "BlockTavern"
  text: ""
  tagline: 在这里，每一个方块都有故事，每一个玩家都是传奇
  image:
    src: /logo.png
    alt: BlockTavern Logo
  actions:
    - theme: brand
      text: 进入教程
      link: /components/GameplayGuide/
    - theme: alt  
      text: 开发指南(贡献文档)
      link: /components/DevelopmentGuide/

features:
  - icon: 📦
    title: 安装教程
    details: 安装BlockTavern游戏，准备开始你的冒险
    link: /components/InstallationTutorial/
  - icon: 🎮
    title: 游玩指南
    details: 了解游戏的基本规则和玩法
    link: /components/GameplayGuide/
  - icon: ❓
    title: 常见问题
    details: 快速解决你的问题
    link: /components/FAQ/
---

### 贡献概要

```sh
# 克隆仓库
git clone https://github.com/your-username/doc_blocktavern.git

# 切换到项目目录
cd doc_blocktavern

# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 添加所有更改
git add .

# 提交内容
git commit -m "docs: 更新文档内容"

# 推送更改
git push origin main
```

::: warning 注意
请确保你的 Node.js 版本 >= 16.0，并且已经 fork 了原仓库。
:::

### 贡献流程

1. **Fork 仓库**：点击仓库右上角的 "Fork" 按钮，创建一个副本到你的 GitHub 账号。
2. **克隆仓库**：使用 `git clone` 命令克隆你的 fork 到本地。
3. **创建新分支**：使用 `git checkout -b` 创建一个新的分支，例如 `feature/your-feature`。
4. **进行更改**：在新分支上进行你的文档更改。 
:::