---
title: Konfiguration
description: VitePress-Konfigurationsdatei-Erklärung
order: 3
---

# Konfigurationserklärung

Diese Anleitung erklärt detailliert die VitePress-Konfigurationsdateistruktur des Projekts und wie Sie benutzerdefinierte Konfigurationen vornehmen können。

## 1. Konfigurationsdatei-Übersicht

Das Projekt verwendet modulare Konfigurationsverwaltung und trennt verschiedene Arten von Konfigurationen in verschiedene Dateien im Verzeichnis `docs/.vitepress/components/`, um Wartung und Erweiterung zu erleichtern。 Die wichtigsten Konfigurationsdateien umfassen:

-   `docs/.vitepress/config.mjs`: VitePress-Hauptkonfigurationsdatei
-   `docs/.vitepress/components/index.js`: Einheitliche Exportdatei für Konfigurationskomponenten
-   `docs/.vitepress/components/site.js`: Website-Grundkonfiguration
-   `docs/.vitepress/components/nav.js`: Hauptnavigationskonfiguration (veraltet, bitte verwenden Sie Sprachkonfiguration)
-   `docs/.vitepress/components/sidebar.js`: Seitenleistenkonfiguration (automatisch generiert mit vitepress-sidebar Plugin)
-   `docs/.vitepress/components/language.js`: Mehrsprachige Konfigurationshauptdatei
-   `docs/.vitepress/components/language/`: Spezifische Konfigurationsordner für jede Sprache
-   `docs/.vitepress/components/social.js`: Social-Media-Link-Konfiguration
-   `docs/.vitepress/components/editLink.js`: Bearbeitungslink-Konfiguration

## 2. Website-Konfiguration (`docs/.vitepress/components/site.js`)

Die Website-Konfigurationsdatei definiert die grundlegenden Informationen der Website und die Grundeinstellungen des Themes。 Diese Datei enthält zwei Hauptkonfigurationsobjekte:

### 2.1 Website-Grundkonfiguration (siteConfig)

```javascript
export const siteConfig = {
  title: 'BlockTavern Docs',
  description: 'BlockTavern Minecraft 服务器 - 方块酒馆聚集地',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }]
  ]
}
```

**Hinweis**: Diese Konfiguration kann ignoriert werden, bitte gehen Sie zur Sprachkonfiguration für detaillierte Konfiguration。

### 2.2 Theme-Grundkonfiguration (themeBaseConfig)

```javascript
export const themeBaseConfig = {
  logo: '/logo.png',
  
  // 搜索配置
  search: {
    provider: 'local'
  },

  // 上次更新时间
  lastUpdated: {
    text: '最后更新于',
    formatOptions: {
      dateStyle: 'short',
      timeStyle: 'medium'
    }
  },

  // 页脚配置
  footer: {
    message: 'BlockTavern Docs',
    copyright: 'Copyright © 2025 | 方块酒馆文档站点'
  },

  // 中文本地化配置
  outline: {
    label: '页面导航'
  }
}
```

**Wie zu ändern:**

Bearbeiten Sie einfach die entsprechenden Felder in der Datei `docs/.vitepress/components/site.js`。 Nach Änderungen müssen Sie normalerweise den Entwicklungsserver neu starten oder das Projekt neu erstellen。

## 3. Mehrsprachige Konfiguration

Das Projekt unterstützt mehrsprachige Konfiguration, die hauptsächlich über die folgenden Dateien verwaltet wird:

### 3.1 Mehrsprachige Hauptkonfiguration (`docs/.vitepress/components/language.js`)

```javascript
// 导入各个语言的配置
import { zhConfig } from './language/zh-CN.js'
import { enConfig } from './language/en-US.js'
// ... 其他语言配置

// 多语言配置对象
export const localesConfig = {
  root: zhConfig,        // 默认语言（简体中文）
  // en: enConfig,       // 启用英文版本
  // 其他语言配置（暂时注释，需要时可启用）
}
```

### 3.2 Chinesische Konfiguration (`docs/.vitepress/components/language/zh-CN.js`)

```javascript
export const zhConfig = {
  label: "简体中文",
  lang: "zh-CN",
  link: "/zh-CN/",
  title: "BlockTavern 文档",
  description: "BlockTavern Minecraft 服务器文档",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "安装教程", link: "/zh-CN/InstallationTutorial/installation-details" },
      { text: "游戏指南", link: "/zh-CN/GameplayGuide/command-list" },
      { text: "常见问题", link: "/zh-CN/FAQ/faq-details" },
      { text: "开发指南", link: "/zh-CN/DevelopmentGuide/development-details" }
    ],
    editLink: {
      pattern: "https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path",
      text: "前往 GitHub 编辑此页面"
    },
    outline: { label: "页面导航" },
    lastUpdated: { text: "最后更新于" },
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题"
  }
}
```

**Wie zu ändern:**

1. Navigationskonfiguration ändern: Bearbeiten Sie die Links und Texte im `nav`-Array
2. Neue Sprache hinzufügen: Erstellen Sie eine neue Sprachkonfigurationsdatei im `language`-Ordner
3. Mehrsprachigkeit aktivieren: Kommentieren Sie die entsprechende Sprachkonfiguration in `language.js` aus

## 4. Seitenleisten-Konfiguration (`docs/.vitepress/components/sidebar.js`)

