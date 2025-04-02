# System Patterns

## Architecture Overview

This website uses Astro as its core framework, focusing on the "Islands Architecture" pattern. This allows for primarily static content with targeted hydration for interactive components only where needed.

```plain
┌─────────────────────────────────────────┐
│              Astro Site                 │
├─────────────────┬───────────────────────┤
│ Static Content  │  Interactive Islands  │
│ (HTML/CSS)      │  (JavaScript)         │
├─────────────────┴───────────────────────┤
│              Build Process               │
│   (Static Generation with Hydration)    │
└─────────────────────────────────────────┘
```

## Core Design Patterns

### Navigation Architecture

```plain
┌────────────────────────────────────────────┐
│                 Header                     │
├─────────────┬─────────────┬────────────────┤
│  Blog Link  │    Tags     │  Social Links  │
│  (Primary)  │             │   (External)   │
└─────────────┴─────────────┴────────────────┘
                     │
                     ▼
┌────────────────────────────────────────────┐
│             Mobile Navigation              │
├────────────────────────────────────────────┤
│ • Transform-based transitions              │
│ • ARIA-enhanced accessibility              │
│ • Keyboard navigation support              │
│ • Progressive enhancement                  │
└────────────────────────────────────────────┘
```

### Content Organization

- **Page Components**: Located in `src/pages/` following Astro's file-based routing
- **Layouts**: Reusable page structures in `src/layouts/`
- **UI Components**: Reusable UI elements in `src/components/`
- **Content Collections**: Structured content using Astro's content collections

### Navigation Components

- **HeaderLink**: Enhanced link component with:
  - Active state detection
  - Accessibility attributes
  - Hover/focus states
  - TypeScript prop interface

- **Header**: Main navigation container with:
  - Mobile-first responsive design
  - Transform-based animations
  - Keyboard interaction support
  - ARIA compliance

### Data Flow

1. **Build-time Data**: Most content is processed at build time
2. **Static Generation**: Pages pre-rendered as static HTML
3. **Minimal Client Hydration**: JavaScript only loaded for interactive components

### Component Organization

- **Atomic Design**: Components organized following atomic design principles
- **Component Interfaces**: Clear TypeScript interfaces for component props
- **Self-contained Components**: Styles and logic coupled with components
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Mobile-First**: Components designed for mobile then enhanced for larger screens

### Styling Approach

- **Tailwind Utilities**: Using Tailwind for consistent styling
- **Dark Mode Support**: Built-in theme switching capabilities
- **Responsive Design**: Mobile-first approach with CSS breakpoints
- **Animation Strategy**: GPU-accelerated transforms for performance
- **Focus Management**: Proper focus states and outlines for accessibility

## Critical Implementation Paths

### Navigation Flow

1. Static HTML rendered at build time
2. Progressive enhancement with JavaScript
3. Mobile menu interactions handled client-side
4. ARIA states managed dynamically

### Content Rendering Pipeline

1. Content written in Markdown/MDX
2. Processed through Astro's content collections
3. Rendered through appropriate layouts
4. Static HTML generated at build time

### Performance Optimization

1. Transform-based animations for smooth performance
2. GPU acceleration for mobile transitions
3. JavaScript loaded only for interactive features
4. Static assets cached appropriately
5. Critical CSS inlined
