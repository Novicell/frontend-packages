import { defineNuxtConfig } from 'nuxt'
import postcssConfig from '../../index.js';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          ...postcssConfig({
            'postcss-preset-env': {
              importFrom: ['assets/_mediaqueries.css', 'assets/_variables.css'],
            }
          })
        }
      }
    }
  },
  css: ['~/assets/main.css'],
})
