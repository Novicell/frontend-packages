<template>
<div class="container">
  <nc-carousel>
    <div v-for="i in 5" :key="i">{{ i }}</div>
  </nc-carousel>
</div>
</template>

<script>
import NcCarousel from '../src/nc-carousel.vue'

export default {
  components: {
    NcCarousel
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>
