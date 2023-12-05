<template>
  <main>
    <Locations />
  </main>
</template>

<script setup>
import Locations from '@/components/Locations.vue'
</script>

<script>
export default {
  name: "LocationView",
  components: {
    Locations
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
