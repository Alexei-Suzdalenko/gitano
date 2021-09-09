import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index'

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/about',
    component: () => import('../views/Home')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
