import { getConfig } from '../utils/utils'
import auth from './auth'
import request from './request'

var Global = (typeof window !== 'undefined' ? window : global)

const LoginUtils = {
  install (Vue, options = {}) {
    const _options = {
      ...options,
      name: options.name || 'loginUtils',
      storageNamespace: options.storageNamespace || 'U'
    }

    const _config = getConfig(_options)

    const _auth = auth(_options)

    const _request = request(_options, _auth)

    // 登录过期控制
    _request.listenExpires(_options)

    const loginUtils = {
      ..._request,
      ..._auth,
    }
    Vue[_options.name] = loginUtils

    Object.defineProperty(Vue.prototype, `$${_options.name}`, {
      get() {
        return loginUtils;
      },
    })
  }
}

export default LoginUtils
