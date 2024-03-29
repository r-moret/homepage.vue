<script setup lang="ts">
import { ref } from 'vue'

type Shortcut = {
  id: string
  name: string
  link: string
}

const shortcuts = ref<Shortcut[]>([
  { id: '0', name: 'Discord', link: '#' },
  { id: '1', name: 'Facebook', link: '#' },
  { id: '2', name: 'Twitter', link: '#' },
  { id: '3', name: 'Youtube', link: '#' },
  { id: '4', name: 'Google', link: '#' },
  { id: '5', name: 'Gmail', link: '#' },
  { id: '6', name: 'VSCode', link: '#' },
  { id: '7', name: 'Spotify', link: '#' },
  { id: '8', name: 'Steam', link: '#' },
  { id: '9', name: 'Terminal', link: '#' },
  { id: '10', name: 'Folder', link: '#' },
  { id: '11', name: 'Chrome', link: '#' },
  { id: '12', name: 'Notes', link: '#' },
  { id: '13', name: 'Bookmarks', link: '#' },
  { id: '0', name: 'Discord', link: '#' },
  { id: '1', name: 'Facebook', link: '#' },
  { id: '2', name: 'Twitter', link: '#' },
  { id: '3', name: 'Youtube', link: '#' },
  { id: '4', name: 'Google', link: '#' },
  { id: '5', name: 'Gmail', link: '#' },
  { id: '6', name: 'VSCode', link: '#' },
  { id: '7', name: 'Spotify', link: '#' },
  { id: '8', name: 'Steam', link: '#' },
  { id: '9', name: 'Terminal', link: '#' },
  { id: '10', name: 'Folder', link: '#' },
  { id: '11', name: 'Chrome', link: '#' },
  { id: '12', name: 'Notes', link: '#' },
  { id: '13', name: 'Bookmarks', link: '#' }
])
</script>

<template>
  <section class="overflow-y-auto border-2 rounded-lg scrollbar">
    <ul
      class="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-rows-4 grid-flow-row auto-rows-fr gap-y-4"
    >
      <li
        v-for="shortcut in shortcuts"
        :key="shortcut.id"
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
