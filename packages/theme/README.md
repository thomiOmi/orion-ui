# @orion-ui/theme

This package provides the core design tokens and styles for Orion UI, built with [Tailwind CSS v4](https://tailwindcss.com/).

## Installation

```bash
bun add @orion-ui/theme
```

## Usage

This package exports a main CSS file containing the Tailwind directives and theme configuration.

### Importing Styles

Import the CSS file in your application's entry point (e.g., `main.ts`, `App.vue`, or a global CSS file):

```css
@import '@orion-ui/theme/css';
```

## Development

The theme is defined using standard CSS variables and Tailwind v4 `@theme` blocks.

To modify the theme, edit the `src/style.css` file. Changes here will propagate to all packages consuming this theme (like `@orion-ui/vue`).

### Documentation

This package includes a Storybook documentation to visualize the design tokens and examples.

```bash
bun run storybook
```

This will open the documentation at `http://localhost:6006`.
