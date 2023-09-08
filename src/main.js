import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import App from './App.vue'
import router from './router'

import './styles/index.scss'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(PiniaVuePlugin)
Vue.use(ElementUI)

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App),
}).$mount('#app')
