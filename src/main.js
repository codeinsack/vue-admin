import Vue from "vue"
import Vuetify from "vuetify/lib"
import VueRouter from "vue-router"

import App from "./App.vue"
import { routes } from "./routes"

Vue.use(Vuetify)
const vuetify = new Vuetify()

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: "history",
})

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app")
