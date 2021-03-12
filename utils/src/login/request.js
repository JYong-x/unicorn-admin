import axios from 'axios'

axios.defaults.withCredentials = true

export default function (options, authUtils) {
  const { storage, getLocalToken, getLocalRefreshToken, removeAuth, getAuth, setUserInfo, setAuth } = authUtils

  return {
    options,
    login,
    getToken,
    getUserInfo,
    logout,
    refreshToken,
    loginRedirect,
    casLoginRedirect,
    listenExpires
  }

  function login (code, config = options) {
    return new Promise(resolve => {
      const auth = getAuth()
      if (auth.accessToken) {
        return {
          auth
        }
        // getUserInfo().then(userInfo => {
        //   setUserInfo(userInfo)
        //   resolve({
        //     auth,
        //     userInfo
        //   })
        // })
      } else {
        if (!code) {
          throw new Error('code is must')
          resolve()
          return
        }
        getToken(code, config).then(auth => {
          setAuth(auth)
          listenExpires()
          resolve({
            auth
          })
          // getUserInfo().then(userInfo => {
          //   setUserInfo(userInfo)
          //   resolve({
          //     auth,
          //     userInfo
          //   })
          // })
        })
      }
    })
  }

  function getToken(code, config = options) {
    return new Promise(resolve => {
      axios({
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
      }).then(res => {
        resolve(res.data)
      })
    })
  }
  function getUserInfo(config= options) {
    return new Promise(resolve => {
      const token = getAuth().accessToken
      axios({
        url: config.userInfoUri,
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
      }).then(res => {
        resolve(res.data)
      })
    })
  }
  function logout(config = options) {
    return new Promise(resolve => {
      const token = getLocalToken()
      removeAuth()
      axios({
        url: `${config.logoutUri}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        },
      }).then(res => {
        if (res && res.status === 200) {
          axios({
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
  // function refreshToken(config = options) {
  //   return _refreshToken(config)
  // }

  // 登出后返回地址
  function logoutRedirect(config = options, token) {
    const url =`${config.authHost}/authserver/logout?access_token=${token}&returnTo=http://${config.appUrl}`
    window.location.href = url
  }

// 跳转统一登录地址
  function loginRedirect(config = options) {
    const authorUrl = `${config.userAuthorizationUri}?client_id=${config.clientId}&response_type=${config.response_type}&scope=${config.scope}&state=${config.state}&redirect_uri=${config.redirect_uri}`
    window.location.href = authorUrl
  }
// 跳转cas统一登录地址
  function casLoginRedirect(config = options) {
    const authorUrl = `${config.casUri}?redirect_uri=${config.redirect_cas_uri}`

    window.location.href = authorUrl
  }

  function listenExpires (config = options) {
    if (!getAuth().accessToken) {
      return
    }
    setInterval(() => {
      const {accessToken, tokenExpire} = getAuth()
      if (accessToken) {
        const now = new Date().getTime()
        // 当前时间与token过期时间间隔少于10分钟时刷新token
        if (tokenExpire - now < 10 * 60 * 1000) {
          document.addEventListener('mousemove', refreshToken(config, storage, getLocalRefreshToken()))
        }
      } else if (getLocalRefreshToken()) {
        refreshToken(config, authUtils.storage)
      } else if (config.router) {
        setTimeout(() => {
          config.router.replace('/login')
        }, 3000)
      } else {
        throw new Error('token is expired')
      }
    }, 60 * 1000)
  }
}

function refreshToken(config, storage, refreshToken) {
  const { router } = config
  refreshTokenRequest(config, refreshToken).then(data => {
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

function refreshTokenRequest(config, refreshToken) {
  return new Promise((resolve, reject) => {
    axios({
        url: config.refreshTokenUri,
        method: 'POST',
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
        transformRequest: [function (data) {
          let ret = ''
          for (const it in data) {
            if (data[it] === null) {
              continue
            }
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }]
      }).then(res => {
      resolve(res.data)
    }).catch(() => {
      reject()
    })
  })
}