Das Projekt verwendet das `vitepress-sidebar`-Plugin zur automatischen Generierung der Seitenleiste, ohne dass die Seitenleistenstruktur manuell gepflegt werden muss。

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
      // 更多配置选项...
    }
  ]);
}
```

### Konfigurationserklärung

- `documentRootPath`: Dokumenten-Stammverzeichnis
- `useTitleFromFileHeading`: Seitenleistentitel aus Dateititel abrufen
- `useTitleFromFrontmatter`: Titel aus frontmatter abrufen
- `collapsed`: Standard-Einklappzustand
- `collapseDepth`: Einklapptiefe

**Vorteile**: Automatische Generierung der Seitenleiste basierend auf der Dateistruktur, keine manuelle Wartung erforderlich, unterstützt Mehrsprachigkeit。

**Wie zu ändern:**

Passen Sie die Konfigurationsparameter der `generateSidebar`-Funktion nach Bedarf an, detaillierte Konfigurationsoptionen finden Sie in der `vitepress-sidebar`-Plugin-Dokumentation。

## 5. Social-Media-Link-Konfiguration (`docs/.vitepress/components/social.js`)

Die Social-Media-Link-Konfigurationsdatei definiert die auf der Seite angezeigten Social-Media-Links。

```javascript
export const socialLinksConfig = [
  { 
    icon: 'github', 
    link: 'https://github.com/Re0XIAOPA/doc_blocktavern' 
  }
  // 可以根据需要添加更多社交链接
  // { icon: 'discord', link: 'https://discord.gg/your-server' },
  // { icon: 'twitter', link: 'https://twitter.com/your-account' },
  // { icon: 'youtube', link: 'https://youtube.com/your-channel' }
]
```

### Unterstützte Icon-Typen

- `github`: GitHub
- `discord`: Discord
- `twitter`: Twitter/X
- `youtube`: YouTube
- `linkedin`: LinkedIn
- `facebook`: Facebook

## 6. Bearbeitungslink-Konfiguration (`docs/.vitepress/components/editLink.js`)

Die Bearbeitungslink-Konfiguration ermöglicht es Benutzern, direkt zur GitHub-Bearbeitungsseite zu springen。

```javascript
export const editLink = {
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path',
      text: '前往 GitHub 编辑此页面',
    }
  },
  frontmatter: {
    lastUpdated: true,
    contributors: true,
    editLink: {
      pattern: 'https://github.com/Re0XIAOPA/doc_blocktavern/edit/main/docs/:path',
      text: '前往 GitHub 编辑此页面',
    }
  }
};
```

### Konfigurationserklärung

- `pattern`: GitHub-Bearbeitungslink-Vorlage, `:path` wird durch den aktuellen Seitenpfad ersetzt
- `text`: Anzeigetext des Bearbeitungslinks
- `lastUpdated`: Anzeige der letzten Aktualisierungszeit
- `contributors`: Anzeige der Mitwirkenden-Informationen

## 7. Haupt-Konfigurationsdatei (`docs/.vitepress/config.mjs`)

Die Haupt-Konfigurationsdatei ist die Eingangskonfiguration von VitePress, die alle modularen Konfigurationen integriert。

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

## 8. Umgebungsvariablen

Das Projekt verwendet Umgebungsvariablen zur Verwaltung von Konfigurationen in verschiedenen Umgebungen。Die wichtigsten Umgebungsvariablen umfassen：

```bash
# Entwicklungsumgebung
NODE_ENV=development

# Produktionsumgebung
NODE_ENV=production

# Basispfad (bei Bereitstellung in Unterverzeichnis)
BASE_URL=/docs/
```

**Verwendung von Umgebungsvariablen in der Konfiguration:**

```javascript
export const siteConfig = {
  base: process.env.BASE_URL || '/',
  // 其他配置...
}
```

## 9. Häufige Probleme und Fehlerbehebung

### 9.1 Konfigurationsbezogene Probleme

- **Konfiguration wird nicht wirksam**: Stellen Sie sicher, dass die richtige Konfigurationsdatei geändert wurde und starten Sie den Entwicklungsserver neu
- **Seitenleiste wird nicht angezeigt**: Überprüfen Sie, ob die Dateistruktur den Anforderungen des `vitepress-sidebar`-Plugins entspricht
- **Mehrsprachige Umschaltprobleme**: Überprüfen Sie, ob die Pfadkonfiguration in `language.js` korrekt ist

### 9.2 Build-bezogene Probleme

- **Build-Fehler**: Überprüfen Sie, ob die ES6-Modulsyntax in allen Konfigurationsdateien korrekt ist
- **Pfadfehler**: Stellen Sie sicher, dass alle Dateipfade korrekte relative oder absolute Pfade verwenden

### 9.3 Entwicklungsempfehlungen

1. **Modulare Konfiguration**: Behalten Sie die modulare Struktur der Konfigurationsdateien bei, um die Wartung zu erleichtern
2. **Dokumentstruktur**: Befolgen Sie die etablierte Dokumentverzeichnisstruktur, um sicherzustellen, dass die automatische Seitenleistengenerierung ordnungsgemäß funktioniert
3. **Mehrsprachige Unterstützung**: Stellen Sie beim Hinzufügen neuer Sprachen sicher, dass diese in `language.js` korrekt konfiguriert sind

---

Mit den obigen Konfigurationserklärungen sollten Sie in der Lage sein, die verschiedenen Konfigurationsdateien entsprechend den Projektanforderungen zu ändern und anzupassen。Bei spezifischen Problemen wird empfohlen, die [offizielle VitePress-Dokumentation](https://vitepress.dev/) oder die [vitepress-sidebar Plugin-Dokumentation](https://vitepress-sidebar.cdget.com/) zu konsultieren。

<Contributors />

<GitHistoryInformation />