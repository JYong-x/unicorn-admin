import Vue from 'vue'
import VueRouter from 'vue-router'
import { constantRouters } from '@/router/router.config'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouters
})

export default router
