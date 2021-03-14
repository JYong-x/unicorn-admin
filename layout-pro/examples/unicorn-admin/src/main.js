import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './permission'
import config from '@/config'
// import '@/styles/index.scss'
import '@/plugins/antd'
import '@/components/base'
import '@/utils/request'
import '@/api'
// import '@/directive'
// import '@/utils/index'
// import '@/utils/use'
// import { Dialog } from '@/components'

import { loginUtils } from 'unicorn-admin-utils'
// const loginUtils = login({ ...httpConfig, namespace: 'CQUEDU', env: process.env.NODE_ENV })
// console.log(loginUtils)

Vue.config.productionTip = false
// Vue.prototype.$loginUtils = loginUtils
// console.log(Vue.prototype.$loginUtils)
Vue.use(loginUtils,
  { ...config,
    env: process.env.NODE_ENV,
    name: 'loginUtils',
    router })
// Vue.use(Dialog)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
