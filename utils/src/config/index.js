import system from './system'
import subsystem from './subsystem'
import menu from './menu'
import typeKeys from './typeKeys'
import createAuthUri from './authUri'

export default {
  ...system,
  ...subsystem,
  MENU: menu,
  TYPE_KEYS: typeKeys
}

export {
  createAuthUri
}
