import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta: Meta = {
  title: 'Design System/Colors',
  parameters: {
    layout: 'padded',
  },
  render: () => ({
    template: `
      <div class="space-y-10">
        <!-- Semantic Colors -->
        <section>
          <h2 class="text-xl font-bold mb-4">Semantic Aliases</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="space-y-2">
              <div class="h-20 w-full rounded-md bg-primary shadow-sm"></div>
              <p class="font-medium">Primary</p>
              <p class="text-xs text-muted-foreground">var(--color-primary)</p>
            </div>
            <div class="space-y-2">
              <div class="h-20 w-full rounded-md bg-danger shadow-sm"></div>
              <p class="font-medium">Danger</p>
              <p class="text-xs text-muted-foreground">var(--color-danger)</p>
            </div>
            <div class="space-y-2">
              <div class="h-20 w-full rounded-md bg-success shadow-sm"></div>
              <p class="font-medium">Success</p>
              <p class="text-xs text-muted-foreground">var(--color-success)</p>
            </div>
            <div class="space-y-2">
              <div class="h-20 w-full rounded-md bg-warning shadow-sm"></div>
              <p class="font-medium">Warning</p>
              <p class="text-xs text-muted-foreground">var(--color-warning)</p>
            </div>
             <div class="space-y-2">
              <div class="h-20 w-full rounded-md bg-info shadow-sm"></div>
              <p class="font-medium">Info</p>
              <p class="text-xs text-muted-foreground">var(--color-info)</p>
            </div>
          </div>
        </section>

        <!-- Base Scales -->
         <section>
          <h2 class="text-xl font-bold mb-4">Gray Scale (Neutral)</h2>
          <div class="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-2">
            <div class="space-y-1">
              <div class="h-12 w-full rounded bg-gray-25 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-muted-foreground">25</div>
            </div>
            <div class="space-y-1">
              <div class="h-12 w-full rounded bg-gray-50 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-muted-foreground">50</div>
            </div>
            <div class="space-y-1">
              <div class="h-12 w-full rounded bg-gray-100 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-muted-foreground">100</div>
            </div>
            <div class="space-y-1">
              <div class="h-12 w-full rounded bg-gray-200 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-muted-foreground">200</div>
            </div>
            <div class="space-y-1">
              <div class="h-12 w-full rounded bg-gray-300 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-muted-foreground">300</div>
            </div>
            <div class="space-y-1">
              <div class="h-12 w-full rounded bg-gray-400 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-muted-foreground">400</div>
            </div>
            <div class="space-y-1">
              <div class="h-12 w-full rounded bg-gray-500 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-muted-foreground">500</div>
            </div>
            <div class="space-y-1">
              <div class="h-12 w-full rounded bg-gray-600 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-muted-foreground">600</div>
            </div>
            <div class="space-y-1">
              <div class="h-12 w-full rounded bg-gray-700 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-muted-foreground">700</div>
            </div>
            <div class="space-y-1">
              <div class="h-12 w-full rounded bg-gray-800 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-muted-foreground">800</div>
            </div>
            <div class="space-y-1">
              <div class="h-12 w-full rounded bg-gray-900 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-muted-foreground">900</div>
            </div>
            <div class="space-y-1">
              <div class="h-12 w-full rounded bg-gray-950 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-muted-foreground">950</div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-xl font-bold mb-4">Indigo (Primary Base)</h2>
          <div class="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-2">
            <div class="space-y-1">
              <div class="h-12 w-full rounded bg-indigo-25 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-muted-foreground">25</div>
            </div>
            <div class="space-y-1">
              <div class="h-12 w-full rounded bg-indigo-50 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-muted-foreground">50</div>
            </div>
            <div class="space-y-1">
              <div class="h-12 w-full rounded bg-indigo-100 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-muted-foreground">100</div>
            </div>
            <div class="space-y-1">
              <div class="h-12 w-full rounded bg-indigo-200 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-muted-foreground">200</div>
            </div>
            <div class="space-y-1">
              <div class="h-12 w-full rounded bg-indigo-300 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-muted-foreground">300</div>
            </div>
            <div class="space-y-1">
              <div class="h-12 w-full rounded bg-indigo-400 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-muted-foreground">400</div>
            </div>
            <div class="space-y-1">
              <div class="h-12 w-full rounded bg-indigo-500 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-muted-foreground">500</div>
            </div>
            <div class="space-y-1">
              <div class="h-12 w-full rounded bg-indigo-600 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-muted-foreground">600</div>
            </div>
            <div class="space-y-1">
              <div class="h-12 w-full rounded bg-indigo-700 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-muted-foreground">700</div>
            </div>
            <div class="space-y-1">
              <div class="h-12 w-full rounded bg-indigo-800 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-muted-foreground">800</div>
            </div>
            <div class="space-y-1">
              <div class="h-12 w-full rounded bg-indigo-900 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-muted-foreground">900</div>
            </div>
            <div class="space-y-1">
              <div class="h-12 w-full rounded bg-indigo-950 shadow-sm"></div>
              <div class="text-xs text-center font-mono text-muted-foreground">950</div>
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
