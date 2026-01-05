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
    class="
      cursor-pointer rounded-md px-4 py-2 font-semibold text-white
      transition-colors
      disabled:cursor-not-allowed
    " :class="{
      'bg-primary-500 hover:bg-primary-600': variant === 'primary',
    }" v-bind="$attrs"
  >
    <slot />
  </ark.button>
</template>
