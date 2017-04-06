// ==================================================================
// 构建基础框架
// ==================================================================
import Vue from 'vue'
import router from './app.router.js'
import ui from './app.ui.js'
// ==================================================================
// 加载项目页面及组件
// ==================================================================
import App from '@/tpls/App.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ui,
  template: '<App/>',
  components: { App }
})
