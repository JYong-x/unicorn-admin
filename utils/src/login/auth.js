import store from '../utils/storage'
import { ACCESS_TOKEN, REFRESH_TOKEN, TOKEN_EXPIRE_TIME, CURRENT_TOKEN, USER_INFO } from '../config/keys'

export default function (options) {
  const _options = {
    ...options,
    storageNamespace: 'u'
  }
  const storage = store(_options.storageNamespace)
  function setAuth (auth) {
  const {
    access_token: accessToken,
    refresh_token: refreshToken,
    expires_in: expiresIn
  } = auth

  const expire = parseInt(expiresIn) * 1000
  storage.set(TOKEN_EXPIRE_TIME, accessToken, new Date().getTime() + expire)
  storage.set(REFRESH_TOKEN, refreshToken)
  storage.set(CURRENT_TOKEN, accessToken) // 不设过期时间的token,登出时需要
  storage.set(ACCESS_TOKEN, accessToken, new Date().getTime() + expire)
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

  function setUserInfo (userInfo) {
    storage.set(USER_INFO, userInfo)
  }

  function getLocalUserInfo () {
    return storage.get(USER_INFO)
  }
  return {
    setAuth,
    getAuth,
    removeAuth,
    getLocalToken,
    getLocalRefreshToken,
    setUserInfo,
    getLocalUserInfo
  }
}

// storage.addPlugin(expire)

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
