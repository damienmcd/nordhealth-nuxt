import { describe, it, expect } from 'vitest'
import { useIsValidInputField } from '@/composables/useIsValidInputField'

describe('useIsValidInputField email pattern', () => {
  it('calls useIsValidInputField to test the email pattern with valid email', async () => {
    const emailAddress = 'damien@test.com'

    const isValidEmail = await useIsValidInputField('email', emailAddress)
    expect(isValidEmail).toBeTruthy()
  })

  it('calls useIsValidInputField to test the email pattern with invalid email', async () => {
    const emailAddress = 'damien@test'

    const isValidEmail = await useIsValidInputField('email', emailAddress)
    expect(isValidEmail).not.toBeTruthy()
  })
})

describe('useIsValidInputField password pattern', () => {
  it('calls useIsValidInputField to test the password pattern with valid password', async () => {
    const userPassword = '123!@£qweQWE'

    const isValidPassword = await useIsValidInputField('password', userPassword)
    expect(isValidPassword).toBeTruthy()
  })

  it('calls useIsValidInputField to test the password pattern with invalid password', async () => {
    const userPassword = '1234567890'

    const isValidPassword = await useIsValidInputField('password', userPassword)
    expect(isValidPassword).not.toBeTruthy()
  })
})
