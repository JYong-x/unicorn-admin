const qs = require('querystring')

import interceptor from './interceptor'
import { removeUselessParams } from '../utils/utils'

export default function (options) {

  const axios = interceptor(options)

  const base = options.baseApi

  const get = (url, params = {}, api) => {
    return axios({
      method: 'get',
      params: removeUselessParams(params),
      url: `${api || base}${url}`
    })
  }

  const post = (url, params, api) => {
    return axios({
      method: 'post',
      data: qs.stringify(removeUselessParams(params)),
      url: `${api || base}${url}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }

  const postJson = (url, params, api) => {
    return axios({
      method: 'post',
      data: removeUselessParams(params),
      url: `${api || base}${url}`,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  const put = (url, params, api) => {
    return axios({
      method: 'put',
      data: removeUselessParams(params),
      url: `${api || base}${url}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }

  const putJson = (url, params, api) => {
    return axios({
      method: 'put',
      data: removeUselessParams(params),
      url: `${api || base}${url}`,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  const download = (url, params = {}, api) => {
    return axios({
      method: 'post',
      data: removeUselessParams(params),
      url: `${api || base}${url}`,
      headers: {
        'Content-Type': 'application/json'
      },
      responseType: 'arraybuffer'
    })
  }

  const downloadGet = (url, params = {}, api) => {
    return axios({
      method: 'get',
      params: params,
      url: `${api || base}${url}`,
      headers: {
        'Content-Type': 'application/json'
      },
      responseType: 'arraybuffer'
    })
  }

  const upload = (url, params, config) => {
    return axios({
      method: 'post',
      data: removeUselessParams(params),
      url: `${(config && config.baseUrl) || base}${url}`,
      onUploadProgress: config && config.onUploadProgress,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  const uploadPut = (url, params, config) => {
    return axios({
      method: 'put',
      data: removeUselessParams(params),
      url: `${config.baseUrl || base}${url}`,
      onUploadProgress: config.onUploadProgress,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  const uploadJson = (url, params, api) => {
    return axios({
      method: 'post',
      data: removeUselessParams(params),
      url: `${api || base}${url}`,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  const deleteRequest = (url, params = {}, api) => {
    return axios({
      method: 'delete',
      params: removeUselessParams(params),
      url: `${api || base}${url}`
    })
  }

  return {
    get,
    post,
    postJson,
    put,
    putJson,
    download,
    downloadGet,
    upload,
    uploadPut,
    uploadJson,
    deleteRequest
  }
}
