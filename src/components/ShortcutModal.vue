<script setup lang="ts">
import { ref } from 'vue'
import { Plus, Xmark } from '@iconoir/vue'

const open = ref(false)
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
        <section
          class="py-3 px-5 rounded-lg w-[30%] h-96 bg-gray-900 z-50 fixed top-1/4 flex flex-col"
        >
          <header class="flex justify-end">
            <button
              class="rounded-lg w-fit bg-gray-950 text-gray-300 hover:text-white"
              @click="open = false"
            >
              <Xmark class="w-8 h-8" />
            </button>
          </header>

          <main class="px-2 flex flex-col h-full gap-8">
            <h2 class="text-3xl font-semibold text-gray-300">Add new shortcut</h2>
            <div class="flex flex-col gap-6">
              <div class="flex flex-col gap-1">
                <label for="shortcut-name" class="text-gray-300 ml-1">Name</label>
                <input
                  type="text"
                  name="shortcut-name"
                  id="shortcut-name"
                  class="w-1/2 h-9 bg-gray-950 text-white rounded-lg"
                />
              </div>
              <div class="flex flex-col gap-1">
                <label for="shortcut-link" class="text-gray-300 ml-1">Link</label>
                <input
                  type="text"
                  name="shortcut-link"
                  id="shortcut-link"
                  class="w-full h-9 bg-gray-950 text-white rounded-lg"
                />
              </div>
            </div>
            <button
              class="rounded-lg w-fit px-9 py-1.5 mx-auto mt-auto mb-4 bg-gray-950 text-gray-300 hover:text-white"
            >
              Save
            </button>
          </main>
        </section>
        <div
          class="w-screen h-screen fixed z-10 top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black filter backdrop-blur-sm"
          @click="open = false"
        ></div>
      </div>
    </Teleport>
  </div>
</template>
