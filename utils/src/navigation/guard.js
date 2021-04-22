
export default function (option) {
  return {
    beforeEach
  }
  // 导航守卫执行的方法
  function beforeEach(router, to, from, next) {
    return new Promise(resolve => {
      // 免登录路由直接进入、登录认证相关的路由处理
      const hasToken = option.authUtil.getLocalToken()
      if (hasToken) {
        if (to.meta && to.meta.notNeedLogin) {
          next()
        } else if (['login', 'tokenIndex', 'cas'].includes(to.name)) {
          next({ path: '/' })
        } else {
          const redirect = sessionStorage.getItem('__redirect')
          if (redirect) {
            sessionStorage.removeItem('__redirect')
            next({path: redirect})
          } else {
            resolve()
          }
        }
      } else {
        if (to.meta && to.meta.notNeedLogin) {
          next()
        } else if (to.name === 'login') {
          const {redirect} = to.query
          if (redirect) {
            sessionStorage.setItem('__redirect', redirect)
          }
          console.log('login')
          option.loginUtil.loginRedirect()
        } else if (to.name === 'tokenIndex') {
          console.log('tokenIndex', to, option)
          const code = to.query && to.query.code
          if (code) {
            option.loginUtil.getToken(code).then(res => {
              option.authUtil.setAuth(res)
              next({ path: '/' })
            })
          }
        } else if (to.name === 'cas') {
          option.loginUtil.authorizationRedirect()
        } else {
          next({ name: 'login', query: { redirect: to.fullPath }})
        }
      }
    })
  }
}
