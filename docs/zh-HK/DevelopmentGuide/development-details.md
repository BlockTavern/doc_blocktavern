---
title: 貢獻指南
description: BlockTavern 文檔貢獻完整指南
order: 1
---

# 貢獻指南

歡迎參與 BlockTavern 文檔項目！本指南將幫助您快速上手並提交高質量的貢獻。

## 環境準備

### 系統要求

- **Node.js** 18+ 
- **Git** 最新版本
- **GitHub** 帳號

### 開發工具推薦

- **VS Code** + Markdown 擴展
- **GitHub Desktop**（可選）

::: tip 圖片優化
使用本地圖片前請壓縮檔案大小，或使用穩定的圖床服務，以提升載入速度。
:::

## 快速開始

### 1. Fork 項目

1. 訪問項目倉庫：[doc_blocktavern](https://github.com/Re0XIAOPA/doc_blocktavern)
2. 點擊右上角 **Fork** 按鈕
3. 等待 Fork 完成

### 2. 本地開發

```bash
# 克隆你的 Fork
git clone https://github.com/YOUR_USERNAME/doc_blocktavern.git
cd doc_blocktavern

# 安裝依賴
npm install

# 啟動開發伺服器
npm run docs:dev
```

訪問 `http://localhost:5173` 預覽文檔站點。

### 3. 創建分支

```bash
# 創建功能分支
git checkout -b feature/your-feature-name

# 或修復分支
git checkout -b fix/your-fix-name
```

## 貢獻流程

### 1. 編寫內容

- 在 `docs/zh-CN/` 目錄下編輯或創建文檔
- 遵循 [文檔編寫規範](./writing-docs.md)
- 即時預覽：保存後瀏覽器自動刷新

### 2. 提交更改

```bash
# 添加更改的檔案
git add .

# 提交更改（使用規範的提交信息）
git commit -m "docs: 添加新功能說明"

# 推送到你的 Fork
git push origin feature/your-feature-name
```

### 3. 創建 Pull Request

1. 訪問你的 Fork 倉庫頁面
2. 點擊 **Compare & pull request** 按鈕
3. 填寫 PR 信息：
   - **標題**：簡潔描述更改內容
   - **描述**：詳細說明更改原因和影響
4. 點擊 **Create pull request**

### 4. 等待審核

- 項目維護者會審核你的 PR
- 可能會要求修改或補充
- 審核通過後會合併到主分支

## 提交規範

### 提交信息格式

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**類型（type）**：
- `docs`: 文檔更新
- `feat`: 新功能
- `fix`: 修復問題
- `style`: 格式調整
- `refactor`: 重構

**示例**：
```bash
git commit -m "docs(guide): 添加安裝教程"
git commit -m "fix(config): 修復側邊欄配置錯誤"
git commit -m "feat(search): 添加搜尋功能"
```

### 分支命名規範

- `feature/功能名稱`: 新功能開發
- `fix/問題描述`: 問題修復
- `docs/文檔類型`: 文檔更新
- `refactor/重構內容`: 程式碼重構

## 貢獻類型

### 文檔貢獻

- **新增文檔**：創建新的指南或教程
- **完善內容**：補充現有文檔的詳細信息
- **修復錯誤**：糾正文檔中的錯誤信息
- **翻譯工作**：將中文文檔翻譯為其他語言

### 技術貢獻

- **配置優化**：改進 VitePress 配置
- **樣式美化**：優化文檔站點樣式
- **功能增強**：添加新的文檔功能
- **性能優化**：提升站點載入速度

## 質量標準

### 文檔質量

- [ ] 內容準確無誤
- [ ] 語言表達清晰
- [ ] 結構層次合理
- [ ] 程式碼示例可運行
- [ ] 連結有效可訪問
- [ ] 圖片清晰適當

### 技術質量

- [ ] 程式碼風格一致
- [ ] 配置語法正確
- [ ] 構建測試通過
- [ ] 兼容性良好

## 獲得幫助

遇到問題時可以：

1. **查看現有文檔**：[項目結構](./project-structure.md)、[配置說明](./configuration.md)
2. **提交 Issue**：在 GitHub 倉庫中創建問題報告
3. **聯繫維護者**：通過 GitHub 或社群渠道
4. **參考資源**：[VitePress 官方文檔](https://vitepress.dev/)

---

感謝您的貢獻！每一份貢獻都讓 BlockTavern 文檔變得更好。

<Contributors />

<GitHistoryInformation />