import dev from '../config/dev.env'
import prod from '../config/prod.env'

const envs = {
  dev,
  prod
}

function getConfig (config) {
  return {...defaultUri(config.env), ...config}
}

function defaultUri(env) {
  const envConfig = envs[env]
  if (!envConfig) return {}
  return {
    // 请求授权地址
    userAuthorizationUri: `${envConfig.AUTH_HOST}/authserver/oauth/authorize`,
    // accessToken请求地址
    accessTokenUri: `${envConfig.AUTH_URI}/oauth/token`,
    // refreshToken请求地址
    refreshTokenUri: `${envConfig.AUTH_URI}/oauth/token`,
    // 用户信息请求地址
    userInfoUri: `${envConfig.AUTH_URI}/simple-user`,
    // 登出请求地址
    logoutUri: `${envConfig.AUTH_HOST}/authserver/logout`,
    removeTokenUri: `${envConfig.AUTH_URI}/remove_token`,

    // cas登录
    casUri: `${envConfig.AUTH_URI}/casLogin`,
    casLogOutUri: `${envConfig.AUTH_URI}/casLogout`,

    client_secret: 'app-a-1234',
    // 申请的权限范围
    scope: 'all',
    // 可选参数，客户端的当前状态，可以指定任意值，用于校验，此次案例不做相关认证
    state: '',
    // 一些固定的请求参数
    response_type: 'code',
    grant_type: 'authorization_code',
    code: ''
  }
}

export default {
  getConfig
}
