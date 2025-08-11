---
title: Documentation Writing
description: Complete guide for writing BlockTavern documentation
order: 4
---

# Documentation Writing Guide

This guide will provide detailed information on how to write and maintain high-quality documentation for the BlockTavern project. We use VitePress as the documentation generation tool, supporting modern features such as multi-language support and automatic sidebar generation.

## 1. Quick Start

Creating new documentation only requires three steps:

1. Create a `.md` file in the corresponding language directory
2. Add Front Matter configuration
3. Write content and save
4. Add `<Contributors />` contributor component and `<GitHistoryInformation />` Git history component at the end of the document

::: tip Development Environment
Use `npm run docs:dev` to start local preview with hot reload support.
:::

## 2. Basic Syntax

### 2.1 Common Formats

```markdown
# Page Title (H1)

## Main Section (H2)

### Subsection (H3)

**Bold** _Italic_ `Inline code`

- Unordered list
- [Link text](./other-page.md)
- ![Image](./images/screenshot.png)
```

### 2.2 Code Blocks

````markdown
```javascript
const config = {
  title: "BlockTavern Docs",
  description: "Documentation site",
};
```
````

<Contributors />

<GitHistoryInformation />