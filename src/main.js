import Vue from 'vue'
import VueHead from 'vue-head'
import VueScrollTo from 'vue-scrollto'
import TweenMax from 'greensock'
import App from './App.vue'
import VueAnalytics from 'vue-analytics'

export const bus = new Vue();

Vue.config.productionTip = false
Vue.use(VueHead)
Vue.use(VueScrollTo)
Vue.use(VueAnalytics, {
    id: 'UA-59729316-2'
})

new Vue({
  render: h => h(App)
}).$mount('#app')
