import antfu from '@antfu/eslint-config'
import tailwindcss from '@poupe/eslint-plugin-tailwindcss'
import playwright from 'eslint-plugin-playwright'
import storybook from 'eslint-plugin-storybook'

export default antfu(
  {
    type: 'lib',
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
    // Enable stylistic formatting rules
    stylistic: true,
    // Enable formatters
    formatters: {
      /**
       * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
       * By default uses Prettier
       */
      css: 'prettier',
      /**
       * Format HTML files
       * By default uses Prettier
       */
      html: 'prettier',
      /**
       * Format Markdown files
       * Supports Prettier and dprint
       * By default uses Prettier
       */
      markdown: 'prettier',
    },
  },
  ...storybook.configs['flat/recommended'],
  {
    files: ['**/tests/e2e/**/*.{test,spec}.{ts,js,tsx,jsx}'],
    ...playwright.configs['flat/recommended'],
  },
  {
    files: ['**/*.vue', '**/*.{ts,tsx,js,jsx}'],
    plugins: {
      tailwindcss,
    },
    rules: {
      'tailwindcss/no-conflicting-utilities': 'error',
      'tailwindcss/prefer-theme-tokens': 'warn',
      'tailwindcss/no-arbitrary-value-overuse': 'warn',
      'tailwindcss/valid-modifier-syntax': 'error',
      // Rules not found in @poupe/eslint-plugin-tailwindcss:
      // 'tailwindcss/classnames-order',
      // 'tailwindcss/enforces-negative-arbitrary-values',
      // 'tailwindcss/enforces-shorthand',
      // 'tailwindcss/migration-from-tailwind-2',
      // 'tailwindcss/no-arbitrary-value', // Replaced by no-arbitrary-value-overuse?
      // 'tailwindcss/no-custom-classname',
      // 'tailwindcss/no-contradicting-classname', // Replaced by no-conflicting-utilities?
    },
  },
)
