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
          @submit.prevent="handleFormSubmit"
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
              :disabled="formProcessing"
              :error="errors.email.label"
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
              :disabled="formProcessing"
              :error="errors.password.label"
              @blur="validatePassword"
            >
              <div slot="hint">
                Password must contain at least 1 number, 1 Uppercase, 1
                Lowercase, 1 Special Character (! $ % # * @ &) and be between
                <strong>8</strong> and <strong>16</strong> characters in length.
              </div>
              <provet-button
                slot="end"
                aria-describedby="password-tooltip"
                id="password-visibility-toggle"
                title="Password Visibility Toggle"
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

            <provet-checkbox
              id="offers"
              ref="input-offers"
              name="offers"
              size="l"
              :disabled="formProcessing"
              @change="updateOffers"
            >
              <div slot="label">
                Would you like to receive occasional offers and news from Provet
                Cloud?
              </div>
            </provet-checkbox>

            <provet-checkbox
              id="policies"
              ref="input-policies"
              name="policies"
              size="l"
              :disabled="formProcessing"
              :error="errors.policies.label"
              @change="validatePolicies"
            >
              <div slot="label">
                Do you agree to the Provet Cloud
                <NuxtLink
                  to="https://www.provet.cloud/privacy-notice"
                  target="_blank"
                  external
                  >Privacy Policy</NuxtLink
                >?<span aria-hidden="true" class="n-required">*</span>
              </div>
            </provet-checkbox>

            <provet-button
              variant="primary"
              type="submit"
              size="m"
              :disabled="formHasErrors"
              :loading="formProcessing"
            >
              Sign Up
            </provet-button>
            <p
              v-show="formHasErrors"
              id="errors"
              ref="display-errors"
              class="n-error"
            >
              {{ formErrors }}
            </p>
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

  const router = useRouter()

  const formProcessing: Ref<boolean> = ref(false)
  const formErrors: Ref<string> = ref('')
  const errors: Ref<errors> = ref({
    email: { error: '', label: '' },
    password: { error: '', label: '' },
    policies: { error: '', label: '' }
  })
  const form: Ref<form> = ref({
    email: '',
    password: '',
    offers: false,
    policies: false
  })

  const validateEmail = () => {
    const inputEmailHtmlElement: HTMLInputElement | null =
      document.getElementById('email') as HTMLInputElement

    const emailInput: string = inputEmailHtmlElement.value

    if (emailInput === '') {
      errors.value.email.error = 'required'
      errors.value.email.label = 'Please complete this required field.'
    } else if (!useIsValidInputField('email', emailInput)) {
      errors.value.email.error = 'invalid'
      errors.value.email.label = 'Email must be formatted correctly.'
    } else {
      errors.value.email.error = ''
      errors.value.email.label = ''

      form.value.email = emailInput
    }
  }

  const validatePassword = () => {
    const inputPasswordHtmlElement: HTMLInputElement | null =
      document.getElementById('password') as HTMLInputElement

    const passwordInput: string = inputPasswordHtmlElement.value

    if (passwordInput === '') {
      errors.value.password.error = 'required'
      errors.value.password.label = 'Please complete this required field.'
    } else if (!useIsValidInputField('password', passwordInput)) {
      errors.value.password.error = 'invalid'
      errors.value.password.label = 'Please enter a valid password.'
    } else {
      errors.value.password.error = ''
      errors.value.password.label = ''

      form.value.password = passwordInput
    }
  }

  const togglePasswordVisibility = () => {
    const inputPasswordHtmlElement: HTMLInputElement | null =
      document.getElementById('password') as HTMLInputElement

    if (inputPasswordHtmlElement !== null) {
      inputPasswordHtmlElement.type =
        inputPasswordHtmlElement.type == 'password' ? 'text' : 'password'
    }
  }

  const updateOffers = () => {
    const inputOffersHtmlElement: HTMLInputElement | null =
      document.getElementById('offers') as HTMLInputElement

    const offersInput: boolean = inputOffersHtmlElement.checked
    form.value.policies = offersInput
  }

  const validatePolicies = () => {
    const inputPoliciesHtmlElement: HTMLInputElement | null =
      document.getElementById('policies') as HTMLInputElement

    const policiesInput: boolean = inputPoliciesHtmlElement.checked

    if (!policiesInput) {
      errors.value.policies.error = 'required'
      errors.value.policies.label = 'Please complete this required field.'
    } else {
      errors.value.policies.error = ''
      errors.value.policies.label = ''
    }
    form.value.policies = policiesInput
  }

  const validateForm = () => {
    validateEmail()
    validatePassword()
    validatePolicies()
  }

  const handleFormSubmit = async () => {
    formProcessing.value = true
    validateForm()

    if (!formHasErrors.value) {
      const {
        data: user,
        status: status,
        error: error
      } = await useFetch(
        'https://67e1530c58cc6bf7852555e6.mockapi.io/nordhealth/register',
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: form.value
        }
      )

      if (status.value === 'success') {
        const newUser: user = user.value as user

        if (newUser.id) {
          useState('userRegistered', () => true)
          useState('user', () => newUser)
          router.push({ name: 'welcome' })
        }
      } else if (error.value) {
        console.error('User Not Registered', error.value)
        formErrors.value = error.value.message
      } else {
        console.error('User Not Registered')
        formErrors.value =
          'There was an error when registering. Please try again later.'
      }
    }

    formProcessing.value = false
  }

  const formHasErrors = computed(() => {
    return (
      errors.value.email.error !== '' ||
      errors.value.password.error !== '' ||
      errors.value.policies.error !== ''
    )
  })

  onMounted(() => {
    const inputEmailHtmlElement: HTMLInputElement | null =
      document.getElementById('email') as HTMLInputElement
    inputEmailHtmlElement.focus()
  })

  useHead({
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      id: 'page-sign-up-register',
      class: 'page-sign-up-register'
    },
    title: 'Provet Cloud - Register'
  })
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

  .n-required {
    color: var(--n-color-status-danger);
    margin-inline-start: var(--n-space-xs);
  }
</style>
