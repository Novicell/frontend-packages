import { defineConfig } from 'vite';
import { postcssArrayConfig } from '../../index.js';

export default defineConfig(() => { 
  return {
    css: {
      postcss: {
        plugins:[
          ...postcssArrayConfig({
            'postcss-preset-env': {
              importFrom: ['assets/_mediaqueries.css', 'assets/_variables.css'],
            }
          }) 
        ]
      }
    }
  }
});
