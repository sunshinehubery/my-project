<template>
  <div class="page">
    <v-nav></v-nav>
    <v-redbag v-bind:redbagCount="redbagCount" @open="openRedbag"></v-redbag>
    <v-countDown v-show="isShowCountDown" v-bind:countDown="countDown"></v-countDown>
    <v-rain v-show="isShowRain" ref="showRain"></v-rain>
    <v-bg v-show="isShowBg"></v-bg>
    <v-box v-bind:showStatus="showStatus" v-show="isShowBox" @closeBox="closeBox"></v-box>
  </div>
</template>

<script>
import Nav from '@/components/nav.vue';
import Redbag from '@/components/redbag.vue';
import CountDown from '@/components/countDown.vue';
import Rain from '@/components/renbagRain.vue';
import BG from '@/base/bg.vue';
import Box from '@/base/box.vue';
export default {
  name: 'page',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isShowBg: false,
      isShowCountDown: false,
      isShowBox: false,
      isShowRain: false,
      redbagCount: 1,
      countDown: 3,
      showStatus: 1,
    }
  },
  components: {
    'v-nav':Nav,
    'v-redbag':Redbag,
    'v-bg':BG,
    'v-countDown':CountDown,
    'v-rain':Rain,
    'v-box':Box,
  },
  methods: {
    //表示禁止默认行为
    bodyScroll($event){
      event.preventDefault();
    },
    //禁止页面滑动
    stop(){
      var mo=this.bodyScroll();
      document.body.style.overflow='hidden';
      document.addEventListener("touchmove",mo,false);//禁止页面滑动
    },
    //允许页面滑动
    move(){
      var mo=this.bodyScroll();
      document.body.style.overflow='';//出现滚动条
      document.removeEventListener("touchmove",mo,false);
    },
    // 打开红包
    openRedbag(){
      this.isShowBg = true
      if (this.redbagCount > 0) {
        this.stop();
        this.redbagCount = this.redbagCount - 1
        this.isShowCountDown = true
        this.timer()
      }else{
        this.isShowBox = true;
        this.showStatus = 0;
      }
    },
    // 定时任务,开启抢红包倒计时
    timer(){
      const countDownTimer = setInterval(() => {
        if(this.countDown > 1){
          this.countDown = this.countDown -1
        } else {
          this.isShowCountDown = false
          this.isShowRain = true
          this.$refs.showRain.init()
          clearInterval(countDownTimer)
        }
      }, 1000);
    },
    closeBox(){
      this.isShowBg = false
      this.isShowBox = false;
    }
  },
}
</script>

<style lang="scss" scope>
  .page{
    width: 750px;
    height: 1000px;
    background-color: #fff;
  }
</style>
