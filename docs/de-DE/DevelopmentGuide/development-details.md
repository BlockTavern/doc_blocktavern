---
title: Beitragsleitfaden
description: Vollständiger Leitfaden für BlockTavern-Dokumentationsbeiträge
order: 1
---

# Beitragsleitfaden

Willkommen beim BlockTavern-Dokumentationsprojekt! Dieser Leitfaden hilft Ihnen dabei, schnell zu beginnen und qualitativ hochwertige Beiträge zu leisten。

## Umgebungsvorbereitung

### Systemanforderungen

- **Node.js** 18+ 
- **Git** neueste Version
- **GitHub**-Konto

### Empfohlene Entwicklungstools

- **VS Code** + Markdown-Erweiterung
- **GitHub Desktop** (optional)

::: tip Bildoptimierung
Bitte komprimieren Sie die Dateigröße vor der Verwendung lokaler Bilder oder verwenden Sie stabile Bildhosting-Dienste, um die Ladegeschwindigkeit zu verbessern。
:::

## Schnellstart

### 1. Projekt forken

1. Besuchen Sie das Projekt-Repository: [doc_blocktavern](https://github.com/Re0XIAOPA/doc_blocktavern)
2. Klicken Sie auf die **Fork**-Schaltfläche in der oberen rechten Ecke
3. Warten Sie, bis der Fork abgeschlossen ist

### 2. Lokale Entwicklung

```bash
# Klonen Sie Ihren Fork
git clone https://github.com/YOUR_USERNAME/doc_blocktavern.git
cd doc_blocktavern

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run docs:dev
```

Besuchen Sie `http://localhost:5173`, um die Dokumentationsseite in der Vorschau anzuzeigen。

### 3. Branch erstellen

```bash
# Feature-Branch erstellen
git checkout -b feature/your-feature-name

# Oder Fix-Branch
git checkout -b fix/your-fix-name
```

## Beitragsprozess

### 1. Inhalte schreiben

- Bearbeiten oder erstellen Sie Dokumente im Verzeichnis `docs/zh-CN/`
- Befolgen Sie die [Dokumentationsschreibstandards](./writing-docs.md)
- Live-Vorschau: Browser wird nach dem Speichern automatisch aktualisiert

### 2. Änderungen committen

```bash
# Geänderte Dateien hinzufügen
git add .

# Änderungen committen (mit standardisierten Commit-Nachrichten)
git commit -m "docs: 添加新功能说明"

# Zu Ihrem Fork pushen
git push origin feature/your-feature-name
```

### 3. Pull Request erstellen

1. Besuchen Sie Ihre Fork-Repository-Seite
2. Klicken Sie auf die Schaltfläche **Compare & pull request**
3. Füllen Sie die PR-Informationen aus:
   - **Titel**: Kurze Beschreibung der Änderungen
   - **Beschreibung**: Detaillierte Erklärung der Gründe und Auswirkungen der Änderungen
4. Klicken Sie auf **Create pull request**

### 4. Auf Review warten

- Projektbetreuer werden Ihren PR überprüfen
- Möglicherweise werden Änderungen oder Ergänzungen angefordert
- Nach erfolgreicher Überprüfung wird er in den Hauptbranch gemergt

## Commit-Standards

### Commit-Nachrichtenformat

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Typen (type)**:
- `docs`: Dokumentationsaktualisierung
- `feat`: Neue Funktion
- `fix`: Fehlerbehebung
- `style`: Formatanpassung
- `refactor`: Refactoring

**Beispiele**:
```bash
git commit -m "docs(guide): 添加安装教程"
git commit -m "fix(config): 修复侧边栏配置错误"
git commit -m "feat(search): 添加搜索功能"
```

### Branch-Namenskonventionen

- `feature/功能名称`: Neue Funktionsentwicklung
- `fix/问题描述`: Fehlerbehebung
- `docs/文档类型`: Dokumentationsaktualisierung
- `refactor/重构内容`: Code-Refactoring

## Beitragstypen

### Dokumentationsbeiträge

- **Neue Dokumente**: Erstellen neuer Leitfäden oder Tutorials
- **Inhaltsverbesserung**: Ergänzung detaillierter Informationen zu bestehenden Dokumenten
- **Fehlerkorrekturen**: Korrektur falscher Informationen in Dokumenten
- **Übersetzungsarbeit**: Übersetzung chinesischer Dokumente in andere Sprachen

### Technische Beiträge

- **Konfigurationsoptimierung**: Verbesserung der VitePress-Konfiguration
- **Stil-Verschönerung**: Optimierung des Dokumentationsseiten-Stils
- **Funktionserweiterung**: Hinzufügung neuer Dokumentationsfunktionen
- **Leistungsoptimierung**: Verbesserung der Seitenladegeschwindigkeit

## Qualitätsstandards

### Dokumentationsqualität

- [ ] Inhalt ist korrekt und fehlerfrei
- [ ] Klare sprachliche Ausdrucksweise
- [ ] Angemessene strukturelle Hierarchie
- [ ] Ausführbare Codebeispiele
- [ ] Gültige und zugängliche Links
- [ ] Klare und angemessene Bilder

### Technische Qualität

- [ ] Konsistenter Code-Stil
- [ ] Korrekte Konfigurationssyntax
- [ ] Erfolgreiche Build-Tests
- [ ] Gute Kompatibilität

## Hilfe erhalten

Bei Problemen können Sie:

1. **Bestehende Dokumentation einsehen**: [Projektstruktur](./project-structure.md), [Konfigurationserklärung](./configuration.md)
2. **Issue einreichen**: Problembericht im GitHub-Repository erstellen
3. **Betreuer kontaktieren**: Über GitHub oder Community-Kanäle
4. **Referenzressourcen**: [VitePress Offizielle Dokumentation](https://vitepress.dev/)

---

Vielen Dank für Ihren Beitrag! Jeder Beitrag macht die BlockTavern-Dokumentation besser.

<Contributors />

<GitHistoryInformation />