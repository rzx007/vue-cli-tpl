import Vue from 'vue'
import Router from 'vue-router'
import main from './views/main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
        },
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
      component: () => import('./views/login.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('./views/404.vue')
    },
    {
      path: '/403',
      name: '403',
      component: () => import('./views/403.vue')
    }
  ]
})
