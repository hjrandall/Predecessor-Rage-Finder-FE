import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LookUpView from '../views/LookUpView.vue'
import SubmitView from '../views/SubmitView.vue'
import AppealView from '../views/AppealView.vue'
import ReviewView  from '../views/ReviewView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/lookUp',
      name: 'lookUp',
      component: LookUpView
    },
    {
      path: '/submit',
      name: 'submit',
      component: SubmitView
    },
    {
      path: '/appeal',
      name: 'appeal',
      component: AppealView
    },
    {
      path: '/Review-297@fw3',
      name: 'review',
      component: ReviewView
    }
  ]
})

export default router
