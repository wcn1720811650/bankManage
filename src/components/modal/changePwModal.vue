<script setup>
import {changePwFuc, checkPwFuc} from "../../api/adminTable.js";
import {ref} from "vue";
import {message} from "ant-design-vue";

const userName = ref('')
const passWord = ref('')
const checkPwVal = ref(false)
const newPassWord = ref('')


const open = ref(false);

const showUpdateModal = () => {
  open.value = true;
}

const handleOk = () => {
  open.value = false;
};

const checkPw = async () => {
  const res = await checkPwFuc({
    username: userName.value,
    password: passWord.value
  })
  if (res.code === 1) {
    message.success(res.msg, 3)
    console.log(res)
    checkPwVal.value = true;
  } else {
    message.error(res.msg, 3)
    console.log(res)
  }
}

const updatePw = async () => {
  const res = await changePwFuc({
    username: userName.value,
    newPassword: newPassWord.value
  })
  if (res.code === 1) {
    console.log(res)
    message.success(res.msg)
    checkPwVal.value = false;
    userName.value = ''
    newPassWord.value = ''
    passWord.value = ''
  } else {
    message.error(res.msg)
    console.log(res)
  }
}
</script>

<template>
  <a-button type="primary" @click="showUpdateModal">修改密码</a-button>

  <a-modal v-model:open="open" title="请先输入原账号密码" @ok="handleOk" :footer="null">
    <div style="display: flex;flex-direction: column;align-items: center;justify-content: center">
      <div class="InfoItem">
        <div>账号：</div>
        <a-input placeholder="请输入您的用户名" class="inputType" v-model:value="userName"
                 style="width: 200px"></a-input>
      </div>
      <div class="InfoItem">
        <div>密码：</div>
        <a-input placeholder="请输入值" class="inputType" v-model:value="passWord" style="width: 200px"></a-input>
      </div>
      <div v-if="checkPwVal" class="InfoItem">
        <div>新密码：</div>
        <a-input placeholder="请输入值" class="inputType" v-model:value="newPassWord" style="width: 200px"></a-input>
      </div>
      <a-button v-if="!checkPwVal" type="primary" @click="checkPw">检查</a-button>
      <a-button v-if="checkPwVal" type="primary" @click="updatePw">修改密码</a-button>
    </div>
  </a-modal>
</template>

<style scoped>
.InfoItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
}

</style>