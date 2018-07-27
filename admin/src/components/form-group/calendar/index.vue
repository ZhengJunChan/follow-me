<!-- [calendar_component]   @Author: 郑君婵   @DateTime: 2017-09-25 -->
<template>
  <div class="calendar_component">
    <input class="input_label" type="text" @click="showCalendarAlert($event)" :placeholder="calendar.placeholder" v-model="calendar.display" readonly>

    <transition name="fade">
    <div class="calendar_alert" :style="{'left': `${calendar.left}px`, 'top': `${calendar.top}px`}" v-if="calendar.show">
      <calendar :zero="calendar.zero" :disabled="calendar.disabled" :lunar="calendar.lunar" :value="calendar.value" :multi="calendar.multi" @select="calendar.select"></calendar>
    </div>
    </transition>
  </div>
</template>

<script>
import calendar from './calendar.vue'

export default {
  components: {
    calendar
  },
  data() {
    return {
      calendar: {
        left: 0,
        top: 0,
        show: false,
        display: '',
        multi: true,
        value: [],
        zero: true,
        lunar: true,
        disabled: [],
        placeholder: '选择出发时间',
        select: value => {
          let displayValue = []
          value.forEach(v => {
            displayValue.push(v[0] + '/' + (v[1]) + '/' + v[2])
          })
          // console.log(displayValue)
          this.calendar.display = displayValue.join(',')
          // this.calendar.show=false
          this.calendar.value = value
        }
      }
    }
  },
  methods: {
    showCalendarAlert(event) {
      this.calendar.show = true
      this.calendar.top = event.target.offsetTop + 50
      this.calendar.left = event.target.offsetLeft + 19

      event.stopPropagation()

      window.setTimeout(() => {
        document.addEventListener('click', () => {
          this.calendar.show = false
          document.removeEventListener('click', () => {}, false)
        }, false)
      }, 1000)
    }
  }
}
</script>

<style lang="less">
@import './main.less';
</style>
 