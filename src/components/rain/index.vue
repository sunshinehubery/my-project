<template>
  <div class="rain-wrapper">
    <div ref="rainBox" id="rainBox" class="rainBox">
      <rain-point
        v-for="(item, idx) in rains"
        :key="`rain-point-${idx}`"
        :ref="`rain-point-${idx}`"
        @rainPoinclick="rainPoinclick"
      ></rain-point>
    </div>
  </div>
</template>

<script>

import rainPoint from "./tpl.vue";
import countdown from "./countdown";

export default {
  name: "rain",
  props: {
    density: {
      // 雨点创建速度
      type: Number,
      default: 500
    },
    delay: {
      // 雨点时长
      type: Number,
      default: 3
    },
    time: {
      // 动画时长(秒)
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      count: 0, // 点击统计
      rains: [], // 组件列表
      rainsCount: 0, // 组件下标
      createTimer: null, // 创建雨点计时器
      flag: true, // 是否结束
    };
  },
  components: {
    rainPoint
  },
  methods: {

    // 结束后回调
    timeoutCallback() {
      this.$emit('timeoutCallback', this.count)
    },

    // 点击雨点
    rainPoinclick() {
      if(!this.flag) return;
      this.count += 1;
      // console.log(this.count)
    },

    // 生成随机起始与落点坐标
    grid() {
      let [startX, startY, endX, endY] = [0,0,0,0]
      let rects = document.documentElement.getBoundingClientRect()
      startX = Math.random() * (200)
      startY = -20
      endX = Math.random() * (rects.width/2) + rects.width/2
      endY = rects.height * 1.5

      return {
        startX,
        startY,
        endX,
        endY
      }
    },

    // 随机速度曲线值
    newCubicBezier() {
      let arr = ['0,0,1,1.5', '.04,.2,.93,.49', '.99,.36,.54,.46',] // 快 中 慢
      // let idx = parseInt(Math.random() * 10) > 2 ? 0 : 1
      let idx = parseInt(Math.random() * 3)
      return arr[0]
    },

    // 创建雨点
    create(rainscount) {

      // 生成Dom
      this.rains.push(`rain-point-${rainscount}`)

      // 生成坐标
      let rects = this.grid();

      // 渲染完成后执行
      this.$nextTick(function() {
        // Dom节点
        let el = this.$refs[`rain-point-${rainscount}`][0];

        let initStyleText = {
          'transform': `translate(${rects.startX}px, ${rects.startY}px)`
        }
        let actionStyleText = {
          'transition': `transform ${this.delay}s cubic-bezier(${ this.newCubicBezier() })`,
          'transform': `translate(${rects.endX}px, ${rects.endY}px)`
        }

        // 设置初始坐标
        el.setStyle(initStyleText);
        // 设置结束坐标
        setTimeout(() => {
          el.setStyle(actionStyleText)
        }, 50)
        // 动画结束
        el.$el.addEventListener('transitionend', el.destory, false);
      })
    },

    // 执行
    start() {
      this.clear()
      // 开启雨点点击
      this.flag = true
      // 重置点击数
      this.count = 0
      // 清除动画定时器
      countdown.clearAssignTimer('rain')
      // 动画定时器
      countdown.creatTimer({
        remainTime: parseInt(this.time) * 1000,
        label: 'rain',
        timeoutFn: () => {
          this.clear()
          this.timeoutCallback()
        }
      })
      // 创建节
      for(let i = 0;i < 60;i++){
        setTimeout(this.timers(i),100)
      }
    },
    timers(i){
      setTimeout(() => {
        this.create(this.rainsCount);
        this.rainsCount += 1;
      },Math.random()*1000*i + 200 )
    },

    // 停止
    stop() {
      this.flag = false
      clearInterval(this.createTimer)
    },

    // 清空
    clear() {
      this.stop()
      countdown.clearAssignTimer('rain')
      this.rains = []
      this.rainsCount = 0
    }
  },
  mounted() {
    // window.start = this.start;
    // window.stop = this.stop;
    // window.clear = this.clear;
    // this.start()
  }
};
</script>

<style>
.rain-wrapper {
  width: 100%;
  height: 1334px;
  overflow: hidden;
  position: relative;
  z-index: 12
}
.rainBox {
  width: 100%;
}
</style>
