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
      id: 'register',
      class: 'page-register'
    }
  })
</script>

<style>
  html,
  body,
  main,
  #__nuxt {
    block-size: 100%;
  }

  body {
    background: var(--n-color-surface-raised);
  }
</style>
