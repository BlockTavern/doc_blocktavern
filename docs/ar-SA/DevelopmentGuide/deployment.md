---
title: Deployment Guide
description: Guide for deploying VitePress documentation to various platforms
order: 5
---

# Deployment Guide

This guide covers how to deploy your VitePress documentation site to various hosting platforms. We'll cover the most popular options and provide step-by-step instructions for each.

## Pre-deployment Checklist

Before deploying, ensure:

- [ ] All content is reviewed and tested
- [ ] Build process completes without errors
- [ ] All links work correctly
- [ ] Images and assets load properly
- [ ] Site performs well on different devices
- [ ] SEO metadata is properly configured

## GitHub Pages Deployment

GitHub Pages is a free hosting service that's perfect for documentation sites.

### Automatic Deployment with GitHub Actions

1. **Create workflow file**:
   Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy VitePress site to Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build with VitePress
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. **Configure repository settings**:
   - Go to repository Settings → Pages
   - Set source to "GitHub Actions"
   - Save the configuration

3. **Update VitePress config**:
   ```javascript
   export default {
     base: '/repository-name/', // Replace with your repo name
     // ... other config
   }
   ```

### Manual Deployment

For manual deployment to GitHub Pages:

```bash
# Build the site
npm run build

# Navigate to build output
cd docs/.vitepress/dist

# Initialize git and push to gh-pages branch
git init
git add -A
git commit -m 'Deploy documentation'
git branch -M gh-pages
git remote add origin https://github.com/username/repository.git
git push -f origin gh-pages
```

## Vercel Deployment

Vercel offers excellent performance and easy deployment for static sites.

### Automatic Deployment

1. **Connect repository**:
   - Visit [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect VitePress

2. **Configure build settings** (if needed):
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "docs/.vitepress/dist",
     "installCommand": "npm install"
   }
   ```

3. **Environment variables** (if needed):
   Set any required environment variables in Vercel dashboard

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Build the site
npm run build

# Deploy
vercel --prod docs/.vitepress/dist
```

## Netlify Deployment

Netlify provides powerful features like form handling and edge functions.

### Automatic Deployment

1. **Connect repository**:
   - Visit [Netlify](https://netlify.com)
   - Connect your Git repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `docs/.vitepress/dist`

2. **Create `netlify.toml`** (optional):
   ```toml
   [build]
     command = "npm run build"
     publish = "docs/.vitepress/dist"
   
   [build.environment]
     NODE_VERSION = "18"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

### Manual Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the site
npm run build

# Deploy
netlify deploy --prod --dir docs/.vitepress/dist
```

## Cloudflare Pages

Cloudflare Pages offers global CDN and excellent performance.

### Setup Process

1. **Connect repository**:
   - Visit [Cloudflare Pages](https://pages.cloudflare.com)
   - Connect your GitHub/GitLab repository

2. **Configure build settings**:
   - Framework preset: None
   - Build command: `npm run build`
   - Build output directory: `docs/.vitepress/dist`
   - Node.js version: 18

3. **Custom domain** (optional):
   - Add custom domain in Pages dashboard
   - Configure DNS settings

## Firebase Hosting

Google Firebase offers reliable hosting with easy integration.

### Setup Process

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**:
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configure `firebase.json`**:
   ```json
   {
     "hosting": {
       "public": "docs/.vitepress/dist",
       "ignore": [
         "firebase.json",
         "**/.*",
         "**/node_modules/**"
       ],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

4. **Deploy**:
   ```bash
   npm run build
   firebase deploy
   ```

## Custom Server Deployment

For deployment to your own server or VPS.

### Using Docker

1. **Create `Dockerfile`**:
   ```dockerfile
   FROM node:18-alpine AS builder
   
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   
   COPY . .
   RUN npm run build
   
   FROM nginx:alpine
   COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html
   
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **Build and run**:
   ```bash
   docker build -t docs-site .
   docker run -p 80:80 docs-site
   ```

### Using PM2 (Node.js)

1. **Install PM2**:
   ```bash
   npm install -g pm2
   ```

2. **Create `ecosystem.config.js`**:
   ```javascript
   module.exports = {
     apps: [{
       name: 'docs-site',
       script: 'serve',
       args: 'docs/.vitepress/dist -s -l 3000',
       instances: 1,
       autorestart: true,
       watch: false,
       max_memory_restart: '1G'
     }]
   }
   ```

3. **Deploy**:
   ```bash
   npm run build
   pm2 start ecosystem.config.js
   ```

## Performance Optimization

### Build Optimization

```javascript
// vite.config.ts
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue'],
          // Split large dependencies
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
}
```

### CDN Configuration

```javascript
// .vitepress/config.ts
export default {
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' }]
  ]
}
```

### Image Optimization

```bash
# Optimize images before deployment
npx imagemin docs/public/assets/images/*.{jpg,png} --out-dir=docs/public/assets/images/optimized/
```

## Monitoring and Analytics

### Google Analytics

```javascript
// .vitepress/config.ts
export default {
  head: [
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `]
  ]
}
```

### Uptime Monitoring

Set up monitoring with services like:
- UptimeRobot
- Pingdom
- StatusCake

## Troubleshooting Deployment Issues

### Common Problems

1. **404 errors on refresh**:
   - Configure server redirects for SPA routing
   - Add rewrite rules to hosting platform

2. **Assets not loading**:
   - Check base URL configuration
   - Verify asset paths in build output

3. **Build failures**:
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Review build logs for specific errors

### Debug Commands

```bash
# Test build locally
npm run build
npm run preview

# Check build output
ls -la docs/.vitepress/dist/

# Verify asset paths
find docs/.vitepress/dist -name "*.html" -exec grep -l "assets" {} \;
```

## Security Considerations

### HTTPS Configuration
- Always use HTTPS in production
- Configure SSL certificates
- Set up HSTS headers

### Content Security Policy

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';">
```

### Environment Variables
- Never commit sensitive data
- Use platform-specific environment variable management
- Rotate API keys regularly

<Contributors />

<GitHistoryInformation />