---
layout: home

hero:
  name: "BlockTavern"
  text: ""
  tagline: Here, every block has a story, every player is a legend
  image:
    src: /logo.png
    alt: BlockTavern Logo
  actions:
    - theme: brand
      text: Enter Tutorial
      link: /en-US/InstallationTutorial/installation-details
    - theme: alt
      text: Development Guide (Contribute Documentation)
      link: /en-US/DevelopmentGuide/development-details

features:
  - icon: 📦
    title: Installation Tutorial
    details: Install the BlockTavern game and prepare to start your adventure
    link: /en-US/InstallationTutorial/installation-details

  - icon: 🎮
    title: Gameplay Guide
    details: Learn the basic rules and gameplay of the game
    link: /en-US/GameplayGuide/server-rules

  - icon: ❓
    title: FAQ
    details: Quickly solve your problems
    link: /en-US/FAQ/faq-details
---

### Contribution Overview

```sh
# Clone the repository
git clone https://github.com/your-username/doc_blocktavern.git

# Switch to the project directory
cd doc_blocktavern

# Install dependencies
npm install

# Start the development server
npm run docs:dev

# Add all changes
git add .

# Commit content
git commit -m "docs: update documentation content"

# Push changes
git push origin main
```

::: warning Note
Please ensure your Node.js version >= 16.0 and you have already forked the original repository.
:::

### Contribution Process

1. **Fork Repository**: Click the "Fork" button in the upper right corner of the repository to create a copy to your GitHub account.
2. **Clone Repository**: Use the `git clone` command to clone your fork to local.
3. **Make Changes**: Make your documentation changes in your local repository.
4. **Commit Changes**: Use `git commit` to commit your changes.
5. **Push Changes**: Use `git push` to push your changes to your fork.
6. **Create Pull Request**: In the original repository, click the "Pull Requests" tab, then click "New Pull Request".
7. **Fill Pull Request Information**:
   - Title: Briefly describe your changes
   - Description: Explain in detail the motivation and impact of your changes
8. **Submit Pull Request**: Click "Create Pull Request" to submit your changes.
9. **Wait for Review**: Project maintainers will review your Pull Request.