<!-- [editor_component]   @Author: 郑君婵   @DateTime: 2017-09-25 -->
<template>
  <div class="editor_component">
    <div></div>
    <div class="input" contentEditable="true" :class="{limit: !!maxlength}">
    	<span class="limit_num" v-text="`${inputVal.length}/${maxlength}`"></span>
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  props: {
    value: [String, Number],
    maxlength: Number,
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    inputVal: {
      get () {
        return this.value || ''
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import './main.less';
</style>
