---
layout: home

hero:
  name: "BlockTavern"
  text: ""
  tagline: 在這裡，每一個方塊都有故事，每一個玩家都是傳奇
  image:
    src: /logo.png
    alt: BlockTavern Logo
  actions:
    - theme: brand
      text: 進入教學
      link: /zh-HK/InstallationTutorial/
    - theme: alt  
      text: 開發指南
      link: /zh-HK/DevelopmentGuide/

features:
  - icon: 📦
    title: 安裝教學
    details: 安裝BlockTavern遊戲，準備開始你的冒險
    link: /zh-HK/InstallationTutorial/

  - icon: 🎮
    title: 遊玩指南
    details: 了解遊戲的基本規則和玩法
    link: /zh-HK/GameplayGuide/
    
  - icon: ❓
    title: 常見問題
    details: 快速解決你的問題
    link: /zh-HK/FAQ/
---

## 關於 BlockTavern

BlockTavern 是一個充滿創意和冒險的 Minecraft 伺服器。在這裡，你可以：

- 🏗️ **建造夢想**：使用無限的創意建造你的理想世界
- 🤝 **社群互動**：與來自世界各地的玩家一起遊玩
- 🎯 **挑戰任務**：參與各種有趣的任務和活動
- 🛡️ **安全環境**：享受公平、友善的遊戲環境

## 貢獻概要

想要為 BlockTavern 文檔做出貢獻嗎？以下是快速開始的步驟：

```bash
# 克隆倉庫
git clone https://github.com/your-username/doc_blocktavern.git

# 切換到項目目錄
cd doc_blocktavern

# 安裝依賴
npm install

# 啟動開發伺服器
npm run docs:dev

# 新增所有更改
git add .

# 提交內容
git commit -m "docs: 更新文檔內容"

# 推送更改
git push origin main
```

::: warning 注意
請確保你的 Node.js 版本 >= 16.0，並且已經 fork 了原倉庫。
:::

### 貢獻流程

1. **Fork 倉庫**：點擊倉庫右上角的 "Fork" 按鈕，建立一個副本到你的 GitHub 帳號。
2. **克隆倉庫**：使用 `git clone` 指令克隆你的 fork 到本地。 
3. **進行更改**：在你的本地倉庫進行你的文檔更改。 
4. **提交更改**：使用 `git commit` 提交你的更改。
5. **推送更改**：使用 `git push` 推送你的更改到你的 fork。
6. **建立 Pull Request**：在原倉庫中，點擊 "Pull Requests" 標籤，然後點擊 "New Pull Request"。
7. **填寫 Pull Request 資訊**：
   - 標題：簡潔描述你的更改
   - 描述：詳細解釋你的更改動機和影響
8. **提交 Pull Request**：點擊 "Create Pull Request" 提交你的更改。
9. **等待審核**：項目維護者會審核你的 Pull Request。