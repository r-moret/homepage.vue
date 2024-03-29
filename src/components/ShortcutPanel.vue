<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useSortableShortcuts } from '@/composables/useSortableShortcuts'
import { useShortcutStore } from '@/stores/ShortcutStore'

const shortcutStore = useShortcutStore()
const sortableElement = ref<HTMLElement | null>(null)

onMounted(() => {
  if (sortableElement.value) {
    useSortableShortcuts(sortableElement.value, 'order')
  }
})
</script>

<template>
  <section class="overflow-y-auto border-2 rounded-lg scrollbar">
    <ul
      class="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-rows-4 grid-flow-row auto-rows-fr gap-y-4"
      ref="sortableElement"
    >
      <li
        v-for="shortcut in shortcutStore.list"
        :key="shortcut.id"
        :order="shortcut.id"
        class="flex justify-center items-center py-3"
      >
        <a :href="shortcut.link" class="text-xl">{{ shortcut.name }}</a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.scrollbar {
  scrollbar-gutter: stable;
  scrollbar-color: rgb(31, 41, 55) rgb(3, 7, 18);
  scrollbar-width: thin;
}
</style>
