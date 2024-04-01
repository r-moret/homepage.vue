<script setup lang="ts">
import { ref } from 'vue'
import { Xmark } from '@iconoir/vue'
import type { Shortcut } from '@/types'
import { useShortcutStore } from '@/stores/ShortcutStore'

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close-modal'): void
  (e: 'save-shortcut', payload: Shortcut): void
}>()

const newShortcut = ref<Shortcut>({
  id: '',
  name: '',
  link: ''
})

const isValid = ref({
  name: true,
  link: true
})

const shortcutStore = useShortcutStore()

const eraseNewShortcut = () => {
  isValid.value = {
    name: true,
    link: true
  }
  newShortcut.value = {
    id: '',
    name: '',
    link: ''
  }
}
const closeModal = () => {
  emit('close-modal')
  eraseNewShortcut()
}
const saveShortcut = () => {
  isValid.value.name = newShortcut.value.name != ''
  isValid.value.link = newShortcut.value.link != ''

  if (!isValid.value.name || !isValid.value.link) return

  newShortcut.value.id = String(shortcutStore.list.length)

  emit('save-shortcut', newShortcut.value)
  eraseNewShortcut()
}
</script>

<template>
  <div v-if="isOpen" class="flex flex-col items-center">
    <aside class="bg-base-900 fixed top-1/4 z-50 flex h-96 w-[32rem] flex-col rounded-lg p-3">
      <div class="flex justify-end">
        <button class="bg-base-800 text-base-200 w-fit rounded-lg" @click="closeModal">
          <Xmark class="h-8 w-8" />
        </button>
      </div>

      <header class="px-6">
        <h2 class="text-base-200 text-3xl font-semibold">Add new shortcut</h2>
      </header>

      <form @submit.prevent="saveShortcut" class="mt-8 flex h-full flex-col gap-8">
        <div class="flex flex-col items-center gap-6">
          <div class="flex w-3/4 flex-col gap-1">
            <label for="shortcut-name" class="text-base-200 ml-1">Name</label>
            <input
              type="text"
              name="shortcut-name"
              id="shortcut-name"
              v-model="newShortcut.name"
              :class="`bg-base-950 text-base-200 ring-base-900 focus:ring-base-800 h-9 rounded-lg px-2 ring-2 focus:outline-none focus:ring ${isValid.name ? '' : 'border-2 border-red-600'}`"
            />
          </div>

          <div class="flex w-3/4 flex-col gap-1">
            <label for="shortcut-link" class="text-base-200 ml-1">Link</label>
            <input
              type="text"
              name="shortcut-link"
              id="shortcut-link"
              v-model="newShortcut.link"
              :class="`bg-base-950 text-base-200 ring-base-900 focus:ring-base-800 h-9 rounded-lg px-2 ring-2 focus:outline-none focus:ring ${isValid.link ? '' : 'border-2 border-red-600'}`"
            />
          </div>
        </div>

        <button
          class="bg-base-800 border-base-700 text-base-200 mx-auto mb-4 mt-auto w-fit rounded-lg border-2 px-8 py-1 text-lg"
        >
          Save
        </button>
      </form>
    </aside>

    <div
      class="fixed bottom-0 left-0 right-0 top-0 z-10 h-screen w-screen bg-black bg-opacity-50 filter backdrop-blur-sm"
      @click="closeModal"
    ></div>
  </div>
</template>
