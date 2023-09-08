import Vue from 'vue'
import VueRouter from 'vue-router'
import { PrevLoading } from '@/utils/loading.js'
import HomeView from '../views/HomeView.vue'
// 加载 loading
PrevLoading.start()
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

// 路由加载后
router.afterEach(() => {
  PrevLoading.done()
})
export default router
