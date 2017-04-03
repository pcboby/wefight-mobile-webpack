import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/Dashboard/Dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  }]
})
