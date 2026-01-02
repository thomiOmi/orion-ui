# Contributing to Orion UI

Thank you for your interest in contributing to Orion UI! This document provides guidelines and workflows for developing, testing, and building the project.

## Prerequisites

- [Bun](https://bun.sh) v1.2+

## Installation

Install all dependencies across the monorepo:

```bash
bun install
```

## Development Workflows

### Common Commands

Run these commands from the root directory:

| Command              | Description                                          |
| :------------------- | :--------------------------------------------------- |
| `bun run dev`        | Starts development servers (e.g., Storybook for Vue) |
| `bun run build`      | Builds all packages                                  |
| `bun run test`       | Runs unit tests across all packages                  |
| `bun run lint`       | Lints all packages                                   |
| `bun run lint:fix`   | Fixes linting errors automatically                   |
| `bun run type-check` | Runs TypeScript type checking                        |
| `bun run test:e2e`   | Runs Playwright End-to-End tests                     |
| `bun run release`    | Publishes packages using Changesets                  |

### Component Development

To create a new component in `@orion-ui/vue`:

1.  Create a directory: `packages/vue/src/components/{ComponentName}`.
2.  Add the following files:
    - `{ComponentName}.vue`: The component implementation.
    - `{ComponentName}.stories.ts`: Storybook stories.
    - `{ComponentName}.test.ts`: Vitest unit tests.
    - `index.ts`: Export the component.
3.  Export the component in `packages/vue/src/index.ts`.
4.  Run `bun run dev` (Storybook) to visualize and develop the component.

**Note:** When importing components in stories or tests, ensure you import explicitly (e.g. `./Button.vue`) to avoid type-check issues.

### Theme Development

To modify global styles or Tailwind configuration:

1.  Navigate to `packages/theme`.
2.  Edit `src/style.css` to change CSS variables or Tailwind `@theme` configuration.
3.  Changes are instantly reflected in dependent packages (e.g., `@orion-ui/vue`) during development.

### Testing

#### Unit Tests

Unit tests are written using Vitest.

```bash
bun run test
```

#### E2E Tests

End-to-End tests are written using Playwright and are located in the `tests/` directory.

To run them:

```bash
bun run test:e2e
```

To debug or run in UI mode:

```bash
bun run test:e2e --ui
```

### Code Style & Linting

We use ESLint with `@antfu/eslint-config`.

- Run `bun run lint` to check for issues.
- Run `bun run lint:fix` to automatically fix most issues.
- Run `bun run type-check` to verify TypeScript types.

### Release Workflow

We use [Changesets](https://github.com/changesets/changesets) for version management.

If your changes affect package versions:

1.  Run `bunx changeset`.
2.  Select the packages to bump.
3.  Choose the version bump type (major, minor, patch).
4.  Add a summary of changes.
5.  Commit the generated changeset file.
