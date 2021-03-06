// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import 'animate.css'

Vue.config.productionTip = false //关闭生产模式下给出的提示

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
