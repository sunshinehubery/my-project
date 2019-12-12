<template>
  <div class="red_bag_rain" :style="'height:'+fullHeight+'px;' +'width:'+fullWidth+'px;'">
    <div id="red_zone">
    </div>
  </div>
</template>
<script>
import jquery from 'jquery';
export default {
  data () {
			return {
				fullHeight: document.documentElement.clientHeight,
        fullWidth: document.documentElement.clientWidth,
        left: 0,
        height: 0,
			}
		},
  watch: {
    fullHeight (val) {//监控浏览器高度变化
      if(!this.timer) {
        this.fullHeight = val
        this.timer = true
        let that = this
        setTimeout(function (){
          that.timer = false
        },400)
      }
    },
    fullWidth (val) {//监控浏览器高度变化
      if(!this.timer) {
        this.fullWidth = val
        this.timer = true
        let that = this
        setTimeout(function (){
          that.timer = false
        },400)
      }
    },
  },
  mounted () {
    this.get_bodyHeight()
    this.get_bodyWidth()
  },
  methods :{
    get_bodyHeight () {//动态获取浏览器高度
      const that = this
      window.onresize = () => {
        return (() => {
          window.fullHeight = document.documentElement.clientHeight
          that.fullHeight = window.fullHeight
        })()
      }
    },
    get_bodyWidth () {//动态获取浏览器高度
      const that = this
      window.onresize = () => {
        return (() => {
          window.fullWidth = document.documentElement.clientWidth
          that.fullWidth = window.fullWidth
        })()
      }
    },
    init(){
      const that = this
      setInterval(function(){
        that.height = that.height + 10
        var left = Math.random() * that.fullWidth;
        var height = Math.random() *20 + that.height;
        var url = "src/assets/44d89.png"; 
        that.addBag(left, height, url);
      }, 400);
    },
    addBag(left, height, url){
      if(height < this.fullHeight){
        var div = document.createElement("div");
        var divattr = document.createAttribute("class"); 
        divattr.value = "redBox";
        div.setAttributeNode(divattr);
        var img = document.createElement("img");
        var imgattr = document.createAttribute("class"); 
        divattr.value = "red_zone_img";
        img.setAttributeNode(imgattr);
        img.src = url;
        img.addEventListener('click',function(e){
          img.src = 'src/assets/click.png'
        })
        div.appendChild(img);
        div.style.marginLeft = left + "px";
        div.style.marginTop = height + "px";
        document.getElementById("red_zone").appendChild(div);
      }
      // setTimeout(function() {
      //     document.getElementById("red_zone").removeChild(div);
      //     // console.log(window.innerHeight); 
      // }, 3000);
    }
  }
}
</script>
<style lang="scss" scope>
  .red_bag_rain{
    z-index: 12;
    position: absolute;
    top: 0;
  }
  .red_zone_img{
    width: 100px;
    height: 147px;
    // -weikit-transform-origin:left top; 
    transform:rotate(-45deg); 
  }
</style>