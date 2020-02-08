<template>
  <v-app>
    <template v-if="$route.name === 'login'">
      <router-view></router-view>
    </template>
    <template v-else>
      <v-navigation-drawer app permanent left>
        <left-panel></left-panel>
      </v-navigation-drawer>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </template>
  </v-app>
</template>

<script>
import LeftPanel from "./components/LeftPanel.vue"

export default {
  components: {
    "left-panel": LeftPanel,
  },
  created() {
    this.$store.dispatch("tryAutoLogin")
  },
}
</script>
