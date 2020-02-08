<template>
  <v-app>
    <template v-if="$route.name !== 'login'">
      <v-navigation-drawer app permanent left>
        <left-panel></left-panel>
      </v-navigation-drawer>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </template>
    <router-view></router-view>
  </v-app>
</template>

<script>
import LeftPanel from "./components/LeftPanel.vue"

export default {
  components: {
    "left-panel": LeftPanel,
  },
}
</script>
