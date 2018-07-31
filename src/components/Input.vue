<template>
  <div 
    class="input"
    :class="[`is-${statusMap[validateStat]}`]"
  >
    <br-icon class="input__icon" :name="icon || 'heart'"/>
    <input 
      @blur="validate"
      type="text" 
      v-bind="$attrs" 
      class="input__inner" 
      :value="value" 
      @input="e => $emit('input', e.target.value)" 
    />

    <div class="input__indicator"/>
    
    <transition name="zoom-in">
      <br-icon v-if="validateStat !== -1" class="input__stat" :name="validateStatIcon"/>
    </transition>

    <strong v-if="errTip" class="input__tip">{{errTip}}</strong>
  </div>
</template>

<script>
export default {
  name: 'br-input',

  props: {
    value: String,
    icon: String,

    loading: Boolean,
    white: Boolean,
    rule: {
      type: Object,
      default: () => {
        return {
          validator: null,
          message: ''
        }
      }
    }
  },

  data() {
    return {
      errTip: '',

      /* @explain
       * validateStat: { -1: none, 0: success, 1: error } 
       */
      validateStat: -1,
      statusMap: ['success', 'error']
    }
  },

  computed: {
    validateStatIcon() {
      const { statusMap, validateStat } = this

      return statusMap[validateStat]
    }
  },

  methods: {
    validate() {
      const { validator, message } = this.rule
      if (!validator) return true

      const valid = validator(this.value)
      if (!valid) {
        this.errTip = message
        this.validateStat = 1
      } else {
        this.errTip = ''
        this.validateStat = 0
      }

      return valid
    },

    resetValidstat() {
      this.errTip = ''
      this.validateStat = -1
    }
  }
}
</script>
