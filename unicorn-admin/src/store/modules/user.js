// 用户信息相关模块（登录信息，个人信息等）
import { getUserInfo } from '@unicorn-admin/auth'

const user = {
  state: {
    token: '',
    name: '',
    avatar: '',
    roles: [],
    info: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    }
  },

  actions: {

    // 获取用户信息
    GetUserInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo.then(userInfo => {
          if (userInfo.roleNames && userInfo.roleNames.length > 0) {
            commit('SET_ROLES', userInfo.roleNames)
            commit('SET_INFO', userInfo)
          } else {
            reject(new Error('getUserInfo: roles must be a non-null array !'))
          }
        })
      })
    },

    // 登出
    Logout ({ commit, state }) {
      return new Promise(resolve => {
      })
    }

  }
}

export default user

