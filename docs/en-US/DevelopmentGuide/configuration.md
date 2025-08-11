---
title: Configuration Instructions
description: VitePress Configuration File Instructions
order: 3
---

# Configuration Instructions

This guide will provide detailed information about the project's VitePress configuration file structure and how to perform custom configurations.

## 1. Configuration File Overview

The project adopts modular configuration management, separating different types of configurations into different files under the `docs/.vitepress/components/` directory for easy maintenance and expansion. Main configuration files include:

-   `docs/.vitepress/config.mjs`: VitePress main configuration file
-   `docs/.vitepress/components/index.js`: Configuration component unified export file
-   `docs/.vitepress/components/site.js`: Site basic configuration
-   `docs/.vitepress/components/nav.js`: Main navigation configuration (deprecated, please use language configuration)
-   `docs/.vitepress/components/sidebar.js`: Sidebar configuration (automatically generated using vitepress-sidebar plugin)
-   `docs/.vitepress/components/language.js`: Multi-language configuration main file
-   `docs/.vitepress/components/language/`: Specific configuration folder for each language
-   `docs/.vitepress/components/social.js`: Social links configuration
-   `docs/.vitepress/components/editLink.js`: Edit link configuration

## 2. Site Configuration (`docs/.vitepress/components/site.js`)

The site configuration file defines the basic information of the website and theme basic settings. This file contains two main configuration objects:

### 2.1 Site Basic Configuration (siteConfig)

```javascript
export const siteConfig = {
  title: 'BlockTavern Docs',
  description: 'BlockTavern Minecraft Server - Block Tavern Gathering Place',
  lang: 'en-US',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }]
  ]
}
```

**Note**: This configuration can be ignored, please go to language configuration for detailed configuration.

### 2.2 Theme Basic Configuration (themeBaseConfig)

```javascript
export const themeBaseConfig = {
  logo: '/logo.png',
  
  // Search configuration
  search: {
    provider: 'local'
  },

  // Last updated time
  lastUpdated: {
    text: 'Last updated on',
    formatOptions: {
      dateStyle: 'short',
      timeStyle: 'medium'
    }
  },

  // Footer configuration
  footer: {
    message: 'BlockTavern Docs',
    copyright: 'Copyright © 2025 | Block Tavern Documentation Site'
  },

  // English localization configuration
  outline: {
    label: 'Page Navigation'
  }
}
```

**How to modify:**

Directly edit the corresponding fields in the `docs/.vitepress/components/site.js` file. After modification, you usually need to restart the development server or rebuild the project.

## 3. Multi-language Configuration

The project supports multi-language configuration, mainly managed through the following files:

### 3.1 Multi-language Main Configuration (`docs/.vitepress/components/language.js`)

```javascript
// Import configurations for each language
import { zhConfig } from './language/zh-CN.js'
import { enConfig } from './language/en-US.js'
// ... other language configurations

// Multi-language configuration object
export const localesConfig = {
  root: zhConfig,        // Default language (Simplified Chinese)
  // en: enConfig,       // Enable English version
  // Other language configurations (temporarily commented, can be enabled when needed)
}
```

<Contributors />

<GitHistoryInformation />