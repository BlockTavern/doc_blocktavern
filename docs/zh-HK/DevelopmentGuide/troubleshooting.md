---
title: 故障排除
description: 伺服器故障排除目錄
order: 5
---

# 故障排除

快速解決 BlockTavern 文檔開發中的常見問題。

## 開發問題

### 伺服器啟動失敗

```bash
npm run docs:dev
```

**解決方案**：
- 檢查 Node.js 版本（推薦 18+）
- 重新安裝依賴：`rm -rf node_modules && npm install`
- 檢查連接埠佔用：`netstat -ano | findstr :5173`

### 構建失敗

```bash
npm run docs:build
```

**解決方案**：
- 檢查 Markdown 語法錯誤
- 驗證所有內部連結有效性
- 檢查配置檔案語法

### 頁面異常

**常見症狀**：內容顯示錯誤、樣式異常

**解決方案**：
- 清除瀏覽器緩存（Ctrl+F5）
- 檢查 Front Matter 格式
- 驗證圖片路徑正確性

### 搜尋失效

**解決方案**：
- 重新構建項目
- 檢查瀏覽器控制台錯誤
- 驗證搜尋配置

## 調試技巧

### 開發調試

**瀏覽器開發者工具**（F12）：
- 控制台查看錯誤信息
- 網路面板檢查資源載入
- 元素面板調試樣式

**VitePress 調試模式**：
```bash
# Windows
set DEBUG=vitepress:* && npm run docs:dev

# Linux/Mac
DEBUG=vitepress:* npm run docs:dev
```

**構建調試**：
```bash
npm run docs:build -- --debug
```

### 生產調試

**本地預覽**：
```bash
npm run docs:build
npm run docs:preview
```

**檔案檢查**：
- 構建輸出：`docs/.vitepress/dist/`
- 靜態資源：`docs/.vitepress/dist/assets/`
- 頁面檔案：檢查 HTML 結構

### 常用工具

- **連結檢查**：使用 `markdown-link-check` 驗證連結
- **語法檢查**：使用 `markdownlint` 檢查格式
- **性能分析**：瀏覽器 Lighthouse 工具

## 配置問題

### 側邊欄不顯示

**原因**：檔案結構不符合自動生成規則

**解決方案**：
- 確保目錄包含 `index.md` 檔案
- 檢查檔案命名規範（小寫+連字符）
- 驗證 Front Matter 格式正確

### 多語言切換異常

**解決方案**：
- 檢查 `language.js` 配置
- 確保各語言目錄結構一致
- 驗證路徑映射正確

### 圖片無法顯示

**解決方案**：
- 使用相對路徑：`./images/pic.png`
- 檢查檔案是否存在於 `public/` 目錄
- 驗證檔案名大小寫匹配

## 部署問題

### GitHub Pages 部署失敗

**解決方案**：
- 檢查 GitHub Actions 工作流配置
- 確保 `base` 路徑設置正確
- 驗證倉庫權限和分支設置

### 靜態資源 404

**解決方案**：
- 檢查 `base` 配置是否匹配部署路徑
- 確保資源檔案在 `public/` 目錄
- 驗證構建輸出完整性

## 快速診斷

::: tip 問題排查步驟
1. **查看錯誤信息**：控制台/終端輸出
2. **檢查檔案結構**：確保符合規範
3. **驗證配置**：語法和路徑正確性
4. **清理重建**：刪除緩存重新構建
5. **對比工作版本**：Git 差異比較
:::

<Contributors />

<GitHistoryInformation />