<script setup lang="ts">
import ShortcutPanel from './components/ShortcutPanel.vue'
import GreetingHeader from './components/GreetingHeader.vue'
import AddShortcutModal from './components/AddShortcutModal/AddShortcutModal.vue'
</script>

<template>
  <main class="bg-gray-900 flex flex-col h-screen">
    <GreetingHeader class="bg-gray-950 text-gray-300 flex-initial" />
    <ShortcutPanel
      class="bg-gray-950 text-gray-300 border-gray-800 mt-36 mx-auto w-4/5 lg:w-3/4 xl:w-3/5 2xl:w-2/4 h-96"
    />
    <AddShortcutModal />
  </main>
</template>
