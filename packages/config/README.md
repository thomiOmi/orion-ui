# @orion-ui/config

This package contains shared configurations for the Orion UI monorepo, ensuring consistency across all packages.

## Contents

- **TypeScript Configuration**: Base `tsconfig.json` used by other packages.
- **ESLint Configuration**: Shared ESLint rules based on `@antfu/eslint-config`.

## Usage

### TypeScript

To use the shared TypeScript configuration, extend it in your package's `tsconfig.json`:

```json
{
  "extends": "@orion-ui/config/tsconfig"
}
```

### ESLint

To use the shared ESLint configuration, import it in your `eslint.config.js`:

```js
import config from '@orion-ui/config/eslint'

export default config
```
