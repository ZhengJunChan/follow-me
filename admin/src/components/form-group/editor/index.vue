<!-- [editor_component]   @Author: 郑君婵   @DateTime: 2017-09-25 -->
<template>
  <div class="editor_component">
    <textarea class="editor_plug" :id="id" :value="inputVal"></textarea>
  </div>
</template>

<script type="text/javascript">
import tinymce from 'tinymce/tinymce'
import DefaultConfig from './default-config.js'

export default {
  data() {
    return {
      id: 'editor-' + new Date().getMilliseconds()
    }
  },
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
  },
  mounted () {
    const setting = {
      selector: '#' + this.id,
      setup: this.setup
    }
    Object.assign(setting, DefaultConfig, this.options)
    tinymce.init(setting)
  },
  methods: {
    setup (editor) {
      editor.on('init', () => {
        editor.setContent(this.inputVal)
      })

      editor.on('input change undo redo', () => {
        this.inputVal = editor.getContent()
      })
    }
  },
  beforeDestroy () {
    tinymce.get(this.id).destroy();
  }
}
</script>

<style lang="less">
@import './main.less';
</style>
