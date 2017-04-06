import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/Dashboard/index.vue'
import Bridge from '@/views/Bridge/index.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/Dashboard.html',
    name: 'Dashboard',
    component: Dashboard
  }, {
    path: '/Bridge.html',
    name: 'Bridge',
    component: Bridge
  }]
})
