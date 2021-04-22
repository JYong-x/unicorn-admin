let refreshing = false

export default function (options, authUtils, interceptor) {
  const { getLocalToken, getLocalRefreshToken, removeAuth, getAuth, setUserInfo, setAuth } = authUtils

  return {
    getToken,
    getUserInfo,
    logout,
    refreshToken,
    loginRedirect,
    casLoginRedirect,
    listenExpires
  }

  function getToken(code, config = options) {
    return new Promise(resolve => {
      interceptor({
        url: config.accessTokenUri,
        method: 'POST',
        auth: {
          username: config.clientId,
          password: config.client_secret
        },
        data: {
          client_id: config.clientId,
          client_secret: config.client_secret,
          code: code,
          redirect_uri: config.redirect_uri,
          grant_type: config.grant_type
        },
        transformRequest: [
          function (data) {
            let ret = ''
            for (const it in data) {
              if (data[it] === null) {
                continue
              }
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
          }
        ],
      })
        .then(res => {
        resolve(res.data)
      })
    })
  }
  function getUserInfo(config= options) {
    return new Promise(resolve => {
      const token = getAuth().accessToken
      interceptor({
        url: config.userInfoUri,
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
      }).then(res => {
        listenExpires()
        resolve(res.data)
      })
    })
  }
  function logout(config = options) {
    return new Promise(resolve => {
      const token = getLocalToken()
      removeAuth()
      if (!token) {
        config.useCas ? casLoginRedirect() : logoutRedirect(options, token)
        return
      }
      interceptor({
        url: `${config.logoutUri}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        },
      }).then(res => {
        if (res && res.status === 200) {
          interceptor({
            url: `${config.removeTokenUri}?access_token=${token}`,
            method: 'GET',
            params: {
              redirect_uri: config.useCas ? config.redirect_cas_uri : config.redirect_uri
            },
            headers: {
              Authorization: `Bearer ${token}`
            },
          }).then(() => {
            config.useCas ? casLoginRedirect() : logoutRedirect(options, token)
            resolve()
          })
        }
      })
    })
  }

  // 登出后返回地址
  function logoutRedirect(config = options, token) {
    const url =`${config.authHost}/authserver/logout?access_token=${token}&returnTo=http://${config.appUrl}`
    window.location.href = url
  }

// 跳转统一登录地址
  function loginRedirect(config = options) {
    options.useCas ? casLoginRedirect(config) : authorizationRedirect(config)
  }
  function authorizationRedirect (config = options) {
    const authorUrl = `${config.userAuthorizationUri}?client_id=${config.clientId}&response_type=${config.response_type}&scope=${config.scope}&state=${config.state}&redirect_uri=${config.redirect_uri}`
    window.location.href = authorUrl
  }
// 跳转cas统一登录地址
  function casLoginRedirect(config = options) {
    const authorUrl = `${config.casUri}?redirect_uri=${config.redirect_cas_uri}`

    window.location.href = authorUrl
  }

  function listenExpires (config = options) {
    document.removeEventListener('mousemove', refreshToken)
    if (!getAuth().currentToken) {
      return
    }
    setInterval(() => {
      const {accessToken, tokenExpire} = getAuth()
      if (accessToken) {
        const now = new Date().getTime()
        // 当前时间与token过期时间间隔少于10分钟时刷新token
        if (tokenExpire - now < 10 * 60 * 1000) {
          document.addEventListener('mousemove', refreshToken)
        }
      }
      // else if (curRefreshToken) {
      //   refreshToken()
      // }
      else if (config.router) {
        setTimeout(() => {
          config.router.replace('/login')
        }, 3000)
      } else {
        throw new Error('token is expired')
      }
    }, 60 * 1000)
  }

  function refreshToken () {
    _refreshToken(options, storage, getLocalRefreshToken(), interceptor).then(() => {
      console.log('refreshToken success')
    })
      .catch(() => {
        logout()
      })
    document.removeEventListener('mousemove', refreshToken)
  }
}

function _refreshToken(config, storage, refreshToken, interceptor) {
  return new Promise((resolve, reject) => {
    if (refreshing) return
    refreshing = true
    refreshTokenRequest(config, refreshToken, interceptor).then(data => {
      _setAuth(data, storage)
      resolve()
    })
      .catch(() => {
        reject()
    })
      .finally(() => {
        refreshing = false
      })
  })
}

function refreshTokenRequest(config, refreshToken, interceptor) {
  return new Promise((resolve, reject) => {
    return new Promise(resolve => {
      interceptor({
        method: 'post',
        url: config.refreshTokenUri,
        auth: {
          username: config.clientId,
          password: config.client_secret
        },
        data: {
          client_id: config.clientId,
          client_secret: config.client_secret,
          grant_type: 'refresh_token',
          refresh_token: refreshToken
        },
        transformRequest: [
          function (data) {
            let ret = ''
            for (const it in data) {
              if (data[it] === null) {
                continue
              }
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
          }
        ],
      })
        .then(res => {
          resolve(res.data)
        })
        .catch(() => {
          reject()
        })
    })
  })
}
