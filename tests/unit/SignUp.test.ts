// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import App from '../../app.vue'

describe('Register Page', () => {
  it('renders the Register (index) page', async () => {
    const wrapper = await mountSuspended(App, { route: '/' })
    expect(wrapper.text()).toContain('Sign Up for Provet Cloud')
  })

  it('renders the instructions message', async () => {
    const wrapper = await mountSuspended(App, { route: '/' })
    expect(wrapper.html()).toContain(
      'Enter your Email and Password, and agree to the Privacy Policy.'
    )
  })

  it('renders the Password input field', async () => {
    const wrapper = await mountSuspended(App, { route: '/' })
    expect(wrapper.html()).toContain('Password must contain at least 1 number')
  })

  it('does not render Welcome message', async () => {
    const wrapper = await mountSuspended(App, { route: '/' })
    expect(wrapper.html()).not.toContain('Welcome to Provet Cloud')
  })
})
