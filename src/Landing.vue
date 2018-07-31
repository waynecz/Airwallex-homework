<template>
  <div class="landing">
    <div class="landing__header" :class="{ 'is-top': showRequestBackground }">
      <br-logo :white="showRequestBackground"/>
    </div>

    <div class="landing__body">
      <h1 class="landing__slogan">
        A better way to enjoy <br/> every day
        <small class="landing__tip">Be the first to know when we launch</small>
      </h1>
      <br-button @click="requestAnInvite">
        <div class="slot-icon star" :class="{ 'is-stop': showRequestBackground }" slot="slot-icon"/>
        Request an invite
      </br-button>
    </div>

    <div class="landing__footer">
      <div class="landing__auth">Made with <br-icon name="heart"/> in Shanghai</div>
      <div class="landing__copyright">@2018 Broccoli & Co. All rights reserved</div>
    </div>

    <!-- Request background -->
    <transition name="slide-up" @after-enter="e => showRequestForm = true">
      <div class="request" key="requestBackground" v-if="showRequestBackground" />
    </transition>

    <!-- Form dialog -->
    <transition name="slide-up--form">
      <br-dialog v-show="showRequestForm" key="form" title="Request an invite" full closeable @close="reset">
        <div class="request__form">
          <br-input ref="name" icon="name" :rule="rules.name" placeholder="Your full name" v-model="requestform.name" />
          <br-input ref="email" icon="email" :rule="rules.email" placeholder="Your Email" v-model="requestform.email" />
          <br-input ref="emailConfirm" icon="confirm" :rule="rules.emailConfirm" placeholder="Confirm Email" v-model="emailConfirm" />
        </div>
        <div class="request__action">
          <br-button icon="send" :loading="sending" full @click="sendRequest">Send</br-button>
          <div class="request__err" v-if="errorMsg">
            <br-icon name="sad"/>
            {{errorMsg}}
          </div>
        </div>
      </br-dialog>
    </transition>

    <!-- All done -->
    <transition name="slide-up--done">
      <br-dialog v-show="showSuccessNotification" key="done" title="All done">
        <div class="request__done">
          <p>You will be one of the first to experience</p>
          <p>Broccoli & Co. when we launch</p>
        </div>
        <div class="request__action no-tip">
          <br-button full @click="reset">OK</br-button>
        </div>
      </br-dialog>
    </transition>
  </div>
</template>

<script>
import { launchFullscreen } from '@/utils'
const emailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/

export default {
  name: 'landing',

  data() {
    const self = this
    
    const nameValidator = (value) => {
      let rst = true
      value = value.trim()
      if (value.length < 3) {
        rst = false
      }
      self.validteStatus.name = rst

      return rst
    }

    const emailValidator = (value) => {
      let rst = true
      if (!emailReg.test(value)) {
        rst = false
      }
      self.validteStatus.email = rst

      return rst
    }

    const emailConfirmValidator = (value) => {
      let rst = true
      if (!emailReg.test(value) || (value !== self.requestform.email)) {
        rst = false
      }
      self.validteStatus.emailConfirm = rst

      return rst
    }

    return {
      showRequestBackground: false,
      showRequestForm: false,
      showSuccessNotification: false,

      requestform: {
        name: '',
        email: ''
      },
      emailConfirm: '',

      rules: {
        name: { validator: nameValidator, message: 'Name should be at least 3 characters long' },
        email: { validator: emailValidator, message: 'It\'s not an valid email' },
        emailConfirm: { validator: emailConfirmValidator, message: 'Emails are inconsistent' }
      },
      validteStatus: {
        name: true,
        email: true,
        emailConfirm: true
      },

      errorMsg: '',

      sending: false
    }
  },

  mounted() {
    
  },

  methods: {
    requestAnInvite() {
      this.showRequestBackground = true
    },

    async sendRequest() {
      const { requestform, validate } = this

      const allValid = validate()

      if (allValid) {
        try {
          this.sending = true
          await this.$api.submitRequest(requestform)
          this.showRequestForm = false
          this.$nextTick(() => {
            this.showSuccessNotification = true
          })
        } catch (error) {
          this.errorMsg = error
        }
        this.sending = false
      }
    },

    validate() {
      const { validteStatus, $refs } = this
      const keys = Object.keys(validteStatus)
      // call inputs' validate methods
      keys.forEach(prop => $refs[prop].validate())
      
      if (keys.some(prop => !validteStatus[prop])) {
        return false
      }
      return true
    },

    reset() {
      this.showRequestBackground = false,
      this.showRequestForm = false,
      this.showSuccessNotification = false,

      this.requestform = {
        name: '',
        email: ''
      }

      this.emailConfirm = ''

      this.validteStatus = {
        name: true,
        email: true,
        emailConfirm: true
      }

      const { validteStatus, $refs } = this
      const keys = Object.keys(validteStatus)
      // reset validate statis
      keys.forEach(prop => $refs[prop].resetValidstat())
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import './styles/broccoli.scss';
</style>

