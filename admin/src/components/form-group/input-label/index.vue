<!-- [input_label]   @Author: 郑君婵   @DateTime: 2017-09-25 -->
<template>
  <div class="input_label" :class="{limit: !!maxlength}">
    <input :type="type" v-model="inputVal" :placeholder="placeholder" :maxlength="maxlength || false">
    <span class="limit_num vertical_center" v-text="`${inputVal.length}/${maxlength}`"></span>
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
