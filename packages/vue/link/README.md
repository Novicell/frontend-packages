# Novicell Link Vue Component

![npm](https://img.shields.io/npm/v/@novicell/vue-link) ![npm bundle size](https://img.shields.io/bundlephobia/min/@novicell/vue-link)

A Vue / Nuxt link component, that automatically switches between an anchor-tag and `router-link` or `n-link` depending on whether the provided link is internal or external and whether `this.$nuxt` is present on the component or not.

## Demo
For a demo, we refer to [the codepen](https://codepen.io/Novicell/pen/ExNPRoN "codepen.io") of `@novicell/vue-breadcrumb` that depends on this component.

## How to use
The link component can be used in both a browser environment and a self-built single file component. If you are using Vue, you will obviously have to configure Vue Router also.

### Single File Component
To install the component in your project, run the command:
```bash
> npm i @novicell/vue-link
```
To import the uncompiled SFC, use the following import statement (Vue will optimize templates when doing this):
```js
import NcLink from '@novicell/vue-link/dist/nc-link.vue
```

You can also import the esm component with:
```js
import NcLink from '@novicell/vue-link
```

### Browser
To reference the component in your project, add the following script tag to your page:
```html
<script src="https://unpkg.com/@novicell/vue-link"></script>
```
or
```html
<script src="https://cdn.jsdelivr.net/npm/@novicell/vue-link/dist/nc-link.min.js"></script>
```

The component will automatically register itself if Vue is present on the `window` object.

## Props
The component takes four props:

**`to`**

This is the URL the link should point to.
```
type: String
required: true
```

**`name`**

String that binds to `aria-label`.
```
type: String
default: ''
```

**`title`**

The text that is displayed when the link is hovered.
```
type: String
default: ''
```

**`target`**

This defines how to open the link.
```
type: String
default: '_self'
```

## Examples
### SFC
```html
<template>
  <NcLink to="/subpage" title="Hover text" name="Explains the link if there is no text inside me" target="_blank">
    Take me to /subpage
  </NcLink>
</template>

<script>
import NcLink from '@novicell/vue-link/dist/nc-link.vue'

export default {
  components: {
    NcLink
  }
}
</script>
```

### Browser
```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@novicell/vue-link/dist/nc-link.min.js"></script>

<div id="app">
  <nc-link to="/subpage" title="Hover text" name="Explains the link if there is no text inside me" target="_blank">
    Take me to /subpage
  </nc-link>
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




