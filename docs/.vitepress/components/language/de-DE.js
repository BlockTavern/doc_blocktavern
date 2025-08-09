/**
 * Deutsche Sprachkonfiguration
 * German Language Configuration
 */

export const deConfig = {
  label: 'Deutsch',
  lang: 'de-DE',
  link: '/de/',
  title: 'BlockTavern Dokumentation',
  description: 'BlockTavern Minecraft Server Dokumentation',
  themeConfig: {
    nav: [
      { text: 'Startseite', link: '/de/' },
      { text: 'Installation', link: '/de/InstallationTutorial/' },
      { text: 'Spielanleitung', link: '/de/GameplayGuide/' },
      { text: 'FAQ', link: '/de/FAQ/' },
      { text: 'Entwicklerhandbuch', link: '/de/DevelopmentGuide/' }
    ],
    sidebar: {
      // Deutsche Seitenleisten-Konfiguration
      '/de/InstallationTutorial/': [
        {
          text: 'Installations-Tutorial',
          items: [
            { text: 'Übersicht', link: '/de/InstallationTutorial/' }
          ]
        }
      ],
      '/de/GameplayGuide/': [
        {
          text: 'Gameplay-Anleitung',
          items: [
            { text: 'Übersicht', link: '/de/GameplayGuide/' }
          ]
        }
      ],
      '/de/FAQ/': [
        {
          text: 'Häufig gestellte Fragen',
          items: [
            { text: 'Übersicht', link: '/de/FAQ/' }
          ]
        }
      ],
      '/de/DevelopmentGuide/': [
        {
          text: 'Entwicklungshandbuch',
          items: [
            { text: 'Übersicht', link: '/de/DevelopmentGuide/' }
          ]
        }
      ]
    },
    outline: {
      label: 'Auf dieser Seite'
    },
    docFooter: {
      prev: 'Vorherige',
      next: 'Nächste'
    },
    darkModeSwitchLabel: 'Design',
    lightModeSwitchTitle: 'Zum hellen Design wechseln',
    darkModeSwitchTitle: 'Zum dunklen Design wechseln',
    sidebarMenuLabel: 'Menü',
    returnToTopLabel: 'Zurück nach oben',
    lastUpdated: {
      text: 'Zuletzt aktualisiert',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  }
}

export default deConfig