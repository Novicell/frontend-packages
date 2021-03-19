# Novicell Carousel Vue Component

![npm](https://img.shields.io/npm/v/@novicell/vue-carousel) ![npm bundle size](https://img.shields.io/bundlephobia/min/@novicell/vue-carousel)

A Vue / Nuxt carousel component to display slideshows or create inline navigations etc.

## How to use
The carousel component can be used in both a browser environment and a self-built single file component.

### Single File Component
To install the component in your project, run the command:
```bash
> npm i @novicell/vue-carousel
```
To import the uncompiled SFC, use the following import statement (Vue will optimize templates when doing this):
```js
import NcCarousel from '@novicell/vue-carousel/dist/nc-carousel.vue
```

You can also import the esm component with:
```js
import NcCarousel from '@novicell/vue-carousel
```

### Browser
To reference the component in your project, add the following script tag to your page:
```html
<script src="https://unpkg.com/@novicell/vue-carousel"></script>
```
or
```html
<script src="https://cdn.jsdelivr.net/npm/@novicell/vue-carousel/dist/nc-carousel.min.js"></script>
```

The component will automatically register itself if Vue is present on the `window` object.

## Props
The component takes X props:

**`prop`**

Desc.
```
type: String
required: true
```

## Examples
### SFC
```html
<template>
  <NcCarousel>

  </NcCarousel>
</template>

<script>
import NcCarousel from '@novicell/vue-carousel/dist/nc-carousel.vue'

export default {
  components: {
    NcCarousel
  }
}
</script>
```

### Browser
```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@novicell/vue-carousel/dist/nc-carousel.min.js"></script>

<div id="app">
  <nc-carousel>
  </nc-carousel>
</div>

<script>
  const app = new Vue({
    el: '#app'
    // I am already a registered component
  })
</script>
```

## Contribution
Looking to contribute something? Here's how you can help. Please take a moment to review our [contribution guidelines](https://github.com/Novicell/novicell-frontend/wiki/Contribution-guidelines) in order to make the contribution process easy and effective for everyone involved.

## License
The Novicell Breadcrumb Vue Component is licensed under the MIT license. (http://opensource.org/licenses/MIT)




