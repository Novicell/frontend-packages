# Novicell CTA Vue Component

![npm](https://img.shields.io/npm/v/@novicell/vue-cta) ![npm bundle size](https://img.shields.io/bundlephobia/min/@novicell/vue-cta)

This component is a styled call-to-action link used to draw attention to the link. This component uses `@novicell/vue-link` to determine whether to render as a Vue / Nuxt router link or an anchor-tag.

## Installation
The CTA Vue component can be used in both a browser environment and a self-built single file component. If you are using Vue nad not Nuxt, you will obviously have to configure Vue Router also.

### Single File Component
To install the component in your project, run the command:

```bash
> npm i @novicell/vue-cta
```

To import the uncompiled SFC, use the following import statement (Vue will optimize templates when doing this):
```js
import NcCta from '@novicell/vue-cta/dist/nc-cta.vue`
```

You can also import the esm component with:
```js
import NcCta from '@novicell/vue-cta`
```

### Browser
To reference the component in your project, add the following script tag to your page:
```html
<script src="https://unpkg.com/@novicell/vue-cta"></script>
```
or
```html
<script src="https://cdn.jsdelivr.net/npm/@novicell/vue-cta/dist/nc-cta.min.js"></script>
```

The component will automatically register itself if Vue is present on the `window` object.

## Props
The component takes the following props:

**`alias`**

The existence of this string determines whether to render inside a wrapper div to easier position with `position`.
```js
type: String,
required: false
```

**`position`**

This string will be concatenated onto `'text-'` to create a positioning class on the outermost div if an `alias` is set.
```js
type: String,
required: false
```

**`url`**

The endpoint for the cta button to point to (see `@novicell/vue-link`).
```js
type: String,
required: true
```

**`name`**

The text string that sets the `aria-label` and `title` when hovering over the cta button.
```js
type: String,
required: true
```

**`target`**

The text string that sets how the link should be opened. The most common:
`'_blank'` opens in a new tab, `'_self'` redirects the current tab.
```js
type: String,
default: '_blank'
```

## Styling
Styling is not applied by default. If you want to apply the default styling, these files can be found in the `css` directory of this package:
```
├── css
|  ├── index.css
|  └── src
|     └── index.css
├── nc-cta.esm.js
├── nc-cta.min.js
├── nc-cta.min.js
└── nc-cta.vue
```

`css/index.css` is the compiled and ready-to-use styling.

`css/src/index.css` is PostCSS that will need to be compiled with `postcss-nested` installed in your environment.

### Custom styling
To overwrite the default styling (after importing) or simply adding your own styling from scoped styled components, you might need to use [deep selectors](https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors "Vue docs") to style nested components and elements inside the root element. This should, however, only be necessary if you are setting an alias (which will nest `.button` inside a div, since the icon can also be styled when passing it in as a prop. For example:

```html
<style scoped>
.your-wrapper-class >>> .button {
  background-color: hotpink;
}
</style>
```

## SFC usage
```html
<template>
  <NcCta url="https://google.dk" name="Google" target="_self">
    Google
    <template v-slot:icon>
      <svg>your icon</svg>
    </template>
  </NcCta>
</template>

<script>
import '@novicell/vue-cta/dist/css/index.css'
import NcCta from '@novicell/vue-cta/dist/nc-cta.vue'

export default {
  components: {
    NcCta
  }
}
</script>
```
### Browser usage
```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<script src="https://cdn.jsdelivr.net/npm/@novicell/vue-cta/dist/nc-cta.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@novicell/vue-cta/dist/css/index.css"></script>

<div id="app">
  <nc-cta url="https://google.dk" name="Google" target="_self">
    Google
    <template v-slot:icon>
      <svg>your icon</svg>
    </template>
  </nc-cta>
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
The Novicell CTA Vue Component is licensed under the MIT license. (http://opensource.org/licenses/MIT)
