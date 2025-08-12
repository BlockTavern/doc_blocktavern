---
title: Fehlerbehebung
description: Server-Fehlerbehebungsverzeichnis
order: 5
---

# Fehlerbehebung

Schnelle Lösung häufiger Probleme bei der BlockTavern-Dokumentationsentwicklung.

## Entwicklungsprobleme

### Server-Start fehlgeschlagen

```bash
npm run docs:dev
```

**Lösungen**:
- Node.js-Version überprüfen (empfohlen 18+)
- Abhängigkeiten neu installieren: `rm -rf node_modules && npm install`
- Port-Belegung überprüfen: `netstat -ano | findstr :5173`

### Build fehlgeschlagen

```bash
npm run docs:build
```

**Lösungen**:
- Markdown-Syntaxfehler überprüfen
- Gültigkeit aller internen Links verifizieren
- Konfigurationsdateisyntax überprüfen

### Seitenfehler

**Häufige Symptome**: Falsche Inhaltsanzeige, Stilfehler

**Lösungen**:
- Browser-Cache leeren (Ctrl+F5)
- Front Matter-Format überprüfen
- Bildpfad-Korrektheit verifizieren

### Suche funktioniert nicht

**Lösungen**:
- Projekt neu erstellen
- Browser-Konsolenfehler überprüfen
- Suchkonfiguration verifizieren

## Debugging-Techniken

### Entwicklungs-Debugging

**Browser-Entwicklertools** (F12):
- Konsole für Fehlermeldungen anzeigen
- Netzwerk-Panel für Ressourcenladung überprüfen
- Element-Panel für Stil-Debugging

**VitePress Debug-Modus**:
```bash
# Windows
set DEBUG=vitepress:* && npm run docs:dev

# Linux/Mac
DEBUG=vitepress:* npm run docs:dev
```

**Build-Debugging**:
```bash
npm run docs:build -- --debug
```

### Produktions-Debugging

**Lokale Vorschau**:
```bash
npm run docs:build
npm run docs:preview
```

**Dateiüberprüfung**:
- Build-Ausgabe: `docs/.vitepress/dist/`
- Statische Ressourcen: `docs/.vitepress/dist/assets/`
- Seitendateien: HTML-Struktur überprüfen

### Häufig verwendete Tools

- **Link-Überprüfung**: `markdown-link-check` zur Link-Verifizierung verwenden
- **Syntax-Überprüfung**: `markdownlint` zur Formatüberprüfung verwenden
- **Leistungsanalyse**: Browser Lighthouse-Tool

## Konfigurationsprobleme

### Seitenleiste wird nicht angezeigt

**Ursache**: Dateistruktur entspricht nicht den automatischen Generierungsregeln

**Lösungen**:
- Sicherstellen, dass das Verzeichnis eine `index.md`-Datei enthält
- Dateibenennungskonventionen überprüfen (Kleinbuchstaben + Bindestriche)
- Front Matter-Format korrekt verifizieren

### Mehrsprachiger Wechsel fehlerhaft

**Lösungen**:
- `language.js`-Konfiguration überprüfen
- Sicherstellen, dass alle Sprachverzeichnisstrukturen konsistent sind
- Pfad-Mapping korrekt verifizieren

### Bilder können nicht angezeigt werden

**Lösungen**:
- Relative Pfade verwenden: `./images/pic.png`
- Überprüfen, ob Datei im `public/`-Verzeichnis existiert
- Dateinamen-Groß-/Kleinschreibung verifizieren

## Bereitstellungsprobleme

### GitHub Pages Bereitstellung fehlgeschlagen

**Lösungen**:
- GitHub Actions Workflow-Konfiguration überprüfen
- Sicherstellen, dass `base`-Pfad korrekt eingestellt ist
- Repository-Berechtigungen und Branch-Einstellungen verifizieren

### Statische Ressourcen 404

**Lösungen**:
- Überprüfen, ob `base`-Konfiguration dem Bereitstellungspfad entspricht
- Sicherstellen, dass Ressourcendateien im `public/`-Verzeichnis sind
- Build-Ausgabe-Vollständigkeit verifizieren

## Schnelldiagnose

::: tip Problemlösungsschritte
1. **Fehlermeldungen anzeigen**: Konsole/Terminal-Ausgabe
2. **Dateistruktur überprüfen**: Sicherstellen, dass sie den Standards entspricht
3. **Konfiguration verifizieren**: Syntax und Pfad-Korrektheit
4. **Bereinigen und neu erstellen**: Cache löschen und neu erstellen
5. **Mit funktionierender Version vergleichen**: Git-Unterschiede vergleichen
:::

<Contributors />

<GitHistoryInformation />