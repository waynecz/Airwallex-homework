<template>
  <div class="BROCCOLI">
    <div class="landing">
      <div class="landing__header">
        <br-logo/>
      </div>

      <div class="landing__body">
        <h1 class="landing__slogan">
          A better way to enjoy <br/> every day
          <small class="landing__tip">Be the first to know when we launch</small>
        </h1>
        <br-button>
          <div class="slot-icon star" slot="slot-icon"/>
          Request an invite
        </br-button>
      </div>

      <div class="landing__footer">

      </div>
    </div>
    

    <div class="request" v-if="showRequestForm">
      <br-dialog title="Request an invite">

      </br-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'landing',

  data() {
    return {
      showRequestForm: false
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import './styles/broccoli.scss';
</style>

