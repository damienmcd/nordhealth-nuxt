import { describe, it, expect } from 'vitest'
import { mockNuxtImport, mountSuspended } from '@nuxt/test-utils/runtime'
import App from '../../app.vue'

mockNuxtImport('useState', () => {
  return <T>(userRegistered: string, data: () => T) => {
    return ref(true)
  }
})

describe('Welcome Page', () => {
  it('renders the Welcome page', async () => {
    const wrapper = await mountSuspended(App, { route: '/welcome' })
    expect(wrapper.text()).toContain('Welcome to Provet Cloud')
  })

  it('renders the STart Using Provet Cloud message', async () => {
    const wrapper = await mountSuspended(App, { route: '/welcome' })
    expect(wrapper.text()).toContain(
      'You can start using Provet Cloud as soon as you have verified your account.'
    )
  })

  it('does not render the Register (index) page', async () => {
    const wrapper = await mountSuspended(App, { route: '/welcome' })
    expect(wrapper.text()).not.toContain('Sign Up for Provet Cloud')
  })
})
