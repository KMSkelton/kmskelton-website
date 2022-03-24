<script>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from "@/components/Navigation.vue"
import NameFlip from "@/components/NameFlip.vue"
import Footer from "@/components/Footer.vue"

export default {
  components: {
    Navigation,
    NameFlip,
    Footer
  }
}

</script>

<template>
    <div>
      <NameFlip />
      <Navigation />
      <Footer />
    </div>
</template>

<style>
@import '@/assets/base.css';
</style>
