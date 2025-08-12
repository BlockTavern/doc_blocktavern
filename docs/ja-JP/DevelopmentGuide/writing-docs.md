---
title: ドキュメント作成
description: BlockTavern ドキュメント作成完全ガイド
order: 4
---

# ドキュメント作成ガイド

本ガイドでは、BlockTavern プロジェクトのための高品質なドキュメントの作成と保守方法について詳しく説明します。ドキュメント生成ツールとして VitePress を使用し、多言語対応、自動サイドバー生成などの現代的な機能をサポートしています。

## 1. クイックスタート

新しいドキュメントの作成は3ステップだけです：

1. 対応する言語ディレクトリに `.md` ファイルを作成
2. Front Matter 設定を追加
3. 内容を記述して保存
4. ドキュメント末尾に `<Contributors />` 貢献者コンポーネントと `<GitHistoryInformation />` Git履歴コンポーネントを追加

::: tip 開発環境
`npm run docs:dev` を使用してローカルプレビューを開始し、ホットリロードをサポートします。
:::

## 2. 基本構文

### 2.1 一般的な形式

```markdown
# ページタイトル (H1)

## 主要セクション (H2)

### サブセクション (H3)

**太字** _斜体_ `インラインコード`

- 順序なしリスト
- [リンクテキスト](./other-page.md)
- ![画像](./images/screenshot.png)
```

### 2.2 コードブロック

````markdown
```javascript
const config = {
  title: "BlockTavern Docs",
  description: "ドキュメントサイト",
};
```

<!-- 行番号付きコードブロック -->

```javascript{1,3-5}
const config = {
  title: 'BlockTavern Docs', // [!code highlight]
  description: 'ドキュメントサイト',
  version: '1.0.0',
  author: 'BlockTavern Team'
}
```
````

## 3. VitePress 拡張機能

### 3.1 情報提示ボックス

```markdown
::: tip ヒント
重要な提案やコツ
:::

::: warning 警告
注意が必要な事項
:::

::: danger 危険
潜在的なリスクやエラー
:::

::: details クリックして詳細を展開
折りたたみ可能な詳細内容
:::
```

### 3.2 コードグループ

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

### 3.3 コードハイライト

````markdown
```javascript{2,4-6}
const config = {
  title: 'BlockTavern Docs', // この行がハイライトされます
  description: 'ドキュメントサイト',
  theme: 'default',         // これらの行がハイライトされます
  version: '1.0.0',         // これらの行がハイライトされます
  author: 'Team'            // これらの行がハイライトされます
}
```

<!-- コード差分表示 -->

```javascript
const config = {
  title: "BlockTavern Docs",
  description: "ドキュメントサイト", // [!code --]
  description: "Minecraft サーバードキュメント", // [!code ++]
  version: "1.0.0", // [!code highlight]
};
```
````

### 3.4 テーブル

```markdown
| 機能       | 説明             | ステータス |
| ---------- | ---------------- | --------- |
| 多言語対応 | 中英文切り替え対応 | ✅ 完了   |
| 自動サイドバー | ファイル構造に基づく生成 | ✅ 完了   |
| 検索機能   | ローカル検索     | ✅ 完了   |
| テーマ切り替え | ライト・ダークテーマ | ✅ 完了   |
```

### 3.5 数式

```markdown
<!-- インライン数式 -->

$a \ne 0$ のとき、方程式 $ax^2 + bx + c = 0$ は2つの解を持ちます。

<!-- ブロック数式 -->

$$
x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}
$$
```

## 4. 作成規範

### 4.1 ファイル命名

- 小文字とハイフンを使用：`installation-guide.md`
- 中国語、スペース、アンダースコアを避ける：~~`安装指南.md`~~
- 各ディレクトリには `index.md` をホームページとして配置

### 4.2 Front Matter

```yaml
---
title: ページタイトル # 必須
description: ページ説明 # 必須
order: 1 # オプション、順序制御
---
```

### 4.3 ページ構造

```markdown
---
title: ページタイトル
description: ページ説明
---

# ページタイトル

ページ内容の簡潔な紹介。

## 主要セクション

### サブセクション

具体的な内容...

<Contributors />
```

**要点：**
- 各ページには1つのH1タイトルのみ
- 数字番号付きのH2セクションを使用
- タイトル階層をスキップしない
- ページ末尾に `<Contributors />` コンポーネントを追加して貢献者を表示

## 5. サイドバー設定

::: tip 自動生成
プロジェクトは `vitepress-sidebar` プラグインを使用し、ファイル構造に基づいてサイドバーを自動生成します。
:::

### 5.1 組織原則

- ディレクトリ構造 = サイドバー構造
- 各ディレクトリには `index.md` ファイルが必要
- `order` フィールドを使用して順序を制御
- フォルダは PascalCase 命名を使用

## 6. 作成ガイド

### 6.1 作成原則

- 言語は簡潔明瞭で、冗長な文章を避ける
- 構造が明確で、簡単なものから複雑なものへ
- 実際のコード例を提供
- 提示ボックスを使用して重要なポイントを強調

### 6.2 ステップ説明形式

````markdown
## インストール手順

1. **プロジェクトのダウンロード**
   ```bash
   git clone https://github.com/project.git
   ```

2. **依存関係のインストール**

```bash
npm install
```

::: tip ヒント
問題が発生した場合は Node.js のバージョンを確認してください。
:::

````

### 6.3 画像とメディア

- 画像は `docs/public/images/` ディレクトリに配置
- 説明的なファイル名と alt テキストを使用
- ファイルサイズを制御

```markdown
![設定画面](./images/config.png "設定画面のスクリーンショット")
````

## 7. 多言語サポート

### 7.1 ファイル構成

```
docs/
├── zh-CN/          # 中国語（簡体字）
├── en-US/          # 英語
├── ja-JP/          # 日本語
└── ko-KR/          # 韓国語
```

### 7.2 リンク処理

- 内部リンクには言語コードを含める必要があります
- 画像リソースのパスは変更しません

```markdown
<!-- 正しい -->
[インストールガイド](../InstallationTutorial/index.md)

<!-- 間違い -->
[インストールガイド](/ja-JP/InstallationTutorial/index.md)
```

## 8. 提出チェックリスト

- [ ] ファイル命名が規範に準拠
- [ ] Front Matter の形式が正しい
- [ ] コンテンツ構造が明確
- [ ] コード例が実行可能
- [ ] 画像が正常に表示
- [ ] リンクが有効
- [ ] 構文チェックに合格

## 9. 参考リソース

- [VitePress 公式ドキュメント](https://vitepress.dev/)
- [Markdown 構文ガイド](https://www.markdownguide.org/)
- [プロジェクト貢献ガイド](../index.md)

<Contributors />

<GitHistoryInformation />