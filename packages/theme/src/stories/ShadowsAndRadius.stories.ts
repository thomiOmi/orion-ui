import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta: Meta = {
  title: 'Design System/Shadows & Radius',
  parameters: {
    layout: 'padded',
  },
  render: () => ({
    template: `
      <div class="space-y-10">
        <!-- Radius -->
        <section>
          <h2 class="text-xl font-bold mb-6 text-muted-foreground border-b pb-2">Border Radius</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
             <div class="flex flex-col items-center gap-3">
                <div class="w-24 h-24 bg-primary/20 border-2 border-primary rounded-none flex items-center justify-center text-primary-foreground"></div>
                <code class="text-xs bg-muted px-2 py-1 rounded">rounded-none</code>
             </div>
             <div class="flex flex-col items-center gap-3">
                <div class="w-24 h-24 bg-primary/20 border-2 border-primary rounded-sm flex items-center justify-center text-primary-foreground"></div>
                <code class="text-xs bg-muted px-2 py-1 rounded">rounded-sm</code>
             </div>
             <div class="flex flex-col items-center gap-3">
                <div class="w-24 h-24 bg-primary/20 border-2 border-primary rounded flex items-center justify-center text-primary-foreground"></div>
                <code class="text-xs bg-muted px-2 py-1 rounded">rounded</code>
             </div>
             <div class="flex flex-col items-center gap-3">
                <div class="w-24 h-24 bg-primary/20 border-2 border-primary rounded-md flex items-center justify-center text-primary-foreground"></div>
                <code class="text-xs bg-muted px-2 py-1 rounded">rounded-md</code>
             </div>
             <div class="flex flex-col items-center gap-3">
                <div class="w-24 h-24 bg-primary/20 border-2 border-primary rounded-lg flex items-center justify-center text-primary-foreground"></div>
                <code class="text-xs bg-muted px-2 py-1 rounded">rounded-lg</code>
             </div>
             <div class="flex flex-col items-center gap-3">
                <div class="w-24 h-24 bg-primary/20 border-2 border-primary rounded-xl flex items-center justify-center text-primary-foreground"></div>
                <code class="text-xs bg-muted px-2 py-1 rounded">rounded-xl</code>
             </div>
             <div class="flex flex-col items-center gap-3">
                <div class="w-24 h-24 bg-primary/20 border-2 border-primary rounded-2xl flex items-center justify-center text-primary-foreground"></div>
                <code class="text-xs bg-muted px-2 py-1 rounded">rounded-2xl</code>
             </div>
             <div class="flex flex-col items-center gap-3">
                <div class="w-24 h-24 bg-primary/20 border-2 border-primary rounded-full flex items-center justify-center text-primary-foreground"></div>
                <code class="text-xs bg-muted px-2 py-1 rounded">rounded-full</code>
             </div>
          </div>
        </section>

        <!-- Shadows -->
        <section>
          <h2 class="text-xl font-bold mb-6 text-muted-foreground border-b pb-2">Shadows</h2>
           <div class="grid grid-cols-2 md:grid-cols-4 gap-8 p-4">
             <div class="flex flex-col items-center gap-3">
                <div class="w-24 h-24 bg-white dark:bg-gray-800 shadow-xs rounded-md flex items-center justify-center"></div>
                <code class="text-xs bg-muted px-2 py-1 rounded">shadow-xs</code>
             </div>
             <div class="flex flex-col items-center gap-3">
                <div class="w-24 h-24 bg-white dark:bg-gray-800 shadow-sm rounded-md flex items-center justify-center"></div>
                <code class="text-xs bg-muted px-2 py-1 rounded">shadow-sm</code>
             </div>
             <div class="flex flex-col items-center gap-3">
                <div class="w-24 h-24 bg-white dark:bg-gray-800 shadow rounded-md flex items-center justify-center"></div>
                <code class="text-xs bg-muted px-2 py-1 rounded">shadow</code>
             </div>
             <div class="flex flex-col items-center gap-3">
                <div class="w-24 h-24 bg-white dark:bg-gray-800 shadow-md rounded-md flex items-center justify-center"></div>
                <code class="text-xs bg-muted px-2 py-1 rounded">shadow-md</code>
             </div>
             <div class="flex flex-col items-center gap-3">
                <div class="w-24 h-24 bg-white dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-center"></div>
                <code class="text-xs bg-muted px-2 py-1 rounded">shadow-lg</code>
             </div>
             <div class="flex flex-col items-center gap-3">
                <div class="w-24 h-24 bg-white dark:bg-gray-800 shadow-xl rounded-md flex items-center justify-center"></div>
                <code class="text-xs bg-muted px-2 py-1 rounded">shadow-xl</code>
             </div>
              <div class="flex flex-col items-center gap-3">
                <div class="w-24 h-24 bg-white dark:bg-gray-800 shadow-2xl rounded-md flex items-center justify-center"></div>
                <code class="text-xs bg-muted px-2 py-1 rounded">shadow-2xl</code>
             </div>
          </div>
        </section>
      </div>
    `,
  }),
}

export default meta
type Story = StoryObj

export const Default: Story = {}
