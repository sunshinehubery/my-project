<template>
  <div class="navbar">
    <div class="navbar_left">
      <img class="navbar_img" src="@/assets/goBack.png"/>
    </div>
    <div class="navbar_title">
      <span class="title">红包雨</span>
    </div>
    <div class="navbar_right">
      <img class="navbar_img" src="@/assets/share.png"/>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scope>
  .navbar{
    width: 750px;
    height: 88px;
    position: fixed;
    background-color: #fff;
    z-index: 15;
  }
  .navbar_left{
    width: 88px;
    height: 88px;
    float: left;
  }
  .navbar_title{
    width: 574px;
    height: 88px;
    float: left;
    text-align: center;
		line-height: 88px;
  }
  .navbar_right{
    width: 88px;
    height: 88px;
    float: left;
  }
  .navbar_img{
    margin: 26px;
    width: 36px;
    height: 36px;
  }
  .title{
    font-size: 36px;
  }
</style>