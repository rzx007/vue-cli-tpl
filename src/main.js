import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@babel/polyfill'
import './plugins/element.js'
// import './element-variables.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
