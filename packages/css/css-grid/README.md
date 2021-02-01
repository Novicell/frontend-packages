# Novicell Flexbox Grid

![npm](https://img.shields.io/npm/v/@novicell/flexbox-grid) ![npm bundle size](https://img.shields.io/bundlephobia/min/@novicell/flexbox-grid)

This is a Flexbox Grid package inspired by Bootstrap 4 CSS layout and configurable via CSS Custom Properties and PostCSS.

## How to use

The Flexbox Grid can be used in two ways, which is described below. The package should generally only be used together with som kind of CSS purge tool e.g. PurgeCSS for removing all the CSS classes that is not used.

### Compiled mode

By using the compiled mode - you won't be able to change the CSS Custom Properties in the package which means that you are relying on Flexbox Grid's media-queries, spacing base etc. This mode is proberly fine for a lot of use-cases where there are no variables you wan't to change, but that is up to you.

**CDN example**

```html
<!-- Import grid -->
<script src="https://cdn.jsdelivr.net/npm/@novicell/flexbox-grid/dist/grid.css"></script>

**NPM example**

```bash
// install the package
npm i @novicell/flexbox-grid
```

```css
/* import the stylesheets in your css file */

/* import everything */
@import '@novicell/flexbox-grid/dist/grid.css';


### Uncompiled / source-code mode

  By importing the sourcode directly from the package, we are able to overwrite the CSS Custom Properties that is used in the helpers.

  **NB:
  ** in order to overwrite the responsive css helpers you will need to install the `postcss-custom-media` plugin in your project since media-queries with css custom properties. if you don't want to output calc and CSS Custom Properties in your project, you can use the `postcss-custom-properties` and `postcss-calc` to transform these. All CSS Custom Properties can be found on the [documentation site]( https://novicell-flexbox-grid.netlify.app)
**Example**
```bash
// install the package
npm i @novicell/flexbox-grid;Uncompiledsource-codemodeByimportingthesourcodedirectlyfromthepackage,weareabletooverwritetheCSSCustomPropertiesthatisusedinthehelpers.**NBUncompiledsource-codemodeByimportingthesourcodedirectlyfromthepackage,weareabletooverwritetheCSSCustomPropertiesthatisusedinthehelpers.**NBUncompiledsource-codemodeByimportingthesourcodedirectlyfromthepackage,weareabletooverwritetheCSSCustomPropertiesthatisusedinthehelpers.**NBUncompiledsource-codemodeByimportingthesourcodedirectlyfromthepackage,weareabletooverwritetheCSSCustomPropertiesthatisusedinthehelpers.**NBUncompiledsource-codemodeByimportingthesourcodedirectlyfromthepackage,weareabletooverwritetheCSSCustomPropertiesthatisusedinthehelpers.**NBUncompiledsource-codemodeByimportingthesourcodedirectlyfromthepackage,weareabletooverwritetheCSSCustomPropertiesthatisusedinthehelpers.**NBUncompiledsource-codemodeByimportingthesourcodedirectlyfromthepackage,weareabletooverwritetheCSSCustomPropertiesthatisusedinthehelpers.**NBUncompiledsource-codemodeByimportingthesourcodedirectlyfromthepackage,weareabletooverwritetheCSSCustomPropertiesthatisusedinthehelpers.**NBUncompiledsource-codemodeByimportingthesourcodedirectlyfromthepackage,weareabletooverwritetheCSSCustomPropertiesthatisusedinthehelpers.**NBUncompiledsource-codemodeByimportingthesourcodedirectlyfromthepackage,weareabletooverwritetheCSSCustomPropertiesthatisusedinthehelpers.**NBUncompiledsource-codemodeByimportingthesourcodedirectlyfromthepackage,weareabletooverwritetheCSSCustomPropertiesthatisusedinthehelpers.**NBUncompiledsource-codemodeByimportingthesourcodedirectlyfromthepackage,weareabletooverwritetheCSSCustomPropertiesthatisusedinthehelpers.**NBUncompiledsource-codemodeByimportingthesourcodedirectlyfromthepackage,weareabletooverwritetheCSSCustomPropertiesthatisusedinthehelpers.**NB
```

```css
/* Overwriting custom properties  */
body {
  --flexbox-grid-container-width: 970px; /* default is 1200px */
}

/* Overwriting custom media-queries  */
@custom-media --flexbox-grid-viewport-ms-min (min-width: 676px);  /* default is 576px */

/* import the stylesheets in your css file */

/* import everything */
@import '../../node_modules/@novicell/flexbox-grid/dist/src/grid.css';

```

## Documentation

https://novicell-flexbox-grid.netlify.app

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

The Novicell Flexbox Grid is licensed under the MIT license. (http://opensource.org/licenses/MIT)