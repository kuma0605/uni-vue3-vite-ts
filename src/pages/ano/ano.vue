<template>
    <view class="content">
        <custom-nav>
         其他
        </custom-nav>
        <image class="logo" src="/static/logo.png" @tap="goPage('her')"/>
        <view class="text-area">
            <text class="title">{{ title }}</text>
        </view>
    </view>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  const title = ref('ano')

  function goPage(page: String){
    uni.navigateTo({
      url:`/pages/${page}/${page}`,
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
  