<template>
<div>
  <nc-link to="https://google.com" name="Google link" target="_blank" title="google.com">Google</nc-link>
  <br>
  <nc-link to="http://google.com" name="Google link" title="google.com">Google</nc-link>
  <br>
  <nc-link to="google" name="Google subpage" target="_blank" title="/google.com">/google</nc-link>
  <br>
  <nc-link to="/google" title="/google subpage">/google</nc-link>
</div>
</template>

<script>
import NcLink from '../src/nc-link'

export default {
  components: {
    NcLink
  },
};
</script>
