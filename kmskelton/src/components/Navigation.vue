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
            <div class="dropdown show">
              <a href="#" class="btn dropdown-toggle" id="dropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Teaching and Learning</a> 
                <div class="dropdown-menu">
                  <div class="dropdown-item">
                    <a href="https://www.youtube.com/channel/UCmG1Y2i62_aaKW4mc64UvbQ" target="_blank">
                      <img src="../assets/yt_logo_rgb_dark.png" alt="youtube logo">
                    </a>
                  </div>
                  <div class="dropdown-item">
                    <a href="https://kmskelton.wordpress.com/" target="_blank">
                      <img class="brighten" src="../assets/wordPress-logotype-standard.png" alt="Wordpress logo">
                    </a>
                  </div>
                </div>  
            </div>
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
.brighten {
  filter: brightness(10);
}
img {
  display: inline-block;
  height: 1em;
  max-width: 100%;
  margin: 0 auto;
  vertical-align: middle;
}  
</style>