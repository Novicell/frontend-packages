import { shallowMount, RouterLinkStub } from '@vue/test-utils' // has no children
import NcLink from '@/nc-link.vue'


describe('nc-link.vue', () => {

  it('renders external urls as anchors', () => {
    const wrapper = shallowMount(NcLink, {
      propsData: {
        to: 'https://google.com',
        name: 'Link to google',
        title: 'Google.com'
      }
    })
    expect(wrapper.element.tagName).toBe('A')
  })


  it('renders internal urls as router-link in vanilla Vue', () => {
    const wrapper = shallowMount(NcLink, {
      propsData: {
        to: 'google.com',
        name: 'Link to google subpage',
        title: 'google subpage'
      },

      // https://vue-test-utils.vuejs.org/api/components/#routerlinkstub
      stubs: {
        RouterLink: RouterLinkStub,
      }
    })

    expect(wrapper.getComponent(RouterLinkStub))
  })


  it('renders internal urls as n-link in Nuxt', () => {
    const wrapper = shallowMount(NcLink, {
      propsData: {
        to: 'google.com',
        name: 'Link to google subpage',
        title: 'google subpage'
      },

      // Nuxt sets a global $nuxt-object which nc-link checks for
      // when determining whether to use n-link or router-link.
      // this hack basically emulates a nuxt-environment in the way
      // that the component checks
      created() {
        this.$nuxt = true
      },

      // Makes jest know that n-links are just the same as router-links
      // so it won't complain about an unknown tag and so we can just look
      // for a RouterLink-formatted n-links
      stubs: {
        NLink: RouterLinkStub
      }
    })

    // looks for n-link element formatted the same way as a router-link
    expect(wrapper.getComponent(RouterLinkStub))
  })
})
