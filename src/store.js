import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

import router from "./router"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    user: null,
  },
  mutations: {
    authUser(state, userData) {
      state.token = userData.token
      state.user = userData.user
    },
    clearAuthData(state) {
      state.token = null
      state.user = null
    },
  },
  actions: {
    login({ commit }, authData) {
      axios.post("/login", authData)
        .then(({ data: { accessToken } }) => {
          axios.get("/users", {
            params: {
              email: authData.email,
            },
          })
            .then(({ data }) => {
              const [user] = data
              const userData = {
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
              }
              localStorage.setItem("token", accessToken)
              localStorage.setItem("user", JSON.stringify(userData))
              commit("authUser", {
                token: accessToken,
                user: userData,
              })
              router.replace("/")
            })
        })
    },
    logout({ commit }) {
      commit("clearAuthData")
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      router.replace("/login")
    },
    tryAutoLogin({ commit }) {
      const token = localStorage.getItem("token")
      if (!token) {
        return
      }
      const user = localStorage.getItem("user")
      commit("authUser", {
        token,
        user,
      })
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.token !== null
    },
    token(state) {
      return state.token
    },
    user(state) {
      return state.user
    },
  },
})
