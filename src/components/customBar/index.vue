<template>
    <view class="tabbar_ct">
        <view class="tab_ct" @tap="goTo('home')">
            <view class="tab_inner">
                <image src="./assets/homeActive.png" class="tab_icon_active" v-if="chosen === 'home'"></image>
                <image src="./assets/home.png" class="tab_icon" v-else></image>
                <view :class='{ "activetext": chosen === "home" }'>首页</view>
            </view>
        </view>
        <view class="tab_ct" @tap="goTo('mine')">
            <view class="tab_inner">
                <image src="./assets/mineActive.png" class="tab_icon_active" v-if="chosen === 'mine'"></image>
                <image src="./assets/mine.png" class="tab_icon" v-else></image>
                <view :class='{ "activetext": chosen === "mine" }'>{{ minelabel }}</view>
                <view v-if="unreadcount > 0" class="unread_ct">{{ unreadcount }}</view>
            </view>
        </view>
    </view>
</template>
<script>
export default {
    props: {
        mode: {
            type: String,
            default: 'pages'
        },
        chosen: {
            type: String,
            default: "index"
        },
        unreadcount: {
            type: Number,
            default: 0
        },
        minelabel: {
            type: String,
            default: "我的"
        }
    },

    methods: {
        goTo(toWhich) {

            if (toWhich === this.chosen) {
                return;
            }
            let nextpage = `/${this.mode}/${toWhich}/${toWhich}`;

            let curPages = getCurrentPages();

            console.log(curPages)
            let matchIndex;
            let hasMatched = curPages.some((item, index) => {
                console.log(item.route, "/" + item.route === nextpage, nextpage)
                if ("/" + item.route === nextpage) {
                    matchIndex = index;
                    return true;
                }
            })
            console.log(hasMatched)
            if (hasMatched) {
                let delta = curPages.length - matchIndex - 1
                uni.navigateBack({
                    delta
                })
            } else {
                uni.navigateTo({
                    url: nextpage
                })
            }

        }
    }
}
</script>
<style lang="scss">
.tabbar_ct {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 120rpx;
    display: flex;
    background: #FFFFFF;
    z-index: 999;

    .tab_ct {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        .tab_inner {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 24rpx;
            color: #999999;
            position: relative;

            image {
                width: 56rpx;
                height: 56rpx;
                margin-bottom: 10rpx;
                position: relative;
                z-index: 1;
            }

            .activetext {
                color: #25A2FF;
            }

            .unread_ct {
                position: absolute;
                top: -16rpx;
                right: calc(14rpx - 100%);
                color: white;
                font-size: 24rpx;
                background: #FF3434;
                border: 2rpx solid #FFFFFF;
                border-radius: 16rpx;
                min-width: 46rpx;
                height: 32rpx;
                line-height: 32rpx;
                text-align: center;
            }
        }

    }
}
</style>