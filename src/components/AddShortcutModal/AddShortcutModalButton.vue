<script setup lang="ts">
import { Plus } from '@iconoir/vue'

const emit = defineEmits<{
  (e: 'open-modal'): void
}>()

const openModal = () => emit('open-modal')
</script>

<template>
  <button
    class="border-base-800 bg-base-900 text-base-200 group mx-auto mb-10 mt-auto w-fit overflow-hidden rounded-md border-2 px-3.5 py-0.5 text-center text-lg font-semibold"
    @click="openModal"
  >
    <div class="relative flex items-center transition-all duration-300 group-hover:mr-[7.5rem]">
      <Plus class="h-8 w-8" />
      <span
        class="absolute left-12 block w-28 overflow-hidden text-ellipsis whitespace-nowrap text-left opacity-0 transition-all duration-300 group-hover:left-9 group-hover:opacity-100"
        >Add shortcut</span
      >
    </div>
  </button>
</template>
