<script>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from "@/components/Navigation.vue"
import NameFlip from "@/components/NameFlip.vue"
export default {
  components: {
    Navigation,
    NameFlip
  }
}

</script>

<template>
    <div>
      <NameFlip />
      <Navigation />
    </div>
</template>

<style>
@import '@/assets/base.css';
</style>
