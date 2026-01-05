// @ts-check
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import antfu from '@antfu/eslint-config'
import eslintPluginTailwind from 'eslint-plugin-better-tailwindcss'
import playwright from 'eslint-plugin-playwright'
import storybook from 'eslint-plugin-storybook'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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
  {
    plugins: {
      'better-tailwindcss': eslintPluginTailwind,
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: path.resolve(__dirname, './packages/theme/src/style.css'),
      },
    },
    rules: {
      ...eslintPluginTailwind.configs.recommended.rules,
    },
  },
  ...storybook.configs['flat/recommended'],
  {
    files: ['**/tests/e2e/**/*.{test,spec}.{ts,js,tsx,jsx}'],
    ...playwright.configs['flat/recommended'],
  },
)
