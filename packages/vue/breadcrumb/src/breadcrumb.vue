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

<script lang="ts">
export default {
  props: {
    modifier: {
      type: String,
      default: '',
    },
    breadcrumbs: {
      type: Array,
      default: () => [{ url: 'http://www.google.com', title: 'Google', text: 'Search' }, { url: 'http://www.google.com', title: 'Google', text: 'Google' }]
    }
  },

  computed: {
    last() {
      return this.breadcrumbs.length - 1;
    },
  },
};
</script>

<style scoped>
.breadcrumb {
  position: relative;
  padding: 30px 0;
  font-size: 1rem;
}
.breadcrumb__link {
  position: relative;
  display: inline-block;
  color: #767676;
  text-decoration: none;
  transition: color 0.2s;
}
.breadcrumb__link--active {
  color: #000;
  font-weight: 600;
}
.breadcrumb--shadow {
  padding: 30px 0 40px;
}
.breadcrumb--shadow .breadcrumb__link {
  color: #fff;
}
.breadcrumb--shadow .breadcrumb__link--active {
  color: rgba(255, 255, 255, 0.8);
}
.breadcrumb--shadow .breadcrumb__item + .breadcrumb__item::before {
  color: #fff;
}
.breadcrumb--shadow::after {
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.4), transparent);
  pointer-events: none;
}
.breadcrumb--pull-down {
  position: absolute;
  right: 0;
  left: 0;
  z-index: 3;
}
.breadcrumb__items {
  position: relative;
  z-index: 1;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
}
.breadcrumb__item {
  display: inline-block;
  line-height: 30px;
  list-style: none;
}
.breadcrumb__item + .breadcrumb__item::before {
  padding: 5px 3px;
  color: #bcbcbc;
  content: '/';
}
</style>
