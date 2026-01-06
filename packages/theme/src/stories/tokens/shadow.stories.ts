import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'

const meta: Meta = {
  title: 'Tokens/Shadow',
}

export default meta
type Story = StoryObj

const shadows = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']

export const Shadow: Story = {
  render: () => html`
    <div class="grid grid-cols-2 gap-8 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl">
      ${shadows.map(
        shadow => html`
          <div class="flex flex-col gap-2 items-center">
            <div class="h-32 w-32 bg-white dark:bg-gray-800 shadow-${shadow} rounded-lg flex items-center justify-center">
            </div>
             <span class="text-sm font-medium text-gray-900 dark:text-gray-100 mt-4">shadow-${shadow}</span>
          </div>
        `,
      )}
    </div>
  `,
}
