<template>
  <div>
    <ClientOnly>
      <!-- <NuxtPage /> -->
      <provet-stack class="n-reset">
        <provet-input
          ref="input-email"
          label="Email Address"
          @change="changeEmail"
          @input="changeEmail"
          @blur="validateEmail"
        ></provet-input>
        <p>{{ email }}</p>

        <provet-button variant="primary" type="submit">Submit</provet-button>
      </provet-stack>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
  import { Stack } from '@provetcloud/web-components'
  import { Input } from '@provetcloud/web-components'
  import { Button } from '@provetcloud/web-components'

  import { ref } from 'vue'

  const email = ref('')
  const inputEmailElement = useTemplateRef('input-email')
  console.log({ inputEmailElement })

  const changeEmail = (event: any) => {
    email.value = event.target.value
  }

  const validateEmail = (event: any) => {
    console.log(event.target.value)
  }
</script>
