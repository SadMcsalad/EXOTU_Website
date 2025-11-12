# Deployment

This guide covers deploying the EXOTU website to production using Vercel.

## Overview

The EXOTU website is a static Single Page Application (SPA) built with Vite. The build output is in the `dist/` folder, which can be deployed to any static hosting service.

**Current Hosting**: Vercel (recommended for this project)

## Prerequisites

- GitHub repository connected to Vercel
- Vercel account (free tier works)
- Environment variables configured (if needed)

## Automatic Deployment

### Setup (One-Time)

1. **Push to GitHub**: Ensure your code is in a GitHub repository

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure settings (see below)
   - Deploy

3. **Configuration**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install` (default)
   - **Root Directory**: `./` (default)

### How It Works

- **Automatic**: Every push to `main` branch triggers deployment
- **Preview Deployments**: PRs get preview URLs automatically
- **Status**: Deployment status shown in GitHub PRs

## Manual Deployment

### Using Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login**:
   ```bash
   vercel login
   ```

3. **Link Project** (first time only):
   ```bash
   vercel
   ```
   Follow the prompts to link your project.

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

### Using Build Output

You can also deploy the `dist/` folder to any static host:

1. **Build locally**:
   ```bash
   npm run build
   ```

2. **Upload `dist/` folder** to your hosting service:
   - Netlify
   - GitHub Pages
   - AWS S3 + CloudFront
   - Any static hosting service

## Environment Variables

### Required Variables

Currently, the project uses:

- `VITE_WEB3FORMS_ACCESS_KEY` - For the contact/application form

### Setting in Vercel

1. Go to Project Settings → Environment Variables
2. Add variable:
   - **Name**: `VITE_WEB3FORMS_ACCESS_KEY`
   - **Value**: Your Web3Forms access key
   - **Environment**: Production, Preview, Development (select all)
3. Save

### Getting Web3Forms Key

1. Go to [web3forms.com](https://web3forms.com)
2. Sign up / Login
3. Get your access key
4. Add it to Vercel environment variables

## SPA Routing

The project includes `vercel.json` to handle SPA routing:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This ensures all routes serve `index.html`, allowing client-side routing to work correctly.

## Build Configuration

### Vite Configuration

The build is configured in `vite.config.ts`:

- Output directory: `dist`
- Base path: `/` (root)
- Production optimizations: Enabled automatically

### Build Process

1. TypeScript compilation
2. React component bundling
3. CSS processing (Tailwind)
4. Asset optimization
5. Output to `dist/`

## Deployment Checklist

Before deploying:

- [ ] All tests pass locally
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
- [ ] Build output exists in `dist/`
- [ ] Environment variables configured
- [ ] Images and assets are included
- [ ] No console errors in production build

## Verifying Deployment

1. **Check Build Logs**: Review Vercel deployment logs for errors
2. **Test the Site**: Visit the deployed URL
3. **Check Console**: Open browser console for JavaScript errors
4. **Test Navigation**: Click through all pages
5. **Test Forms**: Submit test form (if applicable)
6. **Check Images**: Verify all images load correctly

## Troubleshooting

### Blank Page After Deployment

1. **Check Browser Console**: Look for JavaScript errors
2. **Verify Build Output**: Ensure `dist/` contains files
3. **Check Routing**: Verify `vercel.json` is present
4. **Check Base Path**: Ensure assets are loading from correct paths

### Images Not Loading

1. **Check Paths**: Ensure image paths start with `/images/`
2. **Verify Files**: Check that images exist in `public/images/`
3. **Check Build**: Images should be copied to `dist/images/`

### Environment Variables Not Working

1. **Check Variable Names**: Must start with `VITE_` for Vite
2. **Redeploy**: Environment variable changes require redeployment
3. **Check Scope**: Ensure variables are set for correct environment

### Build Fails

1. **Check Logs**: Review Vercel build logs
2. **Test Locally**: Run `npm run build` locally
3. **Check Node Version**: Vercel should use Node 18+ (configure in settings)
4. **Check Dependencies**: Ensure `package.json` is correct

## Rollback

If a deployment has issues:

1. **Vercel Dashboard**:
   - Go to Deployments
   - Find previous working deployment
   - Click "..." → "Promote to Production"

2. **Git Revert**:
   ```bash
   git revert <commit-hash>
   git push origin main
   ```

## Custom Domain

To use a custom domain:

1. **Vercel Dashboard**:
   - Settings → Domains
   - Add your domain
   - Follow DNS configuration instructions

2. **DNS Settings**:
   - Add CNAME record pointing to Vercel
   - Or use A records (Vercel provides IPs)

## Performance Optimization

Vercel automatically:
- CDN distribution
- Asset compression
- Image optimization (if using Vercel Image Optimization)
- Edge caching

### Manual Optimizations

- Optimize images before adding (compress, resize)
- Use appropriate image formats (WebP when possible)
- Minimize bundle size (monitored in CI/CD)

## Monitoring

### Vercel Analytics

The project includes Vercel Analytics:
- Automatic page view tracking
- Performance metrics
- View in Vercel dashboard

### Uptime Monitoring

GitHub Actions workflow (`uptime.yml`):
- Checks production site every 15 minutes
- Sends email if site is down
- Requires `PROD_URL` secret configured

## Next Steps

- [Configuration](./configuration.md) - Environment variables and settings
- [Development Workflow](./development-workflow.md) - Git and CI/CD
- [Project Structure](./project-structure.md) - Understand the codebase

