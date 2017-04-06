<template>
  <div>
    <mu-appbar>
      <mu-icon-button slot="left" onclick="history.go(-1)">
        <i class="fa fa-chevron-left"></i>
      </mu-icon-button>
    </mu-appbar>
    Bridge
  </div>
</template>
<script>
export default {
  name: 'Bridge',
  data () {
    return {
      msg: 'Welcome to wefight-mobile-webpack App'
    }
  }
}
</script>
<style scoped>
</style>
