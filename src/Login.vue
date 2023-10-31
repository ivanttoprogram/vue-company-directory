<script setup>
import { ref } from 'vue'
import { userRouter } from 'vue-router'

import { useAuth } from '@/composables/useAuth'
const { login } = useAuth()
const router = userRouter()

const username = ref('')
const password = ref('')


const logUserIn = () => {
    if (login(username.value, password.value)) {
        router.push({ name: 'Home'})
    } else {
     logout()
    }
}

</script>

<template>
  <form @submit="logUserIn">
    <input type ="text" placeholder="Username" />
    <input type ="password" placeholder="Password" />
    <button type="submit" class="bg-green-950 px-4 py-2">Log In</button>
  </form>
</template>

<style scoped lang="postcss">
.login-form {
    @apply mx-auto mt-80 flex max-w-md flex-col gap-4 rounded-md bg-white p-8 shadow-lg;
    & input {
        @apply rounded-md px-4 py-2 text-xl ring-1 ring-slate-900;
    }
}
</style>