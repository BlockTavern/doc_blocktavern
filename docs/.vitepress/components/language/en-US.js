/**
 * 英文语言配置
 * English Language Configuration
 */

export const enConfig = {
  label: "English",
  lang: "en-US",
  link: "/en/",
  title: "BlockTavern Docs",
  description: "BlockTavern Minecraft Server Documentation",
  themeConfig: {
    nav: [
      { text: "Home", link: "/en/" },
      { text: "Installation", link: "/en/InstallationTutorial/" },
      { text: "Gameplay Guide", link: "/en/GameplayGuide/" },
      { text: "FAQ", link: "/en/FAQ/" },
      { text: "Development", link: "/en/DevelopmentGuide/" },
    ],
    // Edit link configuration
    editLink: {
      pattern:
        "https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    // 侧边栏配置由 vitepress-sidebar 插件自动生成
    // sidebar 配置已在主配置文件中统一处理
    outline: {
      label: "On this page",
    },
    docFooter: {
      prev: "Previous",
      next: "Next",
    },
    darkModeSwitchLabel: "Theme",
    lightModeSwitchTitle: "Switch to light theme",
    darkModeSwitchTitle: "Switch to dark theme",
    sidebarMenuLabel: "Menu",
    returnToTopLabel: "Return to top",
    lastUpdated: {
      text: "Last updated",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
  },
};

export default enConfig;