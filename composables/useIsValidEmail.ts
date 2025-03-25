export const useIsValidEmail = (email: string) => {
  const validEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return validEmailPattern.test(email)
}
