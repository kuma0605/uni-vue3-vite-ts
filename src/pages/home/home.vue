<template>
  <view class="content">
    <custom-nav :hide-back="true"> 首页 </custom-nav>
    <image class="logo" src="/static/logo.png" @tap="goPage('ano')" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <custom-bar chosen="home" mode="pages" :unreadcount="0"></custom-bar>
  </view>
</template>

<script setup lang="ts">
import CustomBar from "@/components/customBar/index.vue";
import { ref } from "vue";
const title = ref("home");

function goPage(page: string) {
  uni.navigateTo({
    url: `/pages/${page}/${page}`
  });
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

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
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
