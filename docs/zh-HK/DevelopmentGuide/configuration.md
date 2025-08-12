---
title: 設定說明
description: VitePress 設定檔案說明
order: 3
---

# 設定說明

本指南將詳細介紹專案的 VitePress 設定檔案結構以及如何進行自訂設定。

## 1. 設定檔案概述

專案採用模組化設定管理，將不同類型的設定分離到 `docs/.vitepress/components/` 目錄下的不同檔案中，便於維護和擴充。主要設定檔案包括：

-   `docs/.vitepress/config.mjs`: VitePress 主設定檔案
-   `docs/.vitepress/components/index.js`: 設定組件統一匯出檔案
-   `docs/.vitepress/components/site.js`: 網站基礎設定
-   `docs/.vitepress/components/nav.js`: 主導航設定（已棄用，請使用語言設定）
-   `docs/.vitepress/components/sidebar.js`: 側邊欄設定（使用 vitepress-sidebar 外掛程式自動生成）
-   `docs/.vitepress/components/language.js`: 多語言設定主檔案
-   `docs/.vitepress/components/language/`: 各語言具體設定檔案夾
-   `docs/.vitepress/components/social.js`: 社交連結設定
-   `docs/.vitepress/components/editLink.js`: 編輯連結設定

## 2. 網站設定 (`docs/.vitepress/components/site.js`)

網站設定檔案定義了網站的基本資訊和主題基礎設定。該檔案包含兩個主要設定物件：

### 2.1 網站基礎設定 (siteConfig)

```javascript
export const siteConfig = {
  title: 'BlockTavern Docs',
  description: 'BlockTavern Minecraft 服务器 - 方块酒馆聚集地',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }]
  ]
}
```

**注意**: 該設定可以忽略，請前往語言設定進行詳細設定。

### 2.2 主題基礎設定 (themeBaseConfig)

```javascript
export const themeBaseConfig = {
  logo: '/logo.png',
  
  // 搜尋設定
  search: {
    provider: 'local'
  },

  // 上次更新時間
  lastUpdated: {
    text: '最後更新於',
    formatOptions: {
      dateStyle: 'short',
      timeStyle: 'medium'
    }
  },

  // 頁腳設定
  footer: {
    message: 'BlockTavern Docs',
    copyright: 'Copyright © 2025 | 方塊酒館文件網站'
  },

  // 中文本地化設定
  outline: {
    label: '頁面導航'
  }
}
```

**如何修改：**

直接編輯 `docs/.vitepress/components/site.js` 檔案中的對應欄位即可。修改後通常需要重新啟動開發伺服器或重新建置專案。

## 3. 多語言設定

專案支援多語言設定，主要透過以下檔案進行管理：

### 3.1 多語言主設定 (`docs/.vitepress/components/language.js`)

```javascript
// 匯入各個語言的設定
import { zhConfig } from './language/zh-CN.js'
import { enConfig } from './language/en-US.js'
// ... 其他語言設定

// 多語言設定物件
export const localesConfig = {
  root: zhConfig,        // 預設語言（簡體中文）
  // en: enConfig,       // 啟用英文版本
  // 其他語言設定（暫時註釋，需要時可啟用）
}
```

### 3.2 中文設定 (`docs/.vitepress/components/language/zh-CN.js`)

```javascript
export const zhConfig = {
  label: "簡體中文",
  lang: "zh-CN",
  link: "/zh-CN/",
  title: "BlockTavern 文件",
  description: "BlockTavern Minecraft 伺服器文件",
  themeConfig: {
    nav: [
      { text: "首頁", link: "/" },
      { text: "安裝教學", link: "/zh-CN/InstallationTutorial/installation-details" },
      { text: "遊戲指南", link: "/zh-CN/GameplayGuide/command-list" },
      { text: "常見問題", link: "/zh-CN/FAQ/faq-details" },
      { text: "開發指南", link: "/zh-CN/DevelopmentGuide/development-details" }
    ],
    editLink: {
      pattern: "https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path",
      text: "前往 GitHub 編輯此頁面"
    },
    outline: { label: "頁面導航" },
    lastUpdated: { text: "最後更新於" },
    langMenuLabel: "多語言",
    returnToTopLabel: "回到頂部",
    sidebarMenuLabel: "選單",
    darkModeSwitchLabel: "主題"
  }
}
```

**如何修改：**

1. 修改導航設定：編輯 `nav` 陣列中的連結和文字
2. 加入新語言：在 `language` 資料夾中建立新的語言設定檔案
3. 啟用多語言：在 `language.js` 中取消註釋相應的語言設定

## 4. 側邊欄設定 (`docs/.vitepress/components/sidebar.js`)

專案使用 `vitepress-sidebar` 外掛程式自動生成側邊欄，無需手動維護側邊欄結構。

