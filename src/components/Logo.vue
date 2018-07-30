<template>
  <div class="logo">
    <img class="logo__inner" v-if="!white" src="//cdn.grisoso.com/airwallex/logo.svg" alt="BROCCOLI" />
    <img class="logo__inner" v-else src="//cdn.grisoso.com/airwallex/logo-white.svg" alt="BROCCOLI" />
  </div>
</template>

<script>
export default {
  name: 'br-logo',

  props: {
    white: Boolean
  }
}
</script>
