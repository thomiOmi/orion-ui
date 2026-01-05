import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta: Meta = {
  title: 'Design System/Typography',
  parameters: {
    layout: 'padded',
  },
  render: () => ({
    template: `
      <div class="space-y-10">
        <!-- Font Family -->
        <section>
          <h2 class="text-xl font-bold mb-4 text-muted-foreground border-b pb-2">Font Family</h2>
          <div class="grid gap-4">
             <div>
                <p class="font-sans text-2xl">Inter (Sans)</p>
                <p class="text-sm text-muted-foreground font-mono">font-family: var(--font-sans)</p>
                <p class="mt-2 font-sans text-gray-600">The quick brown fox jumps over the lazy dog.</p>
             </div>
             <div>
                <p class="font-mono text-2xl">Monospace</p>
                <p class="text-sm text-muted-foreground font-mono">font-family: var(--font-mono)</p>
                <p class="mt-2 font-mono text-gray-600">The quick brown fox jumps over the lazy dog.</p>
             </div>
          </div>
        </section>

        <!-- Font Sizes -->
        <section>
          <h2 class="text-xl font-bold mb-4 text-muted-foreground border-b pb-2">Font Sizes</h2>
          <div class="space-y-4">
             <div class="flex items-baseline gap-4">
                <span class="w-20 text-xs text-muted-foreground font-mono">text-xs</span>
                <p class="text-xs">The quick brown fox jumps over the lazy dog.</p>
             </div>
             <div class="flex items-baseline gap-4">
                <span class="w-20 text-xs text-muted-foreground font-mono">text-sm</span>
                <p class="text-sm">The quick brown fox jumps over the lazy dog.</p>
             </div>
             <div class="flex items-baseline gap-4">
                <span class="w-20 text-xs text-muted-foreground font-mono">text-base</span>
                <p class="text-base">The quick brown fox jumps over the lazy dog.</p>
             </div>
             <div class="flex items-baseline gap-4">
                <span class="w-20 text-xs text-muted-foreground font-mono">text-lg</span>
                <p class="text-lg">The quick brown fox jumps over the lazy dog.</p>
             </div>
             <div class="flex items-baseline gap-4">
                <span class="w-20 text-xs text-muted-foreground font-mono">text-xl</span>
                <p class="text-xl">The quick brown fox jumps over the lazy dog.</p>
             </div>
             <div class="flex items-baseline gap-4">
                <span class="w-20 text-xs text-muted-foreground font-mono">text-2xl</span>
                <p class="text-2xl">The quick brown fox jumps over the lazy dog.</p>
             </div>
             <div class="flex items-baseline gap-4">
                <span class="w-20 text-xs text-muted-foreground font-mono">text-3xl</span>
                <p class="text-3xl">The quick brown fox jumps over the lazy dog.</p>
             </div>
          </div>
        </section>

        <!-- Font Weights -->
        <section>
          <h2 class="text-xl font-bold mb-4 text-muted-foreground border-b pb-2">Font Weights</h2>
           <div class="space-y-4">
             <div class="flex items-baseline gap-4">
                <span class="w-20 text-xs text-muted-foreground font-mono">font-light</span>
                <p class="font-light text-xl">The quick brown fox jumps over the lazy dog.</p>
             </div>
             <div class="flex items-baseline gap-4">
                <span class="w-20 text-xs text-muted-foreground font-mono">font-normal</span>
                <p class="font-normal text-xl">The quick brown fox jumps over the lazy dog.</p>
             </div>
             <div class="flex items-baseline gap-4">
                <span class="w-20 text-xs text-muted-foreground font-mono">font-medium</span>
                <p class="font-medium text-xl">The quick brown fox jumps over the lazy dog.</p>
             </div>
             <div class="flex items-baseline gap-4">
                <span class="w-20 text-xs text-muted-foreground font-mono">font-semibold</span>
                <p class="font-semibold text-xl">The quick brown fox jumps over the lazy dog.</p>
             </div>
             <div class="flex items-baseline gap-4">
                <span class="w-20 text-xs text-muted-foreground font-mono">font-bold</span>
                <p class="font-bold text-xl">The quick brown fox jumps over the lazy dog.</p>
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
