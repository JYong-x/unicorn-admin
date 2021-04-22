import isEmpty from 'lodash.isempty'

export function removeUselessParams (params) {
  if (Object.prototype.toString.call(params) === '[object Object]') {
    return removeObjParams(params)
  } else if (Object.prototype.toString.call(params) === '[object Array]') {
    return removeArrParams(params)
  } else if (typeof params === 'string') {
    return isAvailable(params) ? params : null
  } else if (typeof params === 'undefined') {
    return null
  } else {
    return params
  }
}

function removeObjParams (params) {
  const result = {}
  if (params) {
    Object.keys(params).forEach((key) => {
      if (isAvailable(params[key])) {
        result[key] = params[key]
      }
    })
  }
  return result
}

function removeArrParams (params) {
  if (params && params.length > 0) {
    params.forEach(item => {
      if (!isAvailable(item)) {
        item = null
      }
    })
  }
  return params || []
}

// 是否是可用值（非空值）
function isAvailable (value) {
  return value !== 0 || value === false || !isEmpty(value)
}
