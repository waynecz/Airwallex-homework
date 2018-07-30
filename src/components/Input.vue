<template>
  <div class="input">
    <br-icon :name="icon || 'heart'"/>
    <input type="text" class="input__inner" @change="handleChange" />
    
    <br-icon v-if="validateStat !== -1" class="input__stat" :name="validateStatIcon"/>
  </div>
</template>

<script>
export default {
  name: 'br-input',

  props: {
    value: String,
    icon: String,

    loading: Boolean,
    white: Boolean
  },

  data() {
    return {
      validateStat: -1,
      statusIconsMap: ['check', 'error']
    }
  },

  computed: {
    validateStatIcon() {
      const { statusIconsMap, validateStat } = this

      return statusIconsMap[validdateStat]
    }
  },

  methods: {
    handleChange(event) {
      const value = event.target.value
    }
  }
}
</script>
