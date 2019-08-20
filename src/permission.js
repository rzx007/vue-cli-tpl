import router, { resetRouter } from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()
  const token = sessionStorage.getItem('token')
  // 判断是否登录
  if (token) {
    if (to.path === '/login') {
      // 如果已经登陆，且当前路由时登陆时，直接跳转到首页
      next('/')
      NProgress.done()
    } else {
      // const accessRoutes = []// 这里应该是节后请求的路由信息，数据应该符合路由格式
      // resetRouter()
      // router.addRoutes(accessRoutes)
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      next(`/login`)
      NProgress.done()
    }
  }
})
router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
