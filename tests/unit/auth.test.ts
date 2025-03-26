import { mockNuxtImport } from '@nuxt/test-utils/runtime'
import { describe, expect, test, vi } from 'vitest'
import auth from '@/middleware/auth'

mockNuxtImport('navigateTo', () => vi.fn())

// mockNuxtImport('useState', () => {
//   return <T>(userRegistered: string, data: () => T) => {
//     return ref(true)
//   }
// })

describe('My middleware flow', async () => {
  const to = { path: '/welcome' }
  const from = { path: '/' }

  test('should redirect to home page', async () => {
    // @ts-ignore
    const result = await auth(to, from)
    expect(navigateTo).toHaveBeenCalledWith('/')
  })
})
