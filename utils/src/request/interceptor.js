/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
export default function (options) {
  const {axios, message, router, authUtil} = options
  const {getLocalToken, removeAuth} = authUtil

  /**
   * 提示函数
   */
  const tip = (msg) => {
    message.error(msg)
  }

  /**
   * 跳转登录页
   * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
   */
  const toLogin = () => {
    removeAuth()
    router.replace({
      name: 'login',
      query: {
        redirect: router.currentRoute.fullPath
      }
    })
  }

  /**
   * 请求失败后的错误统一处理
   * @param {Number} status 请求失败的状态码
   */
  const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
      // 401: 无权限，跳转登录页
      case 401:
        toLogin()
        break
      // 403 token过期
      // 清除token并跳转登录页
      // case 403:
      //   tip('登录过期，请重新登录')
      //   store.dispatch('Logout').then(() => {
      //     setTimeout(() => {
      //       window.location.reload()
      //     }, 1500)
      //   })
      //   break
      // 404请求不存在
      case 404:
        tip('请求的资源不存在')
        break
      case 405:
        tip('请求方式错误')
        break
      default:
        console.log(other)
        tip('未知错误')
    }
  }

// 创建axios实例
// const instance = axios.create({ timeout: 1000 * 12 })
  const instance = axios.create()
  instance.defaults.withCredentials = true

  /**
   * 请求拦截器
   * 每次请求前，如果存在token则在请求头中携带token
   */

  instance.interceptors.request.use(
    (config) => {
      const token = getLocalToken()
      token && (config.headers.Authorization = `Bearer ${token}`)
      return config
    },
    (error) => Promise.error(error)
  )

// 响应拦截器
  instance.interceptors.response.use(
    // 请求成功
    (response) => {
      if (response.status === 200) {
        if (response.data.status === 'error') {
          tip(response.data.msg)
        } else {
          return Promise.resolve(response)
        }
      } else {
        return Promise.reject(response)
      }
    },
    // 请求失败
    (error) => {
      const { response } = error
      if (response) {
        // 请求已发出，但是不在2xx的范围
        errorHandle(response.status, response.data.message)
        return Promise.resolve(response)
      } else {
        if (!window.navigator.onLine) {
          tip('请检查网路设置')
          // store.commit('changeNetwork', false)
        } else {
          tip('请求失败')
          return Promise.reject(error)
        }
      }
    }
  )

  return instance
}
