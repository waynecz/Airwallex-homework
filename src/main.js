import Vue from 'vue'
import Landing from './Landing.vue'

Vue.config.productionTip = false

// Register components here
const componentsContext = require.context('@/components', true, /\.vue$/)
componentsContext.keys().forEach(path => {
  const component = componentsContext(path).default
  Vue.component(component.name, component)
})

new Vue({
  render: h => h(Landing)
}).$mount('#app')
