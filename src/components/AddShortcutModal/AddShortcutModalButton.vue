<script setup lang="ts">
import { Plus } from '@iconoir/vue'

const emit = defineEmits<{
  (e: 'open-modal'): void
}>()

const openModal = () => emit('open-modal')
</script>

<template>
  <button
    class="mx-auto mt-auto mb-5 py-1 px-5 rounded-lg w-fit bg-gray-950 text-gray-300 hover:text-white"
    @click="openModal"
  >
    <Plus class="w-8 h-8" />
  </button>
</template>
