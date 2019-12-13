<template>
  <div class="red_bag_rain" :style="'height:'+fullHeight+'px;' +'width:'+fullWidth+'px;'">
    <div id="red_zone">
      1111
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  data() {
    return {
      fullWidth: document.documentElement.clientWidth, // 浏览器宽度
      fullHeight: document.documentElement.clientHeight, // 浏览器高度
    }
  },
  mounted() {
    this.get_bodyWidth()
    this.get_bodyHeight()
    this.addbag()
  },
  watch: {
    // 监控浏览器宽度的变化
    fullWidth(val){
      if(!this.timer){
        this.fullWidth = val
        this.timer = true
        let that = this
        setTimeout(() => {
          that.timer = flase
        },400)
      }
    },
    // 监控浏览器高度的变化
    fullHeight(val){
      if(!this.timer){
        this.fullHeight = val
        this.timer = true
        let taht = this
        setTimeout(() => {
          that.timer = false
        },400)
      }
    }
  },
  methods: {
    // 动态获取浏览器宽度
    get_bodyWidth(){
      const that = this
      window.onresize = () => {
        return (() => {
          window.fullWidth = document.documentElement.clientWidth
          that.fullWidth = window.fullWidth
        })
      }
    },
    // 动态获取浏览器高度
    get_bodyHeight(){
      const that = this
      window.onresize = () => {
        return (() => {
          window.fullHeight = document.documentElement.clientHeight
          that.fullHeight = window.fullHeight
        })
      }
    },
    addbag(){
      setTimeout(() => {
        var left = Math.random() * 100 + 10;
        var height = Math.random() * 100 + 10;
        var div = document.createElement("div");
        var divattr = document.createAttribute("class"); 
        divattr.value = "redBox";
        div.setAttributeNode(divattr);
        var img = document.createElement("img");
        var imgattr = document.createAttribute("class"); 
        divattr.value = "red_zone_img";
        img.setAttributeNode(imgattr);
        img.src = "src/assets/44d89.png";
        img.addEventListener('click',function(e){
          img.src = 'src/assets/click.png'
        })
        div.appendChild(img)
        div.style.position = 'absolute'
        div.style.left = left + 'px';
        div.style.top = height + 'px';
        document.getElementById("red_zone").appendChild(div);
        setTimeout(() => {
          div.style.left = (div.style.left + 100) + 'px';
          div.style.top = (div.style.top + 200) + 'px';
        },500)
      },500)
    }
  },
}
</script>