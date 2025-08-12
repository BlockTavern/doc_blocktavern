/**
 * 日本語言語設定
 * Japanese Language Configuration
 */

export const jaConfig = {
  label: "日本語",
  lang: "ja-JP",
  link: "/ja-JP/",
  title: "BlockTavern ドキュメント",
  description: "BlockTavern Minecraft サーバードキュメント",
  themeConfig: {
    nav: [
      { text: "ホーム", link: "/ja-JP/" },
      {
        text: "インストール",
        link: "/ja-JP/InstallationTutorial/installation-details",
      },
      { text: "ゲームガイド", link: "/ja-JP/GameplayGuide/command-list" },
      { text: "よくある質問", link: "/ja-JP/FAQ/faq-details" },
      { text: "開発ガイド", link: "/ja-JP/DevelopmentGuide/development-details" },
    ],
    // Edit link configuration
    editLink: {
      pattern:
        "https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path",
      text: "GitHubでこのページを編集する",
    },
    // 侧边栏配置由 vitepress-sidebar 插件自动生成
    // sidebar 配置已在主配置文件中统一处理
    // 其他主题配置
    outline: {
      label: "このページの内容",
    },
    docFooter: {
      prev: "前へ",
      next: "次へ",
    },
    darkModeSwitchLabel: "テーマ",
    lightModeSwitchTitle: "ライトテーマに切り替え",
    darkModeSwitchTitle: "ダークテーマに切り替え",
    sidebarMenuLabel: "メニュー",
    returnToTopLabel: "トップに戻る",
    lastUpdated: {
      text: "最終更新",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
  },
};

export default jaConfig;
