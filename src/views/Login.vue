<template>
  <div class="page-box">
    <div style="display: flex;justify-content: center;">
      <div class="box"
           style="display:flex;flex-direction: column;align-items: center;justify-content: center;width: 400px;height: 250px;margin-top: 200px">
        <div class="loginItem" style="">WcN银行管理系统</div>
        <div style="display: flex;flex-direction: row;align-items: center">
          <div style="color: #1FB9B9; font-size: 24px">账户</div>
          <a-input placeholder="请输入您的用户名" maxlength="18" class="inputType" v-model:value="userName"></a-input>
        </div>
        <div style="display: flex;flex-direction: row;align-items: center">
          <div style="color: #1FB9B9; font-size: 24px">密码</div>
          <a-input-password v-model:visible="weatherVisible"
                            placeholder="请输入您的密码"
                            maxlength="18"
                            class="inputType"
                            v-model:value="passWord">
          </a-input-password>
        </div>
        <div>
          <a-button @click="loginButton" type="primary" style="color: white;background-color: #1FB9B9">登录</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import router from "../router/index.js";
import {useCounterStore} from "../stores/index.js";
import {loginFuc} from "../api/adminTable.js";
import {message} from "ant-design-vue";

const counter = useCounterStore();


const userName = ref('')
const passWord = ref('')
const weatherVisible = ref(false)


const loginButton = async () => {
  const res = await loginFuc({
    username: userName.value,
    password: passWord.value
  })
  console.log(userName.value)
  if (res.code === 1) {
    message.success(res.msg)
    router.push(res.path)
  }else if (res.code === 2){
    message.success(res.msg)
    router.push(res.path)
  }else if (res.code === 3){
    localStorage.setItem("token",res.userName)
    message.success(res.msg)
    router.push(res.path)
  }else {
    message.error(res.msg)
  }
}


</script>

<style scoped>
.page-box {

  height: 100vh;
  border: 10px dotted #1FB9B9;
  margin: 0 100px 0 100px;
}

.box {
  border: 10px solid #1FB9B9;
}

.inputType {
  margin: 10px;
  width: 200px;
  border: 10px solid #1FB9B9;
}

.loginItem {
  font-size: 32px;
  color: transparent;
  background: linear-gradient(to right, #1FB9B9, #1F9919, #1FB9B9);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  letter-spacing: 0.4rem;
  font-style: italic;


}
</style>