<template>
  <div>
    <v-list-item two-line>
      <v-list-item-avatar>
        <img src="https://randomuser.me/api/portraits/women/81.jpg">
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Jane Smith</v-list-item-title>
        <v-list-item-subtitle>Logged In</v-list-item-subtitle>
      </v-list-item-content>
      <v-btn
        small
        outlined
        fab
        color="teal"
        @click="onExitAppClick"
      >
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-list-item>
    <v-divider></v-divider>
    <v-list>
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    item: 1,
    items: [
      { text: "Home", icon: "mdi-clock", link: "/" },
      { text: "About", icon: "mdi-account", link: "about" },
      { text: "Statistic", icon: "mdi-flag", link: "statistic" },
    ],
  }),
  methods: {
    onExitAppClick() {
      this.$store.dispatch("logout")
    },
  },
  created() {
    if (this.$store.getters.user.role === "admin") {
      this.items.push({
        text: "Admin Only",
        icon: "mdi-flag",
        link: "admin-only",
      })
    }
  },
}
</script>
