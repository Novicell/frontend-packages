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
</style>
