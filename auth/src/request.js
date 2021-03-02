import axios from 'axios'
import uriConfig from './config'

function getToken(config, code) {
  return new Promise(resolve => {
    axios({
      url: '',
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
    }).then(res => {
      resolve(res.data)
    })
  })
}
function getUserInfo(outerConfig) {
  const config = uriConfig(outerConfig)
  return new Promise(resolve => {
    const token = getAuth().accessToken
    axios({
      url: config.accessTokenUri,
      method: 'GET',
      header: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      },
    }).then(res => {
      resolve(res.data)
    })
  })
}
function logout(outerConfig) {
  return new Promise(resolve => {
    const token = getAuth().currentToken
    removeAuth()
    axios({
      url: `${config.logoutUri}`,
      method: 'GET'
    }).then(res => {
      if (res && res.status === 200) {
        const token = getToken()
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
function refreshToken(outerConfig) {
  return new Promise(resolve => {
    const refreshToken = getAuth().refreshToken
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
function loginRedirect(outerConfig) {
  const config = uriConfig(outerConfig)
}
// 跳转cas统一登录地址
function lasCoginRedirect(outerConfig) {
  const config = uriConfig(outerConfig)
}

export {
  getToken,
  getUserInfo,
  logout,
  refreshToken
}
