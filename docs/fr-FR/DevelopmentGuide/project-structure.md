---
title: Structure du projet
description: Répertoire de structure du projet serveur
order: 2
---


# Structure du projet

Le projet de documentation BlockTavern est construit avec VitePress et prend en charge l'internationalisation multilingue.

## Structure des répertoires

```
doc_blocktavern/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Déploiement automatique GitHub Actions
├── docs/
│   ├── .vitepress/
│   │   ├── components/         # Répertoire de configuration modulaire
│   │   │   ├── index.js        # Export unifié de configuration
│   │   │   ├── site.js         # Configuration de base du site
│   │   │   ├── language.js     # Configuration principale multilingue
│   │   │   ├── language/       # Fichiers de configuration par langue
│   │   │   │   ├── zh-CN.js    # Configuration chinoise
│   │   │   │   ├── en-US.js    # Configuration anglaise
│   │   │   │   └── ...         # Autres langues
│   │   │   ├── nav.js          # Configuration de navigation
│   │   │   ├── sidebar.js      # Configuration de barre latérale
│   │   │   ├── social.js       # Liens sociaux
│   │   │   ├── editLink.js     # Liens d'édition
│   │   │   └── mdItCustomAttrs.js # Extensions Markdown
│   │   ├── config.mjs          # Configuration principale VitePress
│   │   ├── theme/              # Personnalisation du thème
│   │   ├── plugins/            # Répertoire des plugins
│   │   └── cache/              # Cache de construction
│   ├── zh-CN/                  # Documentation chinoise
│   │   ├── DevelopmentGuide/   # Guide de développement
│   │   ├── FAQ/                # Questions fréquentes
│   │   ├── GameplayGuide/      # Guide de jeu
│   │   ├── InstallationTutorial/ # Tutoriel d'installation
│   │   └── index.md            # Page d'accueil chinoise
│   ├── en/                     # Documentation anglaise
│   ├── fr/                     # Documentation française
│   ├── de/                     # Documentation allemande
│   ├── es/                     # Documentation espagnole
│   ├── ja/                     # Documentation japonaise
│   ├── ko/                     # Documentation coréenne
│   ├── ru/                     # Documentation russe
│   ├── zh-TW/                  # Documentation chinoise traditionnelle
│   ├── public/                 # Ressources statiques
│   │   └── logo.png            # Icône du site
│   └── obsolete/               # Fichiers obsolètes
├── package.json                # Dépendances du projet
├── package-lock.json           # Verrouillage des dépendances
└── README.md                   # Description du projet
```

## Description des répertoires principaux

### Répertoire de configuration `.vitepress/`

**Fichiers principaux** :
- `config.mjs` : Point d'entrée de configuration principal VitePress
- `components/` : Gestion de configuration modulaire
- `theme/` : Styles de thème personnalisés
- `plugins/` : Extensions de plugins fonctionnels
- `cache/` : Fichiers de cache de construction

**Composants de configuration** (`components/`) :
- `site.js` : Informations de base du site
- `language.js` : Configuration principale multilingue
- `language/` : Configurations spécifiques par langue
- `sidebar.js` : Génération automatique de barre latérale
- `nav.js` : Menu de navigation supérieur
- `social.js` : Liens de médias sociaux
- `editLink.js` : Liens d'édition de page

### Structure de documentation multilingue

**Langues prises en charge** :
- `zh-CN/` : Chinois simplifié (langue principale)
- `en/` : Anglais
- `zh-TW/` : Chinois traditionnel
- `fr/`, `de/`, `es/`, `ja/`, `ko/`, `ru/` : Autres langues

**Modules de documentation** :
- `DevelopmentGuide/` : Guide de développement
- `FAQ/` : Questions fréquentes
- `GameplayGuide/` : Guide de jeu
- `InstallationTutorial/` : Tutoriel d'installation

### Répertoire des ressources

- `public/` : Ressources statiques globales (icônes, images, etc.)
- `zh-CN/public/` : Ressources dédiées au chinois
- `obsolete/` : Fichiers de documentation obsolètes

## Conventions de nommage des fichiers

::: tip Conventions de nommage
- Les noms de fichiers utilisent des lettres minuscules et des tirets : `installation-guide.md`
- Les noms de répertoires utilisent PascalCase : `DevelopmentGuide/`
- Chaque répertoire doit contenir un `index.md` comme page d'accueil
- Les ressources d'images sont placées dans les sous-répertoires correspondants
:::

## Fonctionnalités automatisées

- **Génération automatique de barre latérale** : Basée sur la structure des fichiers et Front Matter
- **Routage multilingue** : Gestion automatique du changement de langue
- **Déploiement GitHub Actions** : Construction et publication automatiques lors du push de code
- **Recherche locale** : Fonctionnalité de recherche en texte intégral intégrée

<Contributors />

<GitHistoryInformation />