import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import TweenMax from 'greensock'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueScrollTo)

new Vue({
  render: h => h(App)
}).$mount('#app')
