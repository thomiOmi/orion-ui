import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'

const meta: Meta = {
  title: 'Components/Variants',
}

export default meta
type Story = StoryObj

export const Variants: Story = {
  render: () => html`
    <div class="flex flex-col gap-8 p-4 bg-white dark:bg-gray-950 rounded-lg">

      <!-- Solid -->
      <div class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider">Solid</h3>
        <div class="flex gap-4">
           <button class="px-4 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-700">Primary</button>
           <button class="px-4 py-2 rounded-md bg-secondary-600 text-white hover:bg-secondary-700">Secondary</button>
           <button class="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900">Neutral</button>
        </div>
      </div>

      <!-- Subtle -->
      <div class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider">Subtle</h3>
        <div class="flex gap-4">
           <button class="px-4 py-2 rounded-md bg-primary-100 text-primary-900 hover:bg-primary-200 dark:bg-primary-900/30 dark:text-primary-100">Primary</button>
           <button class="px-4 py-2 rounded-md bg-secondary-100 text-secondary-900 hover:bg-secondary-200 dark:bg-secondary-900/30 dark:text-secondary-100">Secondary</button>
           <button class="px-4 py-2 rounded-md bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100">Neutral</button>
        </div>
      </div>

      <!-- Outline -->
      <div class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider">Outline</h3>
        <div class="flex gap-4">
           <button class="px-4 py-2 rounded-md border border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/10">Primary</button>
           <button class="px-4 py-2 rounded-md border border-secondary-600 text-secondary-600 hover:bg-secondary-50 dark:hover:bg-secondary-900/10">Secondary</button>
           <button class="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">Neutral</button>
        </div>
      </div>

      <!-- Ghost/Plain -->
      <div class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider">Plain / Ghost</h3>
        <div class="flex gap-4">
           <button class="px-4 py-2 rounded-md text-primary-600 hover:bg-primary-100 dark:text-primary-400 dark:hover:bg-primary-900/30">Primary</button>
           <button class="px-4 py-2 rounded-md text-secondary-600 hover:bg-secondary-100 dark:text-secondary-400 dark:hover:bg-secondary-900/30">Secondary</button>
           <button class="px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">Neutral</button>
        </div>
      </div>

    </div>
  `,
}
