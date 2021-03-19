<template>


  <Swiper ref="image-slider" class="carousel" :options="swiperOptions">
    <SwiperSlide v-for="slot in $slots.default" :key="slot" class="carousel__slide">
      <div class="item">Hello</div>
    </SwiperSlide>

    <div slot="pagination" class="swiper-pagination"></div>
  </Swiper>

</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css'
/*
SPECS:
- Take any amount of content to display through slots
- Add interfaces for common swiper options (pagination buttons, indicators etc)
- Include only structurally important css from vue-awesome-swiper, copy it over instead of importing
- If any css is not 100% structurally important, make it overwritable like with breadcrumb and decoupled
- Write readme about how to include the complete default styling
- Tree shake everything from vue-awesome-swiper that is not used (import {} from 'vue-awesome-swiper'?)
*/

//TODO: Expose swiperOptions as a prop for full customization
//TODO: Figure out which parts of swiper.css are needed (is everything just structural? in that case we can copy or include file completely)
//TODO: See which elements are variable and v-if them according to the swiperOptions passed in
//TODO: figure out how to render every slot as the element/component given when the v-for is on SwiperSlide

//! use: https://github.surmon.me/vue-awesome-swiper/?ref=madewithvuejs.com
export default {
  mounted() {
    console.log(this.$slots.default)
  },
  components: {
    Swiper,
    SwiperSlide
  },

  data() {
    return {
      swiperOptions: {
        spaceBetween: 0,
        slidesPerView: 3,
        grabCursor: true,
        autoplay: true,
        pagination: {
          clickable: true,
          el: '.swiper-pagination'
        },
      }
    }
  }
}

</script>

<style scoped>
.item {
  height: 500px;
  width: 300px;
  background: hotpink;
  color: white;
}
</style>
