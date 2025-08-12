---
title: Dokumentation schreiben
description: Vollständiger Leitfaden zum Schreiben von BlockTavern-Dokumentation
order: 4
---

# Leitfaden zum Schreiben von Dokumentation

Dieser Leitfaden erklärt detailliert, wie Sie hochwertige Dokumentation für das BlockTavern-Projekt schreiben und pflegen. Wir verwenden VitePress als Dokumentationsgenerator-Tool, das moderne Funktionen wie Mehrsprachigkeit und automatische Seitenleistengenerierung unterstützt.

## 1. Schnellstart

Ein neues Dokument zu erstellen erfordert nur drei Schritte:

1. Erstellen Sie eine `.md`-Datei im entsprechenden Sprachverzeichnis
2. Fügen Sie Front Matter-Konfiguration hinzu
3. Schreiben Sie den Inhalt und speichern Sie
4. Fügen Sie am Ende des Dokuments die `<Contributors />`-Komponente für Mitwirkende und die `<GitHistoryInformation />`-Git-Verlaufskomponente hinzu

::: tip Entwicklungsumgebung
Verwenden Sie `npm run docs:dev`, um die lokale Vorschau zu starten, unterstützt Hot-Reload.
:::

## 2. Grundlegende Syntax

### 2.1 Häufig verwendete Formate

```markdown
# Seitentitel (H1)

## Hauptabschnitt (H2)

### Unterabschnitt (H3)

**Fett** _Kursiv_ `Inline-Code`

- Ungeordnete Liste
- [Link-Text](./other-page.md)
- ![Bild](./images/screenshot.png)
```

### 2.2 Codeblöcke

````markdown
```javascript
const config = {
  title: "BlockTavern Docs",
  description: "Dokumentationsseite",
};
```

<!-- Codeblock mit Zeilennummern -->

```javascript{1,3-5}
const config = {
  title: 'BlockTavern Docs', // [!code highlight]
  description: 'Dokumentationsseite',
  version: '1.0.0',
  author: 'BlockTavern Team'
}
```
````

## 3. VitePress-Erweiterungsfunktionen

### 3.1 Informationsboxen

```markdown
::: tip Tipp
Wichtige Empfehlungen oder Tipps
:::

::: warning Warnung
Dinge, die beachtet werden müssen
:::

::: danger Gefahr
Mögliche Risiken oder Fehler
:::

::: details Klicken Sie hier für Details
Einklappbare detaillierte Inhalte
:::
```

### 3.2 Codegruppen

````markdown
::: code-group

```js [config.js]
export default {
  title: "BlockTavern Docs",
};
```

```json [package.json]
{
  "name": "blocktavern-docs"
}
```

:::
````

### 3.3 Code-Hervorhebung

````markdown
```javascript{2,4-6}
const config = {
  title: 'BlockTavern Docs', // Diese Zeile wird hervorgehoben
  description: 'Dokumentationsseite',
  theme: 'default',         // Diese Zeilen werden hervorgehoben
  version: '1.0.0',         // Diese Zeilen werden hervorgehoben
  author: 'Team'            // Diese Zeilen werden hervorgehoben
}
```

<!-- Code-Unterschiede anzeigen -->

```javascript
const config = {
  title: "BlockTavern Docs",
  description: "Dokumentationsseite", // [!code --]
  description: "Minecraft-Server-Dokumentation", // [!code ++]
  version: "1.0.0", // [!code highlight]
};
```
````

### 3.4 Tabellen

```markdown
| Funktion          | Beschreibung                    | Status        |
| ----------------- | ------------------------------- | ------------- |
| Mehrsprachigkeit  | Unterstützt Deutsch-Englisch    | ✅ Abgeschlossen |
| Auto-Seitenleiste | Generiert basierend auf Struktur| ✅ Abgeschlossen |
| Suchfunktion      | Lokale Suche                    | ✅ Abgeschlossen |
| Theme-Wechsel     | Hell-/Dunkel-Theme              | ✅ Abgeschlossen |
```

### 3.5 Mathematische Formeln

```markdown
<!-- Inline-Formel -->

Wenn $a \ne 0$, hat die Gleichung $ax^2 + bx + c = 0$ zwei Lösungen.

<!-- Block-Formel -->

$$
x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}
$$
```

## 4. Schreibrichtlinien

