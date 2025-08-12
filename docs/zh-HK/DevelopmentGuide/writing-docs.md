---
title: 文檔編寫
description: BlockTavern 文檔編寫完整指南
order: 4
---

# 文檔編寫指南

本指南將詳細介紹如何為 BlockTavern 項目編寫和維護高質量的文檔。我們使用 VitePress 作為文檔生成工具，支援多語言、自動側邊欄生成等現代化功能。

## 1. 快速開始

建立新文檔只需三步：

1. 在對應語言目錄下建立 `.md` 檔案
2. 加入 Front Matter 配置
3. 編寫內容並儲存
4. 文檔末尾加入 `<Contributors />` 貢獻者組件 `<GitHistoryInformation />` Git歷史組件

::: tip 開發環境
使用 `npm run docs:dev` 啟動本地預覽，支援熱重載。
:::

## 2. 基礎語法

### 2.1 常用格式

```markdown
# 頁面標題 (H1)

## 主要章節 (H2)

### 子章節 (H3)

**粗體** _斜體_ `行內程式碼`

- 無序列表
- [連結文字](./other-page.md)
- ![圖片](./images/screenshot.png)
```

### 2.2 程式碼區塊

````markdown
```javascript
const config = {
  title: "BlockTavern Docs",
  description: "文檔站點",
};
```

<!-- 帶行號的程式碼區塊 -->

```javascript{1,3-5}
const config = {
  title: 'BlockTavern Docs', // [!code highlight]
  description: '文檔站點',
  version: '1.0.0',
  author: 'BlockTavern Team'
}
```
````

## 3. VitePress 擴展功能

### 3.1 資訊提示框

```markdown
::: tip 提示
重要的建議或技巧
:::

::: warning 警告
需要注意的事項
:::

::: danger 危險
可能的風險或錯誤
:::

::: details 點擊展開詳情
可摺疊的詳細內容
:::
```

### 3.2 程式碼組

````markdown
::: code-group

```js [config.js]
export default {
  title: "BlockTavern Docs",
};
```

```json [package.json]
{
  "name": "blocktavern-docs"
}
```

:::
````

### 3.3 程式碼高亮

````markdown
```javascript{2,4-6}
const config = {
  title: 'BlockTavern Docs', // 這行會被高亮
  description: '文檔站點',
  theme: 'default',         // 這些行會被高亮
  version: '1.0.0',         // 這些行會被高亮
  author: 'Team'            // 這些行會被高亮
}
```

<!-- 程式碼差異顯示 -->

```javascript
const config = {
  title: "BlockTavern Docs",
  description: "文檔站點", // [!code --]
  description: "Minecraft 伺服器文檔", // [!code ++]
  version: "1.0.0", // [!code highlight]
};
```
````

### 3.4 表格

```markdown
| 功能       | 描述             | 狀態      |
| ---------- | ---------------- | --------- |
| 多語言支援 | 支援中英文切換   | ✅ 已完成 |
| 自動側邊欄 | 根據檔案結構生成 | ✅ 已完成 |
| 搜尋功能   | 本地搜尋         | ✅ 已完成 |
| 主題切換   | 明暗主題         | ✅ 已完成 |
```

### 3.5 數學公式

```markdown
<!-- 行內公式 -->

當 $a \ne 0$ 時，方程 $ax^2 + bx + c = 0$ 有兩個解。

<!-- 區塊級公式 -->

$$
x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}
$$
```

## 4. 編寫規範

### 4.1 檔案命名

- 使用小寫字母和連字符：`installation-guide.md`
- 避免中文、空格、底線：~~`安裝指南.md`~~
- 每個目錄需要 `index.md` 作為首頁

### 4.2 Front Matter

```yaml
---
title: 頁面標題 # 必需
description: 頁面描述 # 必需
order: 1 # 可選，控制排序
---
```

### 4.3 頁面結構

```markdown
---
title: 頁面標題
description: 頁面描述
---

# 頁面標題

簡要介紹頁面內容。

## 主要章節

### 子章節

具體內容...

<Contributors />
```

**要點：**
- 每頁只有一個 H1 標題
- 使用數字編號的 H2 章節
- 標題層次不要跳級
- 頁面末尾加入 `<Contributors />` 組件顯示貢獻者

## 5. 側邊欄設定

::: tip 自動產生
專案使用 `vitepress-sidebar` 外掛程式，根據檔案結構自動產生側邊欄。
:::

### 5.1 組織原則

- 目錄結構 = 側邊欄結構
- 每個目錄需要 `index.md` 檔案
- 使用 `order` 欄位控制排序
- 資料夾使用 PascalCase 命名

## 6. 寫作指南

### 6.1 寫作原則

- 語言簡潔明瞭，避免冗長句子
- 結構清晰，從簡單到複雜
- 提供實際的程式碼範例
- 使用提示框突出重點

### 6.2 步驟說明格式

````markdown
## 安裝步驟

1. **下載專案**
   ```bash
   git clone https://github.com/project.git
   ```
````

2. **安裝相依性**

```bash
npm install
```

::: tip 提示
遇到問題請檢查 Node.js 版本。
:::

````

### 6.3 圖片和媒體

- 圖片放在 `docs/public/images/` 目錄
- 使用描述性檔案名和 alt 文字
- 控制檔案大小

```markdown
![配置介面](./images/config.png "配置介面截圖")
````

## 7. 多語言支援

專案支援多語言文檔：

- 中文（預設）：`docs/zh-CN/`
- 英文：`docs/en/`
- 其他語言：`docs/ja/`、`docs/ko/` 等

**翻譯流程：**

1. 複製中文文檔到相應語言目錄
2. 翻譯 Front Matter 和正文內容
3. 檢查連結和格式
4. 測試顯示效果

## 8. 提交檢查

提交前請確認：

- [ ] Front Matter 資訊完整
- [ ] 標題層次合理
- [ ] 程式碼範例正確
- [ ] 連結可正常存取
- [ ] 圖片顯示正常
- [ ] 語法拼寫正確

## 9. 參考資源

**官方文件：**

- [VitePress 文檔](https://vitepress.dev/)
- [Markdown 語法](https://markdown.com.cn/)
- [vitepress-sidebar 插件](https://vitepress-sidebar.jooy2.com/)

**推薦工具：**

- VS Code + Markdown 擴充功能
- [表格產生器](https://tablesgenerator.com/markdown_tables)
- [圖片壓縮](https://tinypng.com/)

---

遵循本指南可以建立高質素的文檔。如有疑問，請聯絡專案維護者。

<Contributors />

<GitHistoryInformation />