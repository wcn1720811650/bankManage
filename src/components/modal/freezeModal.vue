<script setup>

import {ref} from "vue";
import {freezeFuc} from "../../api/adminTable.js";

const userName = ref('')
const statusItem = ref('')
const open = ref(false);

const showFreezeModal = () =>{
  open.value = true;
}

const handleOk = () => {
  open.value = false;
};

const registerButton = async () => {
  const res = await freezeFuc({
    username: userName.value,
    status: statusItem.value
  })
  console.log(statusItem.value)
  if (res.code === 1) {
    console.log(res)
    userName.value = '';
    statusItem.value = '';
    alert("成功!!!")
  } else {
    alert(res.msg)
    console.log(res)
  }
}
</script>

<template>
  <a-button type="primary" @click="showFreezeModal">选择要冻结的账户</a-button>

  <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
    <div style="display: flex;flex-direction: column;align-items: center;justify-content: center">
      <div class="InfoItem">
        <div>账号：</div>
        <a-input placeholder="请输入您的用户名" class="inputType" v-model:value="userName"
                 style="width: 200px"></a-input>
      </div>
      <div class="InfoItem">
        <div>状态：</div>
        <a-input placeholder="请输入值" class="inputType" v-model:value="statusItem" style="width: 200px"></a-input>
      </div>
    <a-button type="primary" @click="registerButton">修改</a-button>
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