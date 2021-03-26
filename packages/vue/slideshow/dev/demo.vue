<template>
<div class="container">
  <nc-slideshow>
    <img class="item img" src="https://source.unsplash.com/random/1920x1080" alt="random splash">
    <img class="item img" src="https://source.unsplash.com/random/800x600" alt="random splash">
    <img class="item img" src="https://source.unsplash.com/random/1440x900" alt="random splash">
    <div class="item funky"><h1>Arbitrary content</h1></div>
  </nc-slideshow>
</div>
</template>

<script>
import NcSlideshow from '../src/nc-slideshow.vue'
import '../node_modules/@novicell/styles-slideshow/dist/index.css'

export default {
  components: {
    NcSlideshow
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: stretch;
}

.slideshow {
  height: 50vh;

  /* transition: height 300ms ease; */
}

/* .slideshow:hover {
  height: 80vh;
} */

.item {
  height: 100%;
  width: 100%;
}

.img {
  object-fit: cover;
  object-position: center;
}

.funky {
  background: hotpink;

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: sans-serif;
}


</style>
