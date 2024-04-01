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
  <section class="scrollbar overflow-y-auto">
    <ul
      class="grid grid-flow-row auto-rows-fr grid-cols-3 grid-rows-4 gap-y-4 xl:grid-cols-4 2xl:grid-cols-6"
      ref="sortableElement"
    >
      <li
        v-for="shortcut in shortcutStore.list"
        :key="shortcut.id"
        :order="shortcut.id"
        class="flex items-center justify-center py-3 font-semibold transition-all delay-[50ms] duration-300 hover:-translate-y-4 hover:text-orange-400"
      >
        <a :href="shortcut.link" class="text-2xl">{{ shortcut.name }}</a>
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
