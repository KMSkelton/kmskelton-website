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
  height: 75vh;
  width: 100%;
  top: 15em;
  position: absolute;
}
@media (max-width: 699.98px) {
  main {
    height: 250vh;
    top: 0;
  }
}
</style>