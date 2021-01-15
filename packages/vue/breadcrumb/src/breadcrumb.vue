<template>
  <h1 class="hello">Hello</h1>
</template>

<script lang="ts">
import { Prop, Vue } from 'nuxt-property-decorator';

export default class NcBreadcrumb extends Vue {
  @Prop({
    default: [],
  })
  links!: any;

  @Prop({
    default: '',
  })
  modifier!: string;
}
</script>

<style scoped>
.hello {
  color: red;
}
</style>
