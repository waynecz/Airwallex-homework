<template>
  <i class="icon" :class="`ico-${name}`" />
</template>

<script>
export default {
  name: 'br-icon',

  props: {
    name: String
  }
}
</script>
