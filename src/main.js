import Vue from "vue"
import Vuetify from "vuetify/lib"
import axios from "axios"

import App from "./App.vue"
import store from "./store"
import router from "./router"

axios.defaults.baseURL = "http://localhost:3000"
axios.interceptors.request.use((config) => {
  const { token } = store.state
  config.headers.Authorization = `Bearer ${token}`
  return config
})
axios.interceptors.response.use((response) => response,
  (error) => {
    if (error.response.status === 401) {
      store.dispatch("logout")
    }
    return Promise.reject(error)
  })

Vue.use(Vuetify)
const vuetify = new Vuetify()

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
