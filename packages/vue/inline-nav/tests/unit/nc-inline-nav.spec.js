import { shallowMount } from '@vue/test-utils'
import NcInlineNav from '@/nc-inline-nav.vue'
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'


describe('nc-inline-nav.vue', () => {
  it('renders arbitrary slot elements as slides inside a Swiper', () => {

    const wrapper = shallowMount(NcInlineNav, {
      slots: {
        default: ['<img class="img" src="https://source.unsplash.com/random/1920x1080" alt="random splash">', '<img class="img" src="https://source.unsplash.com/random/1920x1080" alt="random splash">']
      }
    })


    const image = wrapper.findAll('.img')
    const swiper = wrapper.findComponent(Swiper)
    const slides = wrapper.findAllComponents(SwiperSlide)
    const pagination = wrapper.find('.swiper-pagination')

    expect(wrapper.exists()).toBe(true)
    expect(swiper.exists()).toBe(true)
    expect(slides).toHaveLength(2)
    expect(image).toHaveLength(2)
    expect(pagination.exists()).toBe(true)
  })

})
