/**
 * Configuration de langue française
 * French Language Configuration
 */

export const frConfig = {
  label: 'Français',
  lang: 'fr-FR',
  link: '/fr/',
  title: 'Documentation BlockTavern',
  description: 'Documentation du serveur Minecraft BlockTavern',
  themeConfig: {
    nav: [
      { text: 'Accueil', link: '/fr/' },
      { text: 'Installation', link: '/fr/InstallationTutorial/' },
      { text: 'Guide de jeu', link: '/fr/GameplayGuide/' },
      { text: 'FAQ', link: '/fr/FAQ/' },
      { text: 'Guide développeur', link: '/fr/DevelopmentGuide/' }
    ],
    sidebar: {
      // Configuration de la barre latérale française
      '/fr/InstallationTutorial/': [
        {
          text: 'Tutoriel d\'installation',
          items: [
            { text: 'Aperçu', link: '/fr/InstallationTutorial/' }
          ]
        }
      ],
      '/fr/GameplayGuide/': [
        {
          text: 'Guide de gameplay',
          items: [
            { text: 'Aperçu', link: '/fr/GameplayGuide/' }
          ]
        }
      ],
      '/fr/FAQ/': [
        {
          text: 'Questions fréquentes',
          items: [
            { text: 'Aperçu', link: '/fr/FAQ/' }
          ]
        }
      ],
      '/fr/DevelopmentGuide/': [
        {
          text: 'Guide de développement',
          items: [
            { text: 'Aperçu', link: '/fr/DevelopmentGuide/' }
          ]
        }
      ]
    },
    outline: {
      label: 'Sur cette page'
    },
    docFooter: {
      prev: 'Précédent',
      next: 'Suivant'
    },
    darkModeSwitchLabel: 'Thème',
    lightModeSwitchTitle: 'Passer au thème clair',
    darkModeSwitchTitle: 'Passer au thème sombre',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Retour en haut',
    lastUpdated: {
      text: 'Dernière mise à jour',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  }
}

export default frConfig