import { storiesOf } from '@storybook/vue'
import NcCta from '../src/nc-cta.vue'

// import '@novicell/styles-cta'


storiesOf('NcCta', module)
  .add('Default', () => ({
    components: { NcCta },
    template:
    `
    <nc-cta />
    `,

  }))
