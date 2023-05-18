<template>
  <view class="content">
    <custom-nav :hide-back="true"> 自定义导航栏 </custom-nav>

    <image class="logo" src="/static/logo.png" @tap="goHome" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
const title = ref("Hello");

function goHome() {
  /* uni.switchTab({
    url: "/pages/home/home"
  }); */
  uni.navigateTo({
    url: "/pages/home/home"
  });
}
</script>
<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;

    .title {
      font-size: 36rpx;
      color: #8f8f94;
    }
  }
}
</style>
