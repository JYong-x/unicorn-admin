import interceptor from './interceptor'
import request from './request'

export default function (options = {}) {
  const _options = {
    ...options
  }
  return request(options)
}

export {
  interceptor
}
