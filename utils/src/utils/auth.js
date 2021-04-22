
export default function (options, storage) {
  const {TYPE_KEYS: typeKeys} = options

  const {ACCESS_TOKEN, REFRESH_TOKEN, TOKEN_EXPIRE, CURRENT_TOKEN, USER_INFO} = typeKeys

  function setAuth (auth) {
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
