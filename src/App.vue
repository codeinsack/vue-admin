<template>
  <v-app>
    <template v-if="$route.name === 'login'">
      <router-view></router-view>
    </template>
    <template v-else>
      <side-drawer></side-drawer>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </template>
  </v-app>
</template>

<script>
import SideDrawer from "./components/SideDrawer.vue"

export default {
  components: {
    "side-drawer": SideDrawer,
  },
  created() {
    this.$store.dispatch("tryAutoLogin")
  },
}
</script>
