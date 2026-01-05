import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta: Meta = {
  title: 'Design System/Mock Components',
  parameters: {
    layout: 'padded',
  },
  render: () => ({
    template: `
      <div class="space-y-12 max-w-4xl mx-auto">
        <div>
          <h1 class="text-3xl font-bold mb-4">Mock Components</h1>
          <p class="text-lg text-muted-foreground mb-8">
            This story demonstrates how the design tokens (colors, typography, spacing, radius)
            can be composed to build common UI patterns. These are pure HTML/CSS examples.
          </p>
        </div>

        <!-- Buttons -->
        <section class="space-y-4">
          <h2 class="text-xl font-bold border-b pb-2">Buttons</h2>
          <div class="flex flex-wrap gap-4 items-center">
            <button class="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 focus:ring-2 focus:ring-ring focus:outline-none transition-colors">
              Primary Button
            </button>
            <button class="px-4 py-2 bg-secondary text-secondary-foreground font-medium rounded-md hover:bg-secondary/80 transition-colors">
              Secondary Button
            </button>
            <button class="px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground font-medium rounded-md transition-colors">
              Outline Button
            </button>
            <button class="px-4 py-2 hover:bg-accent hover:text-accent-foreground font-medium rounded-md transition-colors">
              Ghost Button
            </button>
             <button class="px-4 py-2 bg-danger text-danger-foreground font-medium rounded-md hover:bg-danger/90 transition-colors">
              Destructive
            </button>
          </div>
        </section>

        <!-- Cards -->
        <section class="space-y-4">
          <h2 class="text-xl font-bold border-b pb-2">Cards</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Simple Card -->
            <div class="rounded-xl border bg-card text-card-foreground shadow-sm">
              <div class="p-6 space-y-2">
                <h3 class="text-2xl font-semibold leading-none tracking-tight">Notification</h3>
                <p class="text-sm text-muted-foreground">You have 3 unread messages.</p>
              </div>
              <div class="p-6 pt-0">
                 <div class="flex items-center gap-4 rounded-md border p-4">
                  <div class="flex-1 space-y-1">
                    <p class="text-sm font-medium leading-none">Push Notifications</p>
                    <p class="text-sm text-muted-foreground">Send notifications to device.</p>
                  </div>
                  <div class="h-6 w-10 bg-primary rounded-full relative cursor-pointer">
                    <div class="absolute right-1 top-1 h-4 w-4 bg-primary-foreground rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>
              <div class="p-6 pt-0 flex justify-end">
                 <button class="w-full px-4 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90">
                    Mark all as read
                 </button>
              </div>
            </div>

            <!-- Profile Card -->
            <div class="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
               <div class="h-32 bg-indigo-500 relative">
                  <div class="absolute -bottom-12 left-6 h-24 w-24 rounded-full border-4 border-background bg-zinc-200"></div>
               </div>
               <div class="pt-14 p-6">
                  <h3 class="text-xl font-bold">Jane Doe</h3>
                  <p class="text-sm text-muted-foreground">Software Engineer</p>
                  <p class="mt-4 text-sm">
                    Passionate about building accessible and beautiful user interfaces.
                  </p>
                  <div class="mt-6 flex gap-3">
                     <button class="flex-1 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 text-sm">
                        Follow
                     </button>
                     <button class="flex-1 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground font-medium rounded-md text-sm">
                        Message
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </section>

        <!-- Form Elements -->
        <section class="space-y-4">
          <h2 class="text-xl font-bold border-b pb-2">Form Elements</h2>
          <div class="max-w-md space-y-4">
            <div class="space-y-2">
              <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="m@example.com"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <p class="text-xs text-muted-foreground">We'll never share your email with anyone else.</p>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium leading-none" for="password">Password</label>
              <input
                type="password"
                id="password"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
          </div>
        </section>

        <!-- Alerts -->
        <section class="space-y-4">
           <h2 class="text-xl font-bold border-b pb-2">Alerts</h2>
           <div class="space-y-4">
             <div class="relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground bg-background text-foreground">
                <h5 class="mb-1 font-medium leading-none tracking-tight">Heads up!</h5>
                <div class="text-sm [&_p]:leading-relaxed">You can add components to your app using the cli.</div>
             </div>

             <div class="relative w-full rounded-lg border border-destructive/50 px-4 py-3 text-sm text-destructive dark:border-destructive [&>svg]:text-destructive">
                <h5 class="mb-1 font-medium leading-none tracking-tight">Error</h5>
                <div class="text-sm [&_p]:leading-relaxed">Your session has expired. Please log in again.</div>
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
