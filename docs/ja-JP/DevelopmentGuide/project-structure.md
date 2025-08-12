---
title: プロジェクト構造
description: サーバープロジェクト構造ディレクトリ
order: 2
---


# プロジェクト構造

BlockTavern ドキュメントプロジェクトは VitePress で構築され、多言語国際化をサポートしています。

## ディレクトリ構造

```
doc_blocktavern/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 自動デプロイ
├── docs/
│   ├── .vitepress/
│   │   ├── components/         # モジュール化設定ディレクトリ
│   │   │   ├── index.js        # 設定統一エクスポート
│   │   │   ├── site.js         # サイト基本設定
│   │   │   ├── language.js     # 多言語メイン設定
│   │   │   ├── language/       # 各言語設定ファイル
│   │   │   │   ├── zh-CN.js    # 中国語設定
│   │   │   │   ├── en-US.js    # 英語設定
│   │   │   │   └── ...         # その他の言語
│   │   │   ├── nav.js          # ナビゲーション設定
│   │   │   ├── sidebar.js      # サイドバー設定
│   │   │   ├── social.js       # ソーシャルリンク
│   │   │   ├── editLink.js     # 編集リンク
│   │   │   └── mdItCustomAttrs.js # Markdown 拡張
│   │   ├── config.mjs          # VitePress メイン設定
│   │   ├── theme/              # テーマカスタマイズ
│   │   ├── plugins/            # プラグインディレクトリ
│   │   └── cache/              # ビルドキャッシュ
│   ├── zh-CN/                  # 中国語ドキュメント
│   │   ├── DevelopmentGuide/   # 開発ガイド
│   │   ├── FAQ/                # よくある質問
│   │   ├── GameplayGuide/      # ゲームガイド
│   │   ├── InstallationTutorial/ # インストールチュートリアル
│   │   └── index.md            # 中国語ホームページ
│   ├── en/                     # 英語ドキュメント
│   ├── fr/                     # フランス語ドキュメント
│   ├── de/                     # ドイツ語ドキュメント
│   ├── es/                     # スペイン語ドキュメント
│   ├── ja/                     # 日本語ドキュメント
│   ├── ko/                     # 韓国語ドキュメント
│   ├── ru/                     # ロシア語ドキュメント
│   ├── zh-TW/                  # 繁体字中国語ドキュメント
│   ├── public/                 # 静的リソース
│   │   └── logo.png            # サイトアイコン
│   └── obsolete/               # 廃止ファイル
├── package.json                # プロジェクト依存関係
├── package-lock.json           # 依存関係ロック
└── README.md                   # プロジェクト説明
```

## コアディレクトリ説明

### `.vitepress/` 設定ディレクトリ

**主要ファイル**：
- `config.mjs`: VitePress メイン設定エントリ
- `components/`: モジュール化設定管理
- `theme/`: カスタムテーマスタイル
- `plugins/`: 機能プラグイン拡張
- `cache/`: ビルドキャッシュファイル

**設定コンポーネント** (`components/`)：
- `site.js`: サイト基本情報
- `language.js`: 多言語メイン設定
- `language/`: 各言語具体的設定
- `sidebar.js`: 自動サイドバー生成
- `nav.js`: トップナビゲーションメニュー
- `social.js`: ソーシャルメディアリンク
- `editLink.js`: ページ編集リンク

### 多言語ドキュメント構造

**サポート言語**：
- `zh-CN/`: 簡体字中国語（主要言語）
- `en/`: 英語
- `zh-TW/`: 繁体字中国語
- `fr/`, `de/`, `es/`, `ja/`, `ko/`, `ru/`: その他の言語

**ドキュメントモジュール**：
- `DevelopmentGuide/`: 開発ガイド
- `FAQ/`: よくある質問
- `GameplayGuide/`: ゲームガイド
- `InstallationTutorial/`: インストールチュートリアル

### リソースディレクトリ

- `public/`: グローバル静的リソース（アイコン、画像など）
- `zh-CN/public/`: 中国語専用リソース
- `obsolete/`: 廃止されたドキュメントファイル

## ファイル命名規則

::: tip 命名規約
- ファイル名は小文字とハイフンを使用：`installation-guide.md`
- ディレクトリ名は PascalCase を採用：`DevelopmentGuide/`
- 各ディレクトリには `index.md` をホームページとして含める必要があります
- 画像リソースは対応するサブディレクトリに配置
:::

## 自動化機能

- **サイドバー自動生成**：ファイル構造と Front Matter に基づく
- **多言語ルーティング**：言語切り替えの自動処理
- **GitHub Actions デプロイ**：コードプッシュ時の自動ビルド・公開
- **ローカル検索**：内蔵全文検索機能

<Contributors />

<GitHistoryInformation />