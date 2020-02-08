import Login from "./components/Login.vue"
import Home from "./components/Home.vue"
import About from "./components/About.vue"
import Statistic from "./components/Statistic.vue"

export const routes = [
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
