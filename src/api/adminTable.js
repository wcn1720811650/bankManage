import request from '../utils/request.js'

export function userListFuc(){
    return request({
        url:'/userList',
        method:"get"
    })
}

export function tellerListFuc(){
    return request({
        url:'/tellerList',
        method:"get"

    })
}


export function loginFuc(data){
    return request({
        url:'/login',
        method:'post',
        data:data
    })
}

export function registerFuc(data){
    return request({
        url:'/register',
        method:'post',
        data:data
    })
}

export function freezeFuc(data){
    return request({
        url:'/freeze',
        method:'post',
        data:data
    })
}

export function deleteFuc(data){
    return request({
        url:'/delete',
        method:"post",
        data:data
    })
}

export function changePwFuc(data){
    return request({
        url:'/changePassword',
        method:"post",
        data:data
    })
}

export function checkPwFuc(data){
    return request({
        url:'/checkPassword',
        method:"post",
        data:data
    })
}

export function makeDepositFuc(data){
    return request({
        url:'/makeDeposits',
        method:"post",
        data:data
    })
}

export function withdrawFuc(data){
    return request({
        url:'/withdrawal',
        method:"post",
        data:data
    })
}

export function transferFuc(data){
    return request({
        url:'/transferFunds',
        method:"post",
        data:data
    })
}