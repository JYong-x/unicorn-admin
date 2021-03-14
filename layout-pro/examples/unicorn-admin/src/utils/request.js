import Vue from 'vue'
import { message } from 'ant-design-vue'
import { request } from 'unicorn-admin-utils'
import router from '@/router'
import config from '@/config'

const _request = request({ ...config, messageFunction: message, router })
export default _request

Vue.prototype.$http = _request
