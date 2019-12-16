<template>
  <div>
    <div v-show="showStatus == 0" class="tip_box">
      <div class="box_title">次数用完</div>
      <div class="box_content">哇偶～没有抽到任何东西哦 再接再厉，再来一次!</div>
      <div class="box_btn close" @click="close">知道啦</div>
    </div>
    <div v-show="showStatus == 1" class="prize_box">
      <div class="prize_box_content">
        <div class="prize_msg">
          <div class="prize_msg_title">{{prize.tips}}</div>
          <div class="prize_msg_content" v-if="!prize.isPrize">
              哇偶～没有抽到任何东西哦 再接再厉，再来一次!
          </div>
          <div class="prize_msg_content" v-else>
            <div class="prize_msg_content_img">
              <img :src="prize.prizieUrl"/>
              <div class="prize_msg_content_integral">
                {{prize.integral}}积分
              </div>
            </div>
          </div>
        </div>
        <div class="prize_box_btn">
          <div class="box_btn again">再抢一次</div>
          <div class="box_btn share">炫耀得22积分</div>
          <div class="box_tips">已为您发放5公益爱心至我的奖品列表</div>
        </div>
      </div>
      <div class="box_btn_close" @click="close">
        <img src="@/assets/guanbi@2x.png"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      prize: {    // 奖品
        tips: '恭喜获得',
        isPrize: true,
        prizieUrl: 'src/assets/047bd.png',
        integral: 66,
      },
    }
  },
  props:[
    'showStatus'    //判断是否开启    0 无次数   1有次数开启
  ],
  methods: {
    // 关闭box窗口
    close(){
      this.$emit('closeBox')
    }
  },
}
</script>
<style lang="scss" scope>
  .tip_box{
    width: 610px;
    height: 400px;
    border-radius: 24px;
    background-color: #fff;
    position: absolute;
    top: 365px;
    left: 70px;
    z-index:12
  }
  .box_title{
    height: 36px;
    line-height: 36px;
    font-size: 36px;
    color: black;
    text-align: center;
    margin-top: 50px;
  }
  .box_content{
    width: 550px;
    text-align: center;
    font-size: 28px;
    color: #999;
    margin: 50px 30px;
  }
  .box_btn{
    width: 400px;
    border: 0;
    background-color: #FE6D1B;
    font-size: 36px;
    color: #fff;
    text-align: center;
  }
  .close{
    height: 90px;
    line-height: 90px;
    border-radius: 45px;
    margin-left: 105px;
  }
  .prize_box{
    width: 578px;
    height: 878px;
    position: absolute;
    z-index:12;
    top: 328px;
    left: 86px;
  }
  .prize_box_content{
    width: 578px;
    height: 678px;
    background-image: url(../assets/group.png);
  }
  .prize_msg{
    width: 400px;
    height: 300px;
    position: relative;
    top: 30px;
    left: 84px;
  }
  .prize_msg_title{
    height: 36px;
    line-height: 36px;
    text-align: center;
    font-size: 36px;
    color: #FE6D1B;
    padding: 20px 0;
  }
  .prize_msg_content{
    width: 420px;
    text-align: center;
    font-size: 28px;
    color: #999;
    line-height: 40px;
    margin-top: 30px;
  }
  .again{
    height: 70px;
    line-height: 70px;
    border-radius: 35px;
    font-size: 32px;
    margin-top: 135px;
    margin-left: 86px;
  }
  .share{
    height: 70px;
    line-height: 70px;
    border-radius: 35px;
    font-size: 32px;
    margin-top: 30px;
    margin-left: 86px;
  }
  .box_tips{
    width: 400px;
    height: 28px;
    line-height: 28px;
    font-size: 22px;
    color: #fff;
    text-align: center;
    margin-top: 20px;
    margin-left: 86px;
  }
  .box_btn_close{
    width: 76px;
    height: 76px;
    margin-left: 245px;
    margin-top: 45px;
    img{
      width: 76px;
      height: 76px;
    }
  }
  .prize_msg_content_img{
    width: 190px;
    height: 170px;
    border-radius: 12px;
    border: 1px solid #ffe4c7;
    margin-left: 100px;
    img{
      width: 158px;
      height: 90px;
      padding: 15px;
    }
  }
  .prize_msg_content_integral{
    height: 49px;
    background-color: #ffe4c7;
    font-size: 21px;
    color: #65625e;
    line-height: 49px;
  }
</style>