<template>
  <view class="content">
    <custom-nav :hide-back="true"> 我的 </custom-nav>
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <custom-bar chosen="mine" mode="pages" :unreadcount="99"></custom-bar>
  </view>
</template>

<script setup lang="ts">
import CustomBar from '@/components/customBar/index.vue'
import { ref } from "vue";
const title = ref("我的");
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
