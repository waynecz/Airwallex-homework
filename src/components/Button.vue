<template>
  <div :class="{ 'disabled': disable }" class="button" @click="handleClick">
    <i v-if="icon" class="iconfont" :class="`ico-${icon}`"></i>
    <slot name="icon"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'br-button',

  props: {
    icon: String,
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
