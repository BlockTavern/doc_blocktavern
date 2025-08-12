---
title: 設定説明
description: VitePress 設定ファイル説明
order: 3
---

# 設定説明

本ガイドでは、プロジェクトのVitePress設定ファイル構造と、カスタム設定の方法について詳しく説明します。

## 1. 設定ファイル概要

プロジェクトはモジュール化された設定管理を採用し、異なるタイプの設定を `docs/.vitepress/components/` ディレクトリ下の異なるファイルに分離して、メンテナンスと拡張を容易にしています。主要な設定ファイルには以下が含まれます：

-   `docs/.vitepress/config.mjs`: VitePress メイン設定ファイル
-   `docs/.vitepress/components/index.js`: 設定コンポーネント統一エクスポートファイル
-   `docs/.vitepress/components/site.js`: サイト基本設定
-   `docs/.vitepress/components/nav.js`: メインナビゲーション設定（廃止予定、言語設定を使用してください）
-   `docs/.vitepress/components/sidebar.js`: サイドバー設定（vitepress-sidebar プラグインで自動生成）
-   `docs/.vitepress/components/language.js`: 多言語設定メインファイル
-   `docs/.vitepress/components/language/`: 各言語の具体的な設定フォルダ
-   `docs/.vitepress/components/social.js`: ソーシャルリンク設定
-   `docs/.vitepress/components/editLink.js`: 編集リンク設定

## 2. サイト設定 (`docs/.vitepress/components/site.js`)

サイト設定ファイルは、ウェブサイトの基本情報とテーマの基本設定を定義します。このファイルには2つの主要な設定オブジェクトが含まれています：

### 2.1 サイト基本設定 (siteConfig)

```javascript
export const siteConfig = {
  title: 'BlockTavern Docs',
  description: 'BlockTavern Minecraft サーバー - ブロック酒場集合地',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }]
  ]
}
```

**注意**: この設定は無視できます。詳細な設定については言語設定を参照してください。

### 2.2 テーマ基本設定 (themeBaseConfig)

```javascript
export const themeBaseConfig = {
  logo: '/logo.png',
  
  // 検索設定
  search: {
    provider: 'local'
  },

  // 最終更新時刻
  lastUpdated: {
    text: '最終更新',
    formatOptions: {
      dateStyle: 'short',
      timeStyle: 'medium'
    }
  },

  // フッター設定
  footer: {
    message: 'BlockTavern Docs',
    copyright: 'Copyright © 2025 | ブロック酒場ドキュメントサイト'
  },

  // 日本語ローカライゼーション設定
  outline: {
    label: 'ページナビゲーション'
  }
}
```

**修正方法：**

`docs/.vitepress/components/site.js` ファイル内の対応するフィールドを直接編集してください。修正後は通常、開発サーバーを再起動するか、プロジェクトを再ビルドする必要があります。

## 3. 多言語設定

プロジェクトは多言語設定をサポートしており、主に以下のファイルで管理されます：

### 3.1 多言語メイン設定 (`docs/.vitepress/components/language.js`)

```javascript
// 各言語の設定をインポート
import { zhConfig } from './language/zh-CN.js'
import { enConfig } from './language/en-US.js'
// ... その他の言語設定

// 多言語設定オブジェクト
export const localesConfig = {
  root: zhConfig,        // デフォルト言語（簡体字中国語）
  // en: enConfig,       // 英語版を有効化
  // その他の言語設定（一時的にコメントアウト、必要時に有効化可能）
}
```

### 3.2 中国語設定 (`docs/.vitepress/components/language/zh-CN.js`)

```javascript
export const zhConfig = {
  label: "簡体字中国語",
  lang: "zh-CN",
  link: "/zh-CN/",
  title: "BlockTavern ドキュメント",
  description: "BlockTavern Minecraft サーバードキュメント",
  themeConfig: {
    nav: [
      { text: "ホーム", link: "/" },
      { text: "インストールチュートリアル", link: "/zh-CN/InstallationTutorial/installation-details" },
      { text: "ゲームガイド", link: "/zh-CN/GameplayGuide/command-list" },
      { text: "よくある質問", link: "/zh-CN/FAQ/faq-details" },
      { text: "開発ガイド", link: "/zh-CN/DevelopmentGuide/development-details" }
    ],
    editLink: {
      pattern: "https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path",
      text: "GitHubでこのページを編集"
    },
    outline: { label: "ページナビゲーション" },
    lastUpdated: { text: "最終更新" },
    langMenuLabel: "多言語",
    returnToTopLabel: "トップに戻る",
    sidebarMenuLabel: "メニュー",
    darkModeSwitchLabel: "テーマ"
  }
}
```

**修正方法：**

1. ナビゲーション設定の修正：`nav` 配列内のリンクとテキストを編集
2. 新しい言語の追加：`language` フォルダに新しい言語設定ファイルを作成
3. 多言語の有効化：`language.js` で対応する言語設定のコメントアウトを解除

