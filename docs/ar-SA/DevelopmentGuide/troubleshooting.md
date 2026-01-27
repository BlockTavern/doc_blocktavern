---
title: Troubleshooting
description: Server troubleshooting directory
order: 5
---

# Troubleshooting

Quickly resolve common issues in BlockTavern documentation development.

## Development Issues

### Server Startup Failure

```bash
npm run docs:dev
```

**Solutions**:
- Check Node.js version (recommended 18+)
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check port occupation: `netstat -ano | findstr :5173`

### Build Failure

```bash
npm run docs:build
```

**Solutions**:
- Check Markdown syntax errors
- Verify all internal links are valid
- Check configuration file syntax

### Page Anomalies

**Common Symptoms**: Content display errors, style anomalies

**Solutions**:
- Clear browser cache (Ctrl+F5)
- Check Front Matter format
- Verify image path correctness

### Search Failure

**Solutions**:
- Rebuild the project
- Check browser console errors
- Verify search configuration

## Debugging Techniques

### Development Debugging

**Browser Developer Tools** (F12):
- Console to view error messages
- Network panel to check resource loading
- Elements panel to debug styles

**VitePress Debug Mode**:
```bash
# Windows
set DEBUG=vitepress:* && npm run docs:dev

# Linux/Mac
DEBUG=vitepress:* npm run docs:dev
```

**Build Debugging**:
```bash
npm run docs:build -- --debug
```

### Production Debugging

**Local Preview**:
```bash
npm run docs:build
npm run docs:preview
```

**File Inspection**:
- Build output: `docs/.vitepress/dist/`
- Static resources: `docs/.vitepress/dist/assets/`
- Page files: Check HTML structure

### Common Tools

- **Link Checking**: Use `markdown-link-check` to verify links
- **Syntax Checking**: Use `markdownlint` to check formatting
- **Performance Analysis**: Browser Lighthouse tool

## Configuration Issues

### Sidebar Not Displaying

**Cause**: File structure does not comply with auto-generation rules

**Solutions**:
- Ensure directories contain `index.md` files
- Check file naming conventions (lowercase + hyphens)
- Verify Front Matter format is correct

### Multilingual Switching Anomalies

**Solutions**:
- Check `language.js` configuration
- Ensure consistent directory structure across languages
- Verify path mapping is correct

### Images Cannot Display

**Solutions**:
- Use relative paths: `./images/pic.png`
- Check if files exist in `public/` directory
- Verify filename case matching

## Deployment Issues

### GitHub Pages Deployment Failure

**Solutions**:
- Check GitHub Actions workflow configuration
- Ensure `base` path is set correctly
- Verify repository permissions and branch settings

### Static Resources 404

**Solutions**:
- Check if `base` configuration matches deployment path
- Ensure resource files are in `public/` directory
- Verify build output completeness

## Quick Diagnosis

::: tip Problem Troubleshooting Steps
1. **View Error Messages**: Console/terminal output
2. **Check File Structure**: Ensure compliance with specifications
3. **Verify Configuration**: Syntax and path correctness
4. **Clean and Rebuild**: Delete cache and rebuild
5. **Compare Working Version**: Git difference comparison
:::

<Contributors />

<GitHistoryInformation />