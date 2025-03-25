export const useIsValidInputField = (field: string, value: string) => {
  if (field === 'email') {
    const validEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return validEmailPattern.test(value)
  }
  if (field === 'password') {
    const validPasswordPattern =
      /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[!\#\$\.\%\@\&\*])(?=.*[a-zA-Z]).{8,16}$/
    return validPasswordPattern.test(value)
  }
}
