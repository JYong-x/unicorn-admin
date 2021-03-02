import storage from 'storejs'
import { ACCESS_TOKEN, REFRESH_TOKEN, TOKEN_EXPIRE_TIME, CURRENT_TOKEN } from './keys'

function setAuth (auth) {
  const {
    access_token: accessToken,
    refresh_token: refreshToken,
    expires_in: expiresIn
  } = auth

  const expire = parseInt(expiresIn) * 1000
  storage.set(TOKEN_EXPIRE_TIME, new Date().getTime() + expire)
  storage.set(REFRESH_TOKEN, refreshToken)
  storage.set(CURRENT_TOKEN, accessToken) // 不设过期时间的token,登出时需要
  storage.set(ACCESS_TOKEN, accessToken, expire)
}

function getLocalToken () {
  return storage.get(ACCESS_TOKEN)
}

function getLocalRefreshToken () {
  return storage.get(ACCESS_TOKEN)
}

function getAuth () {
  return {
    accessToken: storage.get(ACCESS_TOKEN),
    refreshToken: storage.get(ACCESS_TOKEN),
    currentToken: storage.get(CURRENT_TOKEN)
  }
}

function removeAuth () {
  storage.remove(ACCESS_TOKEN)
  storage.remove(REFRESH_TOKEN)
  storage.remove(CURRENT_TOKEN)
}


// 刷新token
// function refreshToken () {
//   if (tokenPending) return
//   tokenPending = true
//   login.refreshToken(storage.get(REFRESH_TOKEN)).then(res => {
//     tokenUtils.savetoken((res.data))
//   }).catch(err => {
//     router.replace({ name: 'login' })
//     return Promise.reject(err)
//   }).finally(() => {
//     tokenPending = false
//   })
// }

// function isExpired () {
//   const expiresTime = storage.get(TOKEN_EXPIRE_TIME)
//   const now = new Date().getTime()
//   // 距离token过期时间少于5分钟时需要刷新token
//   if (expiresTime - now < 5 * 60 * 1000) {
//     return true
//   }
// }

// 每分钟检测token是否过期
function listenExpires () {
  setInterval(() => {
    const accessToken = storage.get(ACCESS_TOKEN)
    if (accessToken) {
      const expiresTime = storage.get(TOKEN_EXPIRE_TIME)
      const now = new Date().getTime()
      // 当前时间与token过期时间间隔少于5分钟时刷新token
      if (expiresTime - now < 5 * 60 * 1000) {
        document.addEventListener('mousemove', tokenUtils.refreshToken)
      }
    } else {
      setTimeout(() => {
        router.replace('/logout')
      }, 3000)
    }
  }, 60 * 1000)
}

export {
  setAuth,
  getAuth,
  removeAuth,
  getLocalToken,
  getLocalRefreshToken
}
