<template>
  <div class="logo">
    
  </div>
</template>

<script>
export default {
  name: 'br-logo',

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
