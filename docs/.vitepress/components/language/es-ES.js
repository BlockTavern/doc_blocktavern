/**
 * 西班牙语语言配置
 * Spanish Language Configuration
 */

export const esConfig = {
  label: "Español",
  lang: "es-ES",
  link: "/es-ES/",
  title: "Documentación BlockTavern",
  description: "Documentación del servidor Minecraft BlockTavern",
  themeConfig: {
    nav: [
      { text: "Inicio", link: "/es-ES/" },
      {
        text: "Instalación",
        link: "/es-ES/InstallationTutorial/installation-details",
      },
      { text: "Guía de juego", link: "/es-ES/GameplayGuide/command-list" },
      { text: "FAQ", link: "/es-ES/FAQ/faq-details" },
      { text: "Guía de desarrollo", link: "/es-ES/DevelopmentGuide/development-details" },
    ],
    // Edit link configuration
    editLink: {
      pattern:
        "https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path",
      text: "Editar esta página en GitHub",
    },
    // 侧边栏配置由 vitepress-sidebar 插件自动生成
    // sidebar 配置已在主配置文件中统一处理
    // 其他主题配置
    outline: {
      label: "En esta página",
    },
    docFooter: {
      prev: "Anterior",
      next: "Siguiente",
    },
    darkModeSwitchLabel: "Tema",
    lightModeSwitchTitle: "Cambiar a tema claro",
    darkModeSwitchTitle: "Cambiar a tema oscuro",
    sidebarMenuLabel: "Menú",
    returnToTopLabel: "Volver arriba",
    lastUpdated: {
      text: "Última actualización",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
  },
};

export default esConfig;
