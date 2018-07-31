<template>
  <div class="dialog" :class="{ 'is-full': full }" :style="{ top }">
    <div v-if="closeable" class="dialog__close" @click="e => $emit('close')">close</div>
    <h4 class="dialog__title">{{title}}</h4>
    <div class="dialog__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'br-dialog',

  props: {
    title: String,
    top: String,

    full: Boolean,
    closeable: Boolean
  }
}
</script>
