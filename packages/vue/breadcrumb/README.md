# Novicell Breadcrumb Vue Component

![npm](https://img.shields.io/npm/v/@novicell/vue-breadcrumb) ![npm bundle size](https://img.shields.io/bundlephobia/min/@novicell/vue-breadcrumb)

This package contains a basic, styled breadcrumb component for Vue and Nuxt. The links check for the presence of `this.$nuxt` to determine whether to use `router-link` (Vue) or `n-link` (Nuxt) for internal links.

## Demo
A quick demo is available [on codepen](https://codepen.io/Novicell/pen/ExNPRoN "codepen.io").

## How to use
The breadcrumb Vue component can be used in both a browser environment and a self-built single file component.

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
The component takes two props:

**`breadcrumbs`**
This is an array of links to display in the component.

The links are in the format:
```
{
  url: string // Relative route or absolute link
  title: string // The text to display when hovering over the link
  text: string // The text to display on the link
}
```

This component uses @novicell/vue-link behind the scenes, which will automatically use a `<NuxtLink>` if the linked resource is internal or an `<a>`-tag if the link is external.

**`modifier`**
A BEM class name modifier that indicates a different variant of the component's styling.
Currently the following modifiers are allowed:
- `breadcrumb--shadow`: Sets a gradient shadow and heightens contrast.

## Examples
### SFC
```
<template>
  <NcBreadcrumb :breadcrumbs="links" modifier="breadcrumb--shadow" />
</template>

<script>
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
### Browser
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@novicell/vue-breadcrumb/dist/nc-breadcrumb.min.js"></script>

<div id="app">
  <nc-breadcrumb :breadcrumbs="links" modifier="breadcrumb--shadow" />
</div>

<script>
  const app = new Vue({
    el: '#app',
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
