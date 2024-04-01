<script setup lang="ts">
import { useGreetingText } from '@/composables/useGreetingText'

const greetingText = useGreetingText()
</script>

<template>
  <header class="mt-20 flex items-center px-56">
    <p
      class="text-base-100 mr-auto border-b-2 border-orange-600 pb-4 pl-2 pr-24 text-6xl font-semibold"
    >
      {{ greetingText.randomLanguage() }}
    </p>
    <div class="text-base-300 flex flex-col gap-2 text-xl">
      <p class="">HH:MM PM</p>
      <p class="">TT°C City, Country</p>
    </div>
  </header>
</template>
