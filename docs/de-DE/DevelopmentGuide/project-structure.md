---
title: Projektstruktur
description: Server-Projektstruktur-Verzeichnis
order: 2
---


# Projektstruktur

Das BlockTavern-Dokumentationsprojekt wird mit VitePress erstellt und unterstützt mehrsprachige Internationalisierung.

## Verzeichnisstruktur

```
doc_blocktavern/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions automatische Bereitstellung
├── docs/
│   ├── .vitepress/
│   │   ├── components/         # Modulare Konfigurationsverzeichnis
│   │   │   ├── index.js        # Einheitlicher Konfigurationsexport
│   │   │   ├── site.js         # Grundlegende Site-Konfiguration
│   │   │   ├── language.js     # Hauptkonfiguration für Mehrsprachigkeit
│   │   │   ├── language/       # Sprachspezifische Konfigurationsdateien
│   │   │   │   ├── zh-CN.js    # Chinesische Konfiguration
│   │   │   │   ├── en-US.js    # Englische Konfiguration
│   │   │   │   └── ...         # Andere Sprachen
│   │   │   ├── nav.js          # Navigationskonfiguration
│   │   │   ├── sidebar.js      # Seitenleistenkonfiguration
│   │   │   ├── social.js       # Soziale Links
│   │   │   ├── editLink.js     # Bearbeitungslinks
│   │   │   └── mdItCustomAttrs.js # Markdown-Erweiterungen
│   │   ├── config.mjs          # VitePress Hauptkonfiguration
│   │   ├── theme/              # Theme-Anpassung
│   │   ├── plugins/            # Plugin-Verzeichnis
│   │   └── cache/              # Build-Cache
│   ├── zh-CN/                  # Chinesische Dokumentation
│   │   ├── DevelopmentGuide/   # Entwicklungsleitfaden
│   │   ├── FAQ/                # Häufig gestellte Fragen
│   │   ├── GameplayGuide/      # Spielleitfaden
│   │   ├── InstallationTutorial/ # Installationsanleitung
│   │   └── index.md            # Chinesische Startseite
│   ├── en/                     # Englische Dokumentation
│   ├── fr/                     # Französische Dokumentation
│   ├── de/                     # Deutsche Dokumentation
│   ├── es/                     # Spanische Dokumentation
│   ├── ja/                     # Japanische Dokumentation
│   ├── ko/                     # Koreanische Dokumentation
│   ├── ru/                     # Russische Dokumentation
│   ├── zh-TW/                  # Traditionelle chinesische Dokumentation
│   ├── public/                 # Statische Ressourcen
│   │   └── logo.png            # Site-Icon
│   └── obsolete/               # Veraltete Dateien
├── package.json                # Projektabhängigkeiten
├── package-lock.json           # Abhängigkeitssperre
└── README.md                   # Projektbeschreibung
```

## Erklärung der Kernverzeichnisse

### `.vitepress/` Konfigurationsverzeichnis

**Hauptdateien**：
- `config.mjs`: VitePress Hauptkonfigurationseinstieg
- `components/`: Modulare Konfigurationsverwaltung
- `theme/`: Benutzerdefinierte Theme-Stile
- `plugins/`: Funktionale Plugin-Erweiterungen
- `cache/`: Build-Cache-Dateien

**Konfigurationskomponenten** (`components/`)：
- `site.js`: Grundlegende Site-Informationen
- `language.js`: Hauptkonfiguration für Mehrsprachigkeit
- `language/`: Sprachspezifische Konfigurationen
- `sidebar.js`: Automatische Seitenleistengenerierung
- `nav.js`: Obere Navigationsmenü
- `social.js`: Social-Media-Links
- `editLink.js`: Seitenbearbeitungslinks

### Mehrsprachige Dokumentationsstruktur

**Unterstützte Sprachen**：
- `zh-CN/`: Vereinfachtes Chinesisch (Hauptsprache)
- `en/`: Englisch
- `zh-TW/`: Traditionelles Chinesisch
- `fr/`, `de/`, `es/`, `ja/`, `ko/`, `ru/`: Andere Sprachen

**Dokumentationsmodule**：
- `DevelopmentGuide/`: Entwicklungsleitfaden
- `FAQ/`: Häufig gestellte Fragen
- `GameplayGuide/`: Spielleitfaden
- `InstallationTutorial/`: Installationsanleitung

### Ressourcenverzeichnisse

- `public/`: Globale statische Ressourcen (Icons, Bilder usw.)
- `zh-CN/public/`: Chinesisch-spezifische Ressourcen
- `obsolete/`: Veraltete Dokumentationsdateien

## Dateibenennungskonventionen

::: tip Benennungskonventionen
- Dateinamen verwenden Kleinbuchstaben und Bindestriche: `installation-guide.md`
- Verzeichnisnamen verwenden PascalCase: `DevelopmentGuide/`
- Jedes Verzeichnis muss eine `index.md` als Startseite enthalten
- Bildressourcen werden in entsprechenden Unterverzeichnissen platziert
:::

## Automatisierungsfunktionen

- **Automatische Seitenleistengenerierung**: Basierend auf Dateistruktur und Front Matter
- **Mehrsprachiges Routing**: Automatische Behandlung von Sprachwechseln
- **GitHub Actions Bereitstellung**: Automatisches Build und Veröffentlichung bei Code-Push
- **Lokale Suche**: Integrierte Volltextsuche

<Contributors />

<GitHistoryInformation />