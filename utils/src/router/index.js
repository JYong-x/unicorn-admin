import routers from './modules'
import { generateRoutes } from './permission'

const defaultSystemOrder = ['cm', 'sms', 'timetable', 'enroll', 'exam', 'cet', 'tpms', 'tams', 'srtp', 'trpms']

export default function (options = {}) {
  const _options = {
    ...options,
    systemOrder: options.systemOrder || defaultSystemOrder,
    systemRouter: options.systemRouter || {},
    visibleSystems: options.visibleSystems || [],
    permissions: options.permissions || []
  }

  console.log(...routers)

  const systems = [...routers, _options.systemRouter].filter(system => _options.visibleSystems.includes(system.code) || _options.visibleSystems.includes(system.name))

  const sortSystems = sortSystem(systems, _options.systemOrder)
  return generateRoutes(sortSystems, _options.permissions)
}

function sortSystem(systems, order) {
  const result = []
  order.forEach(item => {
    const system = systems.find(s => s.code === item || s.name === item)
    if (system) {
      result.push(system)
    }
  })
  return result
}
