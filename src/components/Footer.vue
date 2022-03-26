<template>
  <footer>
    <a href="./contact">
        <span aria-hidden="true" class="icon-envelop icon">
          <span>Contact</span>
        </span>
    </a>
      <a href="https://github.com/KMSkelton" target="_blank">
        <span class="icon-github4 icon">
          <span>Github</span>
        </span>
      </a>
      <a href="https://kmskelton.wordpress.com" target="_blank">
        <span class="icon-wordpress icon">
          <span>Wordpress</span>
        </span>
      </a>
      <a href="https://www.linkedin.com/in/kristopherskelton" target="_blank">
        <span class="icon-linkedin icon">
          <span>LinkedIn</span>
        </span>
    </a>
  </footer>
</template>

<style>
  footer {
    font-size: 120%;
    background-color: #3D3B3D;
    bottom: 0;
    height: 3em;
    padding-top: .5em;
    position: fixed;
    width: 100%;
  }
  @media (max-width: 767.98px) {
    footer {
      font-size: 70%;
      padding: .5em 2em;
    }
  }
</style>
