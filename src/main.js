// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.css'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.withCredentials = true //默认允许后台跨域操作，如在客户端存储cookie等需要权限的操作
Vue.prototype.$axios = axios //Vue实例添加axios方法

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
