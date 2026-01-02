# @orion-ui/vue

A Vue 3 component library for Orion UI, built with [Ark UI](https://ark-ui.com/vue) and [Tailwind CSS v4](https://tailwindcss.com/).

## Installation

```bash
bun add @orion-ui/vue
```

## Usage

### Importing Components

Import components directly from the package:

```vue
<script setup lang="ts">
import { Button } from '@orion-ui/vue'
</script>

<template>
  <Button>Click Me</Button>
</template>
```

### Importing Styles

Ensure you have imported the theme styles (usually in your app's entry point):

```css
@import "@orion-ui/vue/style.css";
```

## Development

### Storybook

We use Storybook for component development and documentation.

```bash
bun run storybook
```

This will start the Storybook server at `http://localhost:6006`.

### Building

To build the library:

```bash
bun run build
```

### Testing

Run unit tests with Vitest:

```bash
bun run test
```
