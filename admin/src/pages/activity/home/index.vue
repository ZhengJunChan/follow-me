<!-- [activity_page]   @Author: 郑君婵   @DateTime: 2017-09-25 -->
<template>
  <div class="activity_page">
    <top-nav></top-nav>
  </div>
</template>

<script type="text/javascript">
import TopNav from './components/top-nav'

export default {
  components: {
    TopNav
  },
  data () {
    return {
      // relationInfo,
      // account: '',
      // password: '',
      // errorTip: ''
    }
  },
  methods: {
    login () {
    }
  }
}
</script>

<style lang="less" scoped>
@import './main.less';
</style>
