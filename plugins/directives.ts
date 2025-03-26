export default defineNuxtPlugin((nuxtApp) => {
  // v-focus to give focus to an input element on Mounted
  nuxtApp.vueApp.directive('focus', {
    mounted(el) {
      el.focus()
    }
  })
})
