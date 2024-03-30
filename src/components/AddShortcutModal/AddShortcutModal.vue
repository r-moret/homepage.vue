<script setup lang="ts">
import { ref } from 'vue'
import type { Shortcut } from '@/types'
import { useShortcutStore } from '@/stores/ShortcutStore'
import AddShortcutModalButton from '@/components/AddShortcutModal/AddShortcutModalButton.vue'
import AddShortcutModalContent from '@/components/AddShortcutModal/AddShortcutModalContent.vue'

const isModalOpen = ref(false)

const shortcutStore = useShortcutStore()

const openModal = () => (isModalOpen.value = true)
const closeModal = () => (isModalOpen.value = false)
const saveShortcut = (payload: Shortcut) => {
  shortcutStore.addShortcut(payload)
  closeModal()
}
</script>

<template>
  <AddShortcutModalButton @open-modal="openModal" />

  <Teleport to="body">
    <AddShortcutModalContent
      :is-open="isModalOpen"
      @close-modal="closeModal"
      @save-shortcut="saveShortcut"
    />
  </Teleport>
</template>
