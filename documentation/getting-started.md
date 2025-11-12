# Getting Started

This guide will help you set up the EXOTU website project on your local machine and get it running.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js 18+** (LTS version recommended)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **npm** (comes with Node.js)
  - Verify installation: `npm --version`
- **Git** (for version control)
  - Download from [git-scm.com](https://git-scm.com/)
  - Verify installation: `git --version`

## Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   This will install all required packages listed in `package.json`.

3. **Verify installation**:
   ```bash
   npm run typecheck
   ```
   This should complete without errors.

## Running the Development Server

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`. The dev server supports hot module replacement (HMR), so changes to your code will automatically refresh in the browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run typecheck` - Run TypeScript type checking
- `npm run lint` - Run ESLint to check code quality

## Next Steps

- Read the [Project Structure](./project-structure.md) guide to understand the codebase
- Check out [Adding Projects](./adding-projects.md) if you want to add a new project
- Review [Development Workflow](./development-workflow.md) for Git and CI/CD information

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically try the next available port. Check the terminal output for the actual URL.

### Module Not Found Errors
If you see module not found errors:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
Run `npm run typecheck` to see detailed error messages. Most errors will be related to:
- Missing type definitions
- Incorrect import paths
- Type mismatches

### Build Errors
If the build fails:
1. Check that all dependencies are installed: `npm install`
2. Verify Node.js version: `node --version` (should be 18+)
3. Clear cache and rebuild: `rm -rf dist node_modules/.vite && npm run build`

