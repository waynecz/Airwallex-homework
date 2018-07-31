import Vue from 'vue'
import Landing from './Landing.vue'
import APIs from '@/api'
import { userInfo } from 'os';

Vue.config.productionTip = false

// Register components here
const componentsContext = require.context('@/components', true, /\.vue$/)
componentsContext.keys().forEach(path => {
  const component = componentsContext(path).default
  Vue.component(component.name, component)
})

Vue.use({
  install(Vue) {
    Vue.prototype.$api = APIs
  }
})

window.loadComplete = () => {
  new Vue({
    render: h => h(Landing)
  }).$mount('#app')
}

