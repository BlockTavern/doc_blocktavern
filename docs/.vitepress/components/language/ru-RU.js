/**
 * 俄语语言配置
 * Russian Language Configuration
 */

export const ruConfig = {
  label: 'Русский',
  lang: 'ru-RU',
  link: '/ru/',
  title: 'Документация BlockTavern',
  description: 'Документация сервера Minecraft BlockTavern',
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/ru/' },
      { text: 'Установка', link: '/ru/InstallationTutorial/' },
      { text: 'Руководство по игре', link: '/ru/GameplayGuide/' },
      { text: 'FAQ', link: '/ru/FAQ/' },
      { text: 'Руководство разработчика', link: '/ru/DevelopmentGuide/' }
    ],
    // 侧边栏配置由 vitepress-sidebar 插件自动生成
    // sidebar 配置已在主配置文件中统一处理
    // 其他主题配置
    outline: {
      label: 'На этой странице'
    },
    docFooter: {
      prev: 'Предыдущая',
      next: 'Следующая'
    },
    darkModeSwitchLabel: 'Тема',
    lightModeSwitchTitle: 'Переключить на светлую тему',
    darkModeSwitchTitle: 'Переключить на тёмную тему',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Вернуться к началу',
    lastUpdated: {
      text: 'Последнее обновление',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  }
}

export default ruConfig