<template>
  <v-app>
    <hello-world></hello-world>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"

export default {
  components: {
    "hello-world": HelloWorld,
  },
}
</script>
