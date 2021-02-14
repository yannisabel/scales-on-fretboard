import Vue from 'vue'
import App from './App.vue'
import store from './stores/store'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
