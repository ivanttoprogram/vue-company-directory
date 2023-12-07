<script setup>
  import { ref } from 'vue'
  import { useAuth } from '@/composables/useAuth'

const { isAuthenticated, logout, user } = useAuth()
  
  const brand = ref('🏢 Fake Company Directory')
</script>

<template>
  <nav>
    <div class="wrapper">
      <RouterLink :to="{name: 'Home'}" class="brand">
        <span class="brand-title">{{ brand }}</span>
      </RouterLink>
      <div class="menu">
      <p v-show="isAuthenticated" class="px-2 py-4">
        Welcome back 
        <strong
        ><i>{{ user.name }}</i></strong>
      </p>
        <div v-if="isAuthenticated">
        <RouterLink :to="{ name: 'Settings' }" href="#" class="menu-item">Settings</RouterLink>
        <button href="#" class="menu-logout" @click="logout">Logout</button>
      </div>
        <div v-else>
        <RouterLink :to="{ name: 'Login' }" href="#" class="menu-login">Login</RouterLink>
      </div>
    </div>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
  nav {
    @apply flex h-20 bg-slate-800 text-slate-300;
    .wrapper {
      @apply container mx-auto flex w-full items-center justify-between;
      .brand {
        &-title {
          @apply text-2xl font-bold text-blue-500;
        }
      }
      .menu {
        @apply flex gap-2;
        div {
          @apply px-4 py-2;
        }
        &-item {
          @apply rounded-md px-4 py-2 hover:bg-blue-500 hover:text-slate-900;
        }
        &-login {
          @apply rounded-md bg-blue-800 px-4 py-2 text-red-100 hover:bg-purple-700;
        }
         &-logout {
          @apply rounded-md bg-red-800 px-4 py-2 text-red-100 hover:bg-green-900;
        }
      }
    }
  }
</style>
