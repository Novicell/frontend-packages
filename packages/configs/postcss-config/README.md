# Novicell PostCSS config

![npm](https://img.shields.io/npm/v/@novicell/postcss-config)

This is an PostCSS 8 config for vite or Nuxt projects written with PostCSS.

## Included plugins

- [PostCSS Import](https://www.npmjs.com/package/postcss-import)
- [PostCSS Inline Media](https://www.npmjs.com/package/postcss-inline-media)
- [PostCSS Nested](https://www.npmjs.com/package/postcss-nested)
- [PostCSS Calc](https://www.npmjs.com/package/postcss-calc)
- [PostCSS Preset Env](https://www.npmjs.com/package/postcss-preset-env)
- [PostCSS Reporter](https://www.npmjs.com/package/postcss-reporter)
## How to install in a Nuxt 3 project
1.
    ```bash
    npm i @novicell/postcss-config
    ```
2. Add the following to `nuxt.config.ts`
   * Import the default config in top of `nuxt.config.ts`
    ```javascript
    import postcssConfig from '@novicell/postcss-config';
    ```
   * Add the config inside `defineNuxtConfig` section
    ```javascript
    postcss: {
      postcssOptions: {
        plugins: {
          ...postcssConfig({
            // Your overriding options
          })
        }
      }
    }
    ```

## How to install in a vite project
1.
    ```bash
    npm i postcss @novicell/postcss-config
    ```
2. Add the following to `vite.config.ts`
   * Import the array config in top of `vite.config.ts` since vite doesn't support [Object type plugin config]('https://github.com/vitejs/vite/issues/7808#issuecomment-1102713351').
    ```javascript
    import { postcssArrayConfig } from '@novicell/postcss-config';
    ```
   * Add the config inside `defineConfig` section
    ```javascript
    css: {
      postcss: {
        plugins:[
          ...postcssArrayConfig({
            // Your overriding options
          }) 
        ]
      }
    }
    ```
## Default plugins and options

These are the default plugins and options provided by `@novicell/postcss-config`
```javascript
{
  'postcss-import': {},
  'postcss-inline-media': {},
  'postcss-nested': {},
  'postcss-calc': {},
  'postcss-preset-env': {
    stage: 2,
    preserve: process.env.NODE_ENV !== 'production',
    importFrom: ['assets/css/_mediaqueries.css', 'assets/css/_variables.css'],
    features: {
      'color-mod-function': { unresolved: 'warn' },
      'custom-media-queries': {}
    },
    browsers: ['>= 5% in DK']
  },
  'postcss-reporter': {
    clearReportedMessages: true
  }
}
```

## Overriding options

It's possible to modify all the options of the plugins used in `postcssConfig`. Simply add the override as a keyed object with the postCSS plugin name like this...

```javascript
...postcssArrayConfig({
  'postcss-preset-env': {
    preserve: false,
    importFrom: ['assets/_mediaqueries.css', 'assets/_variables.css'],
  },
  'postcss-reporter': {
    clearReportedMessages: false
  }
}) 
```

## Contribution

Looking to contribute something? Here's how you can help. Please take a moment to review our [contribution guidelines](https://github.com/Novicell/novicell-frontend/wiki/Contribution-guidelines) in order to make the contribution process easy and effective for everyone involved.

## License

The Novicell CSS Utils is licensed under the MIT license. (http://opensource.org/licenses/MIT)
