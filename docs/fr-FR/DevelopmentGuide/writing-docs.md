---
title: Rédaction de documentation
description: Guide complet de rédaction de documentation BlockTavern
order: 4
---

# Guide de rédaction de documentation

Ce guide présente en détail comment rédiger et maintenir une documentation de haute qualité pour le projet BlockTavern. Nous utilisons VitePress comme outil de génération de documentation, qui prend en charge des fonctionnalités modernes telles que le multilingue et la génération automatique de barres latérales.

## 1. Démarrage rapide

Créer une nouvelle documentation ne nécessite que trois étapes :

1. Créer un fichier `.md` dans le répertoire de langue correspondant
2. Ajouter la configuration Front Matter
3. Rédiger le contenu et sauvegarder
4. Ajouter les composants `<Contributors />` et `<GitHistoryInformation />` à la fin du document

::: tip Environnement de développement
Utilisez `npm run docs:dev` pour démarrer l'aperçu local avec rechargement à chaud.
:::

## 2. Syntaxe de base

### 2.1 Formats courants

```markdown
# Titre de page (H1)

## Section principale (H2)

### Sous-section (H3)

**Gras** _Italique_ `code en ligne`

- Liste non ordonnée
- [Texte du lien](./other-page.md)
- ![Image](./images/screenshot.png)
```

### 2.2 Blocs de code

````markdown
```javascript
const config = {
  title: "BlockTavern Docs",
  description: "Site de documentation",
};
```

<!-- Bloc de code avec numéros de ligne -->

```javascript{1,3-5}
const config = {
  title: 'BlockTavern Docs', // [!code highlight]
  description: 'Site de documentation',
  version: '1.0.0',
  author: 'BlockTavern Team'
}
```
````

## 3. Fonctionnalités étendues VitePress

### 3.1 Boîtes d'information

```markdown
::: tip Conseil
Conseils ou astuces importantes
:::

::: warning Avertissement
Éléments à noter
:::

::: danger Danger
Risques ou erreurs possibles
:::

::: details Cliquez pour développer les détails
Contenu détaillé pliable
:::
```

### 3.2 Groupes de code

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

### 3.3 Coloration syntaxique

````markdown
```javascript{2,4-6}
const config = {
  title: 'BlockTavern Docs', // cette ligne sera surlignée
  description: 'Site de documentation',
  theme: 'default',         // ces lignes seront surlignées
  version: '1.0.0',         // ces lignes seront surlignées
  author: 'Team'            // ces lignes seront surlignées
}
```

<!-- Affichage des différences de code -->

```javascript
const config = {
  title: "BlockTavern Docs",
  description: "Site de documentation", // [!code --]
  description: "Documentation serveur Minecraft", // [!code ++]
  version: "1.0.0", // [!code highlight]
};
```
````

### 3.4 Tableaux

```markdown
| Fonctionnalité    | Description                    | Statut       |
| ----------------- | ------------------------------ | ------------ |
| Support multilingue | Support du changement FR/EN   | ✅ Terminé   |
| Barre latérale auto | Générée selon la structure    | ✅ Terminé   |
| Fonction recherche  | Recherche locale              | ✅ Terminé   |
| Changement de thème | Thème clair/sombre            | ✅ Terminé   |
```

### 3.5 Formules mathématiques

```markdown
<!-- Formule en ligne -->

Quand $a \ne 0$, l'équation $ax^2 + bx + c = 0$ a deux solutions.

<!-- Formule en bloc -->

$$
x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}
$$
```

## 4. Normes de rédaction

### 4.1 Nommage des fichiers

- Utiliser des lettres minuscules et des tirets : `installation-guide.md`
- Éviter le chinois, les espaces, les underscores : ~~`guide-installation.md`~~
- Chaque répertoire nécessite un `index.md` comme page d'accueil

### 4.2 Front Matter

```yaml
---
title: Titre de la page # Requis
description: Description de la page # Requis
order: 1 # Optionnel, contrôle l'ordre
---
```

### 4.3 Structure de page

```markdown
---
title: Titre de la page
description: Description de la page
---

# Titre de la page

Brève introduction du contenu de la page.

## Section principale

### Sous-section

Contenu spécifique...

<Contributors />
```

**Points clés :**
- Une seule titre H1 par page
- Utiliser des sections H2 numérotées
- Ne pas sauter de niveaux de titre
- Ajouter le composant `<Contributors />` en fin de page pour afficher les contributeurs

## 5. Configuration de la barre latérale

::: tip Génération automatique
Le projet utilise le plugin `vitepress-sidebar` pour générer automatiquement la barre latérale selon la structure des fichiers.
:::

### 5.1 Principes d'organisation

- Structure de répertoire = Structure de barre latérale
- Chaque répertoire nécessite un fichier `index.md`
- Utiliser le champ `order` pour contrôler l'ordre
- Les dossiers utilisent la nomenclature PascalCase

## 6. Guide de rédaction

### 6.1 Principes de rédaction

- Langage concis et clair, éviter les phrases longues
- Structure claire, du simple au complexe
- Fournir des exemples de code pratiques
- Utiliser des boîtes d'information pour mettre en évidence les points importants

### 6.2 Format d'explication des étapes

````markdown
## Étapes d'installation

1. **Télécharger le projet**
   ```bash
   git clone https://github.com/project.git
   ```
````

2. **Installer les dépendances**

```bash
npm install
```

::: tip Conseil
En cas de problème, vérifiez la version de Node.js.
:::

````

### 6.3 Images et médias

- Placer les images dans le répertoire `docs/public/images/`
- Utiliser des noms de fichiers descriptifs et du texte alt
- Contrôler la taille des fichiers

```markdown
![Interface de configuration](./images/config.png "Capture d'écran de l'interface de configuration")
````

## 7. Support multilingue

Le projet prend en charge la documentation multilingue :

- Chinois (par défaut) : `docs/zh-CN/`
- Anglais : `docs/en/`
- Autres langues : `docs/ja/`, `docs/ko/`, etc.

**Processus de traduction :**

1. Copier la documentation chinoise vers le répertoire de langue correspondant
2. Traduire le Front Matter et le contenu du corps
3. Vérifier les liens et le formatage
4. Tester l'effet d'affichage

## 8. Vérification avant soumission

Avant de soumettre, veuillez confirmer :

- [ ] Informations Front Matter complètes
- [ ] Hiérarchie des titres raisonnable
- [ ] Exemples de code corrects
- [ ] Liens accessibles normalement
- [ ] Images affichées correctement
- [ ] Syntaxe et orthographe correctes

## 9. Ressources de référence

**Documentation officielle :**

- [Documentation VitePress](https://vitepress.dev/)
- [Syntaxe Markdown](https://markdown.com.cn/)
- [Plugin vitepress-sidebar](https://vitepress-sidebar.jooy2.com/)

**Outils recommandés :**

- VS Code + Extension Markdown
- [Générateur de tableaux](https://tablesgenerator.com/markdown_tables)
- [Compression d'images](https://tinypng.com/)

---

Suivre ce guide permet de créer une documentation de haute qualité. En cas de questions, veuillez contacter les mainteneurs du projet.

<Contributors />

<GitHistoryInformation />