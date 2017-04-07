<template>
  <div class="navbar">
    <div class="navbar-layout"></div>
    <ul class="list-nav">
      <li>
        <a></a>
      </li>
      <li>
        <a>
          <i class="icon icon-note"></i>
          <span class="title">反馈</span>
        </a>
      </li>
      <li>
        <a>
          <i class="icon icon-question"></i>
          <span class="title">问答</span>
        </a>
      </li>
      <li>
        <a>
          <i class="icon icon-speech"></i>
          <span class="title">圈子</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'navbar',
  data () {
    return [{
      title: '反馈',
      iconCls:'icon icon-note',
      url: ''
    }, {
      title: '问答',
      iconCls:'icon icon-question',
      url: ''
    }, {
      title: '圈子',
      iconCls:'icon icon-speech',
      url: ''
    }]
  }
}
</script>
<style></style>
