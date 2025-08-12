---
title: Troubleshooting Guide
description: Common issues and solutions for VitePress documentation development
order: 3
---

# Troubleshooting Guide

This guide covers common issues you might encounter while developing or maintaining the VitePress documentation site, along with their solutions.

## 1. Development Environment Issues

### Node.js Version Compatibility

**Problem**: Build fails with Node.js version errors

**Solution**:
```bash
# Check current Node.js version
node --version

# Install Node.js 18+ if needed
# Use nvm (recommended)
nvm install 18
nvm use 18

# Or download from official website
# https://nodejs.org/
```

### Dependency Installation Issues

**Problem**: `npm install` fails or shows dependency conflicts

**Solutions**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install

# If issues persist, try using exact versions
npm ci
```

### Port Already in Use

**Problem**: Development server can't start due to port conflicts

**Solution**:
```bash
# Find process using port 5173
lsof -i :5173

# Kill the process
kill -9 <PID>

# Or use a different port
npm run dev -- --port 3000
```

## 2. Build and Deployment Issues

### Build Failures

**Problem**: `npm run build` fails with various errors

**Common Solutions**:

1. **Check for syntax errors in Markdown files**:
   ```bash
   # Use markdownlint to check syntax
   npx markdownlint docs/**/*.md
   ```

2. **Verify front matter format**:
   ```yaml
   ---
   title: Your Title
   description: Your description
   order: 1
   ---
   ```

3. **Check for broken internal links**:
   ```bash
   # Use markdown-link-check
   npx markdown-link-check docs/**/*.md
   ```

### Memory Issues During Build

**Problem**: Build process runs out of memory

**Solution**:
```bash
# Increase Node.js memory limit
node --max-old-space-size=4096 node_modules/.bin/vitepress build docs

# Or set environment variable
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

## 3. Content and Formatting Issues

### Markdown Rendering Problems

**Problem**: Markdown content not rendering correctly

**Common Causes and Solutions**:

1. **Incorrect heading hierarchy**:
   ```markdown
   # H1 - Only one per page
   ## H2 - Main sections
   ### H3 - Subsections
   # Don't skip levels!
   ```

2. **Malformed code blocks**:
   ```markdown
   \`\`\`javascript
   // Ensure proper language specification
   console.log('Hello World');
   \`\`\`
   ```

3. **Broken image links**:
   ```markdown
   ![Alt text](/assets/images/example.png)
   # Ensure image exists in public/assets/images/
   ```

### VitePress Extensions Not Working

**Problem**: Custom containers or other VitePress features not rendering

**Solution**:
```markdown
::: tip
Make sure there's a space after the colon
:::

::: warning
Check for proper closing syntax
:::
```

## 4. Debugging Techniques

### Browser Developer Tools

1. **Console Errors**: Check browser console for JavaScript errors
2. **Network Tab**: Verify all resources are loading correctly
3. **Elements Tab**: Inspect HTML structure and CSS styles

### VitePress Debug Mode

```bash
# Enable debug mode
DEBUG=vitepress:* npm run dev

# Or for build
DEBUG=vitepress:* npm run build
```

### Build Debugging

```bash
# Verbose build output
npm run build -- --debug

# Check build output directory
ls -la docs/.vitepress/dist/
```

### Production Debugging

1. **Serve built files locally**:
   ```bash
   npm run preview
   ```

2. **Check file paths and routing**:
   ```bash
   # Verify all files are generated
   find docs/.vitepress/dist -name "*.html"
   ```

### File Inspection

```bash
# Check file encoding
file -I docs/path/to/file.md

# Verify line endings
cat -A docs/path/to/file.md | head
```

### Common Tools

- **markdown-link-check**: Verify internal and external links
- **markdownlint**: Check Markdown syntax and style
- **Lighthouse**: Analyze site performance and accessibility

## 5. Configuration Issues

### Sidebar Not Displaying

**Problem**: Sidebar navigation not showing or incomplete

**Solutions**:

1. **Check directory structure**:
   ```
   docs/
   ├── en-US/
   │   ├── index.md
   │   ├── Guide/
   │   │   ├── index.md
   │   │   └── getting-started.md
   ```

2. **Verify front matter**:
   ```yaml
   ---
   title: Page Title
   order: 1
   ---
   ```

3. **Check vitepress-sidebar configuration**:
   ```javascript
   // Ensure correct paths in config
   generateSidebar({
     documentRootPath: '/docs',
     scanStartPath: null,
     // ...
   })
   ```

### Multilingual Switching Issues

**Problem**: Language switching not working properly

**Solutions**:

1. **Verify locale configuration**:
   ```javascript
   locales: {
     root: { label: '简体中文', lang: 'zh-CN' },
     'en-US': { label: 'English', lang: 'en-US' }
   }
   ```

2. **Check directory structure matches locale keys**

3. **Update internal links for each language**:
   ```markdown
   [Link](/en-US/guide/getting-started)
   [链接](/zh-CN/guide/getting-started)
   ```

### Image Display Issues

**Problem**: Images not loading or displaying incorrectly

**Solutions**:

1. **Use correct paths**:
   ```markdown
   ![Image](/assets/images/example.png)
   # File should be in docs/public/assets/images/example.png
   ```

2. **Check file permissions and case sensitivity**

3. **Optimize image sizes**:
   ```bash
   # Use tools like imagemin
   npx imagemin docs/public/assets/images/*.png --out-dir=docs/public/assets/images/optimized/
   ```

## 6. Deployment Issues

### GitHub Pages Deployment Failures

**Problem**: Site not deploying to GitHub Pages

**Solutions**:

1. **Check base URL configuration**:
   ```javascript
   export default {
     base: '/repository-name/',
     // ...
   }
   ```

2. **Verify GitHub Actions workflow**:
   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy VitePress site to Pages
   # Check workflow syntax and permissions
   ```

3. **Check repository settings**:
   - Enable GitHub Pages
   - Set correct source branch
   - Verify custom domain settings

### Static Resource 404 Errors

**Problem**: CSS, JS, or image files returning 404 errors

**Solutions**:

1. **Verify base URL in production**
2. **Check file paths in build output**
3. **Ensure proper asset handling**:
   ```javascript
   // In config
   assetsDir: 'assets',
   // Verify assets are copied correctly
   ```

## 7. Quick Diagnosis

When encountering issues, follow this checklist:

1. **Check console for errors**
2. **Verify file paths and naming**
3. **Test in clean environment**
4. **Check recent changes in git history**
5. **Compare with working examples**
6. **Search existing issues and documentation**

<Contributors />

<GitHistoryInformation />