## 4. サイドバー設定 (`docs/.vitepress/components/sidebar.js`)

プロジェクトは `vitepress-sidebar` プラグインを使用してサイドバーを自動生成し、手動でサイドバー構造を維持する必要がありません。

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
      // その他の設定オプション...
    }
  ]);
}
```

### 設定説明

- `documentRootPath`: ドキュメントルートディレクトリ
- `useTitleFromFileHeading`: ファイルタイトルからサイドバータイトルを取得
- `useTitleFromFrontmatter`: frontmatter からタイトルを取得
- `collapsed`: デフォルトの折りたたみ状態
- `collapseDepth`: 折りたたみ深度

**利点**: ファイル構造に基づいてサイドバーを自動生成し、手動メンテナンスが不要で、多言語をサポート。

**修正方法：**

必要に応じて `generateSidebar` 関数の設定パラメータを調整してください。詳細な設定オプションについては `vitepress-sidebar` プラグインドキュメントを参照してください。

## 5. ソーシャルリンク設定 (`docs/.vitepress/components/social.js`)

ソーシャルリンク設定ファイルは、ページに表示されるソーシャルメディアリンクを定義します。

```javascript
export const socialLinksConfig = [
  { 
    icon: 'github', 
    link: 'https://github.com/Re0XIAOPA/doc_blocktavern' 
  }
  // 必要に応じてより多くのソーシャルリンクを追加可能
  // { icon: 'discord', link: 'https://discord.gg/your-server' },
  // { icon: 'twitter', link: 'https://twitter.com/your-account' },
  // { icon: 'youtube', link: 'https://youtube.com/your-channel' }
]
```

### サポートされているアイコンタイプ

- `github`: GitHub
- `discord`: Discord
- `twitter`: Twitter/X
- `youtube`: YouTube
- `linkedin`: LinkedIn
- `facebook`: Facebook

## 6. 編集リンク設定 (`docs/.vitepress/components/editLink.js`)

編集リンク設定により、ユーザーは直接GitHub編集ページにジャンプできます。

```javascript
export const editLink = {
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path',
      text: 'GitHubでこのページを編集',
    }
  },
  frontmatter: {
    lastUpdated: true,
    contributors: true,
    editLink: {
      pattern: 'https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path',
      text: 'GitHubでこのページを編集',
    }
  }
};
```

### 設定説明

- `pattern`: GitHub編集リンクテンプレート、`:path` は現在のページパスに置き換えられます
- `text`: 編集リンクに表示されるテキスト
- `lastUpdated`: 最終更新時刻を表示
- `contributors`: 貢献者情報を表示

## 7. メイン設定ファイル (`docs/.vitepress/config.mjs`)

メイン設定ファイルはVitePressのエントリ設定で、すべてのモジュール化された設定を統合します。

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

## 8. 環境変数

プロジェクトは環境変数を使用して異なる環境での設定を管理します。主要な環境変数には以下が含まれます：

```bash
# 開発環境
NODE_ENV=development

# 本番環境
NODE_ENV=production

# ベースパス（サブディレクトリにデプロイする場合）
BASE_URL=/docs/
```

**設定での環境変数の使用：**

```javascript
export const siteConfig = {
  base: process.env.BASE_URL || '/',
  // その他の設定...
}
```

## 9. よくある問題とトラブルシューティング

### 9.1 設定関連の問題

- **設定が有効にならない**: 正しい設定ファイルを修正したことを確認し、開発サーバーを再起動してください
- **サイドバーが表示されない**: ファイル構造が `vitepress-sidebar` プラグインの要件に適合しているかチェックしてください
- **多言語切り替えの問題**: `language.js` のパス設定が正しいか確認してください

### 9.2 ビルド関連の問題

- **ビルド失敗**: すべての設定ファイルのES6モジュール構文が正しいかチェックしてください
- **パスエラー**: すべてのファイルパスが正しい相対パスまたは絶対パスを使用していることを確認してください

### 9.3 開発推奨事項

1. **モジュール化設定**: 設定ファイルのモジュール化構造を維持し、メンテナンスを容易にしてください
2. **ドキュメント構造**: 既定のドキュメントディレクトリ構造に従い、サイドバーの自動生成が正常に動作することを確認してください
3. **多言語サポート**: 新しい言語を追加する際は、`language.js` で正しく設定されていることを確認してください

---

以上の設定説明により、プロジェクトの要件に応じて各設定ファイルを適切に修正およびカスタマイズできるはずです。具体的な問題が発生した場合は、[VitePress公式ドキュメント](https://vitepress.dev/) または [vitepress-sidebar プラグインドキュメント](https://vitepress-sidebar.cdget.com/) を参照することをお勧めします。

<Contributors />

<GitHistoryInformation />