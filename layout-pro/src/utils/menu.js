export function processMenu ({ systemCode, systems, selfSystem, appRoot }) {
  if (!systems) return
  const curSystem = systems.find(system => system.code === systemCode) || {}
  const routers = curSystem.accessedRouters || []

  let result

  if (curSystem.isOld) {
    const routes = routers
    result = disposeOldMenu(routes)
  } else {
    const routes = convertRoutes(routers.find(item => item.path === '/'))
    result = (routes && routes.children) || []
  }

  if (systemCode !== selfSystem) {
    let baseUrl = curSystem.baseUrl || '/'

    // 去除baseUrl尾部的 '/'
    const lastStr = baseUrl.charAt(baseUrl.length - 1)
    if (lastStr === '/') {
      baseUrl = baseUrl.substring(0, baseUrl.length - 1)
    }

    const appUrl = appRoot + baseUrl
    result.forEach(route => {
      route.path = appUrl + route.path
      if (route.children) {
        route.children.forEach(r => {
          r.path = appUrl + r.path
        })
      }
    })
  }

  return result

  // if (!this.oldMenu.includes(systemCode)) {
  //   const routes = convertRoutes(routers.find(item => item.path === '/' || item.name === 'index'))
  //   menus = (routes && routes.children) || []
  //
  //   menus.map(item => {
  //     if (item.x) {
  //       this.maxMenuX = Math.max(this.maxMenuX, item.x)
  //     }
  //   })
  // } else {
  //   return disposeOldMenu(routers)
  // }
}
export function disposeOldMenu (routers) {
  const menus = []
  if (!routers) return
  const routes = JSON.parse(JSON.stringify(routers || []))
  const maxY = {}
  if (!routes) return
  routes.map(item => {
    if (item.menuLevel === 1 && item.x) {
      menus.push(item)
      maxY[item.x] = Math.max(maxY[item.x] || 0, item.y)
    }
  })
  menus.sort((a, b) => {
    return a.x - b.x
  })
  menus.forEach((item, index) => {
    let nextY = 100
    if (menus[index + 1]) {
      nextY = menus[index + 1].x === item.x ? menus[index + 1].y : 100
    }
    item.minY = item.y
    item.maxY = nextY
  })
  routes.map(item => {
    if (item.meta && item.menuLevel && item.menuLevel !== 0 && item.menuLevel !== 1 && item.x !== 0) {
      const { x, y } = item
      const i = menus.findIndex((ele, index) => {
        return ele.x === x && ele.minY < y && ele.maxY > y
      })
      if (i !== -1) {
        if (!menus[i].children) {
          menus[i].children = []
        }
        menus[i].children.push(item)
      }
    }
  })
  return menus
}

export function convertRoutes (nodes) {
  if (!nodes) return null

  nodes = JSON.parse(JSON.stringify(nodes))

  let queue = Array.isArray(nodes) ? nodes.concat() : [nodes]

  while (queue.length) {
    const levelSize = queue.length

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()

      if (!node.children || !node.children.length) continue

      node.children.forEach(child => {
        // 转化相对路径
        if (child.path[0] !== '/' && !child.path.startsWith('http')) {
          child.path = node.path.replace(/(\w*)[/]*$/, `$1/${child.path}`)
        }
      })

      queue = queue.concat(node.children)
    }
  }

  return nodes
}
