# Novicell Breadcrumb Vue Component

![npm](https://img.shields.io/npm/v/@novicell/vue-breadcrumb) ![npm bundle size](https://img.shields.io/bundlephobia/min/@novicell/vue-breadcrumb)

This package contains a basic, styled breadcrumb component for Vue and Nuxt. The links check for the presence of `this.$nuxt` to determine whether to use `router-link` (Vue) or `n-link` (Nuxt) for internal links.

## Demo
A small demo is available [on codepen](https://codepen.io/Novicell/pen/ExNPRoN "codepen.io").

## Installation
The breadcrumb Vue component can be used in both a browser environment and a self-built single file component. If you are using Vue, you will obviously have to configure Vue Router also.

### Single File Component
To install the component in your project, run the command:
`npm i @novicell/vue-breadcrumb`.

The component can then be imported inside your Vue project with:
`import NcBreadcrumb from '@novicell/vue-breadcrumb`.

### Browser
To reference the component in your project, add the following script tag to your page:
`<script src="https://cdn.jsdelivr.net/npm/@novicell/vue-breadcrumb/dist/nc-breadcrumb.min.js"></script>`.

The component will automatically register itself if Vue is present on the `window` object.

## Props
The component takes the following props:

**`breadcrumbs`**

This is an array of links to display in the component.

The links are in the format:
```js
{
  url: string // Relative route or absolute link
  title: string // The text to display when hovering over the link
  text: string // The text to display on the link
}
```

This component uses `@novicell/vue-link` behind the scenes, which will automatically use a `<NuxtLink>` if the linked resource is internal or an `<a>`-tag if the link is external.

**`blockClass`**

This is a class name string to put on the BEM block element and prepend to the BEM-classes of the child elements. [Read more](#differently-styled-instances).

**`modifier`**

A BEM class name modifier that indicates a different variant of the component's styling.
Currently the following modifiers are allowed:
- `breadcrumb--shadow`: Sets a gradient shadow and heightens contrast.

Alternatively the modifier class can also be set directly on the component instead of passing it in as a prop.

## Styling
Styling is not applied by default. If you want to apply the default styling, these files can be found in the `css` directory of this package:
```
├── css
|  ├── index.css
|  └── src
|     └── index.css
├── nc-breadcrumb.esm.js
├── nc-breadcrumb.min.js
└── nc-breadcrumb.umd.js
```

`css/index.css` is the compiled and ready-to-use styling.

`css/src/index.css` is PostCSS that will need to be compiled with `postcss-nested` installed in your environment.

### Custom styling
To overwrite the default styling (after importing) or simply adding your own styling, you will have to use [deep selectors](https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors "Vue docs") to style nested components and elements inside the root element. For example:

```html
<style scoped>
.breadcrumb >>> .breadcrumb__item + .breadcrumb__item::before {
  content: '>';
}
</style>
```

If you [overwrite the block class on the root element](#differently-styled-instances) or add your own from the parent component's scope, this class name can be used instead of `.breadcrumb` in the above example.

### Differently styled instances

If you wish to use this component in several different places and have them styled differently, you can overwrite the default block class (`breadcrumb`) of one of them (or both) by passing in a new `blockClass`, e.g.:

```html
<NcBreadcrumb blockClass="not-breadcrumb" >
```

Doing this will allow you to style the child elements with BEM classes as well by selecting for example `.not-breadcrumb__item`, but remember to use [deep selectors](#custom-styling).

## SFC usage
```html
<template>
  <NcBreadcrumb :breadcrumbs="links" modifier="breadcrumb--shadow" />
</template>

<script>
// Make sure your bundler aliases '@' to node_modules or give the full path
import '@novicell/vue-breadcrumb/dist/css/index.css'
import NcBreadcrumb from '@novicell/vue-breadcrumb'

export default {
  components: {
    NcBreadcrumb
  },
  data() {
    return {
      links: [
        {
          url: 'subpage',
          title: "A relative link",
          text: "Subpage"
        },
        {
          url: 'https://external-site.com',
          title: "An absolute link",
          text: "External Site"
        },
      ]
    }
  }
}
</script>
```
### Browser usage
```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<script src="https://cdn.jsdelivr.net/npm/@novicell/vue-breadcrumb/dist/nc-breadcrumb.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@novicell/vue-breadcrumb/dist/css/index.css"></script>

<div id="app">
  <nc-breadcrumb :breadcrumbs="links" modifier="breadcrumb--shadow" />
</div>

<script>
  const app = new Vue({
    el: '#app',
    // I am already a registered component
    data() {
      return {
        links: [
          {
            url: 'subpage',
            title: "A relative link",
            text: "Subpage"
          },
          {
            url: 'https://external-site.com',
            title: "An absolute link",
            text: "External Site"
          },
        ]
      }
    }
  })
</script>
```

## Contribution
Looking to contribute something? Here's how you can help. Please take a moment to review our [contribution guidelines](https://github.com/Novicell/novicell-frontend/wiki/Contribution-guidelines) in order to make the contribution process easy and effective for everyone involved.

## License
The Novicell Breadcrumb Vue Component is licensed under the MIT license. (http://opensource.org/licenses/MIT)
