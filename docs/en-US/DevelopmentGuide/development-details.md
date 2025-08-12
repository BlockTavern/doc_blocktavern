---
title: Contribution Guide
description: Detailed contribution guide for BlockTavern documentation
order: 2
---

# Contribution Guide

Welcome to the BlockTavern documentation contribution guide! This document will help you understand how to contribute to our documentation project.

## Environment Setup

### System Requirements
- Node.js 18+ 
- Git
- Text editor (VS Code recommended)

### Recommended Tools
- **VS Code Extensions**:
  - Markdown All in One
  - VitePress snippets
  - GitLens
- **Image Optimization**: Use tools like TinyPNG to compress images before adding them

## Quick Start

### 1. Fork the Repository
```bash
# Clone your fork
git clone https://github.com/your-username/doc_blocktavern.git
cd doc_blocktavern
```

### 2. Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### 3. Create Feature Branch
```bash
# Create and switch to new branch
git checkout -b feature/your-feature-name
```

## Contribution Flow

### 1. Content Creation
- Follow the [Writing Guide](/en-US/DevelopmentGuide/writing-docs) for documentation standards
- Use proper Markdown syntax and VitePress extensions
- Add appropriate front matter to each file

### 2. Committing Changes
```bash
# Add changes
git add .

# Commit with descriptive message
git commit -m "docs: add new installation guide"

# Push to your fork
git push origin feature/your-feature-name
```

### 3. Create Pull Request
- Go to the original repository
- Click "New Pull Request"
- Provide clear description of changes
- Wait for review and feedback

## Commit Specifications

### Message Format
```
type(scope): description

[optional body]

[optional footer]
```

### Types
- `docs`: Documentation changes
- `feat`: New features
- `fix`: Bug fixes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test additions or modifications

### Examples
```bash
git commit -m "docs: add FAQ section for installation issues"
git commit -m "feat: implement new sidebar navigation"
git commit -m "fix: correct broken links in gameplay guide"
```

### Branch Naming
- `feature/description` - New features
- `docs/description` - Documentation updates
- `fix/description` - Bug fixes

## Contribution Types

### Document Contributions
- **Content Writing**: Create new guides, tutorials, or reference materials
- **Translation**: Translate existing content to other languages
- **Proofreading**: Review and improve existing documentation
- **Image Creation**: Design diagrams, screenshots, or illustrations

### Technical Contributions
- **Site Development**: Improve VitePress configuration and features
- **Automation**: Create scripts for content management
- **Performance**: Optimize site loading and navigation
- **Accessibility**: Improve site accessibility features

## Quality Standards

### Document Quality
- **Clarity**: Use clear, concise language
- **Accuracy**: Ensure all information is correct and up-to-date
- **Completeness**: Provide comprehensive coverage of topics
- **Consistency**: Follow established style and formatting guidelines

### Technical Quality
- **Code Standards**: Follow JavaScript/TypeScript best practices
- **Testing**: Test changes thoroughly before submission
- **Performance**: Ensure changes don't negatively impact site performance
- **Compatibility**: Maintain compatibility across different browsers and devices

## Getting Help

If you need assistance:

1. **Check Documentation**: Review existing guides and examples
2. **Search Issues**: Look for similar problems in GitHub issues
3. **Ask Questions**: Create a new issue with the "question" label
4. **Join Community**: Connect with other contributors in our Discord server

<Contributors />

<GitHistoryInformation />