<script>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav
    class="navbar navbar-expand-md bg-secondary"
    style="--bs-bg-opacity: 0.7"
  >
    <div class="container-fluid">
      <p class="fs-3 m-2">
        <RouterLink class="nav-link text-dark" to="/"
          >KMSkelton.com</RouterLink
        >
      </p>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mx-2 mb-lg-0">
          <li class="nav-item mx-4">
            <RouterLink class="nav-link text-dark" to="/" @click=""
              >Home</RouterLink
            >
          </li>
          <li class="nav-item mx-4">
            <RouterLink class="nav-link text-dark" to="/teach" @click=""
              >Teaching and Learning</RouterLink
            >
          </li>
          <li class="nav-item mx-4">
            <RouterLink class="nav-link text-dark" to="/experiment" @click=""
              >Experiments with Code</RouterLink
            >
          </li>
          <li class="nav-item mx-4">
            <RouterLink class="nav-link text-dark" to="/projects" @click=""
              >Projects</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>
li {
  font-size: 160%;
}
nav {
  font-family: Montserrat;
  position: fixed;
  top: 10em;
  width: 100%;
  height: 3em;
}
</style>