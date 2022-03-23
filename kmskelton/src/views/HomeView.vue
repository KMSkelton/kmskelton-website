<script>
import HomePage from "../components/HomePage.vue";

export default {
  components: {
    HomePage,
  }
}
</script>

<template>
  <main>
    <HomePage />
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 13em;
}
</style>