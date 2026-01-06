import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'

const meta: Meta = {
  title: 'Colors/Pairings',
}

export default meta
type Story = StoryObj

export const Pairings: Story = {
  render: () => html`
    <div class="flex flex-col gap-8">
      <!-- Primary -->
      <div class="flex flex-col gap-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Primary (Indigo)</h3>
        <div class="flex gap-4 p-8 rounded-lg bg-primary-50 text-primary-950 border border-primary-200">
           <div class="flex-1">
             <h4 class="font-bold text-primary-900">Surface 50</h4>
             <p class="text-primary-700">Text 700 on Surface 50</p>
           </div>
           <button class="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">Action 600</button>
        </div>
        <div class="flex gap-4 p-8 rounded-lg bg-primary-950 text-primary-50 border border-primary-800">
           <div class="flex-1">
             <h4 class="font-bold text-white">Surface 950</h4>
             <p class="text-primary-300">Text 300 on Surface 950</p>
           </div>
           <button class="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-400">Action 500</button>
        </div>
      </div>

       <!-- Secondary -->
      <div class="flex flex-col gap-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Secondary (Teal)</h3>
        <div class="flex gap-4 p-8 rounded-lg bg-secondary-50 text-secondary-950 border border-secondary-200">
           <div class="flex-1">
             <h4 class="font-bold text-secondary-900">Surface 50</h4>
             <p class="text-secondary-700">Text 700 on Surface 50</p>
           </div>
           <button class="px-4 py-2 bg-secondary-600 text-white rounded-md hover:bg-secondary-700">Action 600</button>
        </div>
        <div class="flex gap-4 p-8 rounded-lg bg-secondary-950 text-secondary-50 border border-secondary-800">
           <div class="flex-1">
             <h4 class="font-bold text-white">Surface 950</h4>
             <p class="text-secondary-300">Text 300 on Surface 950</p>
           </div>
           <button class="px-4 py-2 bg-secondary-500 text-white rounded-md hover:bg-secondary-400">Action 500</button>
        </div>
      </div>
    </div>
  `,
}
