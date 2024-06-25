import { createRouter, createWebHashHistory } from 'vue-router'
import useToastStore from '@/stores/toast'
import useUserStore from '@/stores/user'
import { supabase } from '@/plugins/supabase'

const HomeView = () => import('../views/HomeView.vue')
const LogInView = () => import('../views/LogInView.vue')
const SignUpView = () => import('../views/SignUpView.vue')
const ForgetPasswordView = () => import('../views/ForgetPasswordView.vue')
const LinksView = () => import('../views/LinksView.vue')
const AppearanceView = () => import('../views/AppearanceView.vue')
const AnalyticsView = () => import('../views/AnalyticsView.vue')
const UserView = () => import('../views/UserView.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LogInView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/forget-password',
    name: 'forget-password',
    component: ForgetPasswordView
  },
  {
    path: '/links',
    name: 'links',
    component: LinksView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/appearance',
    name: 'appearance',
    component: AppearanceView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: AnalyticsView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/:username',
    name: 'user',
    component: UserView
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const toastStore = useToastStore()
  toastStore.deactivateToast()
  next()
})

router.beforeEach(async (to, from, next) => {
  if (!to.meta.requiresAuth) {
    next()
    return
  }
  const userStore = useUserStore()

  const session = (await supabase.auth.getSession()).data.session

  if (session) {
    userStore.userLoggedIn = true
    userStore.userId = session.user.id
    userStore.username = session.user.user_metadata.username
  }

  if (userStore.userLoggedIn) {
    next()
  } else {
    next({ name: 'home' })
  }
})

export default router
