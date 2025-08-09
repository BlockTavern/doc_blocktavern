/**
 * 日本語言語設定
 * Japanese Language Configuration
 */

export const jaConfig = {
  label: '日本語',
  lang: 'ja-JP',
  link: '/ja/',
  title: 'BlockTavern ドキュメント',
  description: 'BlockTavern Minecraft サーバードキュメント',
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/ja/' },
      { text: 'インストール', link: '/ja/InstallationTutorial/' },
      { text: 'ゲームガイド', link: '/ja/GameplayGuide/' },
      { text: 'よくある質問', link: '/ja/FAQ/' },
      { text: '開発ガイド', link: '/ja/DevelopmentGuide/' }
    ],
    sidebar: {
      // 日本語サイドバー設定
      '/ja/InstallationTutorial/': [
        {
          text: 'インストールチュートリアル',
          items: [
            { text: '概要', link: '/ja/InstallationTutorial/' }
          ]
        }
      ],
      '/ja/GameplayGuide/': [
        {
          text: 'ゲームプレイガイド',
          items: [
            { text: '概要', link: '/ja/GameplayGuide/' }
          ]
        }
      ],
      '/ja/FAQ/': [
        {
          text: 'よくある質問',
          items: [
            { text: '概要', link: '/ja/FAQ/' }
          ]
        }
      ],
      '/ja/DevelopmentGuide/': [
        {
          text: '開発ガイド',
          items: [
            { text: '概要', link: '/ja/DevelopmentGuide/' }
          ]
        }
      ]
    },
    outline: {
      label: 'このページの内容'
    },
    docFooter: {
      prev: '前へ',
      next: '次へ'
    },
    darkModeSwitchLabel: 'テーマ',
    lightModeSwitchTitle: 'ライトテーマに切り替え',
    darkModeSwitchTitle: 'ダークテーマに切り替え',
    sidebarMenuLabel: 'メニュー',
    returnToTopLabel: 'トップに戻る',
    lastUpdated: {
      text: '最終更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  }
}

export default jaConfig