---
title: 貢獻指南
description: BlockTavern 文件貢獻完整指南
order: 1
---

# 貢獻指南

歡迎參與 BlockTavern 文件專案！本指南將幫助您快速上手並提交高品質的貢獻。

## 環境準備

### 系統要求

- **Node.js** 18+ 
- **Git** 最新版本
- **GitHub** 帳號

### 開發工具推薦

- **VS Code** + Markdown 擴充功能
- **GitHub Desktop**（可選）

::: tip 圖片優化
使用本地圖片前請壓縮檔案大小，或使用穩定的圖床服務，以提升載入速度。
:::

## 快速開始

### 1. Fork 專案

1. 造訪專案倉庫：[doc_blocktavern](https://github.com/Re0XIAOPA/doc_blocktavern)
2. 點擊右上角 **Fork** 按鈕
3. 等待 Fork 完成

### 2. 本地開發

```bash
# 複製你的 Fork
git clone https://github.com/YOUR_USERNAME/doc_blocktavern.git
cd doc_blocktavern

# 安裝相依性
npm install

# 啟動開發伺服器
npm run docs:dev
```

造訪 `http://localhost:5173` 預覽文件站點。

### 3. 建立分支

```bash
# 建立功能分支
git checkout -b feature/your-feature-name

# 或修復分支
git checkout -b fix/your-fix-name
```

## 貢獻流程

### 1. 編寫內容

- 在 `docs/zh-TW/` 目錄下編輯或建立文件
- 遵循 [文件編寫規範](./writing-docs.md)
- 即時預覽：儲存後瀏覽器自動重新整理

### 2. 提交更改

```bash
# 新增更改的檔案
git add .

# 提交更改（使用規範的提交訊息）
git commit -m "docs: 新增新功能說明"

# 推送到你的 Fork
git push origin feature/your-feature-name
```

### 3. 建立 Pull Request

1. 造訪你的 Fork 倉庫頁面
2. 點擊 **Compare & pull request** 按鈕
3. 填寫 PR 資訊：
   - **標題**：簡潔描述更改內容
   - **描述**：詳細說明更改原因和影響
4. 點擊 **Create pull request**

### 4. 等待審核

- 專案維護者會審核你的 PR
- 可能會要求修改或補充
- 審核通過後會合併到主分支

## 提交規範

### 提交訊息格式

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**類型（type）**：
- `docs`: 文件更新
- `feat`: 新功能
- `fix`: 修復問題
- `style`: 格式調整
- `refactor`: 重構

**範例**：
```bash
git commit -m "docs(guide): 新增安裝教學"
git commit -m "fix(config): 修復側邊欄設定錯誤"
git commit -m "feat(search): 新增搜尋功能"
```

### 分支命名規範

- `feature/功能名稱`: 新功能開發
- `fix/問題描述`: 問題修復
- `docs/文件類型`: 文件更新
- `refactor/重構內容`: 程式碼重構

## 貢獻類型

### 文件貢獻

- **新增文件**：建立新的指南或教學
- **完善內容**：補充現有文件的詳細資訊
- **修復錯誤**：糾正文件中的錯誤資訊
- **翻譯工作**：將中文文件翻譯為其他語言

### 技術貢獻

- **設定優化**：改進 VitePress 設定
- **樣式美化**：優化文件站點樣式
- **功能增強**：新增新的文件功能
- **效能優化**：提升站點載入速度

## 品質標準

### 文件品質

- [ ] 內容準確無誤
- [ ] 語言表達清晰
- [ ] 結構層次合理
- [ ] 程式碼範例可執行
- [ ] 連結有效可存取
- [ ] 圖片清晰適當

### 技術品質

- [ ] 程式碼風格一致
- [ ] 設定語法正確
- [ ] 建置測試通過
- [ ] 相容性良好

## 獲得協助

遇到問題時可以：

1. **查看現有文件**：[專案結構](./project-structure.md)、[設定說明](./configuration.md)
2. **提交 Issue**：在 GitHub 倉庫中建立問題報告
3. **聯繫維護者**：透過 GitHub 或社群管道
4. **參考資源**：[VitePress 官方文件](https://vitepress.dev/)

---

感謝您的貢獻！每一份貢獻都讓 BlockTavern 文件變得更好。

<Contributors />

<GitHistoryInformation />