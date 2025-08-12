---
title: 項目結構
description: 伺服器項目結構目錄
order: 2
---


# 項目結構

BlockTavern 文檔項目採用 VitePress 構建，支援多語言國際化。

## 目錄結構

```
doc_blocktavern/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 自動部署
├── docs/
│   ├── .vitepress/
│   │   ├── components/         # 模組化配置目錄
│   │   │   ├── index.js        # 配置統一匯出
│   │   │   ├── site.js         # 站點基礎配置
│   │   │   ├── language.js     # 多語言主配置
│   │   │   ├── language/       # 各語言配置檔案
│   │   │   │   ├── zh-CN.js    # 中文配置
│   │   │   │   ├── en-US.js    # 英文配置
│   │   │   │   └── ...         # 其他語言
│   │   │   ├── nav.js          # 導航配置
│   │   │   ├── sidebar.js      # 側邊欄配置
│   │   │   ├── social.js       # 社交連結
│   │   │   ├── editLink.js     # 編輯連結
│   │   │   └── mdItCustomAttrs.js # Markdown 擴展
│   │   ├── config.mjs          # VitePress 主配置
│   │   ├── theme/              # 主題定制
│   │   ├── plugins/            # 插件目錄
│   │   └── cache/              # 構建緩存
│   ├── zh-CN/                  # 中文文檔
│   │   ├── DevelopmentGuide/   # 開發指南
│   │   ├── FAQ/                # 常見問題
│   │   ├── GameplayGuide/      # 遊戲指南
│   │   ├── InstallationTutorial/ # 安裝教程
│   │   └── index.md            # 中文首頁
│   ├── en/                     # 英文文檔
│   ├── fr/                     # 法文文檔
│   ├── de/                     # 德文文檔
│   ├── es/                     # 西班牙文文檔
│   ├── ja/                     # 日文文檔
│   ├── ko/                     # 韓文文檔
│   ├── ru/                     # 俄文文檔
│   ├── zh-TW/                  # 繁體中文文檔
│   ├── public/                 # 靜態資源
│   │   └── logo.png            # 站點圖示
│   └── obsolete/               # 廢棄檔案
├── package.json                # 項目依賴
├── package-lock.json           # 依賴鎖定
└── README.md                   # 項目說明
```

## 核心目錄說明

### `.vitepress/` 配置目錄

**主要檔案**：
- `config.mjs`: VitePress 主配置入口
- `components/`: 模組化配置管理
- `theme/`: 自定義主題樣式
- `plugins/`: 功能插件擴展
- `cache/`: 構建緩存檔案

**配置組件** (`components/`)：
- `site.js`: 站點基礎信息
- `language.js`: 多語言主配置
- `language/`: 各語言具體配置
- `sidebar.js`: 自動側邊欄生成
- `nav.js`: 頂部導航選單
- `social.js`: 社交媒體連結
- `editLink.js`: 編輯頁面連結

### 多語言文檔結構

**支援語言**：
- `zh-CN/`: 簡體中文（主要語言）
- `en/`: 英文
- `zh-TW/`: 繁體中文
- `fr/`, `de/`, `es/`, `ja/`, `ko/`, `ru/`: 其他語言

**文檔模組**：
- `DevelopmentGuide/`: 開發指南
- `FAQ/`: 常見問題
- `GameplayGuide/`: 遊戲指南
- `InstallationTutorial/`: 安裝教程

### 資源目錄

- `public/`: 全域靜態資源（圖示、圖片等）
- `zh-CN/public/`: 中文專用資源
- `obsolete/`: 已廢棄的文檔檔案

## 檔案命名規範

::: tip 命名約定
- 檔案名使用小寫字母和連字符：`installation-guide.md`
- 目錄名採用 PascalCase：`DevelopmentGuide/`
- 每個目錄必須包含 `index.md` 作為首頁
- 圖片資源放在對應的子目錄中
:::

## 自動化功能

- **側邊欄自動生成**：基於檔案結構和 Front Matter
- **多語言路由**：自動處理語言切換
- **GitHub Actions 部署**：程式碼推送自動構建發布
- **本地搜尋**：內建全文搜尋功能

<Contributors />

<GitHistoryInformation />