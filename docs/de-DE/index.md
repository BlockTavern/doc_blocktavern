---
layout: home

hero:
  name: "BlockTavern"
  text: ""
  tagline: Hier hat jeder Block eine Geschichte, jeder Spieler ist eine Legende
  image:
    src: /logo.png
    alt: BlockTavern Logo
  actions:
    - theme: brand
      text: Tutorial starten
      link: /de-DE/InstallationTutorial/installation-details
    - theme: alt
      text: Entwicklungshandbuch (Dokumentation beitragen)
      link: /de-DE/DevelopmentGuide/development-details

features:
  - icon: 📦
    title: Installationsanleitung
    details: Installiere BlockTavern und bereite dich auf dein Abenteuer vor
    link: /de-DE/InstallationTutorial/installation-details

  - icon: 🎮
    title: Spielanleitung
    details: Lerne die grundlegenden Regeln und das Gameplay kennen
    link: /de-DE/GameplayGuide/server-rules

  - icon: ❓
    title: Häufig gestellte Fragen
    details: Löse deine Probleme schnell
    link: /de-DE/FAQ/faq-details
---

### Beitragszusammenfassung

```sh
# Repository klonen
git clone https://github.com/your-username/doc_blocktavern.git

# Zum Projektverzeichnis wechseln
cd doc_blocktavern

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run docs:dev

# Alle Änderungen hinzufügen
git add .

# Inhalt committen
git commit -m "docs: Dokumentationsinhalt aktualisiert"

# Änderungen pushen
git push origin main
```

::: warning Hinweis
Stelle sicher, dass deine Node.js-Version >= 16.0 ist und du das ursprüngliche Repository geforkt hast.
:::

### Beitragsworkflow

1. **Repository forken**: Klicke auf den "Fork"-Button oben rechts im Repository, um eine Kopie in deinem GitHub-Account zu erstellen.
2. **Repository klonen**: Verwende den `git clone`-Befehl, um deinen Fork lokal zu klonen.
3. **Änderungen vornehmen**: Nimm deine Dokumentationsänderungen in deinem lokalen Repository vor.
4. **Änderungen committen**: Verwende `git commit`, um deine Änderungen zu committen.
5. **Änderungen pushen**: Verwende `git push`, um deine Änderungen zu deinem Fork zu pushen.
6. **Pull Request erstellen**: Klicke im ursprünglichen Repository auf den "Pull Requests"-Tab und dann auf "New Pull Request".
7. **Pull Request-Informationen ausfüllen**:
   - Titel: Beschreibe deine Änderungen prägnant
   - Beschreibung: Erkläre detailliert die Motivation und Auswirkungen deiner Änderungen
8. **Pull Request einreichen**: Klicke auf "Create Pull Request", um deine Änderungen einzureichen.
9. **Auf Review warten**: Die Projektbetreuer werden deinen Pull Request überprüfen.
