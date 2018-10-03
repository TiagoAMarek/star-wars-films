import Vue from 'vue'
import VueRouter from 'vue-router'

import FilmsList from '@/pages/FilmsList'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'FilmsList',
      component: FilmsList
    }
  ]
})

export default router
