<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { ark } from '@ark-ui/vue/factory'

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  variant?: 'primary' | 'secondary'
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
})
</script>

<template>
  <ark.button
    class="px-4 py-2 rounded-md font-semibold text-white transition-colors cursor-pointer" :class="{
      'bg-primary hover:bg-blue-600': variant === 'primary',
      'bg-secondary hover:bg-purple-600': variant === 'secondary',
    }" v-bind="$attrs"
  >
    <slot />
  </ark.button>
</template>
