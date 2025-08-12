---
layout: home

hero:
  name: "BlockTavern"
  text: ""
  tagline: Ici, chaque bloc a une histoire, chaque joueur est une légende
  image:
    src: /logo.png
    alt: Logo BlockTavern
  actions:
    - theme: brand
      text: Commencer le tutoriel
      link: /fr-FR/InstallationTutorial/installation-details
    - theme: alt
      text: Guide de développement (Contribuer à la documentation)
      link: /fr-FR/DevelopmentGuide/development-details

features:
  - icon: 📦
    title: Tutoriel d'installation
    details: Installez BlockTavern et préparez-vous pour votre aventure
    link: /fr-FR/InstallationTutorial/installation-details

  - icon: 🎮
    title: Guide de jeu
    details: Apprenez les règles de base et le gameplay
    link: /fr-FR/GameplayGuide/server-rules

  - icon: ❓
    title: Questions fréquemment posées
    details: Résolvez rapidement vos problèmes
    link: /fr-FR/FAQ/faq-details
---

### Résumé des contributions

```sh
# Cloner le dépôt
git clone https://github.com/your-username/doc_blocktavern.git

# Aller au répertoire du projet
cd doc_blocktavern

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run docs:dev

# Ajouter tous les changements
git add .

# Valider le contenu
git commit -m "docs: Mise à jour du contenu de la documentation"

# Pousser les changements
git push origin main
```

::: warning Note
Assurez-vous que votre version de Node.js >= 16.0 et que vous avez forké le dépôt original.
:::

### Flux de contribution

1. **Forker le dépôt** : Cliquez sur le bouton "Fork" en haut à droite du dépôt pour créer une copie dans votre compte GitHub.
2. **Cloner le dépôt** : Utilisez la commande `git clone` pour cloner votre fork localement.
3. **Apporter des modifications** : Effectuez vos modifications de documentation dans votre dépôt local.
4. **Valider les modifications** : Utilisez `git commit` pour valider vos modifications.
5. **Pousser les modifications** : Utilisez `git push` pour pousser vos modifications vers votre fork.
6. **Créer une Pull Request** : Dans le dépôt original, cliquez sur l'onglet "Pull Requests" puis sur "New Pull Request".
7. **Remplir les informations de la Pull Request** :
   - Titre : Décrivez brièvement vos modifications
   - Description : Expliquez en détail la motivation et l'impact de vos modifications
8. **Soumettre la Pull Request** : Cliquez sur "Create Pull Request" pour soumettre vos modifications.
9. **Attendre la révision** : Les mainteneurs du projet réviseront votre Pull Request.
