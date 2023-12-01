<script setup>
import {ref} from 'vue';
import {deleteFuc} from "../../api/adminTable.js";

const userName = ref('')
const statusItem = ref('')
const deleteBtn = async () => {
  const res = await deleteFuc({
    username: userName.value,
  })
  console.log(statusItem.value)
  if (res.code === 1) {
    console.log(res)
    alert("成功!!!")
    userName.value = '';
  } else {
    alert(res.msg)
    console.log(res)
    userName.value = '';
  }
}
const open = ref(false);

const showModal = () => {
  open.value = true;
};

const handleOk = (e) => {
  console.log(e);
  open.value = false;
};
</script>

<template>
  <a-button type="primary" @click="showModal">选择要删除的账户</a-button>
  <div>
    <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
      <div style="display: flex;flex-direction: column;align-items: center;justify-content: center">
        <div class="InfoItem">
          <div>账号：</div>
          <a-input placeholder="请输入您的用户名" class="inputType" v-model:value="userName"
                   style="width: 200px"></a-input>
        </div>
        <a-button type="primary" @click="deleteBtn">删除</a-button>
      </div>
    </a-modal>
  </div>
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