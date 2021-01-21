<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
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
      'n-link',
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

// Small helper for detection of external links
function isExternal(url) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' // protocol
    + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' // domain name
    + '((\\d{1,3}\\.){3}\\d{1,3}))' // OR ip (v4) address
    + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' // port and path
    + '(\\?[;&a-z\\d%_.~+=-]*)?' // query string
      + '(\\#[-a-z\\d_]*)?$',
    'i',
  ); // fragment locator
  return pattern.test(url);
}
</script>

<style scoped>
* {
  color: inherit;
  text-decoration: none;
}
</style>
