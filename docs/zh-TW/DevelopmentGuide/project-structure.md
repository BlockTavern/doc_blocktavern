---
title: 專案結構
description: 伺服器專案結構目錄
order: 2
---


# 專案結構

BlockTavern 文件專案採用 VitePress 建置，支援多語言國際化。

## 目錄結構

```
doc_blocktavern/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 自動部署
├── docs/
│   ├── .vitepress/
│   │   ├── components/         # 模組化設定目錄
│   │   │   ├── index.js        # 設定統一匯出
│   │   │   ├── site.js         # 網站基礎設定
│   │   │   ├── language.js     # 多語言主設定
│   │   │   ├── language/       # 各語言設定檔案
│   │   │   │   ├── zh-CN.js    # 中文設定
│   │   │   │   ├── en-US.js    # 英文設定
│   │   │   │   └── ...         # 其他語言
│   │   │   ├── nav.js          # 導覽設定
│   │   │   ├── sidebar.js      # 側邊欄設定
│   │   │   ├── social.js       # 社群連結
│   │   │   ├── editLink.js     # 編輯連結
│   │   │   └── mdItCustomAttrs.js # Markdown 擴充
│   │   ├── config.mjs          # VitePress 主設定
│   │   ├── theme/              # 主題客製化
│   │   ├── plugins/            # 外掛程式目錄
│   │   └── cache/              # 建置快取
│   ├── zh-CN/                  # 中文文件
│   │   ├── DevelopmentGuide/   # 開發指南
│   │   ├── FAQ/                # 常見問題
│   │   ├── GameplayGuide/      # 遊戲指南
│   │   ├── InstallationTutorial/ # 安裝教學
│   │   └── index.md            # 中文首頁
│   ├── en/                     # 英文文件
│   ├── fr/                     # 法文文件
│   ├── de/                     # 德文文件
│   ├── es/                     # 西班牙文文件
│   ├── ja/                     # 日文文件
│   ├── ko/                     # 韓文文件
│   ├── ru/                     # 俄文文件
│   ├── zh-TW/                  # 繁體中文文件
│   ├── public/                 # 靜態資源
│   │   └── logo.png            # 網站圖示
│   └── obsolete/               # 廢棄檔案
├── package.json                # 專案相依性
├── package-lock.json           # 相依性鎖定
└── README.md                   # 專案說明
```

## 核心目錄說明

### `.vitepress/` 設定目錄

**主要檔案**：
- `config.mjs`: VitePress 主設定入口
- `components/`: 模組化設定管理
- `theme/`: 自訂主題樣式
- `plugins/`: 功能外掛程式擴充
- `cache/`: 建置快取檔案

**設定元件** (`components/`)：
- `site.js`: 網站基礎資訊
- `language.js`: 多語言主設定
- `language/`: 各語言具體設定
- `sidebar.js`: 自動側邊欄產生
- `nav.js`: 頂部導覽選單
- `social.js`: 社群媒體連結
- `editLink.js`: 編輯頁面連結

### 多語言文件結構

**支援語言**：
- `zh-CN/`: 簡體中文（主要語言）
- `en/`: 英文
- `zh-TW/`: 繁體中文
- `fr/`, `de/`, `es/`, `ja/`, `ko/`, `ru/`: 其他語言

**文件模組**：
- `DevelopmentGuide/`: 開發指南
- `FAQ/`: 常見問題
- `GameplayGuide/`: 遊戲指南
- `InstallationTutorial/`: 安裝教學

### 資源目錄

- `public/`: 全域靜態資源（圖示、圖片等）
- `zh-CN/public/`: 中文專用資源
- `obsolete/`: 已廢棄的文件檔案

## 檔案命名規範

::: tip 命名約定
- 檔案名稱使用小寫字母和連字符：`installation-guide.md`
- 目錄名稱採用 PascalCase：`DevelopmentGuide/`
- 每個目錄必須包含 `index.md` 作為首頁
- 圖片資源放在對應的子目錄中
:::

## 自動化功能

- **側邊欄自動產生**：基於檔案結構和 Front Matter
- **多語言路由**：自動處理語言切換
- **GitHub Actions 部署**：程式碼推送自動建置發布
- **本地搜尋**：內建全文搜尋功能

<Contributors />

<GitHistoryInformation />