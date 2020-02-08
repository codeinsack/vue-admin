import Vue from "vue"
import VueRouter from "vue-router"

import Login from "./components/Login.vue"
import Home from "./components/Home.vue"
import About from "./components/About.vue"
import Statistic from "./components/Statistic.vue"
import AdminOnly from "./components/AdminOnly.vue"

Vue.use(VueRouter)

const token = localStorage.getItem("token")
const user = localStorage.getItem("user")

const routes = [
  {
    path: "",
    name: "home",
    component: Home,
    beforeEnter(to, from, next) {
      if (token) {
        next()
      } else {
        next("/login")
      }
    },
  },
  {
    path: "/about",
    name: "about",
    component: About,
    beforeEnter(to, from, next) {
      if (token) {
        next()
      } else {
        next("/login")
      }
    },
  },
  {
    path: "/statistic",
    name: "statistic",
    component: Statistic,
    beforeEnter(to, from, next) {
      if (token) {
        next()
      } else {
        next("/login")
      }
    },
  },
  {
    path: "/admin-only",
    name: "admin-only",
    component: AdminOnly,
    beforeEnter(to, from, next) {
      if (token && user?.role === "admin") {
        next()
      } else {
        next("/login")
      }
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
]

export default new VueRouter({ mode: "history", routes })
