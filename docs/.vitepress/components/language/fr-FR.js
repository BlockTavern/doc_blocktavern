/**
 * 法语语言配置
 * French Language Configuration
 */

export const frConfig = {
  label: "Français",
  lang: "fr-FR",
  link: "/fr-FR/",
  title: "Documentation BlockTavern",
  description: "Documentation du serveur Minecraft BlockTavern",
  themeConfig: {
    nav: [
      { text: "Accueil", link: "/fr-FR/" },
      { text: "Installation", link: "/fr-FR/InstallationTutorial/" },
      { text: "Guide de jeu", link: "/fr-FR/GameplayGuide/" },
      { text: "FAQ", link: "/fr-FR/FAQ/" },
      { text: "Guide développeur", link: "/fr-FR/DevelopmentGuide/" },
    ],
    // Edit link configuration
    editLink: {
      pattern:
        "https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path",
      text: "Modifier cette page sur GitHub",
    },
    // 侧边栏配置由 vitepress-sidebar 插件自动生成
    // sidebar 配置已在主配置文件中统一处理
    // 其他主题配置
    outline: {
      label: "Sur cette page",
    },
    docFooter: {
      prev: "Précédent",
      next: "Suivant",
    },
    darkModeSwitchLabel: "Thème",
    lightModeSwitchTitle: "Basculer vers le thème clair",
    darkModeSwitchTitle: "Basculer vers le thème sombre",
    sidebarMenuLabel: "Menu",
    returnToTopLabel: "Retour en haut",
    lastUpdated: {
      text: "Dernière mise à jour",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
  },
};

export default frConfig;
