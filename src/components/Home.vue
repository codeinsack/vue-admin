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
      .then(({ data }) => console.log("data", data))
  },
}
</script>

<style scoped>

</style>
