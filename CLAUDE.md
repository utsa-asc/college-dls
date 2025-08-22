# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the UTSA College Design Language System (DLS) - a Fractal-based pattern library and design system for UTSA college websites. The system follows atomic design principles with components organized into visual styling tokens, small components, section components, and reference pages.

## Key Commands

### Development
- `npm install` - Install all dependencies
- `npm start` - Start Fractal development server with file watching (runs at http://localhost:3000)
- `npm run build` - Build production assets and static site to `dist/` folder
- `npm run styles` - Compile SCSS files only
- `npm run images` - Process and optimize images
- `npm run rollup-test` - Test JavaScript bundling with Rollup

### Gulp Tasks
- `gulp` - Default task (same as npm start)
- `gulp styles` - Compile SCSS with fonts
- `gulp build` - Full production build
- `gulp clean` - Clean dist directory
- `gulp bundle` - Bundle JavaScript files

### Fractal CLI Commands
- `fractal start` - Start Fractal server
- `fractal build` - Build static site
- `fractal list` - List all components (JSON format)
- `fractal list clean` - List components in readable format
- `fractal create <component-name>` - Create new component scaffold

## Architecture

### Directory Structure
- `components/` - Main component library organized by atomic design levels:
  - `01-visual-styling/` - Design tokens, typography, colors, basic elements
  - `02-components/` - Smaller reusable components (forms, cards, profiles)
  - `03-sections/` - Large section-level components for page building
  - `04-reference-pages/` - Complete page examples and templates
  - `05-sandbox/` - Testing and experimental components
  - `06-wysiwyg/` - WYSIWYG editor styling rules

- `src/` - Source files for compilation:
  - `src/scss/` - SCSS source files with variables, mixins, and utilities
  - `src/js/` - JavaScript source files and bundles

- `public/` - Static assets and compiled files:
  - `public/css/` - Compiled CSS output
  - `public/js/` - Compiled JavaScript output
  - `public/college/images/` - College-specific images
  - `public/utsa/images/` - University-wide brand images

- `docs/` - Fractal documentation pages
- `dist/` - Production build output

### Component Structure
Each component follows a consistent file pattern:
- `component-name.hbs` - Handlebars template
- `component-name.config.json` - Component configuration and context data
- `component-name.scss` - Component styles
- `component-name.readme.md` - Documentation and usage notes

Components can have variants using the `--variant-name` suffix (e.g., `button--orange.hbs`).

### Component States
- `prototype` - Do not implement (red)
- `wip` - Work in progress, implement with caution (yellow)
- `ready` - Ready to implement (green)
- `exported` - Exported to working projects (bright green)

## Key Technologies
- **Fractal** - Component library framework
- **Bootstrap 5.3.3** - CSS framework foundation
- **Handlebars** - Templating engine
- **SCSS/Sass** - CSS preprocessing
- **Gulp** - Build automation
- **jQuery 3.6.4** - JavaScript library
- **Font Awesome Pro** - Icon system (restricted to *.utsa.edu domains)
- **Adobe Fonts** - UTSA brand typography (restricted to *.utsa.edu domains)

## Build System
The project uses Gulp for asset compilation:
- SCSS files are compiled with sass-glob for dynamic imports
- JavaScript is bundled with Rollup and includes jQuery injection
- Font files are copied from node_modules (Font Awesome Pro)
- Images are processed and optimized
- File watching automatically recompiles on changes during development

## Working with Components
1. Use existing components when possible before creating new ones
2. Follow naming conventions: use hyphens for multi-word names
3. Prefix folders with numbers for navigation ordering (e.g., `01-button`)
4. Default variant should always be named "Default"
5. Color variants should follow order: white (default), grey, blue, orange
6. All components must include accessibility considerations
7. Components should be responsive across all screen sizes

## CSS/SCSS Guidelines
- Use Bootstrap utility classes when appropriate
- Component-specific styles go in the component's `.scss` file
- Global variables and mixins are in `src/scss/_variables.scss` and `src/scss/_mixins.scss`
- Dark mode support is handled through `_dark-mode.scss` files
- Font loading and definitions are in `src/scss/_font.scss`

## External Dependencies
- Font Awesome Pro and Adobe Fonts require *.utsa.edu domain access
- Bootstrap is included as a dependency and extended with custom styles
- jQuery is globally available and injected into bundles
- Third-party libraries like DataTables, Select2, and Glide.js are integrated

## Testing and Validation
- Components must pass ADA/accessibility compliance
- Test responsiveness across various devices and screen sizes
- Validate functionality in supported browsers
- Ensure proper integration with Cascade CMS when applicable