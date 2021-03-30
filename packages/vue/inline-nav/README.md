# Novicell Inline Navigation Vue Component

![npm](https://img.shields.io/npm/v/@novicell/vue-carousel) ![npm bundle size](https://img.shields.io/bundlephobia/min/@novicell/vue-carousel)

A Vue carousel component built on vue-awesome-swiper to display inline navigation items such as cards.

## How to use
The inline navigation component can be used in both a browser environment and a self-built single file component.

### Single File Component
To install the component in your project, run the command:
```bash
> npm i @novicell/vue-inline-nav
```
To import the uncompiled SFC, use the following import statement (Vue will optimize templates when doing this):
```js
import NcInlineNav from '@novicell/vue-inline-nav/dist/nc-inline-nav.vue
```

You can also import the esm component with:
```js
import NcInlineNav from '@novicell/vue-inline-nav
```

### Browser
To reference the component in your project, add the following script tag to your page:
```html
<script src="https://unpkg.com/@novicell/vue-inline-nav"></script>
```
or
```html
<script src="https://cdn.jsdelivr.net/npm/@novicell/vue-inline-nav/dist/nc-inline-nav.min.js"></script>
```

The component will automatically register itself if Vue is present on the `window` object.

## Props
The component takes 1 prop:

**`options`**

This object directly represents the [Swiper options](https://swiperjs.com/ "SwiperJS"). The defaults follow the Novicell style guide.
```js
type: Object,
default() {
  return {
    spaceBetween: 30,
    slidesPerView: 1,
    grabCursor: true,
    effect: 'fade',
    autoplay: true,
    pagination: {
      clickable: true,
      el: '.swiper-pagination'
    },
    keyboard: {
      enabled: true
    }
  }
}
```

**Note:**

If you want to use other options than the defaults, you will have to [include the necessary styles](#full-stylesheet).

## Styling
Styling is not applied by default. If you want to apply the default (minimal) Novicell style guide styling, these files can be found in the `css` directory of this package:
```
├── css
|  ├── index.css
|  └── src
|     └── index.css
├── nc-inline-nav.esm.js
├── nc-inline-nav.min.js
├── nc-inline-nav.min.js
└── nc-inline-nav.vue
```

`css/index.css` is the compiled and ready-to-use styling.

`css/src/index.css` is PostCSS that will need to be compiled with `postcss-nested` installed in your environment.

### Full stylesheet
When using more Swiper features than the default, you will need to either:
- Overwrite the styling on the default swiper classes manually (good luck)
OR
- Import the standard swiper styles from `'swiper/css/swiper.css'`

## Examples
### SFC
```html
<template>
  <NcInlineNav>
    <img class="img" src="https://source.unsplash.com/random/1920x1080" alt="random splash">
    <img class="img" src="https://source.unsplash.com/random/800x600" alt="random splash">
    <img class="img" src="https://source.unsplash.com/random/1440x900" alt="random splash">
  </NcInlineNav>
</template>

<script>
import NcInlineNav from '@novicell/vue-inline-nav/dist/nc-inline-nav.vue'

export default {
  components: {
    NcInlineNav
  }
}
</script>

<style>
.inline-nav {
  height: 50vh;
}

.img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
```

### Browser
```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@novicell/vue-inline-nav/dist/nc-inline-nav.min.js"></script>

<div id="app">
  <nc-inline-nav>
    <img class="img" src="https://source.unsplash.com/random/1920x1080" alt="random splash">
    <img class="img" src="https://source.unsplash.com/random/800x600" alt="random splash">
    <img class="img" src="https://source.unsplash.com/random/1440x900" alt="random splash">
  </nc-inline-nav>
</div>

<script>
  const app = new Vue({
    el: '#app'
    // I am already a registered component
  })
</script>

<style>
.inline-nav {
  height: 50vh;
}

.img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
```

## Contribution
Looking to contribute something? Here's how you can help. Please take a moment to review our [contribution guidelines](https://github.com/Novicell/novicell-frontend/wiki/Contribution-guidelines) in order to make the contribution process easy and effective for everyone involved.

## License
The Novicell Breadcrumb Vue Component is licensed under the MIT license. (http://opensource.org/licenses/MIT)




