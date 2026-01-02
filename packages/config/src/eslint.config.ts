import antfu from '@antfu/eslint-config'
// import tailwind from 'eslint-plugin-tailwindcss'
import playwright from 'eslint-plugin-playwright'
import storybook from 'eslint-plugin-storybook'

export default antfu(
  {
    // Enable Vue support
    vue: {
      a11y: true,
    },
    // Enable TypeScript support
    typescript: true,
    // Enable JSON support
    jsonc: true,
    // Enable YAML support
    yaml: true,
    // Enable Markdown support
    markdown: true,
    // Enable test support (Vitest)
    test: true,
    // Enable formatters
    formatters: true,
  },
  // ...tailwind.configs['flat/recommended'],
  ...storybook.configs['flat/recommended'],
  {
    files: ['**/tests/e2e/**/*.{test,spec}.{ts,js,tsx,jsx}'],
    ...playwright.configs['flat/recommended'],
  },
)
