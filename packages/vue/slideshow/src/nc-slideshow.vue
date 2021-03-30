<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

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
          keyboard: {
            enabled: true
          }
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
        class: 'slideshow',
        props: {
          options: this.options // The Vue Awesome Swiper options passed from outside
        }
      },
      children
    )
  },
}
</script>
