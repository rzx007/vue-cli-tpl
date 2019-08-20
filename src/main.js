import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './permission' // permission control
import '@babel/polyfill'
import './plugins/element.js'
// import './element-variables.scss'
import plugin from '@/utils/install'//global-components
import * as filters from '@/utils/filters'// global-filters

Vue.config.productionTip = false
Vue.use(plugin)
Object.keys(filters).forEach(key=>{
  Vue.filter(key,filters[key])
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
