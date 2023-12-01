import axios from "axios"; //引入
const baseURL = "http://localhost:3000";
const service = axios.create({
    baseURL
});

// 发起请求内容, 这里配置根据实际情况配置
service.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8'
    return config
});

// 响应内容, 这里配置根据实际情况配置
service.interceptors.response.use(response => {
    // 请求成功时候
    if (response.status === 200 && response.data) {
        return response.data
    } else {
        return Promise.reject(response.data)
    }
}, error => {// 请求失败时候, 一些逻辑, 根据情况配置
    let code = 0
    try {
        code = error.response.status
    } catch (error) {
        // 网络请求超时
        if (error.toString().indexOf('Error: timeout') !== -1) {
            return Promise.reject(error)
        }
    }
    if (code) {
        if (code === 401) {

        } else {
            const errorMsg = error.response.data.errorCode
            if (errorMsg !== undefined) {

            } else {

            }
        }
    } else {

    }
    return Promise.reject(error)
});

export default service;
