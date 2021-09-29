import { storiesOf } from '@storybook/vue'
import NcBreadcrumb from '../src/nc-breadcrumb.vue'

const links = [
  { url: 'https://www.google.com', title: 'Google', text: 'google.com', target: '_blank' },
  { url: '/subpage1', title: 'Subpage1', text: '/subpage1' },
  { url: 'subpage2', title: 'Subpage2', text: 'subpage2' },
]

import '@novicell/styles-breadcrumb'


storiesOf('NcBreadcrumb', module)
  .add('Default', () => ({
    components: { NcBreadcrumb },
    template:
    `
    <nc-breadcrumb :breadcrumbs="links" />
    `,
    data() {
      return {
        links
      }
    }
  }))

  .add('Shadow', () => ({
    components: { NcBreadcrumb },
    template:
    `
    <nc-breadcrumb :breadcrumbs="links" class="breadcrumb--shadow" />
    `,
    data() {
      return {
        links
      }
    }
  }))

  .add('Pull down', () => ({
    components: { NcBreadcrumb },
    template:
    `
    <nc-breadcrumb :breadcrumbs="links" class="breadcrumb--pull-down" />
    `,
    data() {
      return {
        links
      }
    }
  }))

