<template>
    <div v-if="alias" :class="position ? `text-${position}` : null">
        <NcLink
            :to="url"
            class="button"
            :name="name"
            :title="name"
            :target="target"
        >
            <slot>{{ name }}</slot>

            <div v-if="$slots.icon" class="icon">
              <slot name="icon"></slot>
            </div>
        </NcLink>
    </div>
    <NcLink
        v-else
        :to="url"
        class="button"
        :name="name"
        :title="name"
        :target="target"
    >
        <slot>{{ name }}</slot>

        <div v-if="$slots.icon" class="icon">
          <slot name="icon"></slot>
        </div>
    </NcLink>
</template>

<script>
import NcLink from '@novicell/vue-link/dist/nc-link.vue'

export default {
    components: {
        NcLink,
    },
    props: {
        alias: {
            type: String,
            required: false,
        },
        position: {
            type: String,
            required: false,
        },
        url: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        target: {
            type: String,
            default: '_blank',
        },
    },
}
</script>

<style scoped>
.button {
  --button-background-color: var(--color-primary, #263ED3);
  --button-color: var(--color-white, white);
  --button-font-family: var(--heading-font-family, Roboto, sans-serif);
  --button-font-size: var(--base-font-size, 1rem);
  --button-font-weight: 500;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: var(--button-color);
  font-weight: var(--button-font-weight);
  font-size: var(--button-font-size);
  font-family: var(--button-font-family);
  text-decoration: none;
  background-color: var(--button-background-color);
  border: 1px solid transparent;
  border-radius: 50px;
  cursor: pointer;

  /* overwritten on larger screens */
  height: 40px;
  padding: 0 20px;
}

.button[disabled] {
  opacity: 0.6;
  pointer-events: none;
}

.button--ghost {
  color: var(--button-background-color);
  background-color: transparent;
  border: solid 1px var(--button-background-color);
}

.button--center {
  left: 50%;
  transform: translateX(-50%);
}

.button--right {
  left: 100%;
  transform: translateX(-100%);
}

.icon {
  display: none;
}

@media (min-width: 992px) {
  .button {
    height: 50px;
    padding: 0 60px;
  }

  .button:hover .icon,.button:focus .icon {
    transform: translate(100%, -50%);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 50%;
    left: 0;
    width: 16px;
    min-width: 16px;
    height: 16px;
    min-height: 16px;
    transform: translate(-100%, -50%);
    transition: transform 0.2s;
    fill: currentColor;
  }
}


</style>
