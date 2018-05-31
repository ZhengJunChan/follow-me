<!-- [box]   @Author: 郑君婵   @DateTime: 2018-05-28 -->
<template>
  <div class="box">
    <div class="title">
      <span v-text="title"></span>
    </div>
    <slot></slot>
  </div>
</template>

<script type="text/javascript">

export default {
  props: {
    title: String
  }
}
</script>

<style lang="less" scoped>
@import './main.less';
</style>
