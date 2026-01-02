import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  framework: {
    name: '@storybook/vue3-vite',
  },
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
}

export default config
