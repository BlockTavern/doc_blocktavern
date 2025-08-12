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
      link: /zh-TW/InstallationTutorial/installation-details
    - theme: alt  
      text: 開發指南(貢獻文件)
      link: /zh-TW/DevelopmentGuide/development-details

features:
  - icon: 📦
    title: 安裝教學
    details: 安裝BlockTavern遊戲，準備開始你的冒險
    link: /zh-TW/InstallationTutorial/installation-details

  - icon: 🎮
    title: 遊戲指南
    details: 了解遊戲的基本規則和玩法
    link: /zh-TW/GameplayGuide/server-rules
    
  - icon: ❓
    title: 常見問題
    details: 快速解決你的問題
    link: /zh-TW/FAQ/faq-details
---

### 貢獻概要

```sh
# 複製儲存庫
git clone https://github.com/your-username/doc_blocktavern.git

# 切換到專案目錄
cd doc_blocktavern

# 安裝相依性
npm install

# 啟動開發伺服器
npm run docs:dev

# 新增所有變更
git add .

# 提交內容
git commit -m "docs: 更新文件內容"

# 推送變更
git push origin main
```

::: warning 注意
請確保你的 Node.js 版本 >= 16.0，並且已經 fork 了原始儲存庫。
:::

### 貢獻流程

1. **Fork 儲存庫**：點選儲存庫右上角的 "Fork" 按鈕，建立一個副本到你的 GitHub 帳號。
2. **複製儲存庫**：使用 `git clone` 指令複製你的 fork 到本機。
3. **進行變更**：在你的本機儲存庫進行你的文件變更。
4. **提交變更**：使用 `git commit` 提交你的變更。
5. **推送變更**：使用 `git push` 推送你的變更到你的 fork。
6. **建立 Pull Request**：在原始儲存庫中，點選 "Pull Requests" 標籤，然後點選 "New Pull Request"。
7. **填寫 Pull Request 資訊**：
   - 標題：簡潔描述你的變更
   - 描述：詳細說明你的變更動機和影響
8. **提交 Pull Request**：點選 "Create Pull Request" 提交你的變更。
9. **等待審核**：專案維護者會審核你的 Pull Request。