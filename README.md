# uni-app vue3 vite ts
    小程序种子项目

## 集成
    [✅]自定义导航栏 wxcomponents/nav
    [✅]pinia
    [✅]sass
    [✅]unocss
    [✅]eslint
    [❌]请求封装

## 开发问题汇总

### 尺寸单位
    可使用rpx，与小程序相同，以750rpx为屏幕基准宽度。



## 配置问题汇总

### 安装完pinia，引用报错
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