---
title: Contribution Guide
description: Complete guide for contributing to BlockTavern documentation
order: 1
---

# Contribution Guide

Welcome to participate in the BlockTavern documentation project! This guide will help you get started quickly and submit high-quality contributions.

## Environment Setup

### System Requirements

- **Node.js** 18+ 
- **Git** latest version
- **GitHub** account

### Recommended Development Tools

- **VS Code** + Markdown extensions
- **GitHub Desktop** (optional)

::: tip Image Optimization
Please compress file size before using local images, or use stable image hosting services to improve loading speed.
:::

## Quick Start

### 1. Fork Project

1. Visit the project repository: [doc_blocktavern](https://github.com/Re0XIAOPA/doc_blocktavern)
2. Click the **Fork** button in the upper right corner
3. Wait for Fork to complete

### 2. Local Development

```bash
# Clone your Fork
git clone https://github.com/YOUR_USERNAME/doc_blocktavern.git
cd doc_blocktavern

# Install dependencies
npm install

# Start development server
npm run docs:dev
```

Visit `http://localhost:5173` to preview the documentation site.

### 3. Create Branch

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Or fix branch
git checkout -b fix/your-fix-name
```

## Contribution Process

### 1. Write Content

- Edit or create documents in the `docs/zh-CN/` directory
- Follow [Documentation Writing Standards](./writing-docs.md)
- Real-time preview: browser automatically refreshes after saving

### 2. Commit Changes

```bash
# Add changed files
git add .

# Commit changes (use standard commit messages)
git commit -m "docs: add new feature description"

# Push to your Fork
git push origin feature/your-feature-name
```

### 3. Create Pull Request

1. Visit your Fork repository page
2. Click the **Compare & pull request** button
3. Fill in PR information:
   - **Title**: Briefly describe the changes
   - **Description**: Explain in detail the reason and impact of changes
4. Click **Create pull request**

### 4. Wait for Review

- Project maintainers will review your PR
- May request modifications or additions
- Will be merged to main branch after review approval

## Commit Standards

### Commit Message Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Type**:
- `docs`: Documentation updates
- `feat`: New features
- `fix`: Bug fixes
- `style`: Format adjustments
- `refactor`: Refactoring

**Examples**:
```bash
git commit -m "docs(guide): add installation tutorial"
git commit -m "fix(config): fix sidebar configuration error"
git commit -m "feat(search): add search functionality"
```

### Branch Naming Standards

- `feature/feature-name`: New feature development
- `fix/issue-description`: Issue fixes
- `docs/document-type`: Documentation updates
- `refactor/refactor-content`: Code refactoring

## Contribution Types

### Documentation Contributions

- **New Documentation**: Create new guides or tutorials
- **Content Enhancement**: Supplement detailed information for existing documents
- **Error Fixes**: Correct incorrect information in documents
- **Translation Work**: Translate Chinese documents to other languages

### Technical Contributions

- **Configuration Optimization**: Improve VitePress configuration
- **Style Enhancement**: Optimize documentation site styles
- **Feature Enhancement**: Add new documentation features
- **Performance Optimization**: Improve site loading speed

## Quality Standards

### Documentation Quality

- [ ] Content is accurate and error-free
- [ ] Language expression is clear
- [ ] Structure hierarchy is reasonable
- [ ] Code examples are runnable
- [ ] Links are valid and accessible
- [ ] Images are clear and appropriate

### Technical Quality

- [ ] Code style is consistent
- [ ] Configuration syntax is correct
- [ ] Build tests pass
- [ ] Good compatibility

## Getting Help

When encountering problems, you can:

1. **Check existing documentation**: [Project Structure](./project-structure.md), [Configuration Instructions](./configuration.md)
2. **Submit Issue**: Create issue reports in the GitHub repository
3. **Contact maintainers**: Through GitHub or community channels
4. **Reference resources**: [VitePress Official Documentation](https://vitepress.dev/)

---

Thank you for your contribution! Every contribution makes BlockTavern documentation better.

<Contributors />

<GitHistoryInformation />