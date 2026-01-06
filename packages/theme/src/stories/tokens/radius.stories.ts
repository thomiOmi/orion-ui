import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'

const meta: Meta = {
  title: 'Tokens/Radius',
}

export default meta
type Story = StoryObj

const radii = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']

export const Radius: Story = {
  render: () => html`
    <div class="flex flex-col gap-8">
      ${radii.map(
        radius => html`
          <div class="flex flex-col gap-2">
            <div class="h-24 w-24 bg-primary-500 rounded-${radius} flex items-center justify-center text-white shadow-md">
            </div>
             <span class="text-sm font-medium text-gray-900 dark:text-gray-100">rounded-${radius}</span>
          </div>
        `,
      )}
    </div>
  `,
}
