<template>
  <provet-stack
    class="sign-up-stack"
    direction="vertical"
    align-items="center"
    justify-content="center"
    gap="m"
  >
    <NuxtImg src="/provet_cloud_new_logo_570x80.png" />
    <provet-card padding="l">
      <h1 slot="header" class="n-font-size-l">Sign Up for Provet Cloud</h1>

      <provet-stack direction="vertical" align-items="stretch" gap="l">
        <p>Enter your email and password.</p>
        <form
          id="sign-up-form"
          class="n-stack n-gap-m"
          @submit.prevent="handleForm"
        >
          <input type="hidden" name="csrfmiddlewaretoken" value="" />
          <provet-stack direction="vertical" align-items="stretch" gap="l">
            <provet-input
              id="email"
              ref="input-email"
              label="Email Address"
              type="email"
              name="email"
              placeholder="Email"
              size="m"
              expand
              required
              @change="changeEmail"
              @input="changeEmail"
              @blur="validateEmail"
            ></provet-input>

            <provet-input
              id="password"
              ref="input-password"
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
              size="m"
              expand
              required
              @change="changePassword"
              @input="changePassword"
              @blur="validatePassword"
            >
              <provet-button
                slot="end"
                aria-describedby="password-tooltip"
                type="button"
                square
                @click="togglePasswordVisibility"
              >
                <provet-icon name="interface-edit-on"></provet-icon>
                <provet-icon name="interface-edit-off"></provet-icon>
              </provet-button>
            </provet-input>
            <provet-tooltip id="password-tooltip"
              >Show / hide password</provet-tooltip
            >

            <provet-button variant="primary" type="submit" size="m">
              Sign Up
            </provet-button>
          </provet-stack>
        </form>
      </provet-stack>
    </provet-card>
    <div id="footer">&copy; {{ new Date().getFullYear() }} Provet Cloud</div>
  </provet-stack>
</template>

<script lang="ts" setup>
  import { Stack } from '@provetcloud/web-components'
  import { Input } from '@provetcloud/web-components'
  import { Button } from '@provetcloud/web-components'

  import { ref } from 'vue'

  const email = ref('')
  const password = ref('')

  const inputEmailElement = useTemplateRef('input-email')
  console.log({ inputEmailElement })

  const inputPasswordElement = useTemplateRef('input-password')
  console.log({ inputPasswordElement })

  const changeEmail = (event: any) => {
    email.value = event.target.value
  }

  const validateEmail = (event: any) => {
    console.log(event.target.value)
  }

  const changePassword = (event: any) => {
    password.value = event.target.value
  }

  const validatePassword = (event: any) => {
    console.log(event.target.value)
  }

  const togglePasswordVisibility = () => {
    const inputPasswordHtmlElement: HTMLElement | any | null =
      document.getElementById('password')
    inputPasswordHtmlElement.type =
      inputPasswordHtmlElement.type == 'password' ? 'text' : 'password'
  }

  const handleForm = () => {
    console.log('Handle form')
  }
</script>

<style scoped>
  .sign-up-stack {
    inline-size: 90%;
    max-inline-size: 600px;
    margin: var(--n-space-xl) auto;
    row-gap: var(--n-space-xl);
  }

  [type='password'] provet-icon[name='interface-edit-off'],
  [type='text'] provet-icon[name='interface-edit-on'] {
    display: none;
  }
</style>
