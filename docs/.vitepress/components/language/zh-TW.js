/**
 * 繁體中文語言配置
 * Traditional Chinese Language Configuration
 */

export const zhTWConfig = {
  label: "繁體中文",
  lang: "zh-TW",
  link: "/zh-TW/",
  title: "BlockTavern 文檔",
  description: "BlockTavern Minecraft 伺服器文檔",
  themeConfig: {
    nav: [
      { text: "首頁", link: "/zh-TW/" },
      { text: "安裝教程", link: "/zh-TW/InstallationTutorial/" },
      { text: "遊戲指南", link: "/zh-TW/GameplayGuide/" },
      { text: "常見問題", link: "/zh-TW/FAQ/" },
      { text: "開發指南", link: "/zh-TW/DevelopmentGuide/" },
    ],
    // Edit link configuration
    editLink: {
      pattern:
        "https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path",
      text: "前往 GitHub 編輯此頁面",
    },
    // 侧边栏配置由 vitepress-sidebar 插件自动生成
    // sidebar 配置已在主配置文件中统一处理
    // 其他主题配置
    outline: {
      label: "本頁內容",
    },
    docFooter: {
      prev: "上一頁",
      next: "下一頁",
    },
    darkModeSwitchLabel: "主題",
    lightModeSwitchTitle: "切換到淺色主題",
    darkModeSwitchTitle: "切換到深色主題",
    sidebarMenuLabel: "選單",
    returnToTopLabel: "返回頂部",
    lastUpdated: {
      text: "最後更新",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
  },
};

export default zhTWConfig;
