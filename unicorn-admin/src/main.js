import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './permission'
import { httpConfig } from '@/config'
// import '@/styles/index.scss'
import '@/plugins/antd'
// import '@/components/base'
// import '@/utils/request'
// import '@/api'
// import '@/directive'
// import '@/utils/index'
// import '@/utils/use'
// import { Dialog } from '@/components'

import { loginUtils } from '@unicorn-admin/utils'
// const loginUtils = login({ ...httpConfig, namespace: 'CQUEDU', env: process.env.NODE_ENV })
// console.log(loginUtils)

import VueStorage from 'vue-ls'
const storageOptions = {
  namespace: 'u__',
  name: 'storage',
  storage: 'local'
}

Vue.config.productionTip = false
// Vue.prototype.$loginUtils = loginUtils
// console.log(Vue.prototype.$loginUtils)
Vue.use(VueStorage, storageOptions)
Vue.use(loginUtils,
  { ...httpConfig,
    storageNamespace: 'CQUEDU',
    env: process.env.NODE_ENV,
    name: 'loginUtils' })
// Vue.use(Dialog)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
