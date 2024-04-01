<script setup lang="ts">
import ShortcutPanel from './components/ShortcutPanel.vue'
import GreetingHeader from './components/GreetingHeader.vue'
import AddShortcutModal from './components/AddShortcutModal/AddShortcutModal.vue'
</script>

<template>
  <main class="from-base-950 to-base-950 flex h-screen flex-col bg-gradient-to-t via-stone-800">
    <GreetingHeader class="flex-initial" />
    <ShortcutPanel class="text-base-300 mt-32 h-96 w-full rounded-md border-0 px-80" />
    <AddShortcutModal />
  </main>
</template>
