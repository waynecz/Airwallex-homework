<template>
  <div class="dialog">
    
  </div>
</template>

<script>
export default {
  name: 'br-dialog',

  props: {
    white: Boolean
  },

  data() {
    return {}
  },

  mounted() {},

  methods: {
    handleScroll(e) {
      requestAnimationFrame(e => {
        this.calc()
      })
    }
  }
}
</script>
