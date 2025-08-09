/**
 * Конфигурация русского языка
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
      { text: 'Часто задаваемые вопросы', link: '/ru/FAQ/' },
      { text: 'Руководство разработчика', link: '/ru/DevelopmentGuide/' }
    ],
    sidebar: {
      // Конфигурация боковой панели на русском языке
      '/ru/InstallationTutorial/': [
        {
          text: 'Руководство по установке',
          items: [
            { text: 'Обзор', link: '/ru/InstallationTutorial/' }
          ]
        }
      ],
      '/ru/GameplayGuide/': [
        {
          text: 'Руководство по игре',
          items: [
            { text: 'Обзор', link: '/ru/GameplayGuide/' }
          ]
        }
      ],
      '/ru/FAQ/': [
        {
          text: 'Часто задаваемые вопросы',
          items: [
            { text: 'Обзор', link: '/ru/FAQ/' }
          ]
        }
      ],
      '/ru/DevelopmentGuide/': [
        {
          text: 'Руководство разработчика',
          items: [
            { text: 'Обзор', link: '/ru/DevelopmentGuide/' }
          ]
        }
      ]
    },
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