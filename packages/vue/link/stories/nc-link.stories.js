import { storiesOf } from '@storybook/vue'
import NcLink from '../src/nc-link.vue'

storiesOf('NcLink', module)
  .add('External link', () => ({
    components: { NcLink },
    template:
    `
    <nc-link to="https://google.com" name="Google link" target="_blank" title="google.com">https://google.com</nc-link>
    `
  }))

  .add('Internal link', () => ({
    components: { NcLink },
    template:
    `
    <div>
      <nc-link to="/subpage" title="subpage">/subpage</nc-link>
      <p>*Vue-router not added yet, inspect to see <code>router-link</code></p>
      <p>**Can also render as NLink in Nuxt with the same functionality as <code>router-link</code>. This storybook, however, is a Vue-environment</p>
    </div>
    `
  }))

  .add('Arbitrary content link', () => ({
    components: { NcLink },
    template:
    `
    <nc-link to="https://www.fillmurray.com/300/200" title="Bill Murray"><img src="https://www.fillmurray.com/300/200" alt="Bill Murray" /></nc-link>
    `,
  }))
