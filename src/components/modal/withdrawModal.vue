<script setup>
import {withdrawFuc} from "../../api/adminTable.js"
import {ref} from "vue";
import {message} from "ant-design-vue";


const withdrawMoney = ref()
const userName = ref('')
const token = localStorage.getItem("token")
userName.value = token
const makeWithdrawButton = async ()=>{
  const res = await withdrawFuc({
    username:userName.value,
    withdraw: withdrawMoney.value
  })
  if (res.code === 1){
    withdrawMoney.value = 0;
    message.success("取钱成功！！！")
  }else {
    message.warn("取钱失败！！！")
  }
}

const open = ref(false);

const showWithdrawModal = () =>{
  open.value = true;
}

const handleOk = () => {
  open.value = false;
};

</script>

<template>
  <a-button type="primary" @click="showWithdrawModal">取款</a-button>

  <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
    <div style="display: flex;flex-direction: column;align-items: center;justify-content: center">
      <div class="InfoItem">
        <div>账号：</div>
        <a-input :disabled="true" placeholder="请输入您的用户名" class="inputType" v-model:value="userName"
                 style="width: 200px"></a-input>
      </div>
      <div class="InfoItem">
        <div>取钱：</div>
        <a-input placeholder="请输入您要取的钱" class="inputType" v-model:value="withdrawMoney" style="width: 200px"></a-input>
      </div>
      <a-button type="primary" @click="makeWithdrawButton">取钱</a-button>
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