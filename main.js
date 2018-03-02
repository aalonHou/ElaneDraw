// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* 引用插件方法bootstrap */
import '../vendors/bootstrap/dist/css/bootstrap.min.css'

/* 引用font-awesome */
import '../vendors/font-awesome/css/font-awesome.min.css'

/* 引用animate */
import '../vendors/animate.css/animate.min.css'

import  '../vendors/mjolnic-bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css'


/* 引用自定义 */
import '../static/css/custom.min.css'
import '../vendors/bootstrap/dist/js/bootstrap.min.js'
import '../vendors/mjolnic-bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js'
import  '../static/js/smartresize.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
