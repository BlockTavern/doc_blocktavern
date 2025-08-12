---
title: Configuration Guide
description: VitePress configuration and customization guide
order: 1
---

# Configuration Guide

This guide covers the configuration and customization of the VitePress documentation site, including site settings, multilingual support, sidebar configuration, and more.

## 1. Configuration Overview

The VitePress configuration is primarily managed through the following files:
- `config.mjs` - Main configuration file
- `sidebar.mjs` - Sidebar configuration
- Environment variables - Sensitive information and deployment settings

## 2. Site Configuration

### Basic Site Information

In the `config.mjs` file, you can configure basic site information:

```javascript
export default {
  title: 'BlockTavern Documentation',
  description: 'BlockTavern server documentation site',
  base: '/doc_blocktavern/',
  // Other configurations...
}
```

### Navigation Configuration

To modify the navigation bar, edit the `nav` configuration:

```javascript
nav: [
  { text: 'Home', link: '/' },
  { text: 'Installation Tutorial', link: '/InstallationTutorial/' },
  { text: 'Gameplay Guide', link: '/GameplayGuide/' },
  // Add more navigation items...
]
```

## 3. Multilingual Configuration

### Adding New Languages

1. Create a new language directory (e.g., `docs/fr-FR/`)
2. Add language configuration in `config.mjs`:

```javascript
locales: {
  root: {
    label: '简体中文',
    lang: 'zh-CN'
  },
  'en-US': {
    label: 'English',
    lang: 'en-US'
  },
  'fr-FR': {
    label: 'Français',
    lang: 'fr-FR'
  }
}
```

### Enabling Multilingual Support

Ensure each language version has:
- Complete directory structure
- Translated content files
- Proper internal link updates

## 4. Sidebar Configuration

### Using vitepress-sidebar

We use the `vitepress-sidebar` plugin for automatic sidebar generation:

```javascript
import { generateSidebar } from 'vitepress-sidebar'

const sidebar = generateSidebar({
  documentRootPath: '/docs',
  scanStartPath: null,
  resolvePath: '/doc_blocktavern/',
  // Other options...
})
```

### Organizational Principles

1. **Directory Structure**: Use clear directory hierarchy
2. **index.md Requirement**: Each directory must have an `index.md` file
3. **Order Field**: Use `order` field in front matter to control sorting
4. **PascalCase**: Use PascalCase for directory names

## 5. Social Links Configuration

Configure social media links in the theme settings:

```javascript
themeConfig: {
  socialLinks: [
    { icon: 'github', link: 'https://github.com/your-repo' },
    { icon: 'discord', link: 'https://discord.gg/your-server' }
  ]
}
```

## 6. Edit Link Configuration

Enable "Edit this page" links:

```javascript
themeConfig: {
  editLink: {
    pattern: 'https://github.com/your-repo/edit/main/docs/:path',
    text: 'Edit this page on GitHub'
  }
}
```

## 7. Main config.mjs File

The main configuration file structure:

```javascript
import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  // Basic configuration
  title: 'BlockTavern Documentation',
  description: 'Documentation site',
  base: '/doc_blocktavern/',
  
  // Multilingual configuration
  locales: {
    // Language configurations...
  },
  
  // Theme configuration
  themeConfig: {
    // Navigation, sidebar, social links...
  }
})
```

## 8. Environment Variables

For sensitive information, use environment variables:

```bash
# .env file
VITE_API_URL=https://api.example.com
VITE_GITHUB_TOKEN=your_token_here
```

Access in configuration:

```javascript
const apiUrl = process.env.VITE_API_URL
```

## 9. Common Issues and Troubleshooting

### Sidebar Not Displaying
- Check if `index.md` files exist in directories
- Verify `order` field in front matter
- Ensure correct directory structure

### Multilingual Switching Issues
- Confirm language directory structure is correct
- Check internal link paths
- Verify locale configuration

### Image Display Issues
- Use relative paths for images
- Ensure image files exist in correct locations
- Check image file extensions and case sensitivity

<Contributors />

<GitHistoryInformation />