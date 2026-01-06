import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'

const meta: Meta = {
  title: 'Components/Sizing',
}

export default meta
type Story = StoryObj

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']

export const Sizing: Story = {
  render: () => html`
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-4">
         <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Width / Height (Tailwind Default Scale)</h3>
         <div class="flex flex-wrap items-end gap-4">
             <div class="bg-primary-500 w-4 h-4 rounded" title="w-4 h-4"></div>
             <div class="bg-primary-500 w-8 h-8 rounded" title="w-8 h-8"></div>
             <div class="bg-primary-500 w-12 h-12 rounded" title="w-12 h-12"></div>
             <div class="bg-primary-500 w-16 h-16 rounded" title="w-16 h-16"></div>
             <div class="bg-primary-500 w-24 h-24 rounded" title="w-24 h-24"></div>
             <div class="bg-primary-500 w-32 h-32 rounded" title="w-32 h-32"></div>
         </div>
      </div>

       <div class="flex flex-col gap-4">
         <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Font Size</h3>
         <div class="flex flex-col gap-2">
            ${sizes.map(size => html`<div class="text-${size} text-gray-900 dark:text-gray-100">text-${size} - The quick brown fox jumps over the lazy dog</div>`)}
         </div>
      </div>
    </div>
  `,
}
