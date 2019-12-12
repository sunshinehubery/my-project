<template>
  <div class="count_down">
      <img class="count_down_img" v-show="countDown == 3" src="@/assets/3@2x.png"/>
      <img class="count_down_img" v-show="countDown == 2" src="@/assets/2@2x.png"/>
      <img class="count_down_img" v-show="countDown == 1" src="@/assets/1@2x.png"/>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  props:["countDown"]
}
</script>
<style lang="scss" scope>
    .count_down{
    width: 750px;
    height: 969px;
    background-image: url(../assets/light.png);
    z-index: 11;
    position: absolute;
    top: 160px;
  }
  .count_down_img{
    position: relative;
    top: 350px;
    left: 300px;
  }
</style>