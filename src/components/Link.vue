<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ href: string; hideUnderline?: boolean }>()

const isExternal = computed(() => props.href.startsWith('http') || props.href.includes('kothavade.com/gh'))

const linkClasses = computed(() => {
  const classes = ['underline', 'decoration-neutral-600', 'underline-offset-4', 'transition-colors', 'focus:(decoration-neutral-500 outline-offset-6)', 'hover:decoration-neutral-500']
  if (props.hideUnderline)
    classes.splice(classes.indexOf('underline'), 1)

  return classes
})
</script>

<template>
  <a
    :href="props.href" :target="isExternal ? '_blank' : '_self'"
    :class="linkClasses"
  >
    <slot />
  </a>
</template>
