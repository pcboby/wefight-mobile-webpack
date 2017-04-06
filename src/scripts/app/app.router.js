import Vue from 'vue'
import Router from 'vue-router'
// Dashboard
import Dashboard from '@/views/Dashboard/index.vue'
// 桥页：宣传页
import Bridge from '@/views/Bridge/index.vue'
// 群组
import Group from '@/views/Group/index.vue'
// 项目
import Project from '@/views/Project/index.vue'
// 报名注册
import Signup from '@/views/Signup/index.vue'

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
  }, {
    path: '/Group.html',
    name: 'Group',
    component: Group
  }, {
    path: '/Project.html',
    name: 'Project',
    component: Project
  }, {
    path: '/Signup.html',
    name: 'Signup',
    component: Signup
  }]
})
