# Orion UI

![Build Status](https://img.shields.io/github/actions/workflow/status/thomi/orion-ui/ci.yml?branch=main)
![Version](https://img.shields.io/npm/v/@orion-ui/root)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

Orion UI is a modern Vue 3 component library built with [Ark UI](https://ark-ui.com) and [Tailwind CSS v4](https://tailwindcss.com). It is organized as a monorepo using [Bun](https://bun.sh) workspaces.

## Architecture Overview

*   **Monorepo**: Managed with Bun workspaces.
*   **Component Logic**: Powered by Ark UI (headless accessibility primitives).
*   **Styling**: Tailwind CSS v4 for utility-first styling.
*   **Testing**: Vitest for unit tests, Playwright for E2E tests.
*   **Documentation/Dev**: Storybook.

## Project Structure

```
.
├── packages/
│   ├── config/       # Shared configurations (ESLint, TSConfig)
│   ├── theme/        # Tailwind CSS v4 theme and styles
│   └── vue/          # Vue 3 component library
├── tests/            # End-to-End tests (Playwright)
└── package.json      # Root scripts and dependencies
```

## Development Workflows

### Prerequisites

*   [Bun](https://bun.sh) v1.2+

### Installation

Install all dependencies across the monorepo:

```bash
bun install
```

### Common Commands

Run these commands from the root directory:

| Command | Description |
| :--- | :--- |
| `bun run dev` | Starts development servers (e.g., Storybook for Vue) |
| `bun run build` | Builds all packages |
| `bun run test` | Runs unit tests across all packages |
| `bun run lint` | Lints all packages |
| `bun run lint:fix` | Fixes linting errors automatically |
| `bun run type-check` | Runs TypeScript type checking |
| `bun run test:e2e` | Runs Playwright End-to-End tests |
| `bun run release` | Publishes packages using Changesets |

### Specific Tasks

#### Creating a New Component

To create a new component in `@orion-ui/vue`:

1.  Create a directory: `packages/vue/src/components/{ComponentName}`.
2.  Add the following files:
    *   `{ComponentName}.vue`: The component implementation.
    *   `{ComponentName}.stories.ts`: Storybook stories.
    *   `{ComponentName}.test.ts`: Vitest unit tests.
    *   `index.ts`: Export the component.
3.  Export the component in `packages/vue/src/index.ts`.
4.  Run `bun run dev` (Storybook) to visualize and develop the component.

#### Updating the Theme

To modify global styles or Tailwind configuration:

1.  Navigate to `packages/theme`.
2.  Edit `src/style.css` to change CSS variables or Tailwind `@theme` configuration.
3.  Changes are instantly reflected in dependent packages (e.g., `@orion-ui/vue`) during development.

#### Running E2E Tests

End-to-End tests are located in the `tests/` directory.

To run them:

```bash
bun run test:e2e
```

To debug or run in UI mode:

```bash
bun run test:e2e --ui
```

## Contribution Guidelines

1.  Fork the repository and create your branch from `main`.
2.  Ensure code consistency by running `bun run lint` and `bun run type-check`.
3.  Write tests for new features or bug fixes.
4.  Ensure all tests pass with `bun run test`.
5.  Create a changeset if your changes affect package versions:
    ```bash
    bunx changeset
    ```
6.  Submit a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).
