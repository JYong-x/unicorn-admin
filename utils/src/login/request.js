import axios from 'axios'

export default function (options, authUtils) {
  const config = options

  const { getLocalToken, getLocalRefreshToken, removeAuth, getAuth, setUserInfo, setAuth } = authUtils

  return {
    config,
    login,
    getToken,
    getUserInfo,
    logout,
    refreshToken,
    loginRedirect,
    casLoginRedirect
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
        method: 'GET'
      }).then(res => {
        if (res && res.status === 200) {
          const token = getLocalToken()
          axios({
            url: `${config.removeTokenUri}?access_token=${token}`,
            method: 'GET',
            params: {
              redirect_uri: config.useCas ? config.redirect_cas_uri : config.redirect_uri
            }
          }).then(() => {
            resolve()
          })
        }
      })
    })
  }
  function refreshToken(config = options) {
    return new Promise(resolve => {
      const refreshToken = getLocalRefreshToken()
      axios(
        {
          method: 'POST',
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
        }
      ).then(res => {
        resolve(res.data)
      })
    })
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
}
