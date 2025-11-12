# Project Structure

This document explains the organization of the EXOTU website codebase.

## Directory Overview

```
project/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD workflows
├── documentation/          # This documentation folder
├── dist/                   # Production build output (generated)
├── node_modules/           # Dependencies (generated)
├── public/
│   └── images/            # Static images organized by page
│       ├── about/
│       ├── gallery/
│       ├── home/
│       ├── join/
│       ├── projects/
│       ├── sponsors/
│       └── team/
├── src/
│   ├── components/        # Reusable UI components
│   ├── data/              # Content data files
│   ├── pages/             # Page components
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── index.html             # HTML entry point
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite build configuration
```

## Key Directories

### `src/components/`

Reusable React components used across the site:

- **Navigation.tsx** - Top navigation bar with page links
- **Hero.tsx** - Hero section on the home page
- **Mission.tsx** - Mission statement and values section
- **ProjectsPreview.tsx** - Preview of projects on home page
- **Footer.tsx** - Site footer with links

### `src/pages/`

Full page components:

- **AboutPage.tsx** - About page content
- **ProjectsPage.tsx** - Full projects listing page
- **TeamPage.tsx** - Team members and departments
- **JoinPage.tsx** - Join/application page
- **SponsorsPage.tsx** - Sponsors listing
- **GalleryPage.tsx** - Image gallery
- **BlogPage.tsx** - Blog/news page

### `src/data/`

**Important**: This is where most content updates should be made. These files contain the data that drives the website:

- **projects.ts** - Project definitions (name, description, progress, etc.)
- **team.ts** - Team members and department information
- **sponsors.ts** - Sponsor listings by tier
- **mission.ts** - Mission statement and values
- **joinPage.ts** - Benefits and requirements for joining
- **applicationConfig.ts** - Application form configuration

### `public/images/`

Static image assets organized by page/section. When adding images:

1. Place them in the appropriate subfolder
2. Reference them using `/images/[folder]/[filename]` in your code
3. Example: `/images/team/wadee_pfp.jpeg`

## Application Flow

1. **Entry Point**: `index.html` → `src/main.tsx`
2. **Main App**: `src/main.tsx` renders `App.tsx`
3. **Routing**: `App.tsx` manages page state and renders appropriate components
4. **Pages**: Each page component imports data from `src/data/` and renders UI
5. **Components**: Reusable components are used across pages

## Data Flow

```
src/data/*.ts (Data Files)
    ↓
src/pages/*.tsx (Page Components)
    ↓
src/components/*.tsx (UI Components)
    ↓
App.tsx (Main App)
    ↓
Browser
```

## Configuration Files

- **package.json** - Dependencies, scripts, and project metadata
- **tsconfig.json** - TypeScript compiler options
- **vite.config.ts** - Vite build tool configuration
- **tailwind.config.js** - Tailwind CSS utility classes configuration
- **vercel.json** - Vercel deployment configuration (SPA routing)

## Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Global Styles** - `src/index.css` contains base styles and Tailwind directives
- **Component Styles** - Styling is done using Tailwind classes directly in JSX

## TypeScript

The project uses TypeScript for type safety. Key type definitions:

- Interfaces are defined in data files (e.g., `Project`, `TeamMember`, `Sponsor`)
- Components use TypeScript for props and state
- Type checking runs on every build and in CI/CD

## Best Practices

1. **Content Changes**: Always edit files in `src/data/` rather than hardcoding in components
2. **New Components**: Add reusable components to `src/components/`
3. **New Pages**: Add page components to `src/pages/` and update `App.tsx` routing
4. **Images**: Use the `public/images/` folder structure
5. **Types**: Define TypeScript interfaces in data files or create a `types.ts` file

## Next Steps

- [Adding Projects](./adding-projects.md) - Learn how to add new projects
- [Modifying Content](./modifying-content.md) - Update team, sponsors, etc.
- [Development Workflow](./development-workflow.md) - Git and CI/CD workflow

