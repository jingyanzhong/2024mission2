import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/WorkView.vue')
    },
    {
      path: '/serve',
      name: 'serve',
      component: () => import('../views/ServeView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/blog/:blogId',
      component: () => import('../views/ArticleView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // 始终滚动到顶部
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

router.onError((error, to) => {
  if (error.message.includes('Failed to fetch dynamically imported module')) {
    window.location = to.fullPath
  }
})
export default router
