import systemRouter from '@/router/router.config'

import { routerUtils } from 'unicorn-admin-utils'
import { appConfig } from '@/config'

/**
 * 过滤账户是否拥有某一个权限，并将菜单从加载列表移除
 *
 * @param permission
 * @param route
 * @returns {boolean}
 */

const permission = {
  state: {
    systems: [],
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
    },
    SET_SYSTEMS: (state, systems) => {
      state.systems = systems
    }
  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      return new Promise(resolve => {
        const systems = routerUtils({
          systemRouter,
          visibleSystems: appConfig.visibleSystems,
          permissions: data.permissionSet
        })
        const curSystemRoutes = systems.find(system => system.code === appConfig.code).accessedRouters
        commit('SET_ROUTERS', curSystemRoutes)
        commit('SET_SYSTEMS', systems)
        resolve()
      })
    }
  }
}

export default permission
