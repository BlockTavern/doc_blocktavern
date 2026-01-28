/**
 * 阿拉伯语语言配置
 * Arabic Language Configuration
 */

export const arConfig = {
  label: "العربية",
  lang: "ar-SA",
  link: "/ar-SA/",
  title: "وثائق BlockTavern",
  description: "وثائق خادم Minecraft BlockTavern",
  themeConfig: {
    nav: [
      { text: "الرئيسية", link: "/ar-SA/" },
      {
        text: "دليل التثبيت",
        link: "/ar-SA/InstallationTutorial/installation-details",
      },
      { text: "دليل اللعب", link: "/ar-SA/GameplayGuide/command-list" },
      { text: "الأسئلة الشائعة", link: "/ar-SA/FAQ/faq-details" },
    ],
    // Edit link configuration
    editLink: {
      pattern:
        "https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path",
      text: "تحرير هذه الصفحة على GitHub",
    },
    // 侧边栏配置由 vitepress-sidebar 插件自动生成
    // sidebar 配置已在主配置文件中统一处理
    // 其他主题配置
    outline: {
      label: "في هذه الصفحة",
    },
    docFooter: {
      prev: "السابق",
      next: "التالي",
    },
    darkModeSwitchLabel: "المظهر",
    lightModeSwitchTitle: "التبديل إلى المظهر الفاتح",
    darkModeSwitchTitle: "التبديل إلى المظهر الداكن",
    sidebarMenuLabel: "القائمة",
    returnToTopLabel: "العودة إلى الأعلى",
    lastUpdated: {
      text: "آخر تحديث",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
  },
};

export default arConfig;
