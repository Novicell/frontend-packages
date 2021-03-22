

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
  components: {
    Swiper,
    SwiperSlide
  },

  props: {
    options: {
      type: Object,
      default() {
        return {
          spaceBetween: 30,
          slidesPerView: 1,
          grabCursor: true,
          effect: 'fade',
          autoplay: true,
          pagination: {
            clickable: true,
            el: '.swiper-pagination'
          },
          // a11y: {
          //   prevSlideMessage: this.$t('Accessibility.SlideShow.PrevSlideMessage'),
          //   nextSlideMessage: this.$t('Accessibility.SlideShow.NextSlideMessage'),
          //   firstSlideMessage: this.$t('Accessibility.SlideShow.FirstSlideMessage'),
          //   lastSlideMessage: this.$t('Accessibility.SlideShow.LastSlideMessage'),
          //   paginationBulletMessage: this.$t('Accessibility.SlideShow.PaginationBulletMessage')
          // }
        }
      }
    }
  },

  render(h) {
    // For every element passed into default slot: wrap it in a SwiperSlide
    const slides = this.$slots.default.map((node) => {
      return h(
        SwiperSlide,
        {
          key: node.key // move the passed key onto SwiperSlide (if using v-for)
        },
        [node] // must be an array although there is just one node
      )
    })

    // These are only created if their options are specified in this.options
    let pagination
    if (this.options.pagination) {
      pagination = h(
        'div',
        {
          class: 'swiper-pagination',
          slot: 'pagination'
        }
      )
    }

    let scrollbar
    if (this.options.scrollbar) {
      scrollbar = h(
        'div',
        {
          class: 'swiper-scrollbar',
          slot: 'scrollbar'
        }
      )
    }

    let navigationPrev
    let navigationNext
    if (this.options.navigation) {
       navigationPrev = h(
        'div',
        {
          class: 'swiper-button-prev',
          slot: 'button-prev'
        }
      )

      navigationNext = h(
        'div',
        {
          class: 'swiper-button-next',
          slot: 'button-next'
        }
      )
    }


    // If pagination or navigation are undefined, they will just be dropped by vue
    const children = [...slides, pagination, scrollbar, navigationPrev, navigationNext ]

    // Render a Swiper with the SwiperSlides + pagination slot as children
    return h(
      Swiper,
      {
        ref: 'image-slider',
        class: 'carousel',
        props: {
          options: this.options // The Vue Awesome Swiper options passed from outside
        }
      },
      children
    )
  },

}

</script>

<style scoped>
/*
! move this to reusable styling
*/

.carousel {
  --swiper-theme-color: white;

  height: 50vh;
  width: 100%;
}
</style>
