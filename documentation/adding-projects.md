# Adding Projects

This guide explains how to add or modify projects on the EXOTU website.

## Overview

Projects are defined in `src/data/projects.ts`. Each project includes:
- Basic information (name, category, description)
- Progress tracking (percentage, status)
- Visual elements (image, icon)
- Detailed specifications (optional)

## Step-by-Step Guide

### 1. Open the Projects Data File

Navigate to `src/data/projects.ts` in your editor.

### 2. Understand the Project Interface

Each project follows this structure:

```typescript
{
  name: string;                    // Project name
  category: string;                // Category (e.g., "Flagship", "Research")
  categoryDisplay?: string;        // Optional display name for category
  description: string;             // Brief description
  progress: number;               // Progress percentage (0-100)
  status: string;                 // Status text (e.g., "In Development")
  image: string;                  // Image URL or path
  icon: LucideIcon;              // Icon from lucide-react
  specs?: string[];              // Optional array of specifications
  team?: string;                 // Optional team description
}
```

### 3. Add a New Project

Add a new project object to the `projects` array:

```typescript
export const projects: Project[] = [
  {
    name: 'APEX-1 Full Body Exoskeleton',
    category: 'Flagship',
    categoryDisplay: 'Flagship Project',
    description: 'Advanced full-body powered exoskeleton...',
    progress: 40,
    status: 'In Development',
    image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Shield,
    specs: [
      'Max Load Capacity: 150 kg',
      'Battery Life: 8 hours',
      'Weight: 45 kg',
      'Actuators: 12 DOF',
    ],
    team: 'Mechanical, Electrical, Software',
  },
  // Add your new project here:
  {
    name: 'Your Project Name',
    category: 'Research',
    description: 'Your project description here...',
    progress: 25,
    status: 'Early Development',
    image: '/images/projects/your-project.jpg',
    icon: Shield, // Or import a different icon
    specs: ['Spec 1', 'Spec 2'],
    team: 'Your team description',
  },
];
```

### 4. Choose an Icon

Icons are imported from `lucide-react`. To use a different icon:

1. Import it at the top of the file:
   ```typescript
   import { Shield, Cpu, Zap, Heart, Brain, Wrench, YourIcon } from 'lucide-react';
   ```

2. Use it in your project:
   ```typescript
   icon: YourIcon,
   ```

   Browse available icons at [lucide.dev](https://lucide.dev/icons/).

### 5. Add Project Images

You have two options for images:

**Option A: Use External URLs**
```typescript
image: 'https://example.com/image.jpg',
```

**Option B: Use Local Images**
1. Place the image in `public/images/projects/`
2. Reference it:
   ```typescript
   image: '/images/projects/your-image.jpg',
   ```

### 6. Modify an Existing Project

To update an existing project, find it in the `projects` array and modify the desired fields:

```typescript
{
  name: 'APEX-1 Full Body Exoskeleton',
  // ... other fields ...
  progress: 50,  // Update progress
  status: 'In Testing',  // Update status
  // ... rest of fields ...
}
```

### 7. Remove a Project

Simply remove the project object from the `projects` array.

## Example: Complete Project Entry

```typescript
{
  name: 'NEXUS Neural Interface',
  category: 'Research',
  categoryDisplay: 'Research Project',
  description: 'Advanced neural interface system for exoskeleton control using brain-computer interfaces.',
  progress: 15,
  status: 'Concept Phase',
  image: '/images/projects/nexus-interface.jpg',
  icon: Brain,  // Import Brain from lucide-react
  specs: [
    'EEG Signal Processing: 256 channels',
    'Response Time: <50ms',
    'Accuracy: 95%+',
    'Compatibility: APEX-1, APEX-2',
  ],
  team: 'Software, Electrical, Biomedical Engineering',
}
```

## Categories

Common categories you might use:
- `'Flagship'` - Main projects
- `'Research'` - Research initiatives
- `'Prototype'` - Early prototypes
- `'Competition'` - Competition entries

You can use any category name. The `categoryDisplay` field allows you to show a different name on the website (e.g., "Flagship Project" instead of "Flagship").

## Progress and Status

- **progress**: Number between 0-100 representing completion percentage
- **status**: String describing current status (e.g., "In Development", "Testing", "Completed", "On Hold")

## Testing Your Changes

1. Save the file
2. The dev server should automatically reload
3. Navigate to the Projects page to see your changes
4. Check the home page to see if the project appears in the preview

## Troubleshooting

### Icon Not Showing
- Make sure the icon is imported at the top of the file
- Check that the icon name matches exactly (case-sensitive)

### Image Not Loading
- Verify the image path is correct
- For local images, ensure the file exists in `public/images/projects/`
- Check browser console for 404 errors

### TypeScript Errors
- Run `npm run typecheck` to see detailed errors
- Ensure all required fields are present
- Check that types match (e.g., `progress` is a number, not a string)

## Next Steps

- [Modifying Content](./modifying-content.md) - Learn about updating other content
- [Project Structure](./project-structure.md) - Understand the codebase better
- [Development Workflow](./development-workflow.md) - Learn about Git workflow

