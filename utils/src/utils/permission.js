/**
 * 过滤账户是否拥有某一个权限，并将菜单从加载列表移除
 *
 * @param permission
 * @param route
 * @returns {boolean}
 */
function hasPermission (permission, route, namespace) {
  if (route.meta && route.meta.permission) {
    let flag = false
    for (let i = 0, len = permission.length; i < len; i++) {
      const nameSpacePermission = []
      route.meta.permission.map(item => {
        nameSpacePermission.push(item + '&' + (route.meta.namespace || namespace))
      })
      flag = nameSpacePermission.includes(permission[i])
      if (flag) {
        return true
      }
    }
    return false
  }
  return true
}

function filterAsyncRouter (routerMap, permissions, namespace) {
  const accessedRouters = routerMap.filter(route => {
    if (hasPermission(permissions, route, namespace)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, permissions, namespace)
        if (!route.children.length) {
          return false
        }
      }
      return true
    }
    return false
  })
  return accessedRouters
}

export function generateRoutes (systemList, permissions) {
  const systems = []

  systemList.forEach(system => {
    const accessedRouters = filterAsyncRouter(system.originRouters, permissions, system.namespace)

    systems.push({ ...system, accessedRouters })
  })
  return systems
}
