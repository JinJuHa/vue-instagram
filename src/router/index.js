import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

// 로그인이 되어 있지 않으면 못 들어가게 해주는 네비게이션 가드이다.
const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem('token')
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  isAuth ? next() : next(loginPath)
}

const routes = [
  {
    path: '/',
    name: 'home'
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/board/:id',
    name: 'board',
    component: () => import('../views/BoardView.vue'),
    children: [{ path: '/board/:id/card/:cid', name: 'card', component: () => import('../components/Card.vue') }]
  },
  {
    path: '/*',
    name: '404page',
    component: () => import('../views/404View.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
