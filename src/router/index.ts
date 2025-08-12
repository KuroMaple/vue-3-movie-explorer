import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/search/:query',
      name: 'SearchResults',
      component: () => import('@/views/SearchResults.vue')
    },
    {
      path: '/movie/:imdbID',
      name: 'MovieView',
      component: () => import('@/views/MovieView.vue')
    }
  ],
})

export default router
