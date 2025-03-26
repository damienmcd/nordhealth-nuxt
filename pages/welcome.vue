<template>
  <provet-stack
    class="welcome-stack"
    direction="vertical"
    align-items="center"
    justify-content="center"
    gap="m"
  >
    <NuxtLink to="/">
      <NuxtImg
        src="/provet_cloud_new_logo_570x80.png"
        alt="Provet Cloud logo"
        class="provet-cloud-logo"
      />
    </NuxtLink>
    <provet-card padding="l">
      <h1 slot="header" class="n-font-size-l">Welcome to Provet Cloud</h1>

      <provet-stack direction="vertical" align-items="stretch" gap="l">
        <p>Thank you for signing up to Provet Cloud.</p>
        <p>
          Please verify your account using the link we sent to the email address
          you provided when registering ({{ user.email }}).
        </p>
        <p>
          You can start using Provet Cloud as soon as you have verified your
          account.
        </p>
      </provet-stack>
    </provet-card>
    <div id="footer">&copy; {{ new Date().getFullYear() }} Provet Cloud</div>
  </provet-stack>
</template>

<script setup lang="ts">
  import { Stack } from '@provetcloud/web-components'
  import { Input } from '@provetcloud/web-components'
  import { Button } from '@provetcloud/web-components'

  const user: Ref<user> = useState('user')

  definePageMeta({
    layout: 'page',
    middleware: ['auth']
  })

  useHead({
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      id: 'page-application',
      class: 'page-application'
    },
    title: 'Provet Cloud - Welcome'
  })
</script>

<style scoped>
  .welcome-stack {
    inline-size: 90%;
    max-inline-size: 600px;
    margin: var(--n-space-xl) auto;
    row-gap: var(--n-space-xl);
  }

  .provet-cloud-logo {
    max-block-size: var(--n-space-xl);
  }

  [type='password'] provet-icon[name='interface-edit-off'],
  [type='text'] provet-icon[name='interface-edit-on'] {
    display: none;
  }

  .n-required {
    color: var(--n-color-status-danger);
    margin-inline-start: var(--n-space-xs);
  }
</style>
