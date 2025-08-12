---
title: Project Structure
description: Server project structure directory
order: 2
---


# Project Structure

The BlockTavern documentation project is built with VitePress and supports multilingual internationalization.

## Directory Structure

```
doc_blocktavern/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions automatic deployment
├── docs/
│   ├── .vitepress/
│   │   ├── components/         # Modular configuration directory
│   │   │   ├── index.js        # Configuration unified export
│   │   │   ├── site.js         # Site basic configuration
│   │   │   ├── language.js     # Multi-language main configuration
│   │   │   ├── language/       # Configuration files for each language
│   │   │   │   ├── zh-CN.js    # Chinese configuration
│   │   │   │   ├── en-US.js    # English configuration
│   │   │   │   └── ...         # Other languages
│   │   │   ├── nav.js          # Navigation configuration
│   │   │   ├── sidebar.js      # Sidebar configuration
│   │   │   ├── social.js       # Social links
│   │   │   ├── editLink.js     # Edit links
│   │   │   └── mdItCustomAttrs.js # Markdown extensions
│   │   ├── config.mjs          # VitePress main configuration
│   │   ├── theme/              # Theme customization
│   │   ├── plugins/            # Plugin directory
│   │   └── cache/              # Build cache
│   ├── zh-CN/                  # Chinese documentation
│   │   ├── DevelopmentGuide/   # Development guide
│   │   ├── FAQ/                # Frequently asked questions
│   │   ├── GameplayGuide/      # Gameplay guide
│   │   ├── InstallationTutorial/ # Installation tutorial
│   │   └── index.md            # Chinese homepage
│   ├── en/                     # English documentation
│   ├── fr/                     # French documentation
│   ├── de/                     # German documentation
│   ├── es/                     # Spanish documentation
│   ├── ja/                     # Japanese documentation
│   ├── ko/                     # Korean documentation
│   ├── ru/                     # Russian documentation
│   ├── zh-TW/                  # Traditional Chinese documentation
│   ├── public/                 # Static resources
│   │   └── logo.png            # Site icon
│   └── obsolete/               # Deprecated files
├── package.json                # Project dependencies
├── package-lock.json           # Dependency lock
└── README.md                   # Project description
```

## Core Directory Description

### `.vitepress/` Configuration Directory

**Main Files**:
- `config.mjs`: VitePress main configuration entry
- `components/`: Modular configuration management
- `theme/`: Custom theme styles
- `plugins/`: Functional plugin extensions
- `cache/`: Build cache files

**Configuration Components** (`components/`):
- `site.js`: Site basic information
- `language.js`: Multi-language main configuration
- `language/`: Specific configuration for each language
- `sidebar.js`: Automatic sidebar generation
- `nav.js`: Top navigation menu
- `social.js`: Social media links
- `editLink.js`: Edit page links

### Multilingual Documentation Structure

**Supported Languages**:
- `zh-CN/`: Simplified Chinese (primary language)
- `en/`: English
- `zh-TW/`: Traditional Chinese
- `fr/`, `de/`, `es/`, `ja/`, `ko/`, `ru/`: Other languages

**Documentation Modules**:
- `DevelopmentGuide/`: Development guide
- `FAQ/`: Frequently asked questions
- `GameplayGuide/`: Gameplay guide
- `InstallationTutorial/`: Installation tutorial

### Resource Directory

- `public/`: Global static resources (icons, images, etc.)
- `zh-CN/public/`: Chinese-specific resources
- `obsolete/`: Deprecated documentation files

## File Naming Conventions

::: tip Naming Conventions
- File names use lowercase letters and hyphens: `installation-guide.md`
- Directory names use PascalCase: `DevelopmentGuide/`
- Each directory must contain `index.md` as the homepage
- Image resources are placed in corresponding subdirectories
:::

## Automation Features

- **Automatic sidebar generation**: Based on file structure and Front Matter
- **Multilingual routing**: Automatic handling of language switching
- **GitHub Actions deployment**: Automatic build and publish on code push
- **Local search**: Built-in full-text search functionality

<Contributors />

<GitHistoryInformation />