# Stylesheet for Novicell Breadcrumb
This package contains the compiled CSS and raw postCSS for the `@novicell/breadcrumb` component.

## Installation
When using the `@novicell/breadcrumb` component, the compiled CSS comes pre-installed. If you need to use these styles in another context, they can be installed with the command: `npm i @novicell/breadcrumb-styles`, ~~or by including the following script tag: `<script src="example"></script>`~~.

### Vue
To include the stylesheet in a Vue SFC, you can import the file in your script as such: `import '@novicell/breadcrumb-styles'`, or in your styles as such: `import '../node_modules/@novicell/breadcrumb-styles'`.

If you need to overwrite some styling, you will have to include the raw postCSS in your script with: `import '../node_modules/@novicell/breadcrumb-styles/dist/src'`.
### React

## Commands
npm run build // run clean build without PostCSS transformation
npm run compile // run build with PostCSS transformation
npm run generate // runs both build and compile
npm run lint // run stylelint
npm run lint:fix // run stylelint and fix fixable errors/warnings

## Contribution
Looking to contribute something? Here's how you can help. Please take a moment to review our [contribution guidelines](https://github.com/Novicell/novicell-frontend/wiki/Contribution-guidelines) in order to make the contribution process easy and effective for everyone involved.

## License
The Novicell CSS Utils is licensed under the MIT license. (http://opensource.org/licenses/MIT)
