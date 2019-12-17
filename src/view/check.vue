<template>
  <div class="checked">
    <div class="cli">
      <button class="btn" @click="open">验证码</button>
    </div>
    <Verify class="verify" @success="alert('success')" @error="alert('error')" :type="1"></Verify>
    <Verify class="verify" :type="2"></Verify>
    <Verify class="verify" :type="3"></Verify>
    <Verify :showButton="true" :imgUrl="imgUrl" :imgName="imgName" class="verify" :type="4" :vSpace=0 ></Verify>
    <Verify :checkNum="2" :imgUrl="imgUrl" :imgName="imgName" class="verify" :type="5"></Verify>
  </div>
</template>
<script>
  import Verify from "vue2-verify";
export default {
  data() {
    return {
      isFlag: false,
      imgUrl: 'src/assets/',
      imgName: ['1.jpg', '2.jpg'],
    }
  },
  components:{
    Verify,
  },
  mounted() {
    this.initMpanel()
  },
  methods: {
    alert(text) {
      alert(text)
    },
    open(){
      this.isFlag = true
    },
    initMpanel(){
    },
    codeVerify(){
      $('#mpanel2').codeVerify({
        type : 1,
        width : '400px',
        height : '50px',
        fontSize : '30px',
        codeLength : 6,
        btnId : 'check-btn',
        ready : function() {
        },
        success : function() {
          alert('验证匹配！');
        },
        error : function() {
          alert('验证码不匹配！');
        }
		  });
    },
  },
}
</script>
<style lang="scss" scope>
  .cli{
    width: 750px;
    text-align: center;
  }
  .btn{
    width: 400px;
    height: 88px;
    font-size: 36px;
    line-height: 88px;
    background-color: #FE6D1B;
    border: 0;
    border-radius: 44px;
    color: #fff;
    margin-top: 20px;
  }
  .verify{
    margin-top: 50px
  }
</style>