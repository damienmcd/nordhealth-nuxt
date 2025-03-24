<template>
  <main class="n-stack-horizontal">
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
  useHead({
    htmlAttrs: {
      class: 'n-reset'
    },
    bodyAttrs: {
      id: 'sign-up',
      class: 'page-sign-up'
    }
  })
</script>
