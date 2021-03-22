<template>
<div class="container">
  <nc-carousel>
    <img class="item img" src="https://source.unsplash.com/random/1920x1080" alt="random splash">
    <img class="item img" src="https://source.unsplash.com/random/800x600" alt="random splash">
    <img class="item img" src="https://source.unsplash.com/random/1440x900" alt="random splash">
    <div class="item funky"></div>
  </nc-carousel>
</div>
</template>

<script>
import NcCarousel from '../src/nc-carousel.vue'

export default {
  components: {
    NcCarousel
  },

  // data() {
  //   return {
  //     swiperOptions: {
  //       spaceBetween: 30,
  //       slidesPerView: 1,
  //       grabCursor: true,
  //       effect: 'fade',
  //       autoplay: true,
  //       pagination: {
  //         clickable: true,
  //         el: '.swiper-pagination'
  //       },
  //       scrollbar: {
  //         el: '.swiper-scrollbar'
  //       }
  //     }
  //   }
  // }
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: stretch;
}

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
}


</style>
