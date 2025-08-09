/**
 * Configuración de idioma español
 * Spanish Language Configuration
 */

export const esConfig = {
  label: 'Español',
  lang: 'es-ES',
  link: '/es/',
  title: 'Documentación BlockTavern',
  description: 'Documentación del servidor Minecraft BlockTavern',
  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/es/' },
      { text: 'Instalación', link: '/es/InstallationTutorial/' },
      { text: 'Guía de juego', link: '/es/GameplayGuide/' },
      { text: 'Preguntas frecuentes', link: '/es/FAQ/' },
      { text: 'Guía de desarrollo', link: '/es/DevelopmentGuide/' }
    ],
    sidebar: {
      // Configuración de barra lateral en español
      '/es/InstallationTutorial/': [
        {
          text: 'Tutorial de instalación',
          items: [
            { text: 'Resumen', link: '/es/InstallationTutorial/' }
          ]
        }
      ],
      '/es/GameplayGuide/': [
        {
          text: 'Guía de juego',
          items: [
            { text: 'Resumen', link: '/es/GameplayGuide/' }
          ]
        }
      ],
      '/es/FAQ/': [
        {
          text: 'Preguntas frecuentes',
          items: [
            { text: 'Resumen', link: '/es/FAQ/' }
          ]
        }
      ],
      '/es/DevelopmentGuide/': [
        {
          text: 'Guía de desarrollo',
          items: [
            { text: 'Resumen', link: '/es/DevelopmentGuide/' }
          ]
        }
      ]
    },
    outline: {
      label: 'En esta página'
    },
    docFooter: {
      prev: 'Anterior',
      next: 'Siguiente'
    },
    darkModeSwitchLabel: 'Tema',
    lightModeSwitchTitle: 'Cambiar a tema claro',
    darkModeSwitchTitle: 'Cambiar a tema oscuro',
    sidebarMenuLabel: 'Menú',
    returnToTopLabel: 'Volver arriba',
    lastUpdated: {
      text: 'Última actualización',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  }
}

export default esConfig