# Orion UI

![Build Status](https://img.shields.io/github/actions/workflow/status/thomi/orion-ui/ci.yml?branch=main)
![Version](https://img.shields.io/npm/v/@orion-ui/root)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

Orion UI is a modern Vue 3 component library built with [Ark UI](https://ark-ui.com) and [Tailwind CSS v4](https://tailwindcss.com). It is organized as a monorepo using [Bun](https://bun.sh) workspaces.

## Architecture Overview

- **Monorepo**: Managed with Bun workspaces.
- **Component Logic**: Powered by Ark UI (headless accessibility primitives).
- **Styling**: Tailwind CSS v4 for utility-first styling.
- **Testing**: Vitest for unit tests, Playwright for E2E tests.
- **Documentation/Dev**: Storybook.

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

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the [MIT License](LICENSE).
