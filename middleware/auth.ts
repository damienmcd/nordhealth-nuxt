export default defineNuxtRouteMiddleware(() => {
  const userRegistered = useState<boolean>('userRegistered')

  if (!userRegistered.value) {
    return navigateTo('/')
  }
})
