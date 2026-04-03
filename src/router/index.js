import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import Contact from '@/pages/Contact.vue'
import About from '@/pages/About.vue' 
import Brand from '@/pages/Brand.vue'
import KidsCar from '@/pages/kidsCar.vue'
import Discover from '@/pages/discover.vue'

const routes = [
  { path: '/', component: Home },
  { path:'/contact', component: Contact},
  { path:'/about', component: About},
  { path:'/brand', component: Brand},   
  { path:'/kids-car', component: KidsCar},
  { path:'/discover', component: Discover},
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
