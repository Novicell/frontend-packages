import { mount } from '@vue/test-utils'
import NcBreadcrumb from '@/nc-breadcrumb.vue'
import NcLink from '@novicell/vue-link/nc-link.vue'

describe('nc-breadcrumb.vue', () => {

  const breadcrumbs = [
    { url: 'https://www.google.com', title: 'Google', text: 'google.com', target: '_blank' },
    { url: '/subpage1', title: 'Subpage1', text: '/subpage1' },
    { url: 'subpage2', title: 'Subpage2', text: 'subpage2' },
  ]

  it('renders an array of links with a span at the end', () => {

    const wrapper = mount(NcBreadcrumb, {
      propsData: {
        breadcrumbs
      },

      // router-link does not exist in this environment, but this makes
      // jest stop complaining, since we are not testing the routing
      stubs: ['router-link']
    })


    const NcLinks = wrapper.findAllComponents(NcLink)
    const span = wrapper.get('span')

    expect(NcLinks.length).toBe(2)
    expect(span.exists()).toBe(true)

  })
})
