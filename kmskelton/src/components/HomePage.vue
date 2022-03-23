<template>
  <div class="container row">
  <h2>Featured Projects</h2>
  <div class="card" style="width: 18rem;">
    <img src="../assets/images/HGVF2.png" class="card-img-top" alt="google map of Hanalei Bay and list of mocked locations">
    <div class="card-body">
      <h5 class="card-title">Hanalei Group Vacation Finder</h5>
      <p class="card-text">Mapping app for the Hanalei Bay area in React</p>
      <a href="https://kms-hgvf.netlify.app/" class="btn btn-primary" target="_blank">HGVF site</a>
    </div>
  </div>
  <div class="card" style="width: 18rem;">
    <img src="../assets/images/scoring-app.png" class="card-img-top" alt="image of game scoring table">
    <div class="card-body">
      <h5 class="card-title">Game Scoring App</h5>
      <p class="card-text">Several games have complex scoring rules. This basic React app should help keep track.</p>
      <a href="https://friendly-mirzakhani-cda499.netlify.app/" class="btn btn-primary" target="_blank">Game Scoring</a>
    </div>
  </div>
  <div class="card" style="width: 18rem;">
    <img src="../assets/images/mine-sweeper.png" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">Mine Sweeper</h5>
      <p class="card-text">Basic minesweeper made with P5.js</p>
      <a href="https://musing-bose-e13b35.netlify.app/" class="btn btn-primary" target="_blank">Minesweeper</a>
    </div>
  </div>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  position: relative;
  top: 5em;
}
.card {
  margin: 1em 3em;
  background-color: #D8AA4795;
}
.card img {
  height: 30vh;
  margin-top: 0.5em;
}
.card-body {
  display: flex;
  flex-direction: column;
}
.card-body .btn {
  margin-top: auto;
}
</style>