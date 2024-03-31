<script setup lang="ts">
import { useGreetingText } from '@/composables/useGreetingText'

const greetingText = useGreetingText()
</script>

<template>
  <section class="flex py-1 px-5 justify-between text-xl font-semibold">
    <p>{{ greetingText.randomLanguage() }}</p>
    <p>HH:MM PM</p>
    <p>TT°C City, Country</p>
  </section>
</template>
