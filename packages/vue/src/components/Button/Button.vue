<script setup lang="ts">
import { ark } from '@ark-ui/vue'

export interface Props {
  variant?: 'primary' | 'secondary'
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
})
</script>

<template>
  <ark.button
    class="px-4 py-2 rounded-md font-semibold text-white transition-colors"
    :class="{
      'bg-primary hover:bg-blue-600': variant === 'primary',
      'bg-secondary hover:bg-purple-600': variant === 'secondary'
    }"
    v-bind="$attrs"
  >
    <slot />
  </ark.button>
</template>
