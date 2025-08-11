/**
 * 中文（简体）语言配置
 * Chinese (Simplified) Language Configuration
 */

export const zhConfig = {
  label: "简体中文",
  lang: "zh-CN",
  link: "/zh-CN/",
  title: "BlockTavern 文档",
  description: "BlockTavern Minecraft 服务器文档",
  themeConfig: {
    
    nav: [
      { text: "首页", link: "/" },
      {
        text: "安装教程",
        link: "/zh-CN/InstallationTutorial/installation-details",
      },
      { text: "游戏指南", link: "/zh-CN/GameplayGuide/command-list" },
      { text: "常见问题", link: "/zh-CN/FAQ/faq-details" },
      { text: "开发指南", link: "/zh-CN/DevelopmentGuide/development-details" },
    ],

    // 编辑链接配置
    editLink: {
      pattern:
        "https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path",
      text: "前往 GitHub 编辑此页面",
    },
    
    // 侧边栏配置由 vitepress-sidebar 插件自动生成
    // sidebar 配置已在主配置文件中统一处理
    // 其他主题配置

    outline: {
      label: "页面导航",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
};

export default zhConfig;
