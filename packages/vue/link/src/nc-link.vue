<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '_self',
    }
  },

  render(h) {
    if (isExternal(this.to)) {
      return h(
        'a',
        {
          attrs: {
            href: this.to,
            target: this.target,
            rel: 'noopener noreferrer',
            'aria-label': this.name,
            title: this.title,
          },
        },
        this.$slots.default,
      );
    }
    return h(
      this.$nuxt ? 'n-link' : 'router-link',
      {
        attrs: {
          'aria-label': this.name,
          title: this.title,
        },
        props: {
          target: this.target,
          to: this.to,
        },
      },
      this.$slots.default,
    );
  }
};

function isExternal(url) {
  return url.match(/^https?:\/\//i)
}
</script>

<style scoped>
* {
  color: inherit;
  text-decoration: none;
}
</style>
