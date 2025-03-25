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
      id: 'page-sign-up-register',
      class: 'page-sign-up-register'
    }
  })
</script>
