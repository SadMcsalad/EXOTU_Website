# Configuration

This guide covers all configuration options, environment variables, and settings for the EXOTU website.

## Environment Variables

### Web3Forms Access Key

**Variable**: `VITE_WEB3FORMS_ACCESS_KEY`

**Purpose**: Used for the contact/application form on the Join page.

**Setup**:
1. Get access key from [web3forms.com](https://web3forms.com)
2. For local development: Create `.env.local`:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
3. For production: Add in Vercel environment variables

**Note**: Variables must start with `VITE_` to be accessible in the React app.

## Application Configuration

**File**: `src/data/applicationConfig.ts`

### Application Status

```typescript
export const APPLICATION_OPEN = false; // true = open, false = closed
```

Controls whether the application form is displayed on the Join page.

### Email Recipient

```typescript
export const EMAIL_RECIPIENT = 'mhamzaajmal@gmail.com';
```

Email address where form submissions are sent. Update this to your team's email.

## Build Configuration

### Vite Configuration

**File**: `vite.config.ts`

Current configuration:
- React plugin enabled
- TypeScript support
- Build output: `dist/`
- Base path: `/`

### TypeScript Configuration

**Files**: 
- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - App-specific configuration
- `tsconfig.node.json` - Node/build tool configuration

### Tailwind Configuration

**File**: `tailwind.config.js`

Configured for:
- Content paths: `src/**/*.{js,ts,jsx,tsx}`
- Custom theme (if needed)
- Plugins (if any)

## Vercel Configuration

**File**: `vercel.json`

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This ensures SPA routing works correctly by serving `index.html` for all routes.

## Package Configuration

**File**: `package.json`

### Scripts

- `dev` - Start development server
- `build` - Build for production
- `preview` - Preview production build
- `lint` - Run ESLint
- `typecheck` - Run TypeScript type checking

### Dependencies

Key dependencies:
- **React 19.2.0** - UI framework
- **Vite 5.4.2** - Build tool
- **TypeScript 5.9.3** - Type checking
- **Tailwind CSS 3.4.1** - Styling
- **Lucide React** - Icons
- **Vercel Analytics** - Analytics
- **Supabase** - Database (if used)

## GitHub Actions Configuration

### CI/CD Workflows

Located in `.github/workflows/`:

1. **ci.yml** - Main CI pipeline
   - Node version: 18
   - Runs: typecheck, lint, build

2. **security.yml** - Security audits
   - Runs: Weekly (Mondays) + on PRs
   - Fails on: High/critical vulnerabilities only

3. **release.yml** - Automatic versioning
   - Analyzes commits for semantic versioning
   - Creates tags and releases

4. **bundle-size.yml** - Bundle size tracking
   - Runs on PRs
   - Enforces 5MB limit

5. **commitlint.yml** - Commit message validation
   - Validates Conventional Commits format

6. **uptime.yml** - Uptime monitoring
   - Runs every 15 minutes
   - Requires `PROD_URL` secret

### Required Secrets

For full functionality, configure these in GitHub Settings → Secrets:

- `SMTP_SERVER` - SMTP server address
- `SMTP_PORT` - SMTP port (465 or 587)
- `SMTP_USERNAME` - SMTP username
- `SMTP_PASSWORD` - SMTP password
- `NOTIFY_TO_EMAIL` - Recipient email(s)
- `NOTIFY_FROM_EMAIL` - Sender email
- `PROD_URL` - Production site URL

## Local Development Configuration

### Creating `.env.local`

Create a `.env.local` file in the project root:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_key_here
```

**Important**: 
- `.env.local` is gitignored (never commit secrets)
- Restart dev server after adding variables
- Variables must start with `VITE_`

### Node Version

The project requires Node.js 18+. To specify locally:

1. Create `.nvmrc`:
   ```
   18
   ```

2. Use nvm:
   ```bash
   nvm use
   ```

## Content Configuration

### Projects

**File**: `src/data/projects.ts`

Configure projects, categories, and project details.

### Team

**File**: `src/data/team.ts`

Configure team members and departments.

### Sponsors

**File**: `src/data/sponsors.ts`

Configure sponsor tiers and listings.

### Mission

**File**: `src/data/mission.ts`

Configure mission statement and values.

### Join Page

**File**: `src/data/joinPage.ts`

Configure benefits and requirements.

## Styling Configuration

### Global Styles

**File**: `src/index.css`

Contains:
- Tailwind directives
- Custom CSS variables (if any)
- Global styles

### Tailwind Customization

Edit `tailwind.config.js` to:
- Add custom colors
- Extend theme
- Add plugins
- Configure content paths

## Analytics Configuration

### Vercel Analytics

Automatically enabled via `@vercel/analytics` package. No configuration needed.

### Speed Insights

Automatically enabled via `@vercel/speed-insights` package. No configuration needed.

## Image Configuration

### Image Paths

Images are served from `public/images/`. Paths in code:
- Start with `/images/`
- Example: `/images/team/member.jpg`

### Image Organization

Organize by page/section:
- `about/` - About page
- `gallery/` - Gallery
- `home/` - Home page
- `join/` - Join page
- `projects/` - Projects
- `sponsors/` - Sponsors
- `team/` - Team photos

## Browser Support

The project targets modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Configuration

### Build Optimizations

Vite automatically:
- Code splitting
- Tree shaking
- Minification
- Asset optimization

### Bundle Size

- Monitored in CI/CD
- 5MB limit enforced
- Reports in PR comments

## Security Configuration

### Security Audit

- Runs weekly (Mondays)
- Runs on every PR
- Fails on high/critical vulnerabilities
- Moderate vulnerabilities reported but don't fail

### Dependency Updates

Regularly update dependencies:
```bash
npm update
npm audit fix
```

## Troubleshooting Configuration

### Environment Variables Not Working

1. Check variable name starts with `VITE_`
2. Restart dev server after adding variables
3. Check `.env.local` is in project root
4. Verify variable is set in Vercel (for production)

### Build Configuration Issues

1. Check `vite.config.ts` for errors
2. Verify `package.json` scripts
3. Check TypeScript configuration
4. Review build logs

### TypeScript Configuration Issues

1. Check `tsconfig.json` for errors
2. Verify file paths in `include`/`exclude`
3. Check for conflicting configurations

## Best Practices

1. **Never commit secrets** - Use environment variables
2. **Keep configs in sync** - Update all related configs together
3. **Document changes** - Update this guide when adding configs
4. **Test locally first** - Verify configs work before deploying
5. **Use version control** - Track config changes in Git

## Next Steps

- [Deployment](./deployment.md) - Learn about deployment
- [Development Workflow](./development-workflow.md) - Git and CI/CD
- [Getting Started](./getting-started.md) - Setup guide

