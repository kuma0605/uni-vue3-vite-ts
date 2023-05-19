const dependentUrls: string[] = []; // 不需要加前缀的url
// const urlWhiteList = [];// 预留白名单，不需要token

const pubUrl = "https://tzzxcxcx.ntjsjg.com:8001"; //这是我要请求的数据接口的公共部分
// const pubUrl = "http://172.168.8.29:8001"; //陈鹏
// const pubUrl = "http://172.168.8.38:8001"; //邱磊
// const pubUrl = "http://172.168.8.108:8001"; //邱磊
// const pubUrl = "http://172.168.8.152:8001"; //徐琪琪
//const pubUrl = "http://172.168.8.108:8001"; //顾婧仪

const http = (options: { url: string; method: "GET" | "POST", data: object; header: object }) => {
    const extraheader = {
        token: ""
    };
    try {
        const token = uni.getStorageSync("token");
        extraheader.token = token;
    } catch (error) { }

    let url = pubUrl + options.url;
    if (dependentUrls.includes(url)) {
        url = options.url;
    }
    return new Promise((resolve, reject) => {
        uni.request({
            url,
            method: options.method,
            data: options.data || {},
            header: Object.assign(options.header, extraheader),
            success: resolve,
            fail: reject
        });
    });
};

const upload = (options: {
    url: string;
    filePath: string;
    header: object;
    name: string;
    formData: object;
}) => {
    const extraheader = {
        token: ""
    };
    try {
        extraheader.token = uni.getStorageSync("token");
    } catch (error) { }
    return new Promise((resolve, reject) => {
        uni.uploadFile({
            url: pubUrl + options.url,
            filePath: options.filePath,
            header: Object.assign(options.header || {}, extraheader),
            name: options.name,
            formData: options.formData || {},
            success: function (res) {
                resolve(JSON.parse(res.data));
            },
            fail: reject
        });
    });
};

export {
    http,
    upload
}
