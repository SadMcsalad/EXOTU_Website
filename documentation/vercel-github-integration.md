# Vercel and GitHub Actions Integration

## Default Behavior

**By default, Vercel does NOT wait for GitHub Actions to pass** before deploying. When you push to the `main` branch:
1. Vercel immediately starts building and deploying
2. GitHub Actions runs in parallel
3. If GitHub Actions fails, Vercel has already deployed

This means broken code could be deployed to production if the pipeline fails.

## Recommended: Wait for Status Checks

To ensure Vercel only deploys after your pipeline passes, configure it to wait for GitHub status checks.

### How to Configure

1. **Go to Vercel Dashboard**:
   - Navigate to your project
   - Go to **Settings** → **Build and Deployment**

2. **Set up Deployment Checks**:
   - Find the **"Deployment Checks"** section
   - Click **"+ Add Checks"**
   - In the modal, you have two options:

   **Option A: Connect GitHub Actions (Recommended)**
   - Click **"Connect GitHub Actions"** in the modal
   - The workflow is already configured to send status updates
   - Add check name: `Vercel - exotu-website: all-checks`
   - Click **"Add"**

   **Option B: Select from GitHub SHA**
   - You can also select checks from a GitHub commit SHA
   - Look for: `Main Pipeline / all-checks`

3. **Save the settings**

3. **Alternative: Use Branch Protection**:
   - Go to GitHub repository → **Settings** → **Branches**
   - Add branch protection rule for `main`
   - Enable **"Require status checks to pass before merging"**
   - Add status check: `Main Pipeline / all-checks`
   - Enable **"Require branches to be up to date before merging"**

### Status Check Names

Your workflow creates these status checks:
- `Main Pipeline / typecheck`
- `Main Pipeline / lint`
- `Main Pipeline / security-audit`
- `Main Pipeline / build`
- `Main Pipeline / codeql-analysis` (matrix jobs)
- `Main Pipeline / all-checks` (main check that waits for others)

**Recommended**: Use `Main Pipeline / all-checks` as the required check, as it waits for all other jobs to complete.

## Current Setup

With the current unified pipeline (`.github/workflows/main.yml`):
- All checks run in one workflow
- The `all-checks` job waits for all main jobs
- This job will show as a status check in GitHub

## Benefits of Waiting

✅ **Prevents broken deployments**: Code only deploys if all tests pass  
✅ **Better quality**: Ensures type checking, linting, and security checks pass  
✅ **Consistent state**: Production always matches passing CI/CD  
✅ **Easier debugging**: If deployment fails, you know CI passed first

## Drawbacks

❌ **Slower deployments**: Must wait for pipeline to complete (usually 2-5 minutes)  
❌ **Delayed feedback**: Takes longer to see changes live

## Best Practice

**For production (`main` branch)**: Enable "Wait for Build Checks"  
**For preview deployments (PRs)**: Can deploy immediately (faster feedback)

## Verifying It's Working

After enabling the setting:

1. **Push a commit** that would fail the pipeline
2. **Check Vercel**: Deployment should be "Waiting" or "Pending"
3. **Check GitHub Actions**: Pipeline should be running
4. **If pipeline fails**: Vercel deployment should be cancelled/blocked
5. **If pipeline passes**: Vercel should proceed with deployment

## Troubleshooting

### Vercel Still Deploys Even With Checks Enabled

1. **Check status check name**: Must match exactly (case-sensitive)
2. **Verify workflow runs**: Check that GitHub Actions is actually running
3. **Check Vercel settings**: Ensure "Wait for Build Checks" is enabled
4. **Check branch protection**: If using branch protection, ensure it's configured correctly

### Status Check Not Appearing

1. **Workflow must run**: Push a commit to trigger the workflow
2. **Check workflow file**: Ensure it's in `.github/workflows/`
3. **Check job names**: Status check name = `{workflow-name} / {job-name}`
4. **Wait a moment**: Status checks can take a few seconds to appear

## Alternative: Manual Deployment

If you want full control, you can:
1. Disable automatic deployments in Vercel
2. Manually deploy after verifying pipeline passes
3. Use Vercel CLI: `vercel --prod` (after pipeline passes)

## Current Recommendation

For this project, **enable "Wait for Build Checks"** in Vercel and require the `Main Pipeline / all-checks` status check. This ensures:
- Type checking passes
- Linting passes
- Security audit passes
- Build succeeds
- CodeQL analysis passes

Only then will Vercel deploy to production.

