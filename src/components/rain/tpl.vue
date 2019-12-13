<template>
  <div v-if="this.isShow" @click="rainPoinclick" class="rain-point" :class="{action: isClick}" :style="styleText"></div>
</template>

<script>
export default {
  name: "rain-point",
  props: {},
  data() {
    return {
      styleText: {},
      isShow: true,
      isClick: false
    };
  },
  methods: {
    rainPoinclick() {
      if (this.isClick) return;
      this.isClick = true;
      this.$emit("rainPoinclick");
    },
    setStyle(params) {
      this.styleText = params;
    },
    destory() {
      this.isShow = false;
    }
  }
};
</script>

<style>
.rain-point {
  position: absolute;
  background-image: url("../../assets/44d89.png");
  width: 100px;
  height: 147px;
  background-size: cover;
  background-repeat: no-repeat;
}

.action {
  background-image: url("../../assets/click.png");
  width: 166px;
  height: 168px;
}
</style>
