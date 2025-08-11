/**
 * 德语语言配置
 * German Language Configuration
 */

export const deConfig = {
  label: "Deutsch",
  lang: "de-DE",
  link: "/de-DE/",
  title: "BlockTavern Dokumentation",
  description: "BlockTavern Minecraft Server Dokumentation",
  themeConfig: {
    nav: [
      { text: "Startseite", link: "/de-DE/" },
      { text: "Installation", link: "/de-DE/InstallationTutorial/" },
      { text: "Spielanleitung", link: "/de-DE/GameplayGuide/" },
      { text: "FAQ", link: "/de-DE/FAQ/" },
      { text: "Entwicklerhandbuch", link: "/de-DE/DevelopmentGuide/" },
    ],

    // 编辑链接配置
    editLink: {
      pattern:
        "https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path",
      text: "Diese Seite auf GitHub bearbeiten",
    },
    // 侧边栏配置由 vitepress-sidebar 插件自动生成
    // sidebar 配置已在主配置文件中统一处理
    // 其他主题配置
    outline: {
      label: "Auf dieser Seite",
    },
    docFooter: {
      prev: "Vorherige",
      next: "Nächste",
    },
    darkModeSwitchLabel: "Design",
    lightModeSwitchTitle: "Zum hellen Design wechseln",
    darkModeSwitchTitle: "Zum dunklen Design wechseln",
    sidebarMenuLabel: "Menü",
    returnToTopLabel: "Zurück nach oben",
    lastUpdated: {
      text: "Zuletzt aktualisiert",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
  },
};

export default deConfig;