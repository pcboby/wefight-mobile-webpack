<template>
  <div class="on-fix-header">
    <div class="header">
      <mu-appbar title="Dashboard" title-class="tc">
        <mu-icon-button slot="left">
          <i class="fa fa-reorder"></i>
        </mu-icon-button>
        <mu-icon-menu icon="more_vert" slot="right">
          <mu-menu-item title="设置" leftIcon="settings" />
          <mu-menu-item title="帮助" leftIcon="help_outline" />
          <mu-divider />
          <mu-menu-item title="退出" leftIcon="power_settings_new" />
        </mu-icon-menu>
      </mu-appbar>
    </div>
    <div class="wraper">
      <div class="potal">
        <div class="potal-header">
          页面
        </div>
        <div class="potal-body">
          <mu-list>
            <mu-list-item v-for="item in items" 
              :key="item.title"
              :title="item.title" 
              :href="item.url">
              <mu-icon slot="left" value="layers" class="c-02" />
              <!-- <div class="mu-item-left">
                <i class="icon icon-layers"></i>
              </div> -->
            </mu-list-item>
          </mu-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      items: [{
        title: '宣传桥页',
        url: '#/Bridge.html'
      }, {
        title: '报名',
        url: '#/Signup.html'
      }, {
        title: '主页（单兵作战）',
        url: '#/Main.html'
      }, {
        title: '项目',
        url: '#/Project.html'
      }, {
        title: '群组',
        url: '#/Group.html'
      }]

    }
  }
}
</script>
<style scoped>
</style>
