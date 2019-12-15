<template>
  <div class="count_downs">
      <img class="count_down img3" v-show="countDown == 3" src="@/assets/3@2x.png"/>
      <img class="count_down img2" v-show="countDown == 2" src="@/assets/2@2x.png"/>
      <img class="count_down img1" v-show="countDown == 1" src="@/assets/1@2x.png"/>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  props:[
    "countDown"    // 倒计时时间
  ],
}
</script>
<style lang="scss" scope>
    .count_downs{
    width: 750px;
    height: 969px;
    background-image: url(../assets/light.png);
    z-index: 11;
    position: absolute;
    top: 160px;
  }
  .count_down{
    position: relative;
    top: 350px;
    left: 300px;
  }
  .img3{
    width: 139px;
    height: 239px;
    animation: img3_test1 1s infinite;
  }
  @keyframes img3_test1 {
    from {
        width: 139px;
        height: 239px;
    }
    to {
        width: 160px;
        height: 275px;
    }
  }
  @keyframes img3_test2 {
    from {
        width: 160px;
        height: 275px;
    }
    to {
        width: 139px;
        height: 239px;
    }
  }
  .img2{
    width: 134px;
    height: 237px;
    animation: img2_test1 1s infinite;
  }
  @keyframes img2_test1 {
    from {
        width: 134px;
        height: 237px;
    }
    to {
        width: 164px;
        height: 290px;
    }
  }
  @keyframes img2_test2 {
    from {
        width: 164px;
        height: 290px;
    }
    to {
        width: 134px;
        height: 237px;
    }
  }
  .img1{
    width: 77px;
    height: 235px;
    animation: img1_test1 1s infinite;
  }
  @keyframes img1_test1 {
    from {
        width: 77px;
        height: 235px;
    }
    to {
        width: 107px;
        height: 326px;
    }
  }
  @keyframes img1_test2 {
    from {
        width: 107px;
        height: 326px;
    }
    to {
        width: 77px;
        height: 326px;
    }
  }
</style>