```javascript
import { generateSidebar } from "vitepress-sidebar";

export function generateSidebarConfig() {
  return generateSidebar([
    {
      documentRootPath: "docs",
      scanStartPath: "/",
      basePath: "/",
      resolvePath: "/",
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      useFolderTitleFromIndexFile: true,
      useFolderLinkFromIndexFile: false,
      hyphenToSpace: true,
      underscoreToSpace: true,
      capitalizeFirst: true,
      collapsed: true,
      collapseDepth: 2,
      sortMenusByName: false,
      // 更多設定選項...
    }
  ]);
}
```

### 設定說明

- `documentRootPath`: 文件根目錄
- `useTitleFromFileHeading`: 從檔案標題獲取側邊欄標題
- `useTitleFromFrontmatter`: 從 frontmatter 獲取標題
- `collapsed`: 預設摺疊狀態
- `collapseDepth`: 摺疊深度

**優勢**: 自動根據檔案結構生成側邊欄，無需手動維護，支援多語言。

**如何修改：**

根據需要調整 `generateSidebar` 函數的設定參數，詳細設定選項請參考 `vitepress-sidebar` 外掛程式文件。

## 5. 社交連結設定 (`docs/.vitepress/components/social.js`)

社交連結設定檔案定義了頁面上顯示的社交媒體連結。

```javascript
export const socialLinksConfig = [
  { 
    icon: 'github', 
    link: 'https://github.com/Re0XIAOPA/doc_blocktavern' 
  }
  // 可以根據需要加入更多社交連結
  // { icon: 'discord', link: 'https://discord.gg/your-server' },
  // { icon: 'twitter', link: 'https://twitter.com/your-account' },
  // { icon: 'youtube', link: 'https://youtube.com/your-channel' }
]
```

### 支援的圖示類型

- `github`: GitHub
- `discord`: Discord
- `twitter`: Twitter/X
- `youtube`: YouTube
- `linkedin`: LinkedIn
- `facebook`: Facebook

## 6. 編輯連結設定 (`docs/.vitepress/components/editLink.js`)

編輯連結設定允許使用者直接跳轉到 GitHub 編輯頁面。

```javascript
export const editLink = {
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path',
      text: '前往 GitHub 編輯此頁面',
    }
  },
  frontmatter: {
    lastUpdated: true,
    contributors: true,
    editLink: {
      pattern: 'https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path',
      text: '前往 GitHub 編輯此頁面',
    }
  }
};
```

### 設定說明

- `pattern`: GitHub 編輯連結範本，`:path` 會被替換為目前頁面路徑
- `text`: 編輯連結顯示的文字
- `lastUpdated`: 顯示最後更新時間
- `contributors`: 顯示貢獻者資訊

## 7. 主設定檔案 (`docs/.vitepress/config.mjs`)

主設定檔案是 VitePress 的入口設定，它整合了所有模組化設定。

```javascript
import { defineConfig } from 'vitepress'
import { 
  siteConfig, 
  themeBaseConfig, 
  navConfig, 
  socialLinksConfig, 
  localesConfig, 
  generateSidebarConfig, 
  editLink, 
  mdItCustomAttrs 
} from './components/index.js'

export default defineConfig({
  ...siteConfig,
  locales: localesConfig,
  markdown: {
    config: mdItCustomAttrs
  },
  themeConfig: {
    ...themeBaseConfig,
    nav: navConfig,
    sidebar: generateSidebarConfig(),
    socialLinks: socialLinksConfig,
    ...editLink.themeConfig
  }
})
```

## 8. 環境變數

專案使用環境變數來管理不同環境下的設定。主要環境變數包括：

```bash
# 開發環境
NODE_ENV=development

# 生產環境
NODE_ENV=production

# 基礎路徑（如果部署在子目錄）
BASE_URL=/docs/
```

**在設定中使用環境變數：**

```javascript
export const siteConfig = {
  base: process.env.BASE_URL || '/',
  // 其他設定...
}
```

## 9. 常見問題與故障排除

### 9.1 設定相關問題

- **設定不生效**: 確保修改了正確的設定檔案，並重新啟動開發伺服器
- **側邊欄不顯示**: 檢查檔案結構是否符合 `vitepress-sidebar` 外掛程式要求
- **多語言切換問題**: 驗證 `language.js` 中的路徑設定是否正確

### 9.2 建置相關問題

- **建置失敗**: 檢查所有設定檔案的 ES6 模組語法是否正確
- **路徑錯誤**: 確保所有檔案路徑使用正確的相對路徑或絕對路徑

### 9.3 開發建議

1. **模組化設定**: 保持設定檔案的模組化結構，便於維護
2. **文件結構**: 遵循既定的文件目錄結構，確保側邊欄自動生成正常工作
3. **多語言支援**: 新增語言時，確保在 `language.js` 中正確設定

---

透過以上設定說明，你應該能夠根據專案需求對各個設定檔案進行相應的修改和定製。如果遇到具體問題，建議查閱 [VitePress 官方文件](https://vitepress.dev/) 或 [vitepress-sidebar 外掛程式文件](https://vitepress-sidebar.cdget.com/)。

<Contributors />

<GitHistoryInformation />