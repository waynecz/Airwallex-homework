<template>
  <div 
    :class="{ 
      'is-disabled': disable,
      'is-full': full,
      'is-loading': loading
    }" 
    class="button"
    @click="handleClick"
  >
  
    <br-icon v-if="icon && !loading" :name="icon" key="icon"/>
    <slot v-if="!icon && !loading" name="slot-icon"></slot>
    <div v-if="loading" key="loading" class="button__loading"></div>
    
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'br-button',

  props: {
    icon: String,

    full: Boolean,
    disable: Boolean,
    loading: Boolean
  },

  methods: {
    handleClick(e) {
      if (this.disable || this.loading) return
      this.$emit('click', e)
    }
  }
}
</script>
