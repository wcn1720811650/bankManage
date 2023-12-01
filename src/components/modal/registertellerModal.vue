<template>

  <div>
    <a-button type="primary" @click="showRegisterModal">添加teller</a-button>
  </div>
  <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
    <div style="display: flex;flex-direction: column;align-items: center;justify-content: center">
      <div class="InfoItem">
        <div>账号：</div>
        <a-input placeholder="请输入您的用户名" class="inputType" v-model:value="userName"
                 style="width: 200px"></a-input>
      </div>
      <div class="InfoItem">
        <div>职位：</div>
        <a-input :disabled="true" placeholder="请输入您的职位" class="inputType" v-model:value="position" style="width: 200px"></a-input>
      </div>
      <div class="InfoItem">
        <div>昵称：</div>
        <a-input placeholder="请输入您的昵称" class="inputType" v-model:value="nickName" style="width: 200px"></a-input>
      </div>
      <div class="InfoItem">
        <div>密码：</div>
        <a-input-password placeholder="请输入您的密码"
                          class="inputType"
                          v-model:value="passWord"
                          style="width: 200px">
        </a-input-password>
      </div>
    </div>
    <a-button type="primary" @click="registerButton">注册</a-button>
  </a-modal>
</template>

<script setup>

import {ref} from "vue";
import {registerFuc} from "../../api/adminTable.js";


const open = ref(false);


const showRegisterModal = () => {
  open.value = true;
};

const handleOk = () => {
  open.value = false;
};


const userName = ref('')
const passWord = ref('')
const position = ref('1')
const nickName = ref('')
const registerButton = async () => {
  const res = await registerFuc({
    username: userName.value,
    password: passWord.value,
    position: position.value,
    nickname: nickName.value
  })
  console.log(userName.value)
  if (res.code === 1) {
    console.log(res)
    alert("注册成功！！！")
    userName.value = '';
    passWord.value = '';
    position.value = '';
    nickName.value = '';
  } else {
    alert(res.msg)
    userName.value = ''
    console.log(res)
  }
}
</script>

<style scoped>
.InfoItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
}
</style>