<script setup lang="ts">
import { ref } from 'vue'
import { Plus, Xmark } from '@iconoir/vue'
import type { Shortcut } from '@/types'
import { useShortcutStore } from '@/stores/ShortcutStore'

const open = ref(false)
const newShortcut = ref<Shortcut>({
  id: '',
  name: '',
  link: ''
})

const shortcutStore = useShortcutStore()

const closeModal = () => {
  open.value = false

  newShortcut.value = {
    id: '',
    name: '',
    link: ''
  }
}

const saveNewShortcut = () => {
  if (newShortcut.value.link && newShortcut.value.name) {
    newShortcut.value.id = String(shortcutStore.list.length)
    shortcutStore.addShortcut(newShortcut.value)

    closeModal()
  }
}
</script>

<template>
  <div>
    <button
      class="py-1 px-5 rounded-lg w-fit bg-gray-950 text-gray-300 hover:text-white"
      @click="open = true"
    >
      <Plus class="w-8 h-8" />
    </button>

    <Teleport to="body">
      <div v-if="open" class="flex flex-col items-center">
        <!-- Modal content -->
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

          <form @submit.prevent="saveNewShortcut" class="mt-8 flex flex-col h-full gap-8">
            <div class="flex flex-col gap-6 items-center">
              <div class="flex flex-col gap-1 w-3/4">
                <label for="shortcut-name" class="text-gray-300 ml-1">Name</label>
                <input
                  type="text"
                  name="shortcut-name"
                  id="shortcut-name"
                  v-model="newShortcut.name"
                  class="h-9 px-2 bg-gray-950 text-white rounded-lg focus:outline-none focus:ring focus:ring-gray-700 ring-gray-800 ring-2"
                />
              </div>

              <div class="flex flex-col gap-1 w-3/4">
                <label for="shortcut-link" class="text-gray-300 ml-1">Link</label>
                <input
                  type="text"
                  name="shortcut-link"
                  id="shortcut-link"
                  v-model="newShortcut.link"
                  class="h-9 px-2 bg-gray-950 text-white rounded-lg focus:outline-none focus:ring focus:ring-gray-700 ring-gray-800 ring-2"
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

        <!-- Overlay -->
        <div
          class="w-screen h-screen fixed z-10 top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black filter backdrop-blur-sm"
          @click="closeModal"
        ></div>
      </div>
    </Teleport>
  </div>
</template>
