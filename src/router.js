import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/components/MainPage.vue'
import LoginPage from '@/components/LoginPage.vue'
import SettingsPage from '@/components/SettingsPage.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  { path: '/', name: 'Home' , component: MainPage },
  { path: '/login', name: 'Login' , component: LoginPage },
   { path: '/settings', name: 'Settings' , component: SettingsPage },
  { path: '/:pathMatch(.*}*', name: 'NotFound' , component: NotFound },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})

e
