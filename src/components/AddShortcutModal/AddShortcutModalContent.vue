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
    <aside class="p-3 rounded-lg w-[32rem] h-96 bg-gray-900 z-50 fixed top-1/4 flex flex-col">
      <div class="flex justify-end">
        <button
          class="rounded-lg w-fit bg-gray-950 text-gray-300 hover:text-white"
          @click="closeModal"
        >
          <Xmark class="w-8 h-8" />
        </button>
      </div>

      <header class="px-6">
        <h2 class="text-3xl font-semibold text-gray-300">Add new shortcut</h2>
      </header>

      <form @submit.prevent="saveShortcut" class="mt-8 flex flex-col h-full gap-8">
        <div class="flex flex-col gap-6 items-center">
          <div class="flex flex-col gap-1 w-3/4">
            <label for="shortcut-name" class="text-gray-300 ml-1">Name</label>
            <input
              type="text"
              name="shortcut-name"
              id="shortcut-name"
              v-model="newShortcut.name"
              :class="`h-9 px-2 bg-gray-950 text-white rounded-lg focus:outline-none focus:ring focus:ring-gray-700 ring-gray-800 ring-2 ${isValid.name ? '' : 'border-2 border-red-600'}`"
            />
          </div>

          <div class="flex flex-col gap-1 w-3/4">
            <label for="shortcut-link" class="text-gray-300 ml-1">Link</label>
            <input
              type="text"
              name="shortcut-link"
              id="shortcut-link"
              v-model="newShortcut.link"
              :class="`h-9 px-2 bg-gray-950 text-white rounded-lg focus:outline-none focus:ring focus:ring-gray-700 ring-gray-800 ring-2 ${isValid.link ? '' : 'border-2 border-red-600'}`"
            />
          </div>
        </div>

        <button
          class="rounded-lg w-fit px-9 py-1.5 mx-auto mt-auto mb-4 bg-gray-950 text-gray-300 hover:text-white"
        >
          Save
        </button>
      </form>
    </aside>

    <div
      class="w-screen h-screen fixed z-10 top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black filter backdrop-blur-sm"
      @click="closeModal"
    ></div>
  </div>
</template>
