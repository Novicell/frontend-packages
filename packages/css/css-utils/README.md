# Novicell CSS Utils

This is a CSS utility class package inspired by Bootstrap 4 CSS utilities and configurable via CSS Custom Properties and PostCSS.

## How to use

The CSS utils can be used in two ways, which is described below. The package should generally only be used together with som kind of CSS purge tool e.g. PurgeCSS for removing all the CSS classes that is not used.

### Compiled mode

By using the compiled mode - you won't be able to change the CSS Custom Properties in the package which means that you are relying on CSS Utils' media-queries, colours, spacing base etc. This mode is proberly fine for a lot of use-cases where there are no variables you wan't to change, but that is up to you.

**CDN example**

```html
<!-- Import everything -->
<script src="https://cdn.jsdelivr.net/npm/@novicell/css-utils/dist/all.css"></script>

<!-- Import specific utilities -->
<script src="https://cdn.jsdelivr.net/npm/@novicell/css-utils/dist/spacing.css"></script>
<script src="https://cdn.jsdelivr.net/npm/@novicell/css-utils/dist/display.css"></script>
```

**NPM example**

```bash
// install the package
npm i @novicell/css-utils
```

```css
/* import the stylesheets in your css file */

/* import everything */
@import '../../node_modules/@novicell/css-utils/dist/all.css';

/* import specific utilities */
@import '../../node_modules/@novicell/css-utils/dist/spacing.css';
@import '../../node_modules/@novicell/css-utils/dist/display.css';
```

### Uncompiled / source-code mode

By importing the sourcode directly from the package, we are able to overwrite the CSS Custom Properties that is used in the helpers. 

**NB:** In order to overwrite the responsive CSS helpers you will need to install the `postcss-custom-media` plugin in your project since media-queries with CSS Custom Properties. If you don't want to output calc and CSS Custom Properties in your project, you can use the `postcss-custom-properties` and `postcss-calc` to transform these. All CSS Custom Properties can be found on the [documentation site]( https://novicell-css-utils.netlify.app)

**Example**

```bash
// install the package
npm i @novicell/css-utils
```

```css
/* Overwriting custom properties  */
body {
  --css-utils-spacing-base: 15px; /* default is 10px */
}

/* Overwriting custom media-queries  */
@custom-media --viewport-ms-min (min-width: 676px);  /* default is 576px */

/* import the stylesheets in your css file */

/* import everything */
@import '../../node_modules/@novicell/css-utils/dist/src/all.css';

/* import specific utilities */
@import '../../node_modules/@novicell/css-utils/dist/src/spacing.css';
@import '../../node_modules/@novicell/css-utils/dist/src/display.css';
```

## Documentation

https://novicell-css-utils.netlify.app

## Commands

```bash
npm run dev // starts demo site with HMR
npm run build // run clean build without PostCSS transformation
npm run compile // run build with PostCSS transformation
npm run generate // runs both build and compile
npm run lint // run stylelint
npm run lint:fix // run stylelint and fix fixable errors/warnings
```

## Contribution

Looking to contribute something? Here's how you can help. Please take a moment to review our [contribution guidelines](https://github.com/Novicell/novicell-frontend/wiki/Contribution-guidelines) in order to make the contribution process easy and effective for everyone involved.

## License

The Novicell CSS Utils is licensed under the MIT license. (http://opensource.org/licenses/MIT)