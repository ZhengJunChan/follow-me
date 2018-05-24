<!-- [home_page]   @Author: 郑君婵   @DateTime: 2017-09-25 -->
<template>
  <div class="left_nav">
  </div>
</template>

<script type="text/javascript">
import { RouterUtil } from '@/utils'
import { relationInfo } from '@/data'
// import LoginApi from './api.js'

export default {
  data () {
    return {
      relationInfo,
      account: '',
      password: '',
      errorTip: ''
    }
  },
  methods: {
    login () {
      this.errorTip = ''

      if (!this.account) {
        this.errorTip = '账号不能为空'
        return
      }

      if (!this.password) {
        this.errorTip = '密码不能为空'
        return
      }

      RouterUtil.go('/', this.$router)

      // let params = {
      //   username: this.account,
      //   password: this.password
      // }

      // LoginApi.login(params).then(res => {
      //   RouterUtil.go('/', this.$router)
      // }).catch(err => {
      //   console.log(err)
      // })
    }
  }
}
</script>

<style lang="less" scoped>
@import './main.less';
</style>
