<template>
  <provet-stack
    class="sign-up-stack"
    direction="vertical"
    align-items="center"
    justify-content="center"
    gap="m"
  >
    <NuxtImg
      src="/provet_cloud_new_logo_570x80.png"
      alt="Provet Cloud logo"
      class="provet-cloud-logo"
    />
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
              @blur="validateEmail"
              :error="emailError"
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

<script setup lang="ts">
  import { Stack } from '@provetcloud/web-components'
  import { Input } from '@provetcloud/web-components'
  import { Button } from '@provetcloud/web-components'

  import { ref } from 'vue'

  const formIsDirty: Ref<boolean> = ref(false)
  const email: Ref<string> = ref('')
  const emailError: Ref<string> = ref('')
  const password: Ref<string> = ref('')
  const passwordError: Ref<string> = ref('')

  // const changeEmail = (event: Event) => {
  //   formIsDirty.value = true
  //   const emailAddress: string = (event.target as HTMLInputElement).value

  //   email.value = emailAddress
  // }

  const validateEmail = (event: Event) => {
    formIsDirty.value = true
    const emailInput: string = (event.target as HTMLInputElement).value

    if (emailInput === '') {
      emailError.value = 'This field is required'
    } else if (!useIsValidEmail(emailInput)) {
      emailError.value = 'Please enter a valid email address'
    } else {
      emailError.value = ''
      email.value = emailInput
    }
  }

  const changePassword = (event: Event) => {
    password.value = (event.target as HTMLInputElement).value
  }

  const validatePassword = (event: Event) => {
    // console.log((event.target as HTMLInputElement).value)
  }

  const togglePasswordVisibility = () => {
    const inputPasswordHtmlElement: HTMLInputElement | null =
      document.getElementById('password') as HTMLInputElement
    console.log({ inputPasswordHtmlElement })
    console.log(inputPasswordHtmlElement.type)
    if (inputPasswordHtmlElement !== null) {
      inputPasswordHtmlElement.type =
        inputPasswordHtmlElement.type == 'password' ? 'text' : 'password'
    }
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

  .provet-cloud-logo {
    max-block-size: var(--n-space-xl);
  }

  [type='password'] provet-icon[name='interface-edit-off'],
  [type='text'] provet-icon[name='interface-edit-on'] {
    display: none;
  }
</style>
