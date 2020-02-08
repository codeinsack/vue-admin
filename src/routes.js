import Home from "./components/Home.vue"
import Login from "./components/Login.vue"

export const routes = [
  {
    path: "",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
]
