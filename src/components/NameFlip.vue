<template>
  <header ref="headerText" @click="unFlipText">
    <h1 class="mediaText">
      KRISTOPHER SKELTON
    </h1>
    <h2>
      <div ref="RWDtext" id="RWDtext">Front-End<br>Developer<br></div>
    </h2>
  </header>
</template>

<script>
import { flipText, unFlipText } from "@/services/flipper.js"

export default {
  name: "NameFlip",
  mounted (){
    this.$nextTick(() => { flipText(this.$refs.headerText, this.$refs.RWDtext) })
  },
  methods: {
    unFlipText() {
      unFlipText(this.$refs.headerText, this.$refs.RWDtext)
    }
  }
}
</script>

<style scoped>
header {
  background: url("../assets/images/fullname.png") fixed center no-repeat;
  background-attachment: scroll;
  background-color: #3D3B3C;
  border: 2px black solid;
  height: auto;
  width: 100%;
}
#RWDtext {
  background: #3D3B3C;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  min-width: 100vw;
  height: 5em;
  padding-top: 1em;
}
.open {
  cursor: pointer;
  visibility: visible;
  opacity: 1;
  -webkit-transition: visibility 1.5s ease-in 1s, opacity 1.2s;
  transition: visibility 1.5s ease-in 1s, opacity 1.2s;
}
.gone {
  visibility: hidden;
  opacity: 0;
  transition: visibility 2.5s ease-out 1s, opacity 2.5s;
}
.mediaText {
  display: none;
}
@media (max-width: 767.98px) {
  header {
    background: none;
  }
  #RWDtext {
    background-color: #3D3B3C;
  }
  .mediaText {
    display: inline;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 40%;
    z-index: -10;
    font-size: 250%;
    color: #D8AA47;
  }
}
</style>