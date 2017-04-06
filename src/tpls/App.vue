<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="pages"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left'
    }
  }
}
</script>
<style>
</style>
