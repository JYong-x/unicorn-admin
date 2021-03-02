export function processMenu (systemCode, systems) {
  if (!systems) return
  const curSystem = systems.find(system => system.code === systemCode) || {}
  const routers = curSystem.accessedRouters || []

  const routes = convertRoutes(routers.find(item => item.path === '/'))

  return (routes && routes.children) || []

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
    if (item.menuLevel === 1 && item.coordinateX) {
      menus.push(item)
      maxY[item.coordinateX] = Math.max(maxY[item.coordinateX] || 0, item.coordinateY)
    }
  })
  menus.sort((a, b) => {
    return a.coordinateX - b.coordinateX
  })
  menus.forEach((item, index) => {
    let nextY = 100
    if (menus[index + 1]) {
      nextY = menus[index + 1].coordinateX === item.coordinateX ? menus[index + 1].coordinateY : 100
    }
    item.minY = item.coordinateY
    item.maxY = nextY
  })
  routes.map(item => {
    if (item.meta && item.menuLevel && item.menuLevel !== 0 && item.menuLevel !== 1 && item.coordinateX !== 0) {
      const { coordinateX: x, coordinateY: y } = item
      this.maxMenuX = Math.max(this.maxMenuX, Number(x || 0))
      const i = menus.findIndex((ele, index) => {
        return ele.coordinateX === x && ele.minY < y && ele.maxY > y
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
        console.log(child)
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
