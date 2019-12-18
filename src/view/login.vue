<template>
  <div class="login-wrap">
    <div class="video-bg">
      <!-- <video 
        muted="" 
        data-autoplay="" 
        loop="" 
        autoplay="" 
        src="https://gss3.baidu.com/6LZ0ej3k1Qd3ote6lo7D0j9wehsv/tieba-movideo/65886292_9687ec67dfc37bfbf847d82b6b52a276_96e56b0f4bfc.mp4" 
        class="video-tvc" 
        id="video-tvc" 
        data-object-fit=""></video> -->
    </div>
    <div class="ms-login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <el-form-item prop="username">
         <el-input v-model="ruleForm.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
         <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <el-form-item prop="verifyCode" class="verifyCodeItemCss">
         <el-input class="verify_css" placeholder="请输入4位验证码" v-model="ruleForm.verifyCode" @keyup.enter.native="submitForm('ruleForm')"></el-input>
         <div id="v_container"></div>
        </el-form-item>
        <div class="login-btn">
         <el-button class="loginBtn" type="primary" @click="submitForm()">登录</el-button>
        </div>
       </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        username: '',
        password: '',
        verifyCode: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        verifyCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      },
      verifyCode: null,
      code: '',
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    // 初始化画布
    init(){
      var con = document.getElementById("v_container")
      var canvas = document.createElement("canvas")
      canvas.id = "verifyCanvas"
      canvas.width = "160"
      canvas.height = "80"
      canvas.style.cursor = 'pointer'
      con.appendChild(canvas)
      this.refresh()
      var that = this
      canvas.onclick = function(){
        that.refresh()
      }
    },
    // 生成验证码
    refresh(){
      var canvas = document.getElementById("verifyCanvas")
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d')
        ctx.textBaseline = 'middle'
        ctx.fillStyle = this.randomColor(180, 240)
        ctx.fillRect(0, 0, 160, 80)
        var txtArr = this.getAllLetter()
        for(var i = 0;i < 4;i++){
          var txt = txtArr[this.randomNum(0, txtArr.length)]
          this.code += txt
          ctx.font = this.randomNum(80 / 2, 80) + 'px SimHei' // 随机生成字体大小
          ctx.fillStyle = this.randomColor(50, 160) // 随机生成字体颜色
          ctx.shadowOffsetX = this.randomNum(-3, 3)
          ctx.shadowOffsetY = this.randomNum(-3, 3)
          ctx.shadowBlur = this.randomNum(-3, 3)
          ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
          var x = 160 / 5 * i
          var y = 80 / 2
          var deg = this.randomNum(-30, 30)
          // 设置旋转角度和坐标原点
          ctx.translate(x, y)
          ctx.rotate(deg * Math.PI / 180)
          ctx.fillText(txt, 0, 0)
          // 恢复旋转角度和坐标原点
          ctx.rotate(-deg * Math.PI / 180)
          ctx.translate(-x, -y)
        }
        // 绘制干扰线
        for (var i = 0; i < 10; i++) {
          ctx.strokeStyle = this.randomColor(40, 180)
          ctx.beginPath()
          ctx.moveTo(this.randomNum(0, 160), this.randomNum(0, 80))
          ctx.lineTo(this.randomNum(0, 160), this.randomNum(0, 80))
          ctx.stroke()
        }
        // 绘制干扰点
        for (var i = 0; i < 300; i++) {
          ctx.fillStyle = this.randomColor(0, 255)
          ctx.beginPath()
          ctx.arc(this.randomNum(0, 160), this.randomNum(0, 80), 1, 0, 2 * Math.PI)
          ctx.fill()
        }
      }
    },
    //校验验证码
    validate(verifyCode){
      var verifyCode = verifyCode.toLowerCase()
      var code = this.code.toLowerCase()
      if(code == verifyCode){
        return true
      }else{
        return false
      }
    },
    // 校验表单
    submitForm(){
      var that = this
      var verifyCode = this.ruleForm.verifyCode
      var verifyFlag = this.validate(verifyCode)
      if (!verifyFlag) {
        that.$message.error({
        title: '系统提示',
        message: '验证码输入错误'
        })
        return;
      } else {
        that.$message({
        title: '系统提示',
        message: '验证码输入正确',
        type: 'success'
        })
      }
    },
    // 获取所有的数据
    getAllLetter(){
      //var letterStr = '0,1,2,3,4,5,6,7,8,9'
      //var letterStr = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'
      var letterStr = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'
      return letterStr.split(',')
    },
    // 从min max中随机获取某一个整数
    randomNum(min,max){
      return Math.floor(Math.random()*(max-min) + min)
    },
    // 随机生成rgb
    randomColor(min,max){
      var r = this.randomNum(min,max)
      var g = this.randomNum(min,max)
      var b = this.randomNum(min,max)
      return 'rgb(' + r + ',' + g + ',' + b + ')' 
    }
  },
}
</script>
<style lang="scss" scope>
  .login-wrap{
    position: relative;
    width: 100%;
    height: 100%;
  }
  .video-bg{
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;
    opacity: 0.9;
  }
  .ms-login {
    width: 300px;
    padding: 40px;
    border-radius: 6%;
    background: #fff;
    box-shadow: -2px -2px 17px 1px #1e9fff;
    margin: 100px auto;
  }
  .login-btn {
    text-align: center;
  }
  .login-btn button {
    width: 75px;
    height: 36px;
  }
</style>