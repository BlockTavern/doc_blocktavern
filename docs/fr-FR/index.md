---
layout: home

hero:
name: "BlockTavern"
text: ""
tagline: Ici, chaque bloc a une histoire, chaque joueur est une légende
image:
src: /logo.png
alt: BlockTavern Logo
actions:
  - theme: brand
    text: Commencer le Tutoriel
    link: /fr-FR/InstallationTutorial/installation-details
  - theme: alt\
    text: Guide de Développement (Contribuer à la Documentation)
    link: /fr-FR/DevelopmentGuide/development-details

features:
  - icon: 📦
    title: Tutoriel d'Installation
    details: Installez le jeu BlockTavern et préparez-vous à commencer votre aventure
    link: /fr-FR/InstallationTutorial/installation-details

  - icon: 🎮
    title: Guide de Jeu
    details: Apprenez les règles de base et les mécaniques du jeu
    link: /fr-FR/GameplayGuide/server-rules

  - icon: ❓
    title: Questions Fréquentes
    details: Résolvez vos problèmes rapidement
    link: /fr-FR/FAQ/faq-details
---

### Aperçu des Contributions

```sh
# Cloner le dépôt
git clone https://github.com/your-username/doc_blocktavern.git

# Changer vers le répertoire du projet
cd doc_blocktavern

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run docs:dev

# Ajouter tous les changements
git add .

# Valider le contenu
git commit -m "docs: mise à jour du contenu de la documentation"

# Pousser les changements
git push origin main
```

::: warning Note
Assurez-vous que votre version de Node.js >= 16.0 et que vous avez déjà forké le dépôt original.
:::

### Processus de Contribution

1. **Forker le Dépôt** : Cliquez sur le bouton "Fork" dans le coin supérieur droit du dépôt pour créer une copie dans votre compte GitHub.
2. **Cloner le Dépôt** : Utilisez la commande `git clone` pour cloner votre fork localement.
3. **Effectuer des Modifications** : Apportez vos modifications de documentation dans votre dépôt local.
4. **Valider les Modifications** : Utilisez `git commit` pour valider vos modifications.
5. **Pousser les Modifications** : Utilisez `git push` pour pousser vos modifications vers votre fork.
6. **Créer une Pull Request** : Dans le dépôt original, cliquez sur l'onglet "Pull Requests", puis cliquez sur "New Pull Request".
7. **Remplir les Informations de la Pull Request** :

   - Titre : Décrivez vos modifications de manière concise

   - Description : Expliquez en détail la motivation et l'impact de vos modifications

8. **Soumettre la Pull Request** : Cliquez sur "Create Pull Request" pour soumettre vos modifications.
9. **Attendre la Révision** : Les mainteneurs du projet réviseront votre Pull Request.
