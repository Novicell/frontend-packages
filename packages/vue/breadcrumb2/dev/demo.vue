<template>
  <nc-breadcrumb :breadcrumbs="links" />
</template>

<script>
import '@novicell/styles-breadcrumb' // styles are not included by default
import NcBreadcrumb from '../src/nc-breadcrumb'

export default {
  components: {
    NcBreadcrumb
  },

  data() {
    return {
      links: [
        { url: 'https://www.google.com', title: 'Google', text: 'google.com', target: '_blank' },
        { url: '/subpage1', title: 'Subpage1', text: '/subpage1' },
        { url: 'subpage2', title: 'Subpage2', text: 'subpage2' },
      ]
    }
  }
};
</script>
