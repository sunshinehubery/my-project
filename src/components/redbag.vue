<template>
  <div class="redbar">
    <div class="redbar_head"></div>
    <div class="redbar_contents">
      <div class="redbar_content">
        <div class="content_tips">
          <div class="content_tips_words">恭喜：用户234323438457784577刚刚抽中了100元加油券</div>
        </div>
        <div class="open_redbag">
          <div class="open_redbag_btn" @click="openRedbag">
            <div class="open_redbag_title">抢红包</div>
            <div class="open_redbag_size">剩余{{redbagCount}}次</div>
          </div>
        </div>
        <div class="open_redbag_link">
          <router-link class="link_prize" to="">去做任务领取奖励吧>></router-link>
        </div>
      </div>
      <div class="redbar_content rules">
        <div class="rule">
          <img class="rule_img" src="@/assets/raider@2x.png"/>
          <span class="rule_title">活动攻略：</span>
        </div>
        <div class="rule_content">
          1、用户通过分享活动至社交平台或好友，即获得会员锦鲤入选资格，每分享一次即可获得奖励
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
    }
  },
  props:[
    'redbagCount',
  ],
  methods: {
    openRedbag(){
      this.$emit('open')
    }
  },
}
</script>
<style lang="scss" scope>
  *{
  	background-size: cover;
		background-repeat:no-repeat;
  }
  .redbar{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 88px;
  }
  .redbar_head{
    width: 750px;
    height: 600px;
    background-image: url(../assets/head.png);
  }
  .redbar_contents{
    width: 691px;
    height: 799px;
    background-image: url(../assets/redBag.png);
    position: absolute;
    top: 378px;
    left: 31px;
  }
  .redbar_content{
    width: 647px;
    height: 367px;
    margin: 20px 0 0 18px;
  }
  .rules{
    border-radius: 16px;
    border: 0;
    background-color: #FFF2E3;
  }
  .content_tips{
    width: 602px;
    height: 38px;
    margin: 0 22px;
    border-radius: 19px;
    background-color: #DA394D;
  }
  .content_tips_words{
    width: 526px;
    height: 26px;
    font-size: 24px;
    color: #FFDEAC;
    padding: 2px 40px;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .open_redbag{
    width: 196px;
    height: 201px;
    background-image: url(../assets/btn.png);
    position: relative;
    top: 56px;
    left: 235px;
  }
  .open_redbag_btn{
    width: 158px;
    height: 158px;
    position: relative;
    top: 18px;
    left: 18px;
  }
  .open_redbag_title{
    width: 126px;
		height: 40px;
		font-size: 42px;
		color: #F23B4F;
		font-weight: 600;
    position: relative;
    top: 40px;
    left: 15px;
  }
  .open_redbag_size{
    width: 87px;
		height: 24px;
		font-size: 24px;
		color: #FF5E66;
    position: relative;
    top: 58px;
    left: 35px;
  }
  .open_redbag_link{
    width: 300px;
    height: 40px;
    margin: 70px 0 0 190px;
  }
  .link_prize{
    font-size: 28px;
    color: #FFDEAC;
    text-decoration:none;
  }
  .rule_img{
    width: 35px;
    height: 35px;
    position: relative;
    top: 35px;
    left: 28px;
  }
  .rule_title{
    font-size: 36px;
    color: #222;
    position: relative;
    top: 30px;
    left: 35px;
  }
  .rule_content{
    width: 590px;
    font-size: 24px;
    color: #666;
    position: relative;
    top: 50px;
    left: 28px;
  }
</style>