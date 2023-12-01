<script setup>
import {makeDepositFuc} from "../../api/adminTable.js"
import {ref} from "vue";
import {message} from "ant-design-vue";


const deposit = ref()
const userName = ref('')
const token = localStorage.getItem("token")
userName.value = token
const makeDepositButton = async () => {
  const res = await makeDepositFuc({
    username: userName.value,
    deposit: deposit.value
  })
  if (res.code === 1) {
    message.success(res.msg)
    deposit.value = 0;
  } else {
    message.warn(res.msg)
    deposit.value = 0;
  }
}

const open = ref(false);

const showDepositModal = () => {
  open.value = true;
}

const handleOk = () => {
  open.value = false;
};

</script>

<template>
  <a-button type="primary" @click="showDepositModal">存款</a-button>
  <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
    <div style="display: flex;flex-direction: column;align-items: center;justify-content: center">
      <div class="InfoItem">
        <div>账号：</div>
        <a-input :disabled="true" placeholder="请输入您的用户名" class="inputType" v-model:value="userName"
                 style="width: 200px"></a-input>
      </div>
      <div class="InfoItem">
        <div>存钱：</div>
        <a-input placeholder="请输入您要存的钱" class="inputType" v-model:value="deposit"
                 style="width: 200px"></a-input>
      </div>
      <a-button type="primary" @click="makeDepositButton">存钱</a-button>
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