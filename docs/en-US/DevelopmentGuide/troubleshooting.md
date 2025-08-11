---
title: Troubleshooting
description: Server Troubleshooting Directory
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
- Check port usage: `netstat -ano | findstr :5173`

### Build Failure

```bash
npm run docs:build
```

**Solutions**:
- Check Markdown syntax errors
- Verify all internal links are valid
- Check configuration file syntax

### Page Anomalies

**Common symptoms**: Content display errors, style anomalies

**Solutions**:
- Clear browser cache (Ctrl+F5)
- Check Front Matter format
- Verify image path correctness

### Search Failure

**Solutions**:
- Rebuild the project
- Check browser console errors
- Verify search configuration

## Debugging Tips

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

- **Link checking**: Use `markdown-link-check` to verify links
- **Syntax checking**: Use `markdownlint` to check format
- **Performance analysis**: Browser Lighthouse tool

## Configuration Issues

### Sidebar Not Displaying

**Cause**: File structure doesn't conform to auto-generation rules

**Solutions**:
- Ensure directory contains `index.md` file
- Check file naming conventions (lowercase + hyphens)
- Verify Front Matter format is correct

### Multi-language Switching Anomalies

**Solutions**:
- Check `language.js` configuration
- Ensure consistent directory structure across languages
- Verify path mapping is correct

### Images Not Displaying

**Solutions**:
- Use relative paths: `./images/pic.png`
- Check if file exists in `public/` directory
- Verify filename case matching

## Deployment Issues

### GitHub Pages Deployment Failure

**Solutions**:
- Check GitHub Actions workflow configuration
- Ensure `base` path is set correctly
- Verify repository permissions and branch settings

### Static Resource 404

**Solutions**:
- Check if `base` configuration matches deployment path
- Ensure resource files are in `public/` directory
- Verify build output completeness

## Quick Diagnosis

::: tip Problem Troubleshooting Steps
1. **Check error messages**: Console/terminal output
2. **Check file structure**: Ensure compliance with specifications
3. **Verify configuration**: Syntax and path correctness
4. **Clean rebuild**: Delete cache and rebuild
5. **Compare working version**: Git diff comparison
:::

<Contributors />

<GitHistoryInformation />