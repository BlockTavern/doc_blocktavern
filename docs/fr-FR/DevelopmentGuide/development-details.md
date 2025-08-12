---
title: Guide de contribution
description: Guide complet de contribution à la documentation BlockTavern
order: 1
---

# Guide de contribution

Bienvenue dans le projet de documentation BlockTavern ! Ce guide vous aidera à démarrer rapidement et à soumettre des contributions de haute qualité.

## Préparation de l'environnement

### Exigences système

- **Node.js** 18+ 
- **Git** dernière version
- Compte **GitHub**

### Outils de développement recommandés

- **VS Code** + extensions Markdown
- **GitHub Desktop** (optionnel)

::: tip Optimisation des images
Veuillez compresser la taille des fichiers avant d'utiliser des images locales, ou utilisez un service d'hébergement d'images stable pour améliorer la vitesse de chargement.
:::

## Démarrage rapide

### 1. Fork du projet

1. Visitez le dépôt du projet : [doc_blocktavern](https://github.com/Re0XIAOPA/doc_blocktavern)
2. Cliquez sur le bouton **Fork** en haut à droite
3. Attendez que le Fork soit terminé

### 2. Développement local

```bash
# Cloner votre Fork
git clone https://github.com/YOUR_USERNAME/doc_blocktavern.git
cd doc_blocktavern

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run docs:dev
```

Visitez `http://localhost:5173` pour prévisualiser le site de documentation.

### 3. Créer une branche

```bash
# Créer une branche de fonctionnalité
git checkout -b feature/your-feature-name

# Ou une branche de correction
git checkout -b fix/your-fix-name
```

## Processus de contribution

### 1. Rédaction du contenu

- Éditez ou créez des documents dans le répertoire `docs/zh-CN/`
- Suivez les [normes de rédaction de documentation](./writing-docs.md)
- Aperçu en temps réel : le navigateur se rafraîchit automatiquement après sauvegarde

### 2. Soumettre les modifications

```bash
# Ajouter les fichiers modifiés
git add .

# Valider les modifications (en utilisant un message de commit standardisé)
git commit -m "docs: ajouter la description de nouvelle fonctionnalité"

# Pousser vers votre Fork
git push origin feature/your-feature-name
```

### 3. Créer une Pull Request

1. Visitez la page de votre dépôt Fork
2. Cliquez sur le bouton **Compare & pull request**
3. Remplissez les informations PR :
   - **Titre** : Description concise du contenu modifié
   - **Description** : Explication détaillée des raisons et impacts des modifications
4. Cliquez sur **Create pull request**

### 4. Attendre la révision

- Les mainteneurs du projet réviseront votre PR
- Ils peuvent demander des modifications ou des compléments
- Après approbation de la révision, elle sera fusionnée dans la branche principale

## Normes de soumission

### Format des messages de commit

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types (type)** :
- `docs` : Mise à jour de documentation
- `feat` : Nouvelle fonctionnalité
- `fix` : Correction de problème
- `style` : Ajustement de format
- `refactor` : Refactorisation

**Exemples** :
```bash
git commit -m "docs(guide): ajouter tutoriel d'installation"
git commit -m "fix(config): corriger erreur de configuration de barre latérale"
git commit -m "feat(search): ajouter fonctionnalité de recherche"
```

### Normes de nommage des branches

- `feature/nom-fonctionnalité` : Développement de nouvelle fonctionnalité
- `fix/description-problème` : Correction de problème
- `docs/type-documentation` : Mise à jour de documentation
- `refactor/contenu-refactorisation` : Refactorisation de code

## Types de contributions

### Contributions documentaires

- **Nouvelle documentation** : Créer de nouveaux guides ou tutoriels
- **Amélioration du contenu** : Compléter les informations détaillées de la documentation existante
- **Correction d'erreurs** : Corriger les informations erronées dans la documentation
- **Travail de traduction** : Traduire la documentation chinoise vers d'autres langues

### Contributions techniques

- **Optimisation de configuration** : Améliorer la configuration VitePress
- **Embellissement de style** : Optimiser le style du site de documentation
- **Amélioration de fonctionnalités** : Ajouter de nouvelles fonctionnalités de documentation
- **Optimisation de performance** : Améliorer la vitesse de chargement du site

## Normes de qualité

### Qualité documentaire

- [ ] Contenu précis et sans erreur
- [ ] Expression linguistique claire
- [ ] Structure hiérarchique raisonnable
- [ ] Exemples de code exécutables
- [ ] Liens valides et accessibles
- [ ] Images claires et appropriées

### Qualité technique

- [ ] Style de code cohérent
- [ ] Syntaxe de configuration correcte
- [ ] Tests de construction réussis
- [ ] Bonne compatibilité

## Obtenir de l'aide

En cas de problème, vous pouvez :

1. **Consulter la documentation existante** : [Structure du projet](./project-structure.md), [Description de configuration](./configuration.md)
2. **Soumettre une Issue** : Créer un rapport de problème dans le dépôt GitHub
3. **Contacter les mainteneurs** : Via GitHub ou les canaux communautaires
4. **Ressources de référence** : [Documentation officielle VitePress](https://vitepress.dev/)

---

Merci pour votre contribution ! Chaque contribution rend la documentation BlockTavern meilleure.

<Contributors />

<GitHistoryInformation />