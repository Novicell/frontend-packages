<template>
  <div :class="[blockClass, modifier]" aria-label="breadcrumb">
    <ol :class="`${blockClass}__items`">
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb.text" :class="`${blockClass}__item`" :aria-current="last === index && 'page'">
        <NcLink v-if="last !== index" :to="breadcrumb.url" :title="breadcrumb.title" :name="breadcrumb.text" :class="`${blockClass}__link`">
          {{ breadcrumb.text }}
        </NcLink>
        <span v-else :class="`${blockClass}__link--active`" :title="breadcrumb.title">{{ breadcrumb.text }}</span>
      </li>
    </ol>
  </div>
</template>

<script>

import NcLink from '@novicell/vue-link/dist/nc-link.vue'

export default {
  components: {
    NcLink
  },
  props: {
    // Allows for several differently styled instances of this component:
    blockClass: {
      type: String,
      default: 'breadcrumb'
    },

    modifier: {
      type: String,
      default: '',
    },

    breadcrumbs: {
      type: Array,
      default: () => [{ url: 'http://www.google.com', title: 'Link 1', text: 'Link 1' }, { url: 'http://www.google.com', title: 'Link 2', text: 'Link 2' }]
    }
  },

  computed: {
    last() {
      return this.breadcrumbs.length - 1;
    },
  },
};
</script>
