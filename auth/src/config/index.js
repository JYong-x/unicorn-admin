import dev from './dev.env'
import prod from './prod.env'

const envs = {
  dev,
  prod
}
function httpUri(env) {
  const envConfig = envs[env]
  return {
    accessTokenUri: `http://${envConfig.AUTH_URI}/oauth/token`,
    refreshTokenUri: `http://${envConfig.AUTH_URI}/oauth/token`,
    userInfoUri: `${envConfig.AUTH_URI}/simple-user`,
    logoutUri: `${envConfig.AUTH_HOST}/authserver/logout`,
    removeTokenUri: `${envConfig.AUTH_URI}/remove_token`,
    // cas登录
    casUri: `${envConfig.AUTH_URI}/casLogin`,
    casLogOutUri: `${envConfig.AUTH_URI}/casLogout`,
  }
}

export default httpUri
