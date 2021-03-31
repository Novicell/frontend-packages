import { shallowMount } from '@vue/test-utils'
import NcInlineNav from '@/nc-inline-nav.vue'
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'


describe('nc-inline-nav.vue', () => {
  it('renders arbitrary slot elements as slides inside a Swiper in carousel mode', () => {

    const wrapper = shallowMount(NcInlineNav, {
      slots: {
        default: ['<img class="img" src="https://source.unsplash.com/random/1920x1080" alt="random splash">', '<img class="img" src="https://source.unsplash.com/random/1920x1080" alt="random splash">']
      }
    })


    const image = wrapper.findAll('.img')
    const swiper = wrapper.findComponent(Swiper)
    const slides = wrapper.findAllComponents(SwiperSlide)
    const navNext = wrapper.find('.swiper-button-next')
    const navPrev = wrapper.find('.swiper-button-prev')

    expect(wrapper.exists()).toBe(true)
    expect(swiper.exists()).toBe(true)
    expect(slides).toHaveLength(2)
    expect(image).toHaveLength(2)
    expect(navNext.exists()).toBe(true)
    expect(navPrev.exists()).toBe(true)
  })

  it('renders arbitrary slot elements as divs inside a div in row mode', () => {

    const wrapper = shallowMount(NcInlineNav, {
      propsData: {
        type: 'not carousel'
      },
      slots: {
        default: ['<img class="img" src="https://source.unsplash.com/random/1920x1080" alt="random splash">', '<img class="img" src="https://source.unsplash.com/random/1920x1080" alt="random splash">']
      }
    })


    const image = wrapper.findAll('.img')
    const swiper = wrapper.findComponent(Swiper)
    const container = wrapper.find('.row')
    const slides = wrapper.findAll('.row__slide')
    const nav = wrapper.find('.swiper__nav')

    expect(wrapper.exists()).toBe(true)
    expect(swiper.exists()).toBe(false)
    expect(container.exists()).toBe(true)
    expect(slides).toHaveLength(2)
    expect(image).toHaveLength(2)
    expect(nav.exists()).toBe(false)
  })
})
