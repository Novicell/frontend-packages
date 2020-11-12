<template>
  <div>
    {{ hello }}
    <div class="lazyload">yo!</div>
  </div>
</template>

<script lang="ts">
export default {
  data: function () {
    return {
      hello: "hello makker",
    };
  },
};
</script>

<style scoped>
.lazyload {
  flex-shrink: 0;
  height: auto;
  max-height: 100%;
  transition: opacity 0.2s ease-in;
}

.lazyload:not([src]) {
  visibility: hidden;
  opacity: 0;
}

.lazyloaded {
  opacity: 1;
}

.lazyload-bg {
  width: 0;
  height: 0;
  visibility: hidden;
  opacity: 0;
}
</style>
