<script>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav
    class="navbar navbar-light navbar-expand-md bg-secondary"
    style="--bs-bg-opacity: 0.7"
  >
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <p class="fs-3 m-2">
        <RouterLink class="active nav-link text-dark" to="/"
          >KMSkelton.com</RouterLink
        >
      </p>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav me-auto mx-2 mb-lg-0">
          <li class="nav-item mx-4">
            <RouterLink class="nav-link text-dark" to="/" @click=""
              >Home</RouterLink
            >
          </li>
          <li class="nav-item mx-4">
            <div class="dropdown show">
              <a href="#" class="btn btn-lg dropdown-toggle" id="dropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Teaching && Learning</a> 
                <div class="dropdown-menu">
                  <div class="dropdown-item">
                    <a href="https://www.youtube.com/channel/UCmG1Y2i62_aaKW4mc64UvbQ" target="_blank">
                      <img src="../assets/images/yt_logo_rgb_dark.png" alt="youtube logo">
                    </a>
                  </div>
                  <div class="dropdown-item">
                    <a href="https://kmskelton.wordpress.com/" target="_blank">
                      <img class="brighten" src="../assets/images/wordpress-logotype-standard.png" alt="Wordpress logo">
                    </a>
                  </div>
                </div>  
            </div>
          </li>
          <li class="nav-item mx-4">
            <div class="dropdown show">
              <a href="#" class="btn btn-lg dropdown-toggle" id="dropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Experiments with Code</a> 
                <div class="dropdown-menu">
                  <div class="dropdown-item">
                    <a href="https://github.com/KMSkelton" target="_blank">
                      <img src="../assets/images/github-logo.jpeg" alt="Github Octocat logo">
                    </a>
                  </div>
                  <div class="dropdown-item">
                    <a href="https://codepen.io/KMSkelton/" target="_blank">
                      <img class="brighten" src="../assets/images/codepen-wordmark-display-inside-black@10x.png" alt="Codepen logo">
                    </a>
                  </div>
                  <div class="dropdown-item">
                    <a href="https://repl.it/@kmskelton/" target="_blank">
                      <img style="height: 4em;" src="../assets/images/replit-logo-small-square.jpeg" alt="REPL.it logo">
                    </a>
                  </div>
                  <div class="dropdown-item">
                    <a href="https://vizhub.com/KMSkelton" target="_blank">
                      <img src="../assets/images/vizhublogo.png" alt="VizHub logo">
                    </a>
                  </div>
                  <div class="dropdown-item">
                    <a href="https://www.codewars.com/users/KMSkelton/" target="_blank">
                      Codewars <br>
                      <img src="../assets/images/codewars-large.svg" alt="Codewars kyu ranking">
                    </a>
                  </div>
                </div>  
            </div>
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
  position: absolute;
  top: 100%;
  width: 100%;
  height: 3em;
}
img {
  height: 2.2em;
  width: auto;
  margin: .5em 0;
}
@media (max-width: 699.98px) {
  .container-fluid {
    position: absolute;
    top: -35%;
    z-index: 10;
    background-color: #D8AA47;
  }
  .navbar-light .navbar-toggler {
    border-color: rgba(0,0,0,0);
  }
}
</style>