export default function createAuthUri(config) {
  return {
    appUrl: config.appUrl,
    // 请求授权地址
    userAuthorizationUri: `${config.authHost}/authserver/oauth/authorize`,
    // accessToken请求地址
    accessTokenUri: `http://${config.authUri}/oauth/token`,
    // refreshToken请求地址
    refreshTokenUri: `http://${config.authUri}/oauth/token`,
    // 用户信息请求地址
    userInfoUri: `${config.authUri}/simple-user`,
    // 登出请求地址
    logoutUri: `${config.authHost}/authserver/logout`,
    // 清除token
    removeTokenUri: `${config.authUri}/remove_token`,
    // 项目地址
    localuri: config.appUrl,
    redirect_uri: `http://${config.appUrl}/token-index`,

    // 客户端相关标识，请从认证服务器申请
    clientId: config.clientId,
    client_secret: 'app-a-1234',

    // cas登录
    redirect_cas_uri: `http://${config.appUrl}/cas`,
    casUri: `${config.authUri}/casLogin`,
    casLogOutUri: `${config.authUri}/casLogout`,
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
