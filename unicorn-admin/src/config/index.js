import httpConfig from './httpConfig'
import appConfig from './appConfig'

export default {
  ...httpConfig,
  ...appConfig
}

export {
  httpConfig,
  appConfig
}
