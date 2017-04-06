<template>
  <div>
    <mu-appbar title="Dashboard" title-class="tc">
      <mu-icon-button slot="left">
        <i class="fa fa-reorder"></i>
      </mu-icon-button>
      <mu-icon-menu icon="more_vert" slot="right">
        <mu-menu-item title="菜单 1" />
        <mu-menu-item title="菜单 2" />
        <mu-menu-item title="菜单 3" />
        <mu-menu-item title="菜单 4" />
        <mu-menu-item title="菜单 5" />
      </mu-icon-menu>
    </mu-appbar>
    <div class="potal">
      <div class="potal-header">
        页面
      </div>
      <div class="potal-body">
        <ul class="list border">
          <li>
            <a class="list-item fa fa-chevron-right" href="#/Bridge.html">
              <i class="icon icon-layers c-02"></i>
              <span>宣传桥页</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      // links : [{
      //   title : '宣传桥页',
      //   url : '#/Bridge.html'
      // }, {
      //   title : '主页（单兵作战）',
      //   url : '#/main.html'
      // }, {
      //   title : '项目',
      //   url : '#/project.html'
      // }, {
      //   title : '报名',
      //   url : '#/signup.html'
      // }, {
      //   title : '群组',
      //   url : '#/group.html'
      // }]
    }
  }
}
// [{title : '宣传桥页', url : '#/Bridge.html' }, { title : '主页（单兵作战）', url : '#/main.html' }, { title: '项目', url : '#/project.html' }, { title: '报名', url : '#/signup.html' }, { title: '群组', url : '#/group.html' }]
</script>
<style scoped>
</style>
