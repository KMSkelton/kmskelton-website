<template>
<div id="carouselWithCaptions" class="carousel slide" data-bs-interval="3500" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselWithCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselWithCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselWithCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselWithCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselWithCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselWithCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="../assets/images/HGVF2.png" class="d-block" alt="google map of Hanalei Bay and list of mocked locations">
      <div class="words">
      <h5>Hanalei Group Vacation Finder</h5>
      <p>Mapping app for the Hanalei Bay area, in React</p>
      <a href="https://kms-hgvf.netlify.app/" class="btn btn-primary" target="_blank">HGVF site</a>
      </div>
    </div>
    <div class="carousel-item">
    <img src="../assets/images/kaviar.png" class="d-block" alt="image of game scoring table">
      <div class="words">
      <h5>Kaviar Genomic App</h5>
      <p>This tool helps geneticists identify known variants; this example does not call the API</p>
      <a href="https://scribe-occasions-81375.netlify.app/" class="btn btn-primary" target="_blank">Kaviar Tool</a>
      </div>
    </div>
    <div class="carousel-item">
    <img src="../assets/images/scoring-app.png" class="d-block" alt="image of game scoring table">
      <div class="words">
      <h5>Game Scoring App</h5>
      <p>Several games have complex scoring rules. This basic React app should help keep track.</p>
      <a href="https://friendly-mirzakhani-cda499.netlify.app/" class="btn btn-primary" target="_blank">Game Scoring</a>
      </div>
    </div>
    <div class="carousel-item">
    <img src="../assets/images/to-do.png" class="d-block" alt="">
      <div class="words">
      <h5>React Hook To-do</h5>
      <p>Who doesn't need another to-do list?</p>
      <a href="https://kms-react-todo-hooks-context.netlify.app/" class="btn btn-primary" target="_blank">To-do</a>
      </div>
    </div>
    <div class="carousel-item">
    <img src="../assets/images/mine-sweeper.png" class="d-block" alt="">
      <div class="words">
      <h5>Mine Sweeper</h5>
      <p>Basic minesweeper made with P5.js</p>
      <a href="https://musing-bose-e13b35.netlify.app/" class="btn btn-primary" target="_blank">Minesweeper</a>
      </div>
    </div>
    <div class="carousel-item">
    <img src="../assets/images/sleep-data.png" class="d-block" alt="">
      <div class="words">
      <h5>Tracking Sleep</h5>
      <p>This D3.js graph shows my sleep duration for each phase of the moon</p>
      <a href="https://vizhub.com/KMSkelton/38c6fda809d24730a66a8bd222c1ab9e" class="btn btn-primary" target="_blank">Werewolf?</a>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselWithCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselWithCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<style scoped>
.carousel {
  width: 50vw;
  height: 70vh;
  margin: auto;
  position: relative;
  top: 5em;
}
.carousel-inner {
  position: relative;
  display: flex;
  align-content: center;
  height: 100%;
  width: 100%;
  text-align: center;
}
.carousel-item img {
  max-height: 40vh;
  max-width: 50%;
  margin-top: 0.5em;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%)
}
.carousel-item .words {
  position: relative;
  top: 70%;
}
@media (max-width: 767.98px) {
  .carousel {
    width: 80%;
  }
  .carousel-item .words {
    top: 50%;
  }
}
</style>