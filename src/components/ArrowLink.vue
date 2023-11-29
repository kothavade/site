<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ href: string; back?: boolean }>()

const isExternal = computed(() => props.href.startsWith('http') || props.href.includes('kothavade.com/gh'))
</script>

<template>
  <div class="inline-flex items-center">
    <div v-if="props.back" class="i-radix-icons:arrow-top-left text-neutral-500 text-md mr-.5" />
    <a
      :href="props.href" :target="isExternal ? '_blank' : '_self'"
      class="underline decoration-neutral-600 underline-offset-4 transition-colors focus:(decoration-neutral-500 outline-offset-6) hover:decoration-neutral-500"
    >
      <slot />
    </a>
    <div v-if="!props.back" class="i-radix-icons:arrow-top-right text-neutral-500 text-md ml-.5" />
  </div>
</template>
