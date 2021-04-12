<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },

  props: {
    type: {
      type: String,
      default: 'carousel'
    },

    // Must come before being used in options
    itemsPerRow: {
      type: Number,
      default: 4
    },

    options: {
      type: Object,
      default() {
        return {
          loop: false,
          slidesPerView: 1.1,
          spaceBetween: 30,
          watchSlidesVisibility: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },

          breakpoints: {
            1200: {
              slidesPerView: this.itemsPerRow
            },
            991: {
              slidesPerView: 3
            },
            767: {
              slidesPerView: 2.1
            },
            575: {
              slidesPerView: 1.4
            }
          },
          // a11y: {
          //   prevSlideMessage: this.$t('Accessibility.SlideShow.PrevSlideMessage'),
          //   nextSlideMessage: this.$t('Accessibility.SlideShow.NextSlideMessage'),
          //   firstSlideMessage: this.$t('Accessibility.SlideShow.FirstSlideMessage'),
          //   lastSlideMessage: this.$t('Accessibility.SlideShow.LastSlideMessage')
          // }
        }
      }
    },
  },

  computed: {
    isCarousel() {
      return this.type.startsWith('carousel')
    },

    gridClass() {
      return 'col-xl-' + 12 / (this.itemsPerRow || 4)
    }
  },

  render(h) {
    // Filter off sneaky empty elements
    const slots = this.$slots.default.filter(node => node.text !== ' ')

    // For every element passed into default slot: wrap it in a SwiperSlide or div
    const slides = slots.map((node) => {
      return h(
        this.isCarousel ? SwiperSlide : 'div',
        {
          key: node.key, // move the passed key onto SwiperSlide or div (if using v-for)
          class: this.isCarousel ? '' : ['row__slide col-xs-12 col-ms-6 col-md-4 mb-4', this.gridClass]
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

    let nav
    if (this.options.navigation) {
       const navigationPrev = h(
        'div',
        {
          class: 'swiper-button-prev swiper__nav swiper__nav--prev shadow-lg d-none d-md-flex',
          slot: 'button-prev'
        },
        [this.$slots['button-prev']]
      )

      const navigationNext = h(
        'div',
        {
          class: 'swiper-button-next swiper__nav shadow-lg d-none d-md-flex',
          slot: 'button-next'
        },
        [this.$slots['button-next']]
      )

      nav = this.isCarousel ? [navigationPrev, navigationNext] : []
    }


    // If pagination or navigation are undefined, they will just be dropped by vue
    const children = [...slides, pagination, scrollbar, ...nav ]

    // Render a Swiper with the SwiperSlides + pagination slot as children
    // or a div with divs as children depending on isCarousel
    return h(
      this.isCarousel ? Swiper : 'div',
      {
        ref: 'image-slider',
        class: this.isCarousel ? 'swiper' : 'row',
        props: {
          options: this.options // The Vue Awesome Swiper options passed from outside
        }
      },
      children
    )
  },
}
</script>
