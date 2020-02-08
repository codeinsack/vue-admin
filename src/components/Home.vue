<template>
  <div>
    Hello from Home!
  </div>
</template>

<script>
import axios from "axios"

export default {
  created() {
    axios.get("/countries")
      .then((response) => console.log("data", response?.data))
      .catch((error) => console.log("error", error))
  },
}
</script>

<style scoped>

</style>
