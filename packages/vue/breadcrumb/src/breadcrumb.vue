<template>
  <div :class="`breadcrumb ${modifier}`" aria-label="breadcrumb">
    <ol class="breadcrumb__items">
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb.text" class="breadcrumb__item" :aria-current="last === index && 'page'">
        <!-- <NcLink v-if="last !== index" :to="breadcrumb.url" :title="breadcrumb.title" :name="breadcrumb.text" class="breadcrumb__link">
          {{ breadcrumb.text }}
        </NcLink> -->
        <a v-if="last !== index" :href="breadcrumb.url" :title="breadcrumb.title" class="breadcrumb__link">
          {{ breadcrumb.text }}
        </a>
        <span v-else class="breadcrumb__link--active" :title="breadcrumb.title">{{ breadcrumb.text }}</span>
      </li>
    </ol>
  </div>
</template>

<script>
import '@novicell/breadcrumb-styles'
import NcLink from '@novicell/link'

export default {
  components: {
    NcLink
  },
  props: {
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
