import store from '../utils/storage'
import { ACCESS_TOKEN, REFRESH_TOKEN, TOKEN_EXPIRE, CURRENT_TOKEN, USER_INFO } from '../config/keys'
import { _refreshToken } from './request'

export default function (options) {
  const _options = {
    ...options
  }
  const storage = store(_options.storageNamespace)
  function setAuth (auth) {
    return _setAuth(auth, storage)
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
      currentToken: storage.get(CURRENT_TOKEN),
      tokenExpire: storage.get(TOKEN_EXPIRE),
    }
  }

  function removeAuth () {
    storage.remove(ACCESS_TOKEN)
    storage.remove(REFRESH_TOKEN)
    storage.remove(CURRENT_TOKEN)
    storage.remove(USER_INFO)
    storage.remove(TOKEN_EXPIRE)
  }

  function setUserInfo (userInfo) {
    storage.set(USER_INFO, userInfo)
  }

  function getLocalUserInfo () {
    return storage.get(USER_INFO)
  }

  function listenExpires (router = _options.router) {
    setInterval(() => {
      const accessToken = storage.get(ACCESS_TOKEN)
      if (accessToken) {
        const expiresTime = storage.get(TOKEN_EXPIRE)
        const now = new Date().getTime()
        // 当前时间与token过期时间间隔少于10分钟时刷新token
        if (expiresTime - now < 10 * 60 * 1000) {
          document.addEventListener('mousemove', refreshToken(_options, storage, router))
        }
      } else if (getLocalRefreshToken()) {
        refreshToken(_options, storage, router)
      } else if (router) {
        setTimeout(() => {
          router.replace('/login')
        }, 3000)
      } else {
        throw new Error('token is expired')
      }
    }, 60 * 1000)
  }
  return {
    storage,
    setAuth,
    getAuth,
    removeAuth,
    getLocalToken,
    getLocalRefreshToken,
    setUserInfo,
    getLocalUserInfo,
    listenExpires
  }
}

function _setAuth (auth, storage) {
  const {
    access_token: accessToken,
    refresh_token: refreshToken,
    expires_in: expiresIn
  } = auth

  const expire = parseInt(expiresIn) * 1000
  storage.set(ACCESS_TOKEN, accessToken, new Date().getTime() + expire)
  storage.set(TOKEN_EXPIRE, new Date().getTime() + expire)
  storage.set(REFRESH_TOKEN, refreshToken)
  storage.set(CURRENT_TOKEN, accessToken) // 不设过期时间的token,登出时需要
}

function refreshToken(config, storage, router) {
  _refreshToken(config).then(data => {
    _setAuth(data, storage)
  }).catch(() => {
    if (router) {
      setTimeout(() => {
        router.replace('/login')
      }, 3000)
    } else {
      throw new Error('refreshToken error')
    }
  })
}
