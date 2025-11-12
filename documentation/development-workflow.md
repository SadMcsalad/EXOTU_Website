# Development Workflow

This guide covers the Git workflow, commit conventions, CI/CD processes, and best practices for contributing to the EXOTU website.

## Git Workflow

### Branch Strategy

- **main** - Production-ready code (protected branch)
- **feature/*** - New features or enhancements
- **fix/*** - Bug fixes
- **docs/*** - Documentation updates

### Making Changes

1. **Pull latest changes**:
   ```bash
   git pull origin main
   ```

2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** and test locally

4. **Stage changes**:
   ```bash
   git add .
   # Or specific files:
   git add src/data/projects.ts
   ```

5. **Commit with proper message** (see Commit Messages below)

6. **Push your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request** on GitHub

## Commit Messages

The project uses [Conventional Commits](https://www.conventionalcommits.org/) for automatic semantic versioning.

### Format

```
type(scope): description

[optional body]

[optional footer]
```

### Types

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, etc.)
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `chore` - Maintenance tasks
- `build` - Build system changes
- `ci` - CI/CD changes

### Examples

```bash
# Feature
git commit -m "feat: add new project to projects page"
git commit -m "feat(projects): add APEX-2 exoskeleton project"

# Bug fix
git commit -m "fix: resolve image loading issue on team page"
git commit -m "fix(sponsors): correct sponsor tier ordering"

# Documentation
git commit -m "docs: update getting started guide"

# Breaking change
git commit -m "feat(api)!: change authentication method"
# Or in body:
git commit -m "feat: update project structure" -m "BREAKING CHANGE: projects now require icon field"
```

### Skipping Version Bump

To skip automatic versioning, add `[skip release]`:

```bash
git commit -m "chore: update dependencies [skip release]"
```

## Semantic Versioning

The project automatically versions based on commits:

- **Patch** (0.1.0 → 0.1.1): Default for any commit
- **Minor** (0.1.0 → 0.2.0): Commits starting with `feat:`
- **Major** (0.1.0 → 1.0.0): Commits with `BREAKING CHANGE:` or `feat!:` or `feat(scope)!:`

### What Happens on Merge to Main

1. Workflow analyzes commits since last tag
2. Determines version bump (patch/minor/major)
3. Updates `package.json` version
4. Creates git tag (e.g., `v0.2.0`)
5. Creates GitHub Release with changelog
6. Sends release notification email (if configured)

## CI/CD Pipeline

### Automated Checks

Every PR and push to main triggers:

1. **Type Checking** (`npm run typecheck`)
   - Validates TypeScript types
   - Must pass before merge

2. **Linting** (`npm run lint`)
   - Checks code style with ESLint
   - Must pass before merge

3. **Build** (`npm run build`)
   - Verifies production build succeeds
   - Checks build output exists

4. **Security Audit** (`npm audit`)
   - Checks for vulnerabilities
   - Fails only on high/critical severity

5. **Bundle Size Analysis**
   - Tracks bundle size changes
   - Reports in PR comments
   - Enforces 5MB limit

6. **Commit Message Validation**
   - Ensures commits follow Conventional Commits
   - Validates on PRs

### Workflow Files

Located in `.github/workflows/`:

- **ci.yml** - Main CI pipeline (typecheck, lint, build)
- **security.yml** - Security audits (weekly + on PRs)
- **release.yml** - Automatic versioning and releases
- **bundle-size.yml** - Bundle size tracking
- **commitlint.yml** - Commit message validation
- **uptime.yml** - Production uptime monitoring

## Pull Request Process

### Before Creating a PR

1. ✅ Ensure all tests pass locally
2. ✅ Run `npm run typecheck`
3. ✅ Run `npm run lint`
4. ✅ Run `npm run build`
5. ✅ Test your changes in the browser
6. ✅ Update documentation if needed

### PR Checklist

- [ ] Code follows existing patterns
- [ ] No TypeScript errors
- [ ] No linting errors
- [ ] Build succeeds
- [ ] Changes tested locally
- [ ] Documentation updated (if applicable)
- [ ] Commit messages follow conventions

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Other (describe)

## Testing
How was this tested?

## Screenshots (if applicable)
Add screenshots here
```

## Code Review

- All PRs require review before merge
- Address review comments promptly
- Be respectful and constructive in reviews
- Ask questions if something is unclear

## Deployment

### Automatic Deployment

- Merges to `main` automatically deploy to Vercel
- Deployment status shown in PRs
- Failed deployments trigger email notifications

### Manual Deployment

If needed, deploy manually via Vercel CLI:

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Environment Variables

### Local Development

Create `.env.local`:

```
VITE_WEB3FORMS_ACCESS_KEY=your_key_here
```

### Production (Vercel)

Add environment variables in Vercel dashboard:
- Settings → Environment Variables
- Add `VITE_WEB3FORMS_ACCESS_KEY`

## Troubleshooting CI/CD

### Build Fails

1. Check the error message in GitHub Actions
2. Run `npm run build` locally to reproduce
3. Fix errors and push again

### Type Errors

1. Run `npm run typecheck` locally
2. Fix TypeScript errors
3. Ensure all imports are correct

### Lint Errors

1. Run `npm run lint` locally
2. Fix formatting/style issues
3. Some can be auto-fixed: `npm run lint -- --fix`

### Security Audit Fails

- Only fails on high/critical vulnerabilities
- Moderate vulnerabilities are reported but don't fail
- To fix: Update dependencies or use `npm audit fix`

## Best Practices

1. **Small, focused commits** - One logical change per commit
2. **Descriptive commit messages** - Explain what and why
3. **Test before pushing** - Run checks locally first
4. **Update documentation** - Keep docs in sync with code
5. **Follow conventions** - Use existing patterns and styles
6. **Review your own PR** - Check the diff before requesting review

## Getting Help

- Check existing documentation in `documentation/`
- Review GitHub Actions logs for detailed errors
- Ask team members for guidance
- Check GitHub Issues for known problems

## Next Steps

- [Deployment](./deployment.md) - Learn about deployment process
- [Configuration](./configuration.md) - Environment variables and settings
- [Project Structure](./project-structure.md) - Understand the codebase

