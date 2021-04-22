import httpConfig from './httpConfig'
import appConfig from './appConfig'

const globalConfig = `${process.env.BASE_URL}config/index.js`
console.log(globalConfig)

export default {
  ...httpConfig,
  ...appConfig
}

export {
  httpConfig,
  appConfig
}
