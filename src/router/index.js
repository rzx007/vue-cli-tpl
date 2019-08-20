import Vue from 'vue'
import Router from 'vue-router'
import main from '@/views/main.vue'

Vue.use(Router)
// 路由组件
const constantRoutes = [
  {
    path: '/',
    name: 'main',
    component: main,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: resolve => require(['@/views/pages/Dashboard.vue'], resolve),
        meta: { title: '系统首页' }
      }
    ]
  },
  {
    path: '/',
    name: 'main',
    component: main,
    redirect: '/dashboard',
    children: [
      {
        path: '/table',
        component: resolve => require(['@/views/pages/Basetable.vue'], resolve),
        meta: { title: '基础表格' }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue')
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/403.vue')
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
const router = createRouter()

// 重置路由，防止动态添加路由时，重复添加同一路由信息，导致报错，
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
