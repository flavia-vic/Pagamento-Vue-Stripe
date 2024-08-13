import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import sucess from '@/views/sucess.vue'
import error from '@/views/error.vue'
const routes = [
   {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/success',
    name: 'success',
    component: sucess
  },
  {
    path: '/error',
    name: 'error',
    component: error
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
