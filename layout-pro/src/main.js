import BasicLayout from './BasicLayout'
import User from './components/User'
import Page from './components/Page'
import Breadcrumb from './components/Breadcrumb'
import Login, { AuthRedirect } from './components/constant/login'
import { Exception404 } from './components/constant/exception'
import Redirect from './components/constant/redirect'

BasicLayout.install = function (Vue) {
  Vue.component(BasicLayout.name, BasicLayout)
}

// User.install = function (Vue) {
//   Vue.component(User.name, User)
// }
//
// Page.install = function (Vue) {
//   Vue.component(Page.name, Page)
// }

export default BasicLayout
export {
  User,
  Page,
  Breadcrumb,
  Login,
  AuthRedirect,
  Exception404,
  Redirect
}
