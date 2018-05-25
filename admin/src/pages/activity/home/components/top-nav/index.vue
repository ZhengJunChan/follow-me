<!-- [top_nav]   @Author: 郑君婵   @DateTime: 2017-09-25 -->
<template>
  <div class="top_nav">
    <ul class="nav_list clear_float">
      <li class="fl" :class="{selected: selected === release.key}" @click.stop="changeNav(release.key)">
        已上线 ({{release.count}})
      </li>
      <li class="fl" :class="{selected: selected === unrelease.key}" @click.stop="changeNav(unrelease.key)">
        未上线 ({{unrelease.count}})
      </li>
      <li class="fl" :class="{selected: selected === draft.key}" @click.stop="changeNav(draft.key)">
        草稿 ({{draft.count}})
      </li>
    </ul>
    <div class="search_label clear_float">
      <input type="text" v-model.trim="seachKey" @keyup.enter="search" :class="{no_tip: seachKey}">

      <i class="iconfont icon-add add_btn fr"></i>
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  data () {
    return {
      selected: 'release',
      // 已上线
      release: {
        key: 'release',
        count: 0
      },
      // 未上线
      unrelease: {
        key: 'unrelease',
        count: 0
      },
      // 草稿
      draft: {
        key: 'draft',
        count: 0
      },
      seachKey: ''
    }
  },
  methods: {
    changeNav (nav) {
      this.selected = nav
    },
    search () {
      alert(this.seachKey)
    }
  }
}
</script>

<style lang="less" scoped>
@import './main.less';
</style>
