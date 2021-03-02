import uriConfig from './config'
import { getAuth, setAuth } from './auth'
import { getToken, getUserInfo } from './request'

let config = null
const login = function(outerConfig = {}, code) {
  const config = uriConfig(outerConfig)

  return new Promise(resolve => {
    const auth = getAuth()
    if (auth.accessToken) {
      getUserInfo().then(userInfo => {
        resolve({
          auth,
          userInfo
        })
      })
    } else {
      if (!code) {
        resolve()
        return
      }
      getToken(config, code).then(auth => {
        setAuth(auth)
        getUserInfo().then(userInfo => {
          resolve({
            auth,
            userInfo
          })
        })
      })
    }
  })
}

export default login
