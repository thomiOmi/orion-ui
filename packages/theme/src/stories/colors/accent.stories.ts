import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'

const meta: Meta = {
  title: 'Colors/Accent',
}

export default meta
type Story = StoryObj

const scales = [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

export const Primary: Story = {
  render: () => html`
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      ${scales.map(
        scale => html`
          <div class="flex flex-col gap-2">
            <div class="h-16 w-full rounded-md bg-primary-${scale} border border-gray-200 dark:border-gray-800"></div>
            <div class="text-sm font-medium text-gray-900 dark:text-gray-100">primary-${scale}</div>
          </div>
        `,
      )}
    </div>
  `,
}
