<template>
  <div class="logo">
    <transition name="fade" mode="out-in">
      <img class="logo__inner" key="1" v-if="!white" src="//cdn.grisoso.com/airwallex/logo.svg" alt="BROCCOLI" />
      <img class="logo__inner" key="2" v-else src="//cdn.grisoso.com/airwallex/logo-white.svg" alt="BROCCOLI" />  
    </transition>
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
