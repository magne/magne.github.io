# Technical Context

## Core Technologies

- **Astro**: Main framework for building the site
- **TypeScript**: For type-safe development
- **Markdown/MDX**: For content management
- **Tailwind CSS**: For component styling and utility classes

## Development Environment

- **PNPM**: Package manager
- **Biome**: Linting and formatting
- **Lefthook**: Git hooks for pre-commit checks
- **Visual Studio Code**: Recommended editor

## Build and Deployment

- **GitHub Actions**: CI/CD pipeline
- **Static Hosting**: Generated static site deployed to hosting provider

## Dependencies

- **Astro Core**: Main framework
- **Astro Integrations**:
  - `@astrojs/mdx`: For MDX content
  - `@astrojs/sitemap`: For SEO optimization
  - `@astrojs/image`: For image optimization
- **Development Tools**:
  - TypeScript
  - Biome
  - Lefthook

## Configuration Files

- `astro.config.ts`: Astro configuration including site settings and integrations
- `tsconfig.json`: TypeScript configuration
- `biome.json`: Code formatting and linting rules
- `lefthook.yml`: Git hooks configuration

## Folder Structure

```plain
/
├── .astro/              # Astro generated files
├── .github/             # GitHub Actions workflows
├── memory-bank/         # Project documentation
├── public/              # Static assets
├── src/                 # Source code
│   ├── components/      # Reusable UI components
│   ├── content/         # Content collections
│   ├── layouts/         # Page layouts
│   ├── pages/           # Page components and routes
│   ├── styles/          # Global styles and design tokens
│   └── utils/           # Helper functions
├── astro.config.ts      # Astro configuration
├── biome.json           # Linting/formatting configuration
├── lefthook.yml         # Git hooks configuration
├── package.json         # Dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## Testing Strategy

- Component testing through manual verification
- Accessibility testing using axe-core
- Performance testing using Lighthouse
- End-to-end testing planned but not yet implemented

## Tooling Requirements

- Node.js v18+
- PNPM
- Git
