import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CoursesView from '@/views/CoursesView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import PricingView from '@/views/PricingView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"home",
      component:HomeView,

    },
    {
      path:"/course",
      name:"courses",
      component:CoursesView,

    },
    {
      path:"/about",
      name:"about",
      component:AboutUsView,

    },
    {
      path:"/pricing",
      name:"pricing",
      component:PricingView,

    },
    {
      path:"/contact",
      name:"contact",
      component:ContactView,

    }
  ],
})

export default router
