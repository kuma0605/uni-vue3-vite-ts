# uni-app vue3 vite ts

    小程序种子项目

# 废弃
    1.身份证扫码识别功能不支持，在市场中没有，不适合当前公司项目需求。
    2.typescript中调用wx报错。
    3.很多原生小程序支持的功能，引入变得复杂，违背了使用uniapp的初衷。

## 集成

    [✅]自定义导航栏 wxcomponents/nav(包含状态栏；导航栏背景色可定制，默认透明；返回按钮默认显示，可隐藏)
    [✅]自定义tabbar（对页面栈做了优化）
    [✅]pinia
    [✅]sass
    [✅]unocss
    [✅]eslint
    [✅]prettier
    [✅]请求封装

## 开发问题汇总

### 尺寸单位
    可使用rpx，与小程序相同，以750rpx为屏幕基准宽度。

### 微信小程序真机调试空白
    1.预览可正常显示
    2.或者yarn build:mp-weixin生成正式版，打开正式版dist，可真机调试。

### uniapp/原生 tabbar 不支持图标大小、文字大小自定义
    自定义tabbar components/customBar

### An import path can only end with a '.ts' extension when 'allowImportingTsExtensions' is enabled.
    引入ts文件，不用带.ts

## 配置问题汇总

### 安装完 pinia，引用报错

    "hasInjectionContext" is not exported by "node_modules/vue-demi/lib/index.mjs", imported by "node_modules/pinia/dist/pinia.mjs".
    解决方案：
    [要升级vue3 到3.3.x](https://bytemeta.vip/repo/posva/pinia/issues/2210)  没生效...
    尝试降级pinia，ok了。

### 配置@

    path 安装 path-browserify
    __dirname 安装 url

### unocss 需要额外配置

    小程序有2种方案：
        1.https://github.com/MellowCo/unocss-preset-weapp
        2.https://juejin.cn/post/7234020992145571900
    项目用了第一种。
