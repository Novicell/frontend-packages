<template>
  <div :class="`breadcrumb ${modifier}`" aria-label="breadcrumb">
    <ol class="breadcrumb__items">
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb.text" class="breadcrumb__item" :aria-current="last === index && 'page'">
        <NcLink v-if="last !== index" :to="breadcrumb.url" :title="breadcrumb.title" :name="breadcrumb.text" class="breadcrumb__link">
          {{ breadcrumb.text }}
        </NcLink>
        <span v-else class="breadcrumb__link--active" :title="breadcrumb.title">{{ breadcrumb.text }}</span>
      </li>
    </ol>
  </div>
</template>

<script>
// '@rollup/plugin-node-resolve' sørger for at vi undgår absolutte stier:
import '@novicell/styles-breadcrumb' // @import i <style> prepended med '~' (for node_modules) virker kun i SFC

// import NcLink from '@novicell/vue-link' // Virker kun til at builde til browser - vue SFC ved ikke hvad den skal gøre med `global` i (default) *.esm.js-filen
import NcLink from '@novicell/vue-link/src/nc-link.vue' // Virker både med `npm run dev` og buildet til browser - kunne være fedt med /sfc

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
