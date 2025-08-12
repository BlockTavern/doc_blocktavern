---
title: Configuration Instructions
description: VitePress configuration file instructions
order: 3
---

# Configuration Instructions

This guide will provide detailed introduction to the project's VitePress configuration file structure and how to perform custom configuration.

## 1. Configuration File Overview

The project adopts modular configuration management, separating different types of configurations into different files under the `docs/.vitepress/components/` directory for easy maintenance and extension. Main configuration files include:

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
  lang: 'zh-CN',
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

  // Chinese localization configuration
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

### 3.2 Chinese Configuration (`docs/.vitepress/components/language/zh-CN.js`)

```javascript
export const zhConfig = {
  label: "Simplified Chinese",
  lang: "zh-CN",
  link: "/zh-CN/",
  title: "BlockTavern Documentation",
  description: "BlockTavern Minecraft Server Documentation",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Installation Tutorial", link: "/zh-CN/InstallationTutorial/installation-details" },
      { text: "Game Guide", link: "/zh-CN/GameplayGuide/command-list" },
      { text: "FAQ", link: "/zh-CN/FAQ/faq-details" },
      { text: "Development Guide", link: "/zh-CN/DevelopmentGuide/development-details" }
    ],
    editLink: {
      pattern: "https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path",
      text: "Go to GitHub to edit this page"
    },
    outline: { label: "Page Navigation" },
    lastUpdated: { text: "Last updated on" },
    langMenuLabel: "Multi-language",
    returnToTopLabel: "Back to top",
    sidebarMenuLabel: "Menu",
    darkModeSwitchLabel: "Theme"
  }
}
```

**How to modify:**

1. Modify navigation configuration: Edit links and text in the `nav` array
2. Add new language: Create new language configuration files in the `language` folder
3. Enable multi-language: Uncomment corresponding language configurations in `language.js`

## 4. Sidebar Configuration (`docs/.vitepress/components/sidebar.js`)

The project uses the `vitepress-sidebar` plugin to automatically generate sidebars, eliminating the need to manually maintain sidebar structure.

```javascript
import { generateSidebar } from "vitepress-sidebar";

export function generateSidebarConfig() {
  return generateSidebar([
    {
      documentRootPath: "docs",
      scanStartPath: "/",
      basePath: "/",
      resolvePath: "/",
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      useFolderTitleFromIndexFile: true,
      useFolderLinkFromIndexFile: false,
      hyphenToSpace: true,
      underscoreToSpace: true,
      capitalizeFirst: true,
      collapsed: true,
      collapseDepth: 2,
      sortMenusByName: false,
      // More configuration options...
    }
  ]);
}
```

### Configuration Description

- `documentRootPath`: Document root directory
- `useTitleFromFileHeading`: Get sidebar title from file heading
- `useTitleFromFrontmatter`: Get title from frontmatter
- `collapsed`: Default collapse state
- `collapseDepth`: Collapse depth

**Advantages**: Automatically generates sidebar based on file structure, no manual maintenance required, supports multi-language.

**How to modify:**

Adjust the configuration parameters of the `generateSidebar` function as needed. For detailed configuration options, please refer to the `vitepress-sidebar` plugin documentation.

## 5. Social Links Configuration (`docs/.vitepress/components/social.js`)

The social links configuration file defines the social media links displayed on the page.

```javascript
export const socialLinksConfig = [
  { 
    icon: 'github', 
    link: 'https://github.com/Re0XIAOPA/doc_blocktavern' 
  }
  // You can add more social links as needed
  // { icon: 'discord', link: 'https://discord.gg/your-server' },
  // { icon: 'twitter', link: 'https://twitter.com/your-account' },
  // { icon: 'youtube', link: 'https://youtube.com/your-channel' }
]
```

### Supported Icon Types

- `github`: GitHub
- `discord`: Discord
- `twitter`: Twitter/X
- `youtube`: YouTube
- `linkedin`: LinkedIn
- `facebook`: Facebook

## 6. Edit Link Configuration (`docs/.vitepress/components/editLink.js`)

Edit link configuration allows users to jump directly to the GitHub edit page.

```javascript
export const editLink = {
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path',
      text: 'Go to GitHub to edit this page',
    }
  },
  frontmatter: {
    lastUpdated: true,
    contributors: true,
    editLink: {
      pattern: 'https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path',
      text: 'Go to GitHub to edit this page',
    }
  }
};
```

### Configuration Description

- `pattern`: GitHub edit link template, `:path` will be replaced with the current page path
- `text`: Text displayed for the edit link
- `lastUpdated`: Display last updated time
- `contributors`: Display contributor information

## 7. Main Configuration File (`docs/.vitepress/config.mjs`)

The main configuration file is the entry configuration for VitePress, which integrates all modular configurations.

```javascript
import { defineConfig } from 'vitepress'
import { 
  siteConfig, 
  themeBaseConfig, 
  navConfig, 
  socialLinksConfig, 
  localesConfig, 
  generateSidebarConfig, 
  editLink, 
  mdItCustomAttrs 
} from './components/index.js'

export default defineConfig({
  ...siteConfig,
  locales: localesConfig,
  markdown: {
    config: mdItCustomAttrs
  },
  themeConfig: {
    ...themeBaseConfig,
    nav: navConfig,
    sidebar: generateSidebarConfig(),
    socialLinks: socialLinksConfig,
    ...editLink.themeConfig
  }
})
```

## 8. Environment Variables

The project uses environment variables to manage configurations in different environments. Main environment variables include:

```bash
# Development environment
NODE_ENV=development

# Production environment
NODE_ENV=production

# Base path (if deployed in subdirectory)
BASE_URL=/docs/
```

**Using environment variables in configuration:**

```javascript
export const siteConfig = {
  base: process.env.BASE_URL || '/',
  // Other configurations...
}
```

## 9. Common Issues and Troubleshooting

### 9.1 Configuration Related Issues

- **Configuration not taking effect**: Ensure you modified the correct configuration file and restart the development server
- **Sidebar not displaying**: Check if the file structure meets the requirements of the `vitepress-sidebar` plugin
- **Multi-language switching issues**: Verify if the path configuration in `language.js` is correct

### 9.2 Build Related Issues

- **Build failure**: Check if the ES6 module syntax in all configuration files is correct
- **Path errors**: Ensure all file paths use correct relative or absolute paths

### 9.3 Development Suggestions

1. **Modular configuration**: Maintain the modular structure of configuration files for easy maintenance
2. **Document structure**: Follow the established document directory structure to ensure sidebar auto-generation works properly
3. **Multi-language support**: When adding new languages, ensure proper configuration in `language.js`

---

Through the above configuration instructions, you should be able to modify and customize each configuration file according to project requirements. If you encounter specific issues, it is recommended to consult the [VitePress Official Documentation](https://vitepress.dev/) or [vitepress-sidebar Plugin Documentation](https://vitepress-sidebar.cdget.com/).

<Contributors />

<GitHistoryInformation />