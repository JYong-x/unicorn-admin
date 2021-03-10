// 用户信息相关模块（登录信息，个人信息等）
import Vue from 'vue'

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
        Vue.loginUtils.getUserInfo().then(userInfo => {
          if (userInfo.roleNames && userInfo.roleNames.length > 0) {
            commit('SET_ROLES', userInfo.roleNames)
            commit('SET_INFO', userInfo)
            resolve(userInfo)
          } else {
            reject(new Error('getUserInfo: roles must be a non-null array !'))
          }
        })
      })
    },

    SetUserInfo ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        const { roleNames } = userInfo
        if (roleNames && roleNames.length > 0) {
          commit('SET_ROLES', roleNames)
          commit('SET_INFO', userInfo)
          resolve()
        } else {
          reject(new Error('getUserInfo: roles must be a non-null array !'))
        }
      })
    },

    // 登出
    Logout ({ commit, state }) {
      return new Promise(resolve => {
        Vue.loginUtils.logout().then(res => {
          resolve()
        })
      })
    }

  }
}

export default user

