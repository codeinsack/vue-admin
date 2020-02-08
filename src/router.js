import Vue from "vue"
import VueRouter from "vue-router"

import Login from "./components/Login.vue"
import Home from "./components/Home.vue"
import About from "./components/About.vue"
import Statistic from "./components/Statistic.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/statistic",
    name: "statistic",
    component: Statistic,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
]

export default new VueRouter({ mode: "history", routes })
