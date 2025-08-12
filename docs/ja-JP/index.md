---
layout: home

hero:
  name: "BlockTavern"
  text: ""
  tagline: ここでは、すべてのブロックに物語があり、すべてのプレイヤーが伝説です
  image:
    src: /logo.png
    alt: BlockTavern Logo
  actions:
    - theme: brand
      text: チュートリアルを開始
      link: /ja-JP/InstallationTutorial/installation-details
    - theme: alt
      text: 開発ガイド（ドキュメント貢献）
      link: /ja-JP/DevelopmentGuide/development-details

features:
  - icon: 📦
    title: インストールチュートリアル
    details: BlockTavernゲームをインストールして、冒険を始める準備をしましょう
    link: /ja-JP/InstallationTutorial/installation-details

  - icon: 🎮
    title: ゲームプレイガイド
    details: ゲームの基本ルールと遊び方を学びましょう
    link: /ja-JP/GameplayGuide/server-rules

  - icon: ❓
    title: よくある質問
    details: 問題を素早く解決しましょう
    link: /ja-JP/FAQ/faq-details
---

### 貢献の概要

```sh
# リポジトリをクローン
git clone https://github.com/your-username/doc_blocktavern.git

# プロジェクトディレクトリに移動
cd doc_blocktavern

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run docs:dev

# すべての変更を追加
git add .

# 内容をコミット
git commit -m "docs: ドキュメント内容を更新"

# 変更をプッシュ
git push origin main
```

::: warning 注意
Node.js のバージョンが >= 16.0 であることを確認し、元のリポジトリを既にフォークしていることを確認してください。
:::

### 貢献プロセス

1. **リポジトリをフォーク**：リポジトリの右上角にある「Fork」ボタンをクリックして、GitHub アカウントにコピーを作成します。
2. **リポジトリをクローン**：`git clone`コマンドを使用してフォークをローカルにクローンします。
3. **変更を行う**：ローカルリポジトリでドキュメントの変更を行います。
4. **変更をコミット**：`git commit`を使用して変更をコミットします。
5. **変更をプッシュ**：`git push`を使用してフォークに変更をプッシュします。
6. **プルリクエストを作成**：元のリポジトリで「Pull Requests」タブをクリックし、「New Pull Request」をクリックします。
7. **プルリクエスト情報を記入**：

   * タイトル：変更を簡潔に説明

   * 説明：変更の動機と影響を詳細に説明
8. **プルリクエストを提出**：「Create Pull Request」をクリックして変更を提出します。
9. **レビューを待つ**：プロジェクトメンテナーがプルリクエストをレビューします。