### 4.1 Dateibenennung

- Verwenden Sie Kleinbuchstaben und Bindestriche: `installation-guide.md`
- Vermeiden Sie Chinesisch, Leerzeichen, Unterstriche: ~~`安装指南.md`~~
- Jedes Verzeichnis benötigt `index.md` als Startseite

### 4.2 Front Matter

```yaml
---
title: Seitentitel # Erforderlich
description: Seitenbeschreibung # Erforderlich
order: 1 # Optional, steuert die Sortierung
---
```

### 4.3 Seitenstruktur

```markdown
---
title: Seitentitel
description: Seitenbeschreibung
---

# Seitentitel

Kurze Einführung in den Seiteninhalt.

## Hauptabschnitt

### Unterabschnitt

Spezifischer Inhalt...

<Contributors />
```

**Wichtige Punkte:**
- Jede Seite hat nur einen H1-Titel
- Verwenden Sie nummerierte H2-Abschnitte
- Überspringen Sie keine Titel-Ebenen
- Fügen Sie am Ende der Seite die `<Contributors />`-Komponente hinzu, um Mitwirkende anzuzeigen

## 5. Seitenleisten-Konfiguration

::: tip Automatische Generierung
Das Projekt verwendet das `vitepress-sidebar`-Plugin, um die Seitenleiste automatisch basierend auf der Dateistruktur zu generieren.
:::

### 5.1 Organisationsprinzipien

- Verzeichnisstruktur = Seitenleistenstruktur
- Jedes Verzeichnis benötigt eine `index.md`-Datei
- Verwenden Sie das `order`-Feld zur Sortierungssteuerung
- Ordner verwenden PascalCase-Benennung

## 6. Schreibleitfaden

### 6.1 Schreibprinzipien

- Sprache prägnant und klar, vermeiden Sie lange Sätze
- Klare Struktur, von einfach zu komplex
- Bieten Sie praktische Codebeispiele
- Verwenden Sie Hinweisboxen, um wichtige Punkte hervorzuheben

### 6.2 Format für Schrittanleitungen

````markdown
## Installationsschritte

1. **Projekt herunterladen**
   ```bash
   git clone https://github.com/project.git
   ```
````

2. **Abhängigkeiten installieren**

```bash
npm install
```

::: tip Tipp
Bei Problemen überprüfen Sie die Node.js-Version.
:::

````

### 6.3 Bilder und Medien

- Bilder in das Verzeichnis `docs/public/images/` legen
- Verwenden Sie beschreibende Dateinamen und Alt-Text
- Dateigröße kontrollieren

```markdown
![Konfigurationsoberfläche](./images/config.png "Screenshot der Konfigurationsoberfläche")
````

## 7. Mehrsprachige Unterstützung

Das Projekt unterstützt mehrsprachige Dokumentation:

- Chinesisch (Standard): `docs/zh-CN/`
- Englisch: `docs/en/`
- Andere Sprachen: `docs/ja/`, `docs/ko/` usw.

**Übersetzungsworkflow:**

1. Chinesische Dokumentation in das entsprechende Sprachverzeichnis kopieren
2. Front Matter und Textinhalt übersetzen
3. Links und Formatierung überprüfen
4. Anzeigeeffekt testen

## 8. Commit-Überprüfung

Vor dem Commit bitte bestätigen:

- [ ] Front Matter-Informationen vollständig
- [ ] Titel-Hierarchie angemessen
- [ ] Codebeispiele korrekt
- [ ] Links normal zugänglich
- [ ] Bilder werden normal angezeigt
- [ ] Grammatik und Rechtschreibung korrekt

## 9. Referenzressourcen

**Offizielle Dokumentation:**

- [VitePress-Dokumentation](https://vitepress.dev/)
- [Markdown-Syntax](https://markdown.com.cn/)
- [vitepress-sidebar-Plugin](https://vitepress-sidebar.jooy2.com/)

**Empfohlene Tools:**

- VS Code + Markdown-Erweiterungen
- [Tabellengenerator](https://tablesgenerator.com/markdown_tables)
- [Bildkomprimierung](https://tinypng.com/)

---

Durch Befolgen dieses Leitfadens können Sie hochwertige Dokumentation erstellen. Bei Fragen wenden Sie sich bitte an die Projektbetreuer.

<Contributors />

<GitHistoryInformation />