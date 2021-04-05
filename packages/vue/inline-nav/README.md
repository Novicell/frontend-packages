# Novicell Inline Navigation Vue Component

![npm](https://img.shields.io/npm/v/@novicell/vue-inline-nav) ![npm bundle size](https://img.shields.io/bundlephobia/min/@novicell/vue-inline-nav)

A Vue carousel component built on vue-awesome-swiper to display inline navigation items such as cards. The component can function as a carousel or wrapping rows of items.

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
The component takes 3 props:

**`type`**

A string representing the mode to use. If the string starts with 'carousel', this will render as a Swiper carousel with navigation buttons. Otherwise it will display wrapping lists of items.
```js
type: String,
default: 'carousel'
```

**`itemsPerRow`**

An integer representing the amount of items to show on a row or in the carousel at a time on xl-screens (over 1200px).
```js
type: Number,
default: 4
```

**`options`**

This object directly represents the [Swiper options](https://swiperjs.com/ "SwiperJS"). The defaults follow the Novicell style guide. These are only used in 'carousel' mode.
```js
type: Object,
default() {
  return {
    loop: false,
    slidesPerView: 1.1,
    spaceBetween: 30,
    watchSlidesVisibility: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      1200: {
        slidesPerView: this.itemsPerRow
      },
      991: {
        slidesPerView: 3
      },
      767: {
        slidesPerView: 2.1
      },
      575: {
        slidesPerView: 1.4
      }
    }
  }
}
```

**Note:**

If you want to use other Swiper options than the defaults, you will have to [include the necessary styles](#full-stylesheet).

## Slots

**`default`**

The default slot takes any number of elements and wraps them in carousel slides.

**`button-next`**

The icon to display on the 'next' navigation button.

**`button-prev`**

The icon to display on the 'previous' navigation button. This will be rotated 180deg to allow for using the same icon as in `button-next`.

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
- Overwrite the styling on the default swiper classes manually
OR
- Import the standard swiper styles from `'swiper/css/swiper.css'`

## Examples
### SFC
```html
<template>
  <nc-inline-nav class="inline-nav">
    <div class="item"><h1>This is a navigation card</h1></div>
    <div class="item"><h1>This is a navigation card</h1></div>
    <div class="item"><h1>This is a navigation card</h1></div>
    <div class="item"><h1>This is a navigation card</h1></div>
    <div class="item"><h1>This is a navigation card</h1></div>
    <template v-slot:button-prev>
      <svg>...</svg>
    </template>
    <template v-slot:button-next>
      <svg>...</svg>
    </template>
  </nc-inline-nav>
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
    width: 100%;
}
.item {
    height: 100%;

    background: hotpink;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: sans-serif;
}
svg {
  height: 25px;
  width: 25px;
}
</style>
```

### Browser
```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@novicell/vue-inline-nav/dist/nc-inline-nav.min.js"></script>

<div id="app">
  <nc-inline-nav class="inline-nav">
    <div class="item"><h1>This is a navigation card</h1></div>
    <div class="item"><h1>This is a navigation card</h1></div>
    <div class="item"><h1>This is a navigation card</h1></div>
    <div class="item"><h1>This is a navigation card</h1></div>
    <div class="item"><h1>This is a navigation card</h1></div>
    <template v-slot:button-prev>
      <svg>...</svg>
    </template>
    <template v-slot:button-next>
      <svg>...</svg>
    </template>
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
    width: 100%;
}
.item {
    height: 100%;

    background: hotpink;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: sans-serif;
}
svg {
  height: 25px;
  width: 25px;
}
</style>
```

## Contribution
Looking to contribute something? Here's how you can help. Please take a moment to review our [contribution guidelines](https://github.com/Novicell/novicell-frontend/wiki/Contribution-guidelines) in order to make the contribution process easy and effective for everyone involved.

## License
The Novicell Breadcrumb Vue Component is licensed under the MIT license. (http://opensource.org/licenses/MIT)




