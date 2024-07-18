import { createStore } from 'vuex'

const accountStateStore = createStore({
  state: {
    account: {
      username: '',
      token: ''
    },
    isLogin: false,
    taskList: []
  },
  mutations: {
    setAccount(state, account) {
      state.account = account
      state.isLogin = true
    },
    setIsLogin(state, isLogin) {
      state.isLogin = isLogin
    },
    setTaskList(state, taskList) {
      state.taskList = taskList
    },
    getTaskList(state) {
      return state.taskList
    }
  },
  actions: {
    async login({ commit }, account) {
      commit('setAccount', account)
      commit('setIsLogin', true)
    },
    async setTaskList({ commit }, taskList) {
      commit('setTaskList', taskList)
    },
    async logout({ commit }) {
      commit('setAccount', {
        username: '',
        token: ''
      })
      commit('setIsLogin', false)
    }
  },
  getters: {
    getAccount(state) {
      return state.account
    },
    getIsLogin(state) {
      return state.isLogin
    },
    getTaskList(state) {
      return state.taskList
    }
  }
})

export default accountStateStore
