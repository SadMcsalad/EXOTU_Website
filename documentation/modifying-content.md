# Modifying Content

This guide explains how to update various content on the EXOTU website, including team members, sponsors, mission statement, and more.

## Content Files Overview

All content is stored in `src/data/` directory. Each file is clearly marked with comments indicating what to edit.

## Team Members

**File**: `src/data/team.ts`

### Adding a Team Member

Add a new member to the `executiveLeadership.members` array:

```typescript
{
  name: 'John Doe',
  role: 'Vice President',
  engineeringTitle: 'Senior Software Engineer',
  image: '/images/team/john_doe.jpg'
}
```

**Important**: 
- Place team member photos in `public/images/team/`
- Use descriptive filenames (e.g., `john_doe.jpg`)
- Reference images as `/images/team/filename.jpg`

### Updating Team Member Information

Find the member in the array and update their fields:
- `name` - Full name
- `role` - Leadership role
- `engineeringTitle` - Engineering discipline title
- `image` - Path to profile photo

### Modifying Departments

Edit the `departments` array to update department descriptions:

```typescript
{
  title: 'Software & IT',
  description: 'Your updated description here...',
}
```

## Sponsors

**File**: `src/data/sponsors.ts`

### Adding a Sponsor

Add sponsors to the appropriate tier array:

```typescript
export const platinum: Sponsor[] = [
  { name: 'Microsoft' },
  { name: 'Your New Sponsor' },  // Add here
];

export const gold: Sponsor[] = [
  { name: 'nexos.ai' },
  // Add more gold sponsors...
];
```

Available tiers:
- `platinum` - Highest tier
- `gold` - Second tier
- `silver` - Third tier
- `bronze` - Fourth tier

### Removing a Sponsor

Simply remove the sponsor object from the appropriate array.

### Reordering Sponsors

The order in the array determines display order. Move items to reorder.

## Mission Statement

**File**: `src/data/mission.ts`

### Updating Mission Statement

Edit the `missionStatement` constant:

```typescript
export const missionStatement = 'Your updated mission statement here...';
```

### Changing Mission Title

Edit the `missionTitle` constant:

```typescript
export const missionTitle = 'Your New Title';
```

### Modifying Mission Values

Update the `missionValues` array to change the value cards:

```typescript
{
  icon: Target,  // Import from lucide-react
  title: 'Mission-Driven',
  description: 'Your updated description...',
}
```

To use a different icon:
1. Import it: `import { Target, YourIcon } from 'lucide-react';`
2. Use it: `icon: YourIcon,`

Browse icons at [lucide.dev](https://lucide.dev/icons/).

## Join Page Content

**File**: `src/data/joinPage.ts`

### Updating Benefits

Edit the `benefits` array:

```typescript
export const benefits = [
  'Your first benefit',
  'Your second benefit',
  // Add or remove items...
];
```

### Updating Requirements

Edit the `requirements` array:

```typescript
export const requirements = [
  'Your first requirement',
  'Your second requirement',
  // Add or remove items...
];
```

## Application Configuration

**File**: `src/data/applicationConfig.ts`

### Opening/Closing Applications

Toggle the `APPLICATION_OPEN` constant:

```typescript
export const APPLICATION_OPEN = true;  // true = open, false = closed
```

When `false`, the application form will not be displayed.

### Email Configuration

Update the recipient email:

```typescript
export const EMAIL_RECIPIENT = 'your-email@example.com';
```

### Web3Forms Setup

The form uses Web3Forms for submissions. To configure:

1. Get an access key from [web3forms.com](https://web3forms.com)
2. For local development, create `.env.local`:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
3. For production, add it as an environment variable in Vercel

## Hero Section

**File**: `src/components/Hero.tsx`

The hero section content is currently in the component file. To update:
- Edit the text directly in `Hero.tsx`
- Update images in `public/images/home/`

## Navigation Links

**File**: `src/components/Navigation.tsx`

Navigation links are defined in the component. To add/remove pages:
1. Update the navigation items in `Navigation.tsx`
2. Add the corresponding page component in `src/pages/`
3. Update routing in `src/App.tsx`

## Images

### Image Organization

Images are organized in `public/images/` by section:
- `about/` - About page images
- `gallery/` - Gallery images
- `home/` - Home page images
- `join/` - Join page images
- `projects/` - Project images
- `sponsors/` - Sponsor logos
- `team/` - Team member photos

### Adding Images

1. Place the image in the appropriate folder
2. Reference it in your code: `/images/[folder]/[filename]`
3. Example: `/images/team/new_member.jpg`

### Image Best Practices

- Use descriptive filenames (lowercase, underscores)
- Optimize images before adding (compress, resize)
- Use appropriate formats (JPG for photos, PNG for logos)
- Recommended sizes:
  - Team photos: 400x400px
  - Project images: 800x600px
  - Hero images: 1920x1080px

## Testing Changes

1. Save the file you edited
2. The dev server should auto-reload
3. Navigate to the relevant page to see changes
4. Check for console errors

## Common Issues

### Images Not Loading
- Verify the path is correct (starts with `/images/`)
- Check that the file exists in `public/images/`
- Ensure filename matches exactly (case-sensitive)

### Changes Not Appearing
- Hard refresh the browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors
- Verify the file was saved

### TypeScript Errors
- Run `npm run typecheck` to see errors
- Ensure all required fields are present
- Check that types match (strings, numbers, arrays)

## Best Practices

1. **Always edit data files** - Don't hardcode content in components
2. **Use descriptive names** - Make it clear what each piece of content is
3. **Keep images organized** - Use the folder structure
4. **Test locally** - Verify changes before committing
5. **Follow existing patterns** - Match the style of existing content

## Next Steps

- [Adding Projects](./adding-projects.md) - Learn how to add projects
- [Development Workflow](./development-workflow.md) - Git and commit guidelines
- [Project Structure](./project-structure.md) - Understand the codebase

