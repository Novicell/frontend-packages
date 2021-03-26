import { storiesOf } from '@storybook/vue'
import NcSlideshow from '../src/nc-slideshow.vue'

import '@novicell/styles-slideshow'
import './demo-styles.css'


storiesOf('NcSlideshow', module)
  .add('Default', () => ({
    components: { NcSlideshow },
    template:
    `
    <div>
      <nc-slideshow>
        <img class="item img" src="https://source.unsplash.com/random/1920x1080" alt="random splash">
        <img class="item img" src="https://source.unsplash.com/random/800x600" alt="random splash">
        <img class="item img" src="https://source.unsplash.com/random/1440x900" alt="random splash"></img>
        <div class="item funky"><h1>Arbitrary content</h1></div>
      </nc-slideshow>
      <h3>There is a bug with storybook that renders generated elements twice, this is not a problem with the component</h3>
    </div>
    `
  }))


