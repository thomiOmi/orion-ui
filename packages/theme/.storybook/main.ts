import type { StorybookConfig } from '@storybook/vue3-vite'
import tailwindcss from '@tailwindcss/vite'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.mdx', '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal: (config) => {
    return mergeConfig(config, {
      plugins: [tailwindcss()],
    })
  },
}
export default config
