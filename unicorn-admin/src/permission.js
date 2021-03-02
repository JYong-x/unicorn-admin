import router from './router'
import store from './store'

import login, { authUtils, loginRequest } from '@unicorn-admin/auth'
// import { Message } from 'ant-design-vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const whiteList = ['login', 'tokenIndex', 'cas']
const defaultRoutePath = '/'
const loginRoutePath = '/login'

console.log(authUtils, loginRequest)

router.beforeEach((to, from, next) => {
  NProgress.start()
  login().then(() => {
    next()
    NProgress.done()
  })
  const hasToken = authUtils.getLocalToken()
  console.log(hasToken)
  if (hasToken) {
    if (to.path === loginRoutePath) {
      next({ path: defaultRoutePath })
      NProgress.done()
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        store
          .dispatch('GetUserInfo')
          .then(res => {
            // const roles = res.result && res.result.role
            store.dispatch('GenerateRoutes', res).then(() => {
              // 根据权限生成可访问的路由表
              // 动态添加可访问路由表
              router.addRoutes(store.getters.addRouters)
              // 请求带有 redirect 重定向时，登录自动重定向到该地址
              const redirect = decodeURIComponent(from.query.redirect || to.path)
              if (to.path === redirect) {
                next({ ...to, replace: true })
              } else {
                // 跳转到目的路由
                next({ path: redirect })
              }
            })
          })
        // .catch((error) => {
        //   Message.error(error || '获取用户信息失败')
        //   store.dispatch('Logout').then(() => {
        //     next({ path: '/user/login', query: { redirect: to.fullPath }})
        //   })
        // })
      }
    }
  } else {
    if (whiteList.includes(to.name)) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next({ path: loginRoutePath, query: { redirect: to.fullPath }})
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
