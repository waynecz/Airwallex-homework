<template>
  <div :class="{ 'disabled': disable }" class="button" @click="handleClick">
    <br-icon v-if="icon" :name="icon"/>
    <slot name="slot-icon"></slot>
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
      if (this.disable) return
      this.$emit('click', e)
    }
  }
}
</script>
