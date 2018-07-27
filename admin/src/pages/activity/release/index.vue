<!-- [activity_page]   @Author: 郑君婵   @DateTime: 2017-09-25 -->
<template>
  <div class="release_page">
    <div class="content">
      <input-box class="item" title="活动名称">
        <input-label v-model.trim="name" placeholder="取一个响亮而不失风趣的活动名称" :maxlength="45" />
      </input-box>

      <input-box class="item" title="活动价格">
        <div class="price_label">
          <span>原价: </span>
          <input-label type="number" class="price_input" v-model.number="price.original" />
          <span>元</span>
        </div>
        <div class="price_label">
          <span>促销价: </span>
          <input-label type="number" class="price_input" v-model.number="price.promotion" />
          <span>元</span>
        </div>
      </input-box>

      <input-box class="item" title="发团日期">
        <calendar />
      </input-box>

      <input-box class="item" title="目的地">
        <input-label v-model.trim="destination" placeholder="取一个响亮而不失风趣的活动名称" :maxlength="45" />
      </input-box>

      <input-box class="item" title="出发地点">
        <input-label v-model.trim="from" placeholder="取一个响亮而不失风趣的活动名称" :maxlength="45" />
      </input-box>

      <input-box class="item" title="图片诱惑">
        <!-- <input-label v-model.trim="imgList" placeholder="取一个响亮而不失风趣的活动名称" :maxlength="45" /> -->
      </input-box>

      <input-box class="item" title="费用说明">
        <editor v-model.trim="priceIntro" />
      </input-box>

      <input-box class="item" title="报名须知">
        <editor v-model.trim="notice" />
      </input-box>

      <input-box class="item" title="行程详情">
        <editor v-model.trim="desc" />
      </input-box>

      <div class="btn_label">
        <button>存草稿</button>
        <button @click="release">发布</button>
        <button>取消</button>
      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
import { Editor, InputBox, InputLabel, Calendar } from '@/components/form-group'

export default {
  components: {
    Editor,
    Calendar,
    InputBox,
    InputLabel
  },
  data () {
    return {
      // 活动名称
      name: '',
      // 活动价格
      price: {
        original: '',
        promotion: ''
      },
      // 目的地
      destination: '',
      // 出发地点
      from: '',
      // 展示图片
      imgList: [],
      // 费用说明
      priceIntro: '',
      // 报名须知
      notice: '',
      // 活动详情
      desc: ''
    }
  },
  methods: {
    release () {
    }
  }
}
</script>

<style lang="less" scoped>
@import './main.less';
</style>
