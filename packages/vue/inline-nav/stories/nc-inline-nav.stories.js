import { storiesOf } from '@storybook/vue'
import NcInlineNav from '../src/nc-inline-nav.vue'

import '@novicell/styles-inline-nav'
import './demo-styles.css'


storiesOf('NcInlineNav', module)
  .add('Carousel', () => ({
    components: { NcInlineNav },
    template:
    `
      <nc-inline-nav class="inline-nav">
        <div class="item funky"><h1>This is a navigation card</h1></div>
        <div class="item funky"><h1>This is a navigation card</h1></div>
        <div class="item funky"><h1>This is a navigation card</h1></div>
        <div class="item funky"><h1>This is a navigation card</h1></div>
        <div class="item funky"><h1>This is a navigation card</h1></div>

        <template v-slot:button-prev>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 511 407"
            style="enable-background:new 0 0 511 407;"
            xml:space="preserve"
          >
            <path
              fill=#626262
              d="M276.5,9.5c-6.3,6.3-9.5,14-9.5,23s3,16.5,9,22.5l116,116H32c-9.3,0-17,3-23,9s-9,13.5-9,22.5s3,16.7,9,23
	s13.7,9.5,23,9.5h362L276,352c-2.7,3.3-4.8,7-6.5,11s-2.5,8-2.5,12s0.8,8,2.5,12s4,7.5,7,10.5s6.5,5.3,10.5,7s8,2.5,12,2.5
	c8.7,0,16.3-3,23-9l189-194L322,10c-6.7-6.7-14.3-10-23-10S282.8,3.2,276.5,9.5z"
            />
          </svg>
        </template>
        <template v-slot:button-next>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 511 407"
            style="enable-background:new 0 0 511 407;"
            xml:space="preserve"
          >
            <path
              fill=#626262
              d="M276.5,9.5c-6.3,6.3-9.5,14-9.5,23s3,16.5,9,22.5l116,116H32c-9.3,0-17,3-23,9s-9,13.5-9,22.5s3,16.7,9,23
	s13.7,9.5,23,9.5h362L276,352c-2.7,3.3-4.8,7-6.5,11s-2.5,8-2.5,12s0.8,8,2.5,12s4,7.5,7,10.5s6.5,5.3,10.5,7s8,2.5,12,2.5
	c8.7,0,16.3-3,23-9l189-194L322,10c-6.7-6.7-14.3-10-23-10S282.8,3.2,276.5,9.5z"
            />
          </svg>
        </template>
      </nc-inline-nav>
    `
  }))


storiesOf('NcInlineNav', module)
  .add('Row', () => ({
    components: { NcInlineNav },
    template:
    `
      <nc-inline-nav class="inline-nav" type="not carousel">
        <div class="item funky"><h1>This is a navigation card</h1></div>
        <div class="item funky"><h1>This is a navigation card</h1></div>
        <div class="item funky"><h1>This is a navigation card</h1></div>
      </nc-inline-nav>
    `
  }))


