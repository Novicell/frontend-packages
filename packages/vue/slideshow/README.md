# Novicell Slideshow Vue Component

![npm](https://img.shields.io/npm/v/@novicell/vue-carousel) ![npm bundle size](https://img.shields.io/bundlephobia/min/@novicell/vue-carousel)

A Vue carousel component built on vue-awesome-swiper to display full width image slideshows with a fade effect.

## How to use
The slideshow component can be used in both a browser environment and a self-built single file component.

### Single File Component
To install the component in your project, run the command:
```bash
> npm i @novicell/vue-slideshow
```
To import the uncompiled SFC, use the following import statement (Vue will optimize templates when doing this):
```js
import NcSlideshow from '@novicell/vue-slideshow/dist/nc-slideshow.vue
```

You can also import the esm component with:
```js
import NcSlideshow from '@novicell/vue-slideshow
```

### Browser
To reference the component in your project, add the following script tag to your page:
```html
<script src="https://unpkg.com/@novicell/vue-slideshow"></script>
```
or
```html
<script src="https://cdn.jsdelivr.net/npm/@novicell/vue-slideshow/dist/nc-slideshow.min.js"></script>
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
├── nc-slideshow.esm.js
├── nc-slideshow.min.js
├── nc-slideshow.min.js
└── nc-slideshow.vue
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
  <NcSlideshow>
    <img class="img" src="https://source.unsplash.com/random/1920x1080" alt="random splash">
    <img class="img" src="https://source.unsplash.com/random/800x600" alt="random splash">
    <img class="img" src="https://source.unsplash.com/random/1440x900" alt="random splash">
  </NcSlideshow>
</template>

<script>
import NcSlideshow from '@novicell/vue-slideshow/dist/nc-slideshow.vue'

export default {
  components: {
    NcSlideshow
  }
}
</script>

<style>
.slideshow {
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
<script src="https://cdn.jsdelivr.net/npm/@novicell/vue-slideshow/dist/nc-slideshow.min.js"></script>

<div id="app">
  <nc-slideshow>
    <img class="img" src="https://source.unsplash.com/random/1920x1080" alt="random splash">
    <img class="img" src="https://source.unsplash.com/random/800x600" alt="random splash">
    <img class="img" src="https://source.unsplash.com/random/1440x900" alt="random splash">
  </nc-slideshow>
</div>

<script>
  const app = new Vue({
    el: '#app'
    // I am already a registered component
  })
</script>

<style>
.slideshow {
